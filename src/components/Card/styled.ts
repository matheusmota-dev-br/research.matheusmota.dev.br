import styled from 'styled-components';

export const CardImageContainer = styled.img`
    margin-bottom: 1rem;
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.3s ease;
`;

export const CardRootContainer = styled.div`
    width: 25rem;
    min-height: 15rem;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    border: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.background};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px ${(props) => props.theme.primary}20,
                    0 0 0 1px ${(props) => props.theme.primary}40;
        border-color: ${(props) => props.theme.primary};

        &::before {
            transform: scaleX(1);
        }

        ${CardImageContainer} {
            transform: scale(1.05);
        }
    }

    @media screen and (max-width: 500px){
        width: 100%;
    }
`;

export const CardTitleContainer = styled.h1`
    color: ${(props) => props.theme.primary};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    transition: color 0.3s ease;
`;

export const CardSubtileContainer = styled.h2`
    color: ${(props) => props.theme.textOffset};
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;
`;

export const CardContentContainer = styled.p`
    padding: 0.5rem 0;
    color: ${(props) => props.theme.text};
    line-height: 1.6;
    flex: 1;
    transition: color 0.3s ease;
`;

export const CardButtonContainer = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 12px;
    padding: 0.75rem 1.5rem;
    margin-top: auto;

    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
    color: ${(props) => props.theme.background};
    border: none;
    position: relative;
    overflow: hidden;

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

    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 8px 16px ${(props) => props.theme.primary}40;

        &::before {
            left: 100%;
        }
    }
    &:active{
        transform: translateY(0);
        box-shadow: 0 4px 8px ${(props) => props.theme.primary}30;
    }
`;
