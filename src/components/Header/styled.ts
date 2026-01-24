import styled from 'styled-components';

export const Container = styled.header`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;
    border-bottom: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.background};
    transition: background 0.3s ease, border-color 0.3s ease;

    a{
        all: unset;
        cursor: pointer;
    }
`;

export const HeaderLinks = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    a{
        font-weight: 600;
        font-size: 1rem;
        color: ${(props) => props.theme.textOffset};
        border-bottom: 2px solid transparent;
        padding: 0.5rem 0;
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: ${(props) => props.theme.primary};
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover{
            color: ${(props) => props.theme.primary};
            transform: translateY(-2px);

            &::after {
                width: 100%;
            }
        }
    }

    .active{
        color: ${(props) => props.theme.primary};
        font-weight: 700;

        &::after {
            width: 100%;
        }
    }

    .bar{
        display: none;
    }

    @media screen and (max-width: 900px){
        display: none;
    }
`;

export const HeaderBar = styled.div`
    display: none;
    @media screen and (max-width: 900px){
        display: block;
    }
`;

export const BarButton = styled.a`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme.backgroundOffset};
    transition: all 0.2s ease;

    img {
        width: 1.5rem;
        height: 1.5rem;
        filter: ${(props) => props.theme.background === '#111827' ? 'invert(1)' : 'none'};
        transition: transform 0.2s ease;
    }

    &:hover {
        background: ${(props) => props.theme.primary};
        transform: scale(1.05);

        img {
            transform: rotate(90deg);
        }
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const ThemeToggleButton = styled.button`
    all: unset;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 12px;
    
    background: ${(props) => props.theme.backgroundOffset};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.border};
    
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    svg {
        position: relative;
        z-index: 1;
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
        transition: width 0.6s ease, height 0.6s ease;
    }

    &:hover {
        border-color: ${(props) => props.theme.primary};
        transform: scale(1.05) rotate(15deg);
        box-shadow: 0 4px 12px ${(props) => props.theme.primary}40;
        color: ${(props) => props.theme.background};

        &::before {
            width: 300px;
            height: 300px;
        }

        svg {
            transform: rotate(180deg);
        }
    }

    &:active {
        transform: scale(0.95) rotate(0deg);
    }

    @media screen and (max-width: 900px){
        margin-right: 1rem;
    }
`;

export const HeaderBarLinks = styled(HeaderLinks)`
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: center;
    top: 0;
    right: 0;
    transform: translate(0, 5rem);
    background: ${(props) => props.theme.backgroundOffset};
    backdrop-filter: blur(20px);
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    gap: 1rem;
    min-width: 200px;
    animation: slideDown 0.3s ease-out;

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(0, 3rem);
        }
        to {
            opacity: 1;
            transform: translate(0, 5rem);
        }
    }

    a {
        width: 100%;
        text-align: center;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        background: transparent;
        transition: all 0.2s ease;

        &:hover {
            background: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.background};
            transform: translateX(4px);
        }

        &::after {
            display: none;
        }
    }

    .active {
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.background};
    }

    @media screen and (max-width: 500px){
        width: calc(100% - 2rem);
        right: 1rem;
    }
`;
