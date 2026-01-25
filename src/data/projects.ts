export interface AcademicProject {
  id: string;
  title: string;
  code: string;
  period: string;
  description: string;
  fullDescription?: string;
  courses?: string[];
  technologies?: string[];
  url?: string;
  type: 'academic' | 'internship' | 'research' | 'professional';
}

export const academicProjects: AcademicProject[] = [
  {
    id: 'alfa3-tr',
    title: 'ALFA3-TR',
    code: 'ALFA3-TR',
    period: '2023.2',
    type: 'academic',
    description: 'Literacy Fluency Analysis Project version 3.0 in Real-Time',
    fullDescription: 'Literacy Fluency Analysis Project version 3.0 in Real-Time (ALFA3-TR) conducted with the course CE-230 (Software Quality, Reliability and Safety) during the 2nd semester of 2023. This project aimed to develop a computerized system, embedded software in hardware, for audio collection to obtain metrics for literacy fluency.',
    courses: ['CE-230 - Software Quality, Reliability and Safety'],
  },
  {
    id: 'alfa3-bd',
    title: 'ALFA3-BD',
    code: 'ALFA3-BD',
    period: '2023.1',
    type: 'academic',
    description: 'Literacy Fluency Analysis Project version 3.0 in Big Data',
    fullDescription: 'Literacy Fluency Analysis Project version 3.0 in Big Data (ALFA3-BD) conducted with the course CE-245 (Information Technology) during the 1st semester of 2023. This project aimed to develop a platform for audio collection to obtain metrics for literacy fluency.',
    courses: ['CE-245 - Information Technology'],
  },
  {
    id: 'alfa2-tr',
    title: 'ALFA2-TR',
    code: 'ALFA2-TR',
    period: '2022.2',
    type: 'academic',
    description: 'Literacy Fluency Analysis Project version 2.0 in Real-Time',
    fullDescription: 'Literacy Fluency Analysis Project version 2.0 in Real-Time (ALFA2-TR) conducted with the courses CE-235 (Real-Time Embedded Systems) and CE-237 (Advanced Software Testing Topics) during the 2nd semester of 2022. This project aimed to develop a computerized system, embedded software in hardware, for audio collection to obtain metrics for literacy fluency.',
    courses: [
      'CE-235 - Real-Time Embedded Systems',
      'CE-237 - Advanced Software Testing Topics',
    ],
  },
  {
    id: 'adp-flual-2',
    title: 'ADP-FLUAL 2.0',
    code: 'ADP-FLUAL 2.0',
    period: '2022.2',
    type: 'academic',
    description: 'ADP-FLUAL 2.0',
  },
  {
    id: 'alfa2-bd',
    title: 'ALFA2-BD',
    code: 'ALFA2-BD',
    period: '2022.1',
    type: 'academic',
    description: 'Literacy Fluency Analysis Project version 2.0 in Big Data',
    fullDescription: 'Literacy Fluency Analysis Project version 2.0 in Big Data (ALFA2-BD) conducted with the courses CE-240 (Database Systems Design) and CE-229 (Software Testing) during the 1st semester of 2022. This project aimed to develop a platform for audio collection to obtain metrics for literacy fluency.',
    courses: [
      'CE-240 - Database Systems Design',
      'CE-229 - Software Testing',
    ],
  },
  {
    id: 'iniciacao-cientifica',
    title: 'Scientific Initiation',
    code: 'IC',
    period: 'Ongoing',
    type: 'research',
    description: 'Scientific Initiation Projects',
  },
  {
    id: 'portal-cei',
    title: 'Portal CEI',
    code: 'Portal CEI',
    period: '2023',
    type: 'internship',
    description: 'Space Innovation Center (CEI) Portal',
  },
  {
    id: 'mec-ita',
    title: 'MEC-ITA',
    code: 'MEC-ITA',
    period: 'Various',
    type: 'professional',
    description: 'MEC-ITA Projects',
  },
  {
    id: 'portal-mec-ita',
    title: 'Portal MEC-ITA',
    code: 'Portal MEC-ITA',
    period: 'Various',
    type: 'professional',
    description: 'Portal MEC-ITA',
  },
  {
    id: 'portal-hastings',
    title: 'Portal Hastings',
    code: 'Portal Hastings',
    period: 'Various',
    type: 'professional',
    description: 'Portal Hastings',
  },
  {
    id: 'portal-apostilas-fisica',
    title: 'Portal Apostilas Física',
    code: 'Portal Apostilas Física',
    period: 'Various',
    type: 'professional',
    description: 'Portal Apostilas Física',
  },
  {
    id: 'portal-quero-educacao',
    title: 'Portal Quero Educação',
    code: 'Portal Quero Educação',
    period: '2019-2020',
    type: 'internship',
    description: 'Portal Quero Educação',
  },
];
