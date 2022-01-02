import styled from "styled-components";
import Button from "../button/button";

export const Popup = styled.div`
    position: fixed;
    padding: 15px;
    border: 1px solid ${(props) => props.theme.textColor};
    top: 50%;
    left: 50%;
    min-width: 500px;
    background-color: white;
    transform: translate(-50%, -50%);
    z-index: 10;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.textColor};
    padding-bottom: 5px;
    margin-bottom: 10px;
    font-size: 18px;
    position: relative;
`;

export const CloseButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 5px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    line-height: 1;
    padding: 0;
`;