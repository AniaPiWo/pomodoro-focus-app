import styled from 'styled-components'

export const StyledHeader = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    & h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #FEF2E7;
    }

    & h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #FEF2E7;
    }
`