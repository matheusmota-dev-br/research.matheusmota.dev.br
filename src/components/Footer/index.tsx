import { Container, SocialLinks } from './styled';
interface SocialLink {
  alt: string | undefined;
  iconPath: string | undefined;
  url: string;
}
interface FooterProps {
  social: SocialLink[]
}

export function Footer({ social = [] }: FooterProps) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <p>@{year} Research Portal for Personal Management</p>
      <SocialLinks>
        {social?.map((media) => (
          <a target="_blank" href={media.url} key={media.url} rel="noreferrer">
            <img src={media?.iconPath} alt={media?.alt} />
          </a>
        ))}
      </SocialLinks>
    </Container>
  );
}
