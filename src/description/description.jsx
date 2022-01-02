import { DescriptionButton } from "./styles";

export default function Description({ text, onShowMore, isShowAllDescription }) {
    return (
        <>
            {text}
            <DescriptionButton
                onClick={onShowMore}>{isShowAllDescription ? 'Скрыть' : 'Подробнее'}</DescriptionButton>
        </>
    )
}