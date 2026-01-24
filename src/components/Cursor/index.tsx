import { useEffect, useRef, useState } from "react";
import { Container } from "./styled";

interface CursorAnimationProps{
    firstText: string;
    secondText: string
}

export function CursorAnimation({ firstText, secondText }: CursorAnimationProps){
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const [textWidth, setTextWidth] = useState<number | null>(null);

    useEffect(() => {
        if (h1Ref.current) {
            // Temporariamente remove a animação para medir o tamanho real
            const originalWidth = h1Ref.current.style.width;
            h1Ref.current.style.width = 'auto';
            
            // Mede o tamanho real do texto
            const width = h1Ref.current.scrollWidth;
            setTextWidth(width);
            
            // Restaura e aplica o tamanho exato
            h1Ref.current.style.width = originalWidth;
            h1Ref.current.style.setProperty('--text-width', `${width}px`);
        }
    }, [firstText, secondText]);

    return (
        <Container>
            <h1 ref={h1Ref} style={textWidth ? { '--text-width': `${textWidth}px` } as React.CSSProperties : undefined}>
                {firstText} <span>{secondText}</span>
            </h1>
        </Container>
    )
}