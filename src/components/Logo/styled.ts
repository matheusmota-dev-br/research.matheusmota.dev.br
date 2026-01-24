import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    animation: ${fadeIn} 0.6s ease-out;
`;

export const LogoImage = styled.img`
    height: 3.5rem;
    width: auto;
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        height: 2.5rem;
    }
`;

export const LogoContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1{
        color: ${(props) => props.theme.primary};
        font-weight: 800;
        font-size: 1.5rem;
        letter-spacing: -0.5px;
        transition: color 0.3s ease;
        background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    p{
        color: ${(props) => props.theme.textOffset};
        font-weight: 600;
        font-size: 0.875rem;
        transition: color 0.3s ease;
    }
`;
