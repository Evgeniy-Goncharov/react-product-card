import { useState, useRef, useEffect } from 'react';
import { Content, ContentWrapper, TitleButton, Wrapper } from './styles';

export default function Accordion({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [height, setHeight] = useState(0);
    const openContent = useRef(null);
    useEffect(() => {
        setHeight(openContent.current.offsetHeight);
        }, [height, activeIndex, tabs]);
    
    return(
        <div>
            {tabs &&
                tabs.length &&
                tabs.map((tab, index) => 
                    index === activeIndex ? (
                        <Wrapper key={tab.title}>
                            <TitleButton as="span" isActive>{tab.title}</TitleButton>
                            <ContentWrapper style={{ height }}>
                                <Content ref={openContent}>{tab.content}</Content>
                            </ContentWrapper>
                        </Wrapper>
                    ) : (
                        <Wrapper key={tab.title}>
                            <TitleButton onClick={() => setActiveIndex(index)}>{tab.title}</TitleButton>
                            <ContentWrapper>
                                <Content>{tab.content}</Content>
                            </ContentWrapper>
                        </Wrapper>
                    )
                )
            }
        </div>
    )
}