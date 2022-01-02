import { useState } from "react";
import { TitleList, TitleButton, TitleText, Content } from "./styles";

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
        <TitleList>
            {tabs &&
                tabs.length &&
                tabs.map((tab, index) => {
                    if (index === activeTab) {
                        return (
                            <TitleButton 
                                active 
                                key={tab.title}
                                onClick={() => console.log('Переключение вкладки')}
                            >
                                <TitleText small active as="h2">
                                    {tab.title}
                                </TitleText>
                            </TitleButton>
                        );
                    }
                    return (
                        <TitleButton 
                            key={tab.title}
                            onClick={() => setActiveTab(index)}
                        >
                            <TitleText small as="h2">{tab.title}</TitleText>
                        </TitleButton>
                    )
                })
            }
        </TitleList>
        <Content>{tabs[activeTab].content}</Content>
        </div>
    );
}