import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SectionTitle = styled.h1`
    font-size: 3rem;
    color: ${(props) => props.theme.blue};
    font-weight: 800;
    margin: 2rem 0;
`;

export const Profile = styled.div`
    display: flex;
    gap: 4rem;

    padding: 4rem 0;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;

export const ProfileAuthor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        border-radius: 9999px;
        height: 15rem;
        width: 15rem;
        object-fit: cover;
        margin-bottom: 1rem;
        border: 4px solid ${(props) => props.theme.border};
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 32px ${(props) => props.theme.primary}30;
            border-color: ${(props) => props.theme.primary};
        }
    }
    p{
        font-size: 1rem;
        font-weight: 800;
        color: ${(props) => props.theme.text};
        text-align: center;

        &:nth-child(3){
            color: ${(props) => props.theme.primary};
            margin-top: 0.25rem;
            font-weight: 600;
        }
    }
`;

export const ProfileContent = styled.div`
    h1{
        font-size: 2rem;
        color: ${(props) => props.theme.blue};
        margin-bottom: 1rem;
    }
`;

export const Timeline = styled.ul`
    list-style: none;
    position: relative;

    &:before{
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;

        background: ${(props) => props.theme.blue};
        border-radius: 9999px;

        top: 0;
        left: 50%;

        transform: translate(-50%, -50%);
    }

    &:after {
        content: '';
        position: absolute;
        width: 4px;
        background-color: ${(props) => props.theme.blue};
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-2px);
        border-radius: 9999px;
    }

    @media screen and (max-width: 900px) {
        &:before, &:after{
            left: 0;
        }
    }
`;

export const ExperienceYearRange = styled.div`
    font-size: 1.1rem;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    margin-bottom: 0.75rem;
    margin-top: 0;
    opacity: 0.9;
    line-height: 1.2;
`;

export const ExperienceSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${(props) => props.theme.border};
`;

export const PointTime = styled.li`

    --card-width: 16rem;
    --ball-diameter: 1rem;
    --spacing: 8rem;
    --line-height: 4px;
    --line-width: calc(var(--spacing) / 2);

    width: var(--card-width);
    position: relative;

    margin-bottom: 2rem;

    &:before{
        content: "";
        position: absolute;
        width: var(--ball-diameter);
        height: var(--ball-diameter);
        background: ${(props) => props.theme.blue};
        border-radius: 9999px;
    }

    &:after{
        content: "";
        position: absolute;
        width: var(--line-width);
        height: var(--line-height);
        background: ${(props) => props.theme.blue};
        border-radius: 9999px;

        top: 0;
    }

    &:nth-child(2n + 1){
        text-align: right;
        transform: translateX(calc(0px - var(--card-width) / 2 - var(--spacing) / 2)) translateY(2rem);

        &:before{
            transform: translate(0, 50%);
        }
        &:after{
            right: 0;
            transform: translate(calc(var(--spacing) / 2), calc(var(--ball-diameter) - var(--line-height) / 2));
        }

        h1, h2, p{
            padding-right: 1rem;
        }
        
        ${ExperienceYearRange} {
            padding-right: 1rem;
        }
        
        ${ExperienceSkills} {
            justify-content: flex-end;
        }
    }
    &:nth-child(2n){
        text-align: left;
        transform: translateX(calc(var(--card-width) / 2 + var(--spacing) / 2)) translateY(-2rem);

        &:before{
            transform: translate(-100%, 50%);
        }
        &:after{
            left: 0;
            transform: translate(calc(0px - var(--spacing) / 2), calc(var(--ball-diameter) - var(--line-height) / 2));
        }

        h1, h2, p{
            padding-left: 1rem;
        }
        
        ${ExperienceYearRange} {
            padding-left: 1rem;
        }
        
        ${ExperienceSkills} {
            justify-content: flex-start;
        }
    }
    h1{
        font-size: 2rem;
        color: ${(props) => props.theme.blue};
        margin-bottom: 0.5rem;
    }
    h2{
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 900px) {
        /* --card-width: calc(100% - var(--spacing)); */
        margin-bottom: 2rem;

        &:nth-child(2n + 1){
            text-align: left;

            &:before{
                transform: translate(-100%, 50%);
            }
            &:after{
                left: 0;
                transform: translate(calc(0px - var(--spacing) / 2), calc(var(--ball-diameter) - var(--line-height) / 2));
            }

            h1, h2, p{
                padding-left: 1rem;
            }
            
            ${ExperienceYearRange} {
                padding-left: 1rem;
            }
            
            ${ExperienceSkills} {
                justify-content: flex-start;
            }
        }

        &:nth-child(2n), &:nth-child(2n + 1){
            transform: translateX(calc(var(--spacing) / 2)) translateY(2rem);
        }
    }
`;

export const ContactInfo = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1.25rem;
    background: ${(props) => props.theme.background};
    border-radius: 16px;
    border: 2px solid ${(props) => props.theme.border};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        border-color: ${(props) => props.theme.primary}40;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.10rem;
    border-radius: 12px;
    transition: all 0.2s ease;
    background: transparent;

    &:hover {
        background: ${(props) => props.theme.primary}08;
        transform: translateX(4px);
    }
`;

export const ContactIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    min-width: 2.5rem;
    min-height: 2.5rem;
    border-radius: 12px;
    background: ${(props) => props.theme.primary}15;
    color: ${(props) => props.theme.primary};
    transition: all 0.3s ease;

    svg {
        width: 1.25rem;
        height: 1.25rem;
        stroke: currentColor;
    }

    ${ContactItem}:hover & {
        background: ${(props) => props.theme.primary}25;
        transform: scale(1.1);
        color: ${(props) => props.theme.primary};
    }
`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
    min-width: 0;
`;

export const ContactLabel = styled.span`
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.9;
`;

export const ContactValue = styled.span`
    font-size: 0.95rem;
    color: ${(props) => props.theme.text};
    font-weight: 500;
    word-break: break-word;
    line-height: 1.4;

    a {
        color: ${(props) => props.theme.blue};
        text-decoration: none;
        transition: all 0.2s ease;
        display: inline-block;
        position: relative;

        &:hover {
            color: ${(props) => props.theme.primary};
            
            &::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 2px;
                background: ${(props) => props.theme.primary};
                transform: scaleX(1);
            }
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: ${(props) => props.theme.primary};
            transform: scaleX(0);
            transition: transform 0.2s ease;
        }
    }
`;

export const CVLink = styled.a`
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
    display: inline-block;
    position: relative;

    &:hover {
        color: ${(props) => props.theme.primary};
        transform: translateX(4px);
        
        &::after {
            transform: scaleX(1);
        }
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${(props) => props.theme.primary};
        transform: scaleX(0);
        transition: transform 0.2s ease;
    }
`;

export const SkillsSection = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-bottom: 3rem;
`;

export const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    padding: 1.5rem;
    background: ${(props) => props.theme.background};
    border-radius: 12px;
    border: 2px solid ${(props) => props.theme.border};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const SkillTag = styled.span<{ $small?: boolean }>`
    display: inline-block;
    padding: ${(props) => (props.$small ? '0.35rem 0.75rem' : '0.5rem 1rem')};
    background: ${(props) => props.theme.primary}15;
    color: ${(props) => props.theme.primary};
    border-radius: 20px;
    font-size: ${(props) => (props.$small ? '0.75rem' : '0.875rem')};
    font-weight: 600;
    border: 1px solid ${(props) => props.theme.primary}30;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => props.theme.primary}25;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px ${(props) => props.theme.primary}20;
    }
`;
