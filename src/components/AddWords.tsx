import React, { useState } from 'react';
import styled from 'styled-components';

import StyledButton from './StyledButton';
import ImageAdd from '../assets/imgs/add.words.svg';
import ImageClose from '../assets/imgs/close.svg';
import { AniSlideInUp } from './animates';

const AddButton = styled<any>(StyledButton)`
    background-image: url(${ImageAdd});
    &.close {
        background-image: url(${ImageClose});
    }
`;

const StyledBtnWrapper = styled.div<any>`
    z-index: 998;
    position: fixed;
    left: 1rem;
    top: 1rem;
    margin-right: 0.5rem;
    .tip {
        position: absolute;
        right: -4.8rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.6rem;
        background: rgba(2, 2, 2, 0.6);
        padding: 0.3rem;
        &.hidden {
        visibility: hidden;
        }
    }
`;

const StyledModal = styled.section<any>`
    z-index: 998;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(2, 2, 2, 0.9);
    padding: 1rem;
    &.visible {
        animation: ${AniSlideInUp} 1s;
    }
    .title {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .content {
        margin-top: 1rem;
        line-height: 1.5;
        padding: 0 4rem;
        .way {
        margin-bottom: 1.4rem;
        .head {
            font-size: 1.4rem;
            font-weight: 800;
            margin-bottom: 0.4rem;
        }
        .con {
            font-size: 1.2rem;
            em {
            font-weight: 800;
            user-select: text;
            }
            a {
            font-weight: 800;
            margin: 0 0.3rem;
            }
        }
        }
    }
`;

const Modal: React.FunctionComponent<{visible: boolean}> = ({ visible = false }): JSX.Element => {
    return (
        <StyledModal className={visible ? 'visible' : 'hidden'}>
            <h2 className="title">👇通过以下方式贡献情话👇</h2>
            <div className="content">
                <div className="way">
                    <h3 className="head">方式一：</h3>
                    <p className="con">
                        如果你知道Github并且会如何使用，可以通过
                        <a
                            href="https://github.com/zerosoul/honeyed-words-generator#%E8%B4%A1%E7%8C%AE%E5%9C%9F%E5%91%B3%E6%83%85%E8%AF%9D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            这里贡献情话
                        </a>
                        ，或者直接提
                        <a
                            href="https://github.com/zerosoul/honeyed-words-generator/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISSUES
                        </a>
                    </p>
                </div>
                <div className="way">
                    <h3 className="head">方式二：</h3>
                    <p className="con">
                        如果你不懂技术，只懂情话，那就联系作者吧，让作者代劳咯，微信：<em>yanggc_2013</em>。
                    </p>
                </div>
            </div>
        </StyledModal>
    );
};

const AddWords: React.FunctionComponent = (): JSX.Element => {
    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand((prev) => !prev);
    };

    return (
        <>
            <Modal visible={expand} />
            <StyledBtnWrapper>
                <AddButton className={`${expand ? 'close' : ''} visible`} onClick={handleClick}></AddButton>
                <div className={`tip ${expand ? 'hidden' : ''}`}>👈贡献情话</div>
            </StyledBtnWrapper>
        </>
    );
};

export default AddWords;
