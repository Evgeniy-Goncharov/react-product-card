import styled from "styled-components";
import { H1 } from "../elements";

const Title = styled(H1)`
    font-size: ${(props) => props.small ? 20 : 40}px;
`;

export default Title;