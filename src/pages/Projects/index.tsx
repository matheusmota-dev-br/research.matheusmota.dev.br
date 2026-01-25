import { useMemo } from 'react';
import { Card } from '../../components/Card';
import { AcademicProject, academicProjects } from '../../data/projects';
import {
  Container,
  PageTitle,
  PageSubtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectMeta,
  MetaItem,
  TypeBadge,
  PeriodBadge,
  TitleWithBadges,
  CoursesList,
  CourseTag,
} from './styled';

function getTypeColor(type: string): string {
  const colors: Record<string, string> = {
    academic: '#4A90E2',
    internship: '#50C878',
    research: '#9B59B6',
    professional: '#E67E22',
  };
  return colors[type] || '#6C757D';
}

function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    academic: 'Academic',
    internship: 'Internship',
    research: 'Research',
    professional: 'Professional',
  };
  return labels[type] || type;
}

export function Projects() {
  const sortedProjects = useMemo(() => {
    return [...academicProjects].sort((a, b) => {
      // Sort by year/period, most recent first
      const aYear = parseInt(a.period.split('.')[0] || '0');
      const bYear = parseInt(b.period.split('.')[0] || '0');
      if (bYear !== aYear) return bYear - aYear;
      // If same year, sort by semester
      const aSem = parseInt(a.period.split('.')[1] || '0');
      const bSem = parseInt(b.period.split('.')[1] || '0');
      return bSem - aSem;
    });
  }, []);

  return (
    <Container>
      <PageTitle>Projects</PageTitle>
      <PageSubtitle>
        Academic projects, research initiatives, internships, and professional work
      </PageSubtitle>
      <ProjectsGrid>
        {sortedProjects.map((project: AcademicProject, index: number) => (
          <ProjectCard key={project.id} $index={index}>
            <Card.Root>
              <TitleWithBadges>
                <Card.Title title={project.title} />
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <TypeBadge $color={getTypeColor(project.type)}>
                    {getTypeLabel(project.type)}
                  </TypeBadge>
                  {project.period && project.period !== 'Ongoing' && (
                    <PeriodBadge>{project.period}</PeriodBadge>
                  )}
                </div>
              </TitleWithBadges>
              <Card.Subtitle subtitle={project.code} />
              <Card.Content
                content={
                  project.fullDescription || project.description || 'No description available.'
                }
              />
              <ProjectMeta>
                {project.courses && project.courses.length > 0 && (
                  <MetaItem>
                    <strong>Related Courses:</strong>
                    <CoursesList>
                      {project.courses.map((course, idx) => (
                        <CourseTag key={idx}>{course}</CourseTag>
                      ))}
                    </CoursesList>
                  </MetaItem>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <MetaItem>
                    <strong>Technologies:</strong>
                    <CoursesList>
                      {project.technologies.map((tech, idx) => (
                        <CourseTag key={idx}>{tech}</CourseTag>
                      ))}
                    </CoursesList>
                  </MetaItem>
                )}
              </ProjectMeta>
              {project.url && (
                <Card.Button title="View Project" url={project.url} />
              )}
            </Card.Root>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
}
