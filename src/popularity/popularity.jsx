export default function Popularity({ count }) {
    let result = null;

    if (!count) {
        result = <p>Будь первым. Поделись впечатлениями</p>
    }

    if (count > 5) {
        result = <p style={{color: "green"}}>Проверенный товар</p>
    }

    return result;
}