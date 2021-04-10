import React from 'react';

import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';
import { OptForm } from '../components';


export function FaqsContainer() {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item) => 
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            )}

            <OptForm>
                <OptForm.Input placeholder="Email address"></OptForm.Input>
                <OptForm.Button placeholder="Email address">Try It Now</OptForm.Button>
                <OptForm.Text placeholder="Email address">Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
            <OptForm.Break />
        </Accordion>
    )
};