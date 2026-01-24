import { PresentationProps, presentations } from '../../data/presentations';
import { 
  Container, 
  PageTitle, 
  PageSubtitle, 
  PresentationsGrid, 
  PresentationCard,
  PresentationMeta,
  MetaItem,
  KeywordsContainer,
  KeywordTag,
  ExternalLink,
  LinksContainer
} from './styled';
import { Card } from '../../components/Card';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export function Presentations() {
  return (
    <Container>
      <PageTitle>Presentations</PageTitle>
      <PageSubtitle>
        Academic presentations, talks, and research contributions in computer science and engineering
      </PageSubtitle>
      <PresentationsGrid>
        {presentations.map((presentation: PresentationProps, index: number) => (
          <PresentationCard key={presentation.id} $index={index}>
            <Card.Root>
              <Card.Image
                url={presentation.image.url}
                description={presentation.image.alt || presentation.image.description || presentation.title}
              />
              <Card.Title title={presentation.title} />
              <Card.Subtitle subtitle={formatDate(presentation.date)} />
              <Card.Content content={presentation.summary} />
              <PresentationMeta>
                {presentation.keywords && presentation.keywords.length > 0 && (
                  <MetaItem>
                    <strong>Keywords:</strong>
                    <KeywordsContainer>
                      {presentation.keywords.map((keyword, idx) => (
                        <KeywordTag key={idx}>{keyword}</KeywordTag>
                      ))}
                    </KeywordsContainer>
                  </MetaItem>
                )}
                {(presentation.slide_url || presentation.video_url || presentation.links) && (
                  <MetaItem>
                    <strong>Resources:</strong>
                    <LinksContainer>
                      {presentation.slide_url && (
                        <ExternalLink 
                          href={presentation.slide_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          📊 Slides
                        </ExternalLink>
                      )}
                      {presentation.video_url && (
                        <ExternalLink 
                          href={presentation.video_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          🎥 Video
                        </ExternalLink>
                      )}
                      {presentation.links?.map((link, idx) => (
                        <ExternalLink 
                          key={idx}
                          href={link.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {link.title}
                        </ExternalLink>
                      ))}
                    </LinksContainer>
                  </MetaItem>
                )}
              </PresentationMeta>
              <Card.Button
                title="View Details"
                url={presentation.id}
                useNav={true}
              />
            </Card.Root>
          </PresentationCard>
        ))}
      </PresentationsGrid>
    </Container>
  );
}
