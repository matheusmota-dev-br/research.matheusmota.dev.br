import styled, { keyframes } from 'styled-components';

const highlightPulse = keyframes`
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
`;

export const StrongText = styled.strong`
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: ${highlightPulse} 3s ease infinite;
    position: relative;
    padding: 0 2px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
        opacity: 0.3;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`;
