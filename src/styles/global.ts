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
    }
    
    body{
        font-family: 'Lora', 'Crimson Text', 'Times New Roman', serif;
        font-size: 1rem;
        line-height: 1.7;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Crimson Text', 'Lora', 'Times New Roman', serif;
        font-weight: 600;
        line-height: 1.3;
        letter-spacing: -0.02em;
    }
    
    button, a, input, select, textarea {
        font-family: 'Lora', 'Crimson Text', 'Times New Roman', serif;
    }
`;
