import { CloseButton, Header, Popup } from "./styles";
import Title from "./../title/title";
import { useEffect } from "react";

export default function PopUp({ onClose, isShow, children }) {
    const handlerEsc = (evt) => {
        if (evt.key === 'Escape') {
            onClose && onClose();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handlerEsc);
        return () => {
            document.removeEventListener("keydown", handlerEsc);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isShow ? (
            <Popup>
                <Header>
                    <Title as="h2" small>Оформление</Title>
                    <CloseButton size="small" onClick={onClose}>x</CloseButton>
                </Header>
                {children}
            </Popup>
    ) : null;
}