import styled from "styled-components";
import { Button } from '../elements';

export const TitleButton = styled(Button)`
    width: 100%;
    text-align: left;
    padding: 10px 20px;
    background-color: #ccc;
    font-size: 18px;
    display: block;
    box-sizing: border-box;
    border-bottom: 1px solid black;
`;

export const Content = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid #ddd;
    padding: ${(props) => props.theme.indent};
    line-height: 1.5;
    font-size: 16px;
    box-sizing: border-box;
    text-align: left;
`;

export const ContentWrapper = styled.div`
    position: relative;
    height: 0;
    overflow: hidden;
    width: 100%;
    transition: 0.3s;
`;

export const Wrapper = styled.section`
    margin-bottom: 0px;
`;