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
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 1rem;
    gap: 3rem;
    animation: ${fadeInUp} 0.6s ease-out;
`;

export const PageTitle = styled.h1`
    font-size: 3rem;
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const PageSubtitle = styled.p`
    font-size: 1.125rem;
    color: ${(props) => props.theme.textOffset};
    text-align: center;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
`;

export const PublicationsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem;
    width: 100%;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const PublicationCard = styled.div<{ $index: number }>`
    animation: ${fadeInUp} 0.6s ease-out;
    animation-fill-mode: both;
    animation-delay: ${(props) => (props.$index * 0.1) + 0.1}s;
    position: relative;

    /* Título maior para o subtítulo (que é o título da publicação) */
    h2 {
        font-size: 1.5rem !important;
        font-weight: 600 !important;
        line-height: 1.4 !important;
        color: ${(props) => props.theme.text} !important;
    }
`;

export const TitleWithYear = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
    margin-top: 0.5rem;

    h2 {
        flex: 1;
        margin: 0 !important;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const YearBadge = styled.div`
    display: inline-block;
    background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, ${(props) => props.theme.secondary} 100%);
    color: white;
    padding: 0.375rem 0.875rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 700;
    box-shadow: 0 2px 8px ${(props) => props.theme.primary}30;
    flex-shrink: 0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${(props) => props.theme.primary}40;
    }
`;

export const PublicationMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    border-top: 1px solid ${(props) => props.theme.border};
`;

export const MetaItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.textOffset};
    line-height: 1.5;

    strong {
        color: ${(props) => props.theme.text};
        font-weight: 600;
        min-width: 80px;
    }
`;

export const DOILink = styled.a`
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;
    word-break: break-all;

    &:hover {
        color: ${(props) => props.theme.secondary};
        text-decoration: underline;
    }
`;
