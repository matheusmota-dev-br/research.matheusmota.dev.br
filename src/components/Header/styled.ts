import styled from 'styled-components';

export const Container = styled.header`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;

    a{
        all: unset;
        cursor: pointer;
    }
`;

export const HeaderLinks = styled.div`
    display: flex;
    gap: 1rem;

    a{
        font-weight: 800;
        font-size: 1rem;
        border-bottom: 4px solid transparent;

        &:hover{
            color: ${(props) => props.theme.blue};

        }
    }

    .active{
        color: ${(props) => props.theme.blue};
        border-bottom: 4px solid ${(props) => props.theme.blue};
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
`;

export const ThemeToggleButton = styled.button`
    all: unset;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    
    font-size: 1.5rem;
    background: ${(props) => props.theme.backgroundOffset};
    color: ${(props) => props.theme.text};
    
    transition: all 0.2s ease;
    
    &:hover {
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.background};
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(0.95);
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
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 1rem;

    @media screen and (max-width: 500px){
        width: 100%;
    }
`;
