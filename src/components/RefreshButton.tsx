import React from 'react';
import styled from 'styled-components';
import ImageRefresh from '../assets/imgs/refresh.svg';
import StyledButton from './StyledButton';

const Button = styled<any>(StyledButton)`
    position: fixed;
    left: 3rem;
    bottom: 0.5rem;
    background-image: url(${ImageRefresh});
`;

const RefreshButton: React.FunctionComponent<{visible: boolean, handleUpdate: any}> = ({ visible = false, handleUpdate }): JSX.Element => {
    return <Button className={visible ? 'visible' : 'hidden'} onClick={handleUpdate}></Button>;
};

export default RefreshButton;
