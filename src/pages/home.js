import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { Feature, OptForm } from '../components';

export default function Home(){
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Filmes, séries e muito mais. Sem limites.</Feature.Title>
                    <Feature.SubTitle>Assista onde quiser. Cancele quando quiser.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder ="Email" />
                        <OptForm.Button>Vamos lá</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer  />
            
        </>
    );
}
