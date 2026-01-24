import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-success: ${(props) => props.theme.success};
        --color-warning: ${(props) => props.theme.warning};
        --color-error: ${(props) => props.theme.error};
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        -webkit-font-smoothing: antialiased;
    }
`;
