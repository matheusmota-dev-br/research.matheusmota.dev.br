import styled from 'styled-components';

export const Container = styled.footer`
    padding: 3rem 1rem;
    margin-top: auto;
    text-align: center;
    border-top: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.background};
    transition: background 0.3s ease, border-color 0.3s ease;

    p {
        color: ${(props) => props.theme.textOffset};
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;

    a {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 12px;
        background: ${(props) => props.theme.backgroundOffset};
        border: 1px solid ${(props) => props.theme.border};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;

        img {
            width: 1.25rem;
            height: 1.25rem;
            filter: ${(props) => props.theme.background === '#111827' ? 'brightness(0) invert(1)' : 'none'};
            transition: transform 0.3s ease;
            z-index: 1;
            position: relative;
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: ${(props) => props.theme.primary};
            transform: translate(-50%, -50%);
            transition: width 0.4s ease, height 0.4s ease;
        }

        &:hover {
            border-color: ${(props) => props.theme.primary};
            transform: translateY(-4px) scale(1.1);
            box-shadow: 0 8px 16px ${(props) => props.theme.primary}30;

            &::before {
                width: 100px;
                height: 100px;
            }

            img {
                transform: scale(1.2) rotate(5deg);
                filter: ${(props) => props.theme.background === '#111827' ? 'invert(1) brightness(0) invert(1)' : 'brightness(0) invert(1)'};
            }
        }

        &:active {
            transform: translateY(-2px) scale(1.05);
        }
    }
`;
