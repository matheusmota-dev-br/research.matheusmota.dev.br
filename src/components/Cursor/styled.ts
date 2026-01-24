import styled, { keyframes } from 'styled-components';

const cursor = keyframes`
    0%, 49% {
        border-color: ${(props) => props.theme.primary};
    }
    50%, 100% {
        border-color: transparent;
    }
`;

const typing = keyframes`
    from {
        width: 0;
    }
    to {
        width: var(--text-width, 100%);
    }
`;

const glow = keyframes`
    0%, 100% {
        text-shadow: 0 0 8px ${(props) => props.theme.primary}30,
                     0 0 15px ${(props) => props.theme.primary}20,
                     0 0 25px ${(props) => props.theme.primary}10;
    }
    50% {
        text-shadow: 0 0 15px ${(props) => props.theme.primary}40,
                     0 0 25px ${(props) => props.theme.primary}30,
                     0 0 35px ${(props) => props.theme.primary}20;
    }
`;

export const Container = styled.div`
    --font-size: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 4rem 0;

    h1{
        font-size: var(--font-size);
        font-weight: 700;
        letter-spacing: 2px;
        border-right: 3px solid ${(props) => props.theme.primary};
        white-space: nowrap;
        overflow: hidden;
        color: ${(props) => props.theme.text};
        text-align: center;
        margin: 0 auto;
        display: inline-block;
        width: 0;
        animation:
            ${typing} 2s steps(60, end) forwards,
            ${cursor} 1s step-end infinite;
        transition: color 0.3s ease;

        span{
            font-size: var(--font-size);
            background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: ${glow} 3s ease-in-out infinite;
            font-weight: 700;
        }
    }

    @media screen and (max-width: 900px){
        h1 {
            --font-size: 3rem;
            letter-spacing: 1.5px;
            border-right-width: 2px;
        }
    }

    @media screen and (max-width: 500px){
        h1 {
            --font-size: 2rem;
            letter-spacing: 1px;
            border-right-width: 2px;
        }
    }
`;
