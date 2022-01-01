import React from 'react';
import styled from 'styled-components/macro';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Perguntas Frequentes</Accordion.Title>
            {faqsData.map(item => 
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            )}
            <Accordion.Item>

            </Accordion.Item>
        </Accordion>
    );
}