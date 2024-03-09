"use client";

import styled from "styled-components";

export const TabsWrapper = styled.section`
    margin: 20px 0;
    display: flex;
`;

export const LinkWrapper = styled.section<{ $active: boolean }>`
    font-size: 17px;
    margin-right: 20px;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    border-bottom-color: ${props => props.$active ? "black" : "transparent"};

    &:hover {
        border-bottom-color: black;
    }
`;
