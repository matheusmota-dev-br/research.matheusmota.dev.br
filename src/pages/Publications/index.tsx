import { useMemo } from 'react';
import { Card } from '../../components/Card';
import { PublicationProps, publications } from '../../data/publication';
import { 
  Container, 
  PageTitle, 
  PageSubtitle, 
  PublicationsGrid, 
  PublicationCard,
  PublicationMeta,
  MetaItem,
  DOILink,
  YearBadge,
  TitleWithYear
} from './styled';

function truncateText(text: string, maxLength: number = 300): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

export function Publications() {
  const sortedPublications = useMemo(() => {
    return [...publications].sort((a, b) => b.publicationYear - a.publicationYear);
  }, []);

  return (
    <Container>
      <PageTitle>Publications</PageTitle>
      <PageSubtitle>
        Academic publications and research contributions in computer science and engineering
      </PageSubtitle>
      <PublicationsGrid>
        {sortedPublications.map((publication: PublicationProps, index: number) => (
          <PublicationCard key={publication.doi} $index={index}>
            <Card.Root>
              <TitleWithYear>
                <Card.Subtitle subtitle={publication.title} />
                <YearBadge>{publication.publicationYear}</YearBadge>
              </TitleWithYear>
              <Card.Content content={truncateText(publication.abstract)} />
              <PublicationMeta>
                <MetaItem>
                  <strong>Conference:</strong>
                  <span>{publication.conference}</span>
                </MetaItem>
                <MetaItem>
                  <strong>Publisher:</strong>
                  <span>{publication.publisher}</span>
                </MetaItem>
                <MetaItem>
                  <strong>DOI:</strong>
                  <DOILink href={publication.doi} target="_blank" rel="noopener noreferrer">
                    {publication.doi.replace('https://doi.org/', '')}
                  </DOILink>
                </MetaItem>
              </PublicationMeta>
              <Card.Button title="View Publication" url={publication.url} />
            </Card.Root>
          </PublicationCard>
        ))}
      </PublicationsGrid>
    </Container>
  );
}
