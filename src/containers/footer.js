import React from "react";
import { Footer } from "../components";

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Perguntas? Fale Conosco.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">Perguntas Frequentes</Footer.Link>
                    <Footer.Link href="#">Relações com investidores</Footer.Link>
                    <Footer.Link href="#">Formas de assistir</Footer.Link>
                    <Footer.Link href="#">Informações corporativas</Footer.Link>
                    <Footer.Link href="#">Só na Netflix</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Central de Ajuda</Footer.Link>
                    <Footer.Link href="#">Carreiras</Footer.Link>
                    <Footer.Link href="#">Termos de Uso</Footer.Link>
                    <Footer.Link href="#">Contato</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Conta</Footer.Link>
                    <Footer.Link href="#">Resgatar Vale-Presente</Footer.Link>
                    <Footer.Link href="#">Privacidade</Footer.Link>
                    <Footer.Link href="#">Teste de Velocidade</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Imprensa</Footer.Link>
                    <Footer.Link href="#">Comprar Vale-Presente</Footer.Link>
                    <Footer.Link href="#">Cookies</Footer.Link>
                    <Footer.Link href="#">Avisos legais</Footer.Link>
                </Footer.Column>

            </Footer.Row>

            <Footer.Break />
            <Footer.Text>Netflix Brasil</Footer.Text>
        </Footer>
    )
}