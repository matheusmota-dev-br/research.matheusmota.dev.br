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
    text-align: center;
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
        }

        &:nth-child(2n), &:nth-child(2n + 1){
            transform: translateX(calc(var(--spacing) / 2)) translateY(2rem);
        }
    }
`;
