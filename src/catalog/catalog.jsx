import { Image } from "../elements";
import FullPrice from "../full-price/full-price";
import Title from "../title/title";
import { List, ListItem, StyledLink } from './styles';


export default function Catalog({ products }) {
    return (
        <>
            <Title>Каталог</Title>
            <List>
                {products &&
                    products.length &&
                    products.map((product) => (
                        <ListItem key={product.code}>
                            <StyledLink to={`/product/${product.code}`}>
                            <Image src={product.images[0]} />
                            <h2>{product.name}</h2>
                            <span>
                                <FullPrice oldPrice={product.oldPrice} price={product.price} />
                            </span>
                            </StyledLink>
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}