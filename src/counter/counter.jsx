import Button from "./../button/button";
import { StyledCounter, Value } from "./styles";

export default function Counter ({ className, value, onChange, minValue }) {
    const isDisabledMinus = value === minValue;

    return (
        <StyledCounter className={className}>
            <Button 
                size="small"
                disabled={isDisabledMinus}
                onClick={() => onChange && onChange(value - 1)}
            >
                -
            </Button>
            <Value>{value}</Value>
            <Button 
                size="small"
                onClick={() => onChange && onChange(value + 1)}
            >
                +
            </Button>
        </StyledCounter>
    )
}