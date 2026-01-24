export const EnumExperienceType = {
  ACADEMIC: 'academic',
  PROFESSIONAL: 'professional',
};

export const about = {
  name: 'Matheus Silva Martins Mota',
  scientificName: 'Mota, M. S. M.',
  imgProfile: {
    url: '/profile.jpeg',
    alt: 'profile image',
  },
  description:
    "I am a highly motivated individual with a **Bachelor's degree in Aerospace Engineering** with **Honors from Aeronautics Technological Institute (ITA)**, currently pursuing a **Master's degree in Computer Science** at the same institute. My academic journey has equipped me with a strong foundation in aerospace engineering and a comprehensive understanding of computer science. My technical expertise extends to web development, where I focus on **JavaScript (TypeScript, React, React Native, Node)**, **Python (Flask, Django)**, and other frameworks such as **Laravel** and **Flutter**. During my professional experience as a **Freelancer at Hastings Informática**, I developed proficiency in Python, Selenium, Django, SQL Server Management Studio (SSMS), Docker, and Azure Git, enhancing my skills in web scraping and data extraction. As a **Collaborating Researcher** at **Aeronautics Technological Institute (ITA)**, I contributed to user experience modeling using Laravel and PostgreSQL, showcasing my versatility in front-end development. Additionally, my role as a Developer at Quero Educação and ITA Júnior, among other positions, has provided me with extensive experience in application development, interface design, and training. With a solid background in aerospace engineering and a focus on computer science, I am well-equipped for opportunities in the IT market, particularly in web development, where I bring a wealth of practical skills and a commitment to delivering innovative solutions.",
  experiences: [
    {
      startYear: 2018,
      endYear: 2023,
      title: 'Aerospace Engineering',
      content: 'Aeronautics Technological Institute (ITA)',
      experienceType: EnumExperienceType.ACADEMIC,
    },
    {
      startYear: 2022,
      endYear: 2024,
      title: 'Master in Computer Science',
      content: 'Aeronautics Technological Institute (ITA)',
      experienceType: EnumExperienceType.ACADEMIC,
    },
    // ----------------------------------------------------------
    {
      startYear: 2022,
      endYear: 2023,
      title: 'Hastings Informática (Analyst developer)',
      content:
        'Service provider responsible for developing routines for data extraction (Web Scraping) on legal websites. During this period, I used Python, Selenium and Django, SQL Server Management Studio (SSMS), Docker and Azure Git to implement and improve these systems.',
      experienceType: EnumExperienceType.PROFESSIONAL,
    },
    {
      startYear: 2022,
      endYear: 2023,
      title: 'Aeronautics Technological Institute (Collaborating Researcher)',
      content:
        'I worked as an application developer, dedicating myself to modeling user experience. I developed Front-end skills using Laravel, and used the PostgreSQL database. Additionally, I took responsibility for developing user access models, as well as user experience.',
      experienceType: EnumExperienceType.PROFESSIONAL,
    },
    {
      startYear: 2021,
      endYear: 2021,
      title: 'Business Application (Co-Founder)',
      content:
        'At first, I played a role in developing a Marketplace application, using Flutter and Firebase technologies. At the same time, I took responsibility for planning the user interfaces, using the Figma platform to create the layouts. Later, I became responsible for providing training on the use of Flutter in various applications.',
      experienceType: EnumExperienceType.PROFESSIONAL,
    },
    {
      startYear: 2019,
      endYear: 2020,
      title: 'Quero Education (Intern)',
      content:
        'Intern in charge of implementing an application covering web and mobile versions. I played a role in the development, ranging from modeling the database to creating interfaces for both platforms, in addition to creating an intermediate API to facilitate communication between the systems. I used JavaScript technologies, such as React and React Native, and Python, with Flask.',
      experienceType: EnumExperienceType.PROFESSIONAL,
    },
    {
      startYear: 2018,
      endYear: 2019,
      title: 'ITA Júnior (Web Developer)',
      content:
        'I played the role of Web Application Developer in several Junior Company projects, working on Front-end development through the use of JavaScript Frameworks, such as Bootstrap and Material UI.',
      experienceType: EnumExperienceType.PROFESSIONAL,
    },
  ],
};
