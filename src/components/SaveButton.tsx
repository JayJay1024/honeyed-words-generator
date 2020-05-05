import React, { useState } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import ImageDownload from '../assets/imgs/download.svg';
import StyledButton from './StyledButton';

const ua = navigator.userAgent;
const isiOSwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);
const isWebview = ua.toLowerCase().indexOf('micromessenger') > -1 || isiOSwebview;

const Button = styled<any>(StyledButton)`
    position: fixed;
    left: 0.5rem;
    bottom: 0.5rem;

    background-image: url(${ImageDownload});
`;

const SaveButton: React.FunctionComponent<{visible: boolean}> = ({visible}): JSX.Element => {
    const [generating, setGenerating] = useState(false);

    const generateImage = async (ele: Element, isWebview: boolean = false) => {
        setGenerating(true);

        html2canvas(ele as HTMLElement, {
            onclone: document => {
                let tmp: HTMLElement = document.querySelector('#HONEYED_WORDS_CARD');
                tmp.classList.add('starting');
                tmp.style.transform = 'none';
                tmp.style.boxShadow = 'none';
            },
            scale: window.devicePixelRatio * (isWebview ? 2 : 1)
        })
        .then((canvas) => {
            if (isWebview) {
                let img = document.createElement('img');

                canvas.toBlob(blob => {
                    const {
                        URL: { createObjectURL }
                    } = window;
                    img.src = createObjectURL(blob);
                    img.classList.add('downloadImg');
                });
                ele.classList.add('img');
                ele.appendChild(img);
                setGenerating(false);
            } else {
                canvas.toBlob(blob => {
                    saveAs(blob, `hw-${new Date().getTime()}.png`);
                    setGenerating(false);
                }, 'image/png');
            }
            ele.classList.remove('starting');
        });
    };

    const handleDownload = async () => {
        if (isWebview) {
            alert('请在浏览器打开！');
        }
        let ele = document.querySelector('#HONEYED_WORDS_CARD');
        await generateImage(ele);
    };

    return (
        <Button
            className={visible ? 'visible' : 'hidden'}
            disabled={generating}
            onClick={handleDownload}
        ></Button>
    );
};

export default SaveButton;
