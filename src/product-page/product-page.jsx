import { Header, ProductInfo, ProductWrapper, StyledProductPage, ProductInfoLine, PageCounter, DeliveryValue, BuyButton, PageFullPrice } from "./styles";
import Popularity from "../popularity/popularity";
import Title from "./../title/title";
import Code from "./../code/code";
import Tabs from "./../tabs/tabs";
import Description from "../description/description";
import Comments from "../comments/comments";
import { useState } from "react";
import PopUp from "../popup/popup";
import Order from "../order/order";
import Accordion from "../accordion/accordion";
import Slider from '../slider/slider';


const MAX_TEXT_SIZE = 200;
const COMMENTS_COUNT = 3;

export default function ProductPage({ product, showInfoInAccordion }) {
    const [productCount, setProductCount] = useState(1);
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [isShowAllDescription, setIsShowAllDescription] = useState(false);
    const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);
    const price = product.price * productCount;
    const oldPrice = product.oldPrice * productCount;

    const tabs = [
        {
            title: 'Описание',
            content: (
                <Description 
                    text={
                        isShowAllDescription
                            ? product.description
                            : product.description.slice(0, MAX_TEXT_SIZE)
                        } 
                        onShowMore={() => setIsShowAllDescription(!isShowAllDescription)} 
                        isShowAllDescription={isShowAllDescription}
                />
            )
        },
        {
            title: 'Комментарии',
            content: (
                <Comments 
                    comments={product.comments.slice(0, commentsShow)} 
                    onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
                    allCommentsLength={product.comments.length}
                />
            )
        }
    ]

    return (
        <StyledProductPage>
            <Header>
                <Title>{product.name}</Title>
                <Code>{product.code}</Code>
            </Header>
            <ProductWrapper>
                <Slider images={product.images} />
            <ProductInfo>
                <ProductInfoLine>
                    Цена:{" "}
                    <PageFullPrice price={price} oldPrice={oldPrice} />
                </ProductInfoLine>
                <ProductInfoLine>
                    Количество:{" "}
                    <PageCounter value={productCount} onChange={setProductCount} minValue={1} />
                </ProductInfoLine>
                <ProductInfoLine>
                    Доставка: <DeliveryValue>{product.delivery}</DeliveryValue>
                </ProductInfoLine>
                <BuyButton 
                    size="large"
                    onClick={() => setIsShowPopup(true)}
                >Купить</BuyButton>
                <Popularity count={product.comments.length} />
            </ProductInfo>
            </ProductWrapper>
            {showInfoInAccordion ? <Accordion tabs={tabs} /> : <Tabs tabs={tabs}></Tabs>}
            <PopUp 
                onClose={() => setIsShowPopup(false)} 
                isShow={isShowPopup} 
            >
                <Order />
            </PopUp>
        </StyledProductPage>
    )
}