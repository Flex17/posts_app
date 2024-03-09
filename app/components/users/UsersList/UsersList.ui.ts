"use client";

import styled from "styled-components";

export const UsersListWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 1917px) {
        gap: 12px;
    }
    @media (max-width: 1917px) {
        gap: 20px;
    }
    @media (max-width: 1000px) {
        gap: 10px;
    }
    @media (max-width: 1400px) {
        gap: 10px;
    }
    @media (max-width: 740px) {
        max-width: 100%;
    }
`;
