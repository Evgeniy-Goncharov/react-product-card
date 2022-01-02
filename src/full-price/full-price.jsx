import OldPrice from "../old-price/old-price";
import { InnerPrice, PriceWrapper } from "./styles";

export default function FullPrice ({ price, oldPrice, className }) {
    const showOldPrice = oldPrice && price < oldPrice;

    return (
        <PriceWrapper className={className}>
            {showOldPrice && <OldPrice value={oldPrice} />}
            {showOldPrice && " "}
            <InnerPrice value={price} />
        </PriceWrapper>
    )
} 