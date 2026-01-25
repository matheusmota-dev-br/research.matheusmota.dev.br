import { Link } from 'react-router-dom';
import {
  Container,
  NotFoundContent,
  ErrorCode,
  ErrorTitle,
  ErrorMessage,
  ActionButtons,
  HomeButton,
  BackButton,
  QuickLinks,
  QuickLinksTitle,
  QuickLinksList,
  QuickLinkItem,
  Illustration,
} from './styled';

export function NotFound() {
  return (
    <Container>
      <NotFoundContent>
        <Illustration>
          <ErrorCode>404</ErrorCode>
        </Illustration>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorMessage>
          Oops! The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </ErrorMessage>
        <ActionButtons>
          <HomeButton to="/">Go to Home</HomeButton>
          <BackButton onClick={() => window.history.back()}>
            Go Back
          </BackButton>
        </ActionButtons>
        <QuickLinks>
          <QuickLinksTitle>Or visit one of these pages:</QuickLinksTitle>
          <QuickLinksList>
            <QuickLinkItem>
              <Link to="/about">About</Link>
            </QuickLinkItem>
            <QuickLinkItem>
              <Link to="/publications">Publications</Link>
            </QuickLinkItem>
            <QuickLinkItem>
              <Link to="/presentations">Presentations</Link>
            </QuickLinkItem>
            <QuickLinkItem>
              <Link to="/projects">Projects</Link>
            </QuickLinkItem>
            <QuickLinkItem>
              <Link to="/courses">Courses</Link>
            </QuickLinkItem>
          </QuickLinksList>
        </QuickLinks>
      </NotFoundContent>
    </Container>
  );
}
