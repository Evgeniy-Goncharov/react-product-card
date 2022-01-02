import { Label } from "./styled";
import Button from "../button/button";
import { useState } from "react";

export default function Order() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const isButtonEnabled = name && phone && address;
    
    const onChange = (evt, setChange) => setChange(evt.target.value);

    return (
        <form>
            <Label>
                Имя: <input value={name} onChange={(e) => onChange(e, setName)} />
            </Label>
            <Label>
                Телефон: <input type='tel' value={phone} onChange={(e) => onChange(e, setPhone)} />
            </Label>
            <Label>
                Адрес доставки: <input value={address} onChange={(e) => onChange(e, setAddress)} />
            </Label>
            <Button 
                disabled={!isButtonEnabled}
                onClick={(evt) => {
                    evt.preventDefault();
                    console.log(`${name}, спасибо за заказ. Мы доставим его по адресу: ${address}`);
                }}
            >
                Оформить
            </Button>
        </form>
    )
}