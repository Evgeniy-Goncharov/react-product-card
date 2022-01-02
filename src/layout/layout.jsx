import { Link } from "react-router-dom";
import { Nav, Wrapper } from "./styles";

export default function Layout({ children }) {
    return (
        <Wrapper>
            <Nav>
                <Link to="/">Главная</Link>
            </Nav>
            <main>{children}</main>
        </Wrapper>
    )
}