import React from 'react';
import { HeaderContainer }  from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { Feature, OptForm } from '../components/';

function home() {
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email address"></OptForm.Input>
                    <OptForm.Button placeholder="Email address">Try It Now</OptForm.Button>
                </OptForm>
                <OptForm.Text placeholder="Email address">Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
        </>
    )
}

export default home
