import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
`;

export const Nav = styled.nav`
    padding: 10px ${(props) => props.theme.indent};
    background-color: ${(props) => props.theme.buttonColor};
    margin-bottom: ${(props) => props.theme.indent};
`;

