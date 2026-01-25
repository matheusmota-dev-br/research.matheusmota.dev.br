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

export const CoursesGrid = styled.div`
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

export const CourseCard = styled.div<{ $index: number }>`
    animation: ${fadeInUp} 0.6s ease-out;
    animation-fill-mode: both;
    animation-delay: ${(props) => (props.$index * 0.1) + 0.1}s;
    position: relative;

    h2 {
        font-size: 1.5rem !important;
        font-weight: 600 !important;
        line-height: 1.4 !important;
        color: ${(props) => props.theme.text} !important;
    }
`;

export const TitleWithBadge = styled.div`
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

export const PeriodBadge = styled.span`
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

export const CourseMeta = styled.div`
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
`;

export const SectionTitle = styled.strong`
    color: ${(props) => props.theme.text};
    font-weight: 600;
    margin-bottom: 0.25rem;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ExercisesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
`;

export const ExerciseLink = styled.a`
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: ${(props) => props.theme.primary}15;
    color: ${(props) => props.theme.primary};
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid ${(props) => props.theme.primary}30;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => props.theme.primary}25;
        border-color: ${(props) => props.theme.primary}50;
        transform: translateY(-1px);
        color: ${(props) => props.theme.secondary};
    }
`;

export const LabsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
`;

export const LabLink = styled.a`
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: ${(props) => props.theme.secondary}15;
    color: ${(props) => props.theme.secondary};
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid ${(props) => props.theme.secondary}30;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => props.theme.secondary}25;
        border-color: ${(props) => props.theme.secondary}50;
        transform: translateY(-1px);
        color: ${(props) => props.theme.primary};
    }
`;

export const PresentationLink = styled.a`
    display: inline-block;
    padding: 0.375rem 0.75rem;
    background: ${(props) => props.theme.primary}10;
    color: ${(props) => props.theme.primary};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.primary}20;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    margin-bottom: 0.25rem;

    &:hover {
        background: ${(props) => props.theme.primary}20;
        border-color: ${(props) => props.theme.primary}40;
        color: ${(props) => props.theme.secondary};
        transform: translateY(-1px);
    }
`;

export const FinalReportLink = styled.a`
    display: inline-block;
    padding: 0.375rem 0.75rem;
    background: ${(props) => props.theme.secondary}10;
    color: ${(props) => props.theme.secondary};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.secondary}20;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => props.theme.secondary}20;
        border-color: ${(props) => props.theme.secondary}40;
        color: ${(props) => props.theme.primary};
        transform: translateY(-1px);
    }
`;
