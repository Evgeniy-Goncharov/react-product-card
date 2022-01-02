import styled from "styled-components";

export const Code = styled.span.attrs((props) => ({
    children: `Артикул: ${props.children}`
}))`
    font-size: 12px;
    color: ${(props) => props.theme.textColorMuted};
`;

export default Code;