"use client";

import styled from "styled-components";

export const UserCardWrapper = styled.div`
    border: 2px solid black;
    border-radius: 20px;
    width: 100%;
    cursor: pointer;
    flex-grow: 1;

    @media (min-width: 1900px) {
        max-width: 370px;
    }
    @media (max-width: 1917px) {
        max-width: 32%;
    }
    @media (max-width: 1400px) {
        max-width: 47%;
    }
    @media (max-width: 1000px) {
        max-width: 45%;
    }
    @media (max-width: 740px) {
        max-width: 100%;
    }
`;

export const UserCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const UserCardNameBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const UserCardNick = styled.span`
    margin-left: 10px;
`;

export const UserCardDescription = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const UserCardName = styled.span`
    margin-bottom: 5px;
`;

