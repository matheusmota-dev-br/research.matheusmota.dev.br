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
  DOILink
} from './styled';

export function Publications() {
  return (
    <Container>
      <PageTitle>Publications</PageTitle>
      <PageSubtitle>
        Academic publications and research contributions in computer science and engineering
      </PageSubtitle>
      <PublicationsGrid>
        {publications.map((publication: PublicationProps) => (
          <PublicationCard key={publication.doi}>
            <Card.Root>
              <Card.Title title={publication.publicationYear.toString()} />
              <Card.Subtitle subtitle={publication.title} />
              <Card.Content content={publication.abstract} />
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
