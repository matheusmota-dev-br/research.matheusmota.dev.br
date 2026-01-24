import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 2rem;
    max-width: 900px;
    margin: 0 auto;
    animation: ${fadeInUp} 0.3s ease-out;
    position: relative;

    &::before {
        content: '• • •';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        color: ${(props) => props.theme.primary};
        font-size: 1.25rem;
        letter-spacing: 0.75rem;
        line-height: 1;
        opacity: 0.6;
    }

    h2{
        font-size: 1.75rem;
        font-style: italic;
        font-weight: 400;
        line-height: 1.8;
        color: ${(props) => props.theme.text};
        transition: color 0.3s ease;
        text-align: center;

        &:first-child {
            position: relative;
            padding: 2rem 3rem;
            background: ${(props) => props.theme.backgroundOffset};
            border-left: 4px solid ${(props) => props.theme.primary};
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

            &::before {
                content: '"';
                position: absolute;
                left: 1rem;
                top: 0.5rem;
                font-size: 5rem;
                color: ${(props) => props.theme.primary};
                opacity: 0.2;
                font-family: Georgia, serif;
                line-height: 1;
            }

            &::after {
                content: '"';
                position: absolute;
                right: 1rem;
                bottom: 0.5rem;
                font-size: 5rem;
                color: ${(props) => props.theme.primary};
                opacity: 0.2;
                font-family: Georgia, serif;
                line-height: 1;
            }
        }

        &:nth-child(2){
            color: ${(props) => props.theme.primary};
            font-weight: 600;
            text-align: right;
            font-size: 1.125rem;
            font-style: normal;
            margin-top: 0;
            padding-right: 1rem;
            position: relative;

            &::before {
                content: '—';
                margin-right: 0.75rem;
                opacity: 0.6;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 3rem 1rem;
        gap: 1.5rem;

        h2 {
            font-size: 1.25rem;
            line-height: 1.7;

            &:first-child {
                padding: 1.5rem 2rem 1.5rem 2.5rem;

                &::before {
                    font-size: 3.5rem;
                    left: 0.5rem;
                    top: 0.25rem;
                }

                &::after {
                    font-size: 3.5rem;
                    right: 0.5rem;
                    bottom: 0.25rem;
                }
            }

            &:nth-child(2) {
                font-size: 1rem;
                text-align: center;
                padding-right: 0;
            }
        }
    }
`;
