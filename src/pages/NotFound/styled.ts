import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const float = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 200px);
    width: 100%;
    padding: 2rem 1rem;
    animation: ${fadeInUp} 0.6s ease-out;
`;

export const NotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 600px;
    width: 100%;
    gap: 2rem;
`;

export const Illustration = styled.div`
    position: relative;
    margin-bottom: 1rem;
`;

export const ErrorCode = styled.h1`
    font-size: 8rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin: 0;
    animation: ${float} 3s ease-in-out infinite;
    text-shadow: 0 0 40px ${(props) => props.theme.primary}20;
    letter-spacing: -0.05em;

    @media screen and (max-width: 768px) {
        font-size: 5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 4rem;
    }
`;

export const ErrorTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    margin: 0;
    letter-spacing: -0.02em;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const ErrorMessage = styled.p`
    font-size: 1.125rem;
    color: ${(props) => props.theme.textOffset};
    line-height: 1.7;
    margin: 0;
    max-width: 500px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const HomeButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 12px;
    background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
    color: ${(props) => props.theme.background};
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px ${(props) => props.theme.primary}30;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px ${(props) => props.theme.primary}40;

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 4px 12px ${(props) => props.theme.primary}30;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const BackButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 12px;
    background: ${(props) => props.theme.backgroundOffset};
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.border};
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: inherit;

    &:hover {
        background: ${(props) => props.theme.primary}10;
        border-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.primary};
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const QuickLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${(props) => props.theme.border};
    width: 100%;
`;

export const QuickLinksTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.textOffset};
    margin: 0;
`;

export const QuickLinksList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const QuickLinkItem = styled.li`
    a {
        display: inline-block;
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: ${(props) => props.theme.text};
        text-decoration: none;
        border-radius: 8px;
        background: ${(props) => props.theme.backgroundOffset};
        border: 1px solid ${(props) => props.theme.border};
        transition: all 0.2s ease;

        &:hover {
            background: ${(props) => props.theme.primary}15;
            border-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.primary};
            transform: translateY(-2px);
        }
    }
`;
