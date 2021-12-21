import React, {useState} from "react";
import { Container, Inner, Title } from "./styles/accordion";

export default function Accordion({ children, ...restProps }){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState();
    return <Item {...restProps}>{children}</Item>;
};

Accordion.Item = function AccordionItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>;
};

