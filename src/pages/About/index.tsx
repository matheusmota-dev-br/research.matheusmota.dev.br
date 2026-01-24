import { HighlightedText } from '../../components/Highlight';
import { EnumExperienceType, about } from '../../data/about';
import {
  Container,
  PointTime,
  Profile,
  ProfileAuthor,
  ProfileContent,
  SectionTitle,
  Timeline,
  ContactInfo,
  ContactItem,
  ContactIcon,
  ContactContent,
  ContactLabel,
  ContactValue,
  SkillsSection,
  SkillsGrid,
  SkillTag,
  ExperienceSkills,
  ExperienceYearRange,
  CVLink,
} from './styled';

export function About() {
  const {
    experiences,
    name,
    scientificName,
    imgProfile,
    description,
    basic,
    education,
    professionalExperiences,
  } = about;

  const academicExperiences = experiences.filter(
    (experience) => experience.experienceType === EnumExperienceType.ACADEMIC,
  );
  const professionalExperiencesConverted = experiences.filter(
    (experience) =>
      experience.experienceType === EnumExperienceType.PROFESSIONAL,
  );

  // Helper to get years range from education/experience
  const getYearRange = (startYear: number, endYear: number | null) => {
    if (endYear === null) {
      return `${startYear} - Present`;
    }
    return `${startYear} - ${endYear}`;
  };

  // Helper to find original experience data with skills
  const findExperienceWithSkills = (fullTitle: string) => {
    // The fullTitle is in format "Title - Subtitle"
    const parts = fullTitle.split(' - ');
    const title = parts[0]?.trim() || '';
    const subTitle = parts[1]?.trim() || '';
    
    return (
      professionalExperiences?.find(
        (exp) => exp.title === title && exp.sub_title === subTitle,
      ) ||
      education?.find(
        (edu) => edu.title === title && edu.sub_title === subTitle,
      )
    );
  };

  return (
    <Container>
      <Profile>
        <ProfileAuthor>
          <img src={imgProfile.url} alt={imgProfile.alt} />
          <p>{name}</p>
          <p>{scientificName}</p>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </ContactIcon>
              <ContactContent>
                <ContactLabel>Position</ContactLabel>
                <ContactValue>{basic.job}</ContactValue>
              </ContactContent>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </ContactIcon>
              <ContactContent>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>
                  <a href={`mailto:${basic.email}`}>{basic.email}</a>
                </ContactValue>
              </ContactContent>
            </ContactItem>
            {basic.cv_link && (
              <ContactItem>
                <ContactIcon>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </ContactIcon>
                <ContactContent>
                  <ContactLabel>Curriculum</ContactLabel>
                  <ContactValue>
                    <CVLink
                      href={basic.cv_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View CV
                    </CVLink>
                  </ContactValue>
                </ContactContent>
              </ContactItem>
            )}
          </ContactInfo>
        </ProfileAuthor>
        <ProfileContent>
          <h1>About Me</h1>
          <p>
            <HighlightedText text={description} />
          </p>
        </ProfileContent>
      </Profile>

      {basic.skills && basic.skills.length > 0 && (
        <>
          <SectionTitle>Technical Skills</SectionTitle>
          <SkillsSection>
            <SkillsGrid>
              {basic.skills.map((skill) => (
                <SkillTag key={skill.id}>{skill.name}</SkillTag>
              ))}
            </SkillsGrid>
          </SkillsSection>
        </>
      )}

      <SectionTitle>Academic Experience</SectionTitle>
      <Timeline>
        {academicExperiences.map((experience) => {
          const originalData = findExperienceWithSkills(experience.title);
          const skills = originalData && 'skills' in originalData && Array.isArray(originalData.skills) 
            ? (originalData.skills as Array<{ id: string; name: string }>)
            : null;
          return (
            <PointTime key={experience.content + experience.title}>
              <ExperienceYearRange>
                {getYearRange(
                  experience.startYear,
                  experience.endYear,
                )}
              </ExperienceYearRange>
              <h2>{experience.title}</h2>
              <p>{experience.content}</p>
              {skills && skills.length > 0 && (
                <ExperienceSkills>
                  {skills.map((skill) => (
                    <SkillTag key={skill.id} $small>
                      {skill.name}
                    </SkillTag>
                  ))}
                </ExperienceSkills>
              )}
            </PointTime>
          );
        })}
      </Timeline>

      <SectionTitle>Professional Experience</SectionTitle>
      <Timeline>
        {professionalExperiencesConverted.map((experience) => {
          const originalData = findExperienceWithSkills(experience.title);
          const skills = originalData && 'skills' in originalData && Array.isArray(originalData.skills) 
            ? (originalData.skills as Array<{ id: string; name: string }>)
            : null;
          return (
            <PointTime key={experience.content + experience.title}>
              <ExperienceYearRange>
                {getYearRange(
                  experience.startYear,
                  experience.endYear,
                )}
              </ExperienceYearRange>
              <h2>{experience.title}</h2>
              <p>{experience.content}</p>
              {skills && skills.length > 0 && (
                <ExperienceSkills>
                  {skills.map((skill) => (
                    <SkillTag key={skill.id} $small>
                      {skill.name}
                    </SkillTag>
                  ))}
                </ExperienceSkills>
              )}
            </PointTime>
          );
        })}
      </Timeline>
    </Container>
  );
}
