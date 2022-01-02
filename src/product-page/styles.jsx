import styled from "styled-components";
import { P } from "./../elements";
import Counter from "./../counter/counter";
import FullPrice from "../full-price/full-price";
import Button from "../button/button";
import { css } from "styled-components";

const valueStyle = css`
    display: inline-flex;
    margin-left: 20px;
    color: #333;
`;

export const StyledProductPage = styled.article`
    margin: ${(props) => props.theme.indent};
    padding: ${(props) => props.theme.indent};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-family: ${(props) => props.theme.font};
    font-size: 16px;
    color: ${(props) => props.theme.textColor};
`;

export const Header = styled.header`
    margin-bottom: 20px;
`;

export const ProductWrapper = styled.section`
    display: flex;
    margin-bottom: 20px;
`;

export const ProductInfo = styled.div`
    margin-left: 20px;
    border-left: 1px solid #888;
    box-sizing: border-box;
    padding-left: 20px;
    margin-bottom: 20px;
`;

export const ProductInfoLine = styled(P)`
    color: #666666;
    font-size: 18px;
    margin-bottom: 20px;
`;

export const PageCounter = styled(Counter)`
    ${valueStyle}
`;

export const PageFullPrice = styled(FullPrice)`
    ${valueStyle}
`;

export const DeliveryValue = styled.span`
    ${valueStyle}
    color: green;
`;

export const BuyButton = styled(Button)`
    margin-top: 40px;
`