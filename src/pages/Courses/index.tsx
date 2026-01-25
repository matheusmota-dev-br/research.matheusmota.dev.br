import { useMemo } from 'react';
import { Card } from '../../components/Card';
import { Course, courses } from '../../data/courses';
import {
  Container,
  PageTitle,
  PageSubtitle,
  CoursesGrid,
  CourseCard,
  CourseMeta,
  MetaItem,
  PeriodBadge,
  TitleWithBadge,
  ExercisesList,
  ExerciseLink,
  LabsList,
  LabLink,
  PresentationLink,
  FinalReportLink,
  SectionTitle,
  SectionContent,
} from './styled';

export function Courses() {
  const sortedCourses = useMemo(() => {
    return [...courses].sort((a, b) => {
      // Sort by year, most recent first
      if (b.year !== a.year) return b.year - a.year;
      // If same year, sort by semester (2nd semester first)
      return parseInt(b.semester) - parseInt(a.semester);
    });
  }, []);

  return (
    <Container>
      <PageTitle>Courses</PageTitle>
      <PageSubtitle>
        Graduate courses and academic disciplines completed at ITA
      </PageSubtitle>
      <CoursesGrid>
        {sortedCourses.map((course: Course, index: number) => (
          <CourseCard key={course.id} $index={index}>
            <Card.Root>
              <TitleWithBadge>
                <Card.Title title={course.name} />
                <PeriodBadge>{course.period}</PeriodBadge>
              </TitleWithBadge>
              <Card.Subtitle subtitle={course.code} />
              {course.description && (
                <Card.Content content={course.description} />
              )}
              <CourseMeta>
                {course.exercises && course.exercises.length > 0 && (
                  <MetaItem>
                    <SectionTitle>Exercises:</SectionTitle>
                    <SectionContent>
                      <ExercisesList>
                        {course.exercises.map((exercise) => (
                          <ExerciseLink
                            key={exercise.id}
                            href={exercise.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {exercise.code}
                          </ExerciseLink>
                        ))}
                      </ExercisesList>
                    </SectionContent>
                  </MetaItem>
                )}
                {course.labs && course.labs.length > 0 && (
                  <MetaItem>
                    <SectionTitle>Labs:</SectionTitle>
                    <SectionContent>
                      <LabsList>
                        {course.labs.map((lab) => (
                          <LabLink
                            key={lab.id}
                            href={lab.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {lab.code}
                          </LabLink>
                        ))}
                      </LabsList>
                    </SectionContent>
                  </MetaItem>
                )}
                {course.presentations && course.presentations.length > 0 && (
                  <MetaItem>
                    <SectionTitle>Presentations:</SectionTitle>
                    <SectionContent>
                      {course.presentations.map((presentation) => (
                        <PresentationLink
                          key={presentation.id}
                          href={presentation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {presentation.title}
                        </PresentationLink>
                      ))}
                    </SectionContent>
                  </MetaItem>
                )}
                {course.finalReport && (
                  <MetaItem>
                    <SectionTitle>Final Report:</SectionTitle>
                    <SectionContent>
                      <FinalReportLink
                        href={course.finalReport.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {course.finalReport.title}
                      </FinalReportLink>
                    </SectionContent>
                  </MetaItem>
                )}
              </CourseMeta>
              <Card.Button title="View Course" url={course.url} />
            </Card.Root>
          </CourseCard>
        ))}
      </CoursesGrid>
    </Container>
  );
}
