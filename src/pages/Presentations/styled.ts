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

export const PresentationsGrid = styled.div`
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

export const PresentationCard = styled.div<{ $index: number }>`
    animation: ${fadeInUp} 0.6s ease-out;
    animation-fill-mode: both;
    animation-delay: ${(props) => (props.$index * 0.1) + 0.1}s;

    h2 {
        font-size: 1.5rem !important;
        font-weight: 600 !important;
        line-height: 1.4 !important;
        color: ${(props) => props.theme.text} !important;
        margin-bottom: 0.75rem;
    }

    h1 {
        font-size: 2rem !important;
        font-weight: 700 !important;
    }
`;

export const PresentationMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    border-top: 1px solid ${(props) => props.theme.border};
`;

export const MetaItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.textOffset};
    line-height: 1.5;

    strong {
        color: ${(props) => props.theme.text};
        font-weight: 600;
        margin-bottom: 0.25rem;
    }
`;

export const KeywordsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
`;

export const KeywordTag = styled.span`
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: ${(props) => props.theme.primary}15;
    color: ${(props) => props.theme.primary};
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid ${(props) => props.theme.primary}30;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => props.theme.primary}25;
        border-color: ${(props) => props.theme.primary}50;
        transform: translateY(-1px);
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.25rem;
`;

export const ExternalLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.375rem 0.75rem;
    background: ${(props) => props.theme.primary}10;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.primary}20;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => props.theme.primary}20;
        border-color: ${(props) => props.theme.primary}40;
        color: ${(props) => props.theme.secondary};
        transform: translateY(-1px);
    }
`;
