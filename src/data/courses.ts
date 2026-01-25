export interface Course {
  id: string;
  code: string;
  name: string;
  period: string;
  semester: string;
  year: number;
  description?: string;
  url: string;
  exercises?: CourseExercise[];
  presentations?: CoursePresentation[];
  labs?: CourseLab[];
  finalReport?: {
    title: string;
    url: string;
  };
}

export interface CourseExercise {
  id: string;
  title: string;
  code: string;
  url: string;
}

export interface CoursePresentation {
  id: string;
  title: string;
  url: string;
}

export interface CourseLab {
  id: string;
  title: string;
  code: string;
  url: string;
}

export const courses: Course[] = [
  {
    id: 'ce-245-2023-1',
    code: 'CE-245',
    name: 'Information Technology',
    period: '2023.1',
    semester: '1',
    year: 2023,
    description: 'Course offered by ITA in the graduate department. It aims to conduct studies on information technology.',
    url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1',
    exercises: [
      {
        id: 'listex0',
        title: 'ListEx0',
        code: 'ListEx0',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1/listas-de-exerc%C3%ADcios/listex0',
      },
      {
        id: 'listex1',
        title: 'ListEx1',
        code: 'ListEx1',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1/listas-de-exerc%C3%ADcios/listex1',
      },
      {
        id: 'listex2',
        title: 'ListEx2',
        code: 'ListEx2',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1/listas-de-exerc%C3%ADcios/listex2',
      },
      {
        id: 'listex3',
        title: 'ListEx3',
        code: 'ListEx3',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1/listas-de-exerc%C3%ADcios/listex3',
      },
      {
        id: 'listex4',
        title: 'ListEx4',
        code: 'ListEx4',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1/listas-de-exerc%C3%ADcios/listex4',
      },
      {
        id: 'listex5',
        title: 'ListEx5',
        code: 'ListEx5',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1/listas-de-exerc%C3%ADcios/listex5',
      },
    ],
    presentations: [
      {
        id: 'apres-ti',
        title: '1st Pres. (IT)',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1',
      },
      {
        id: 'apres-cap-livro',
        title: '2nd Pres. (Book Chapter or Paper)',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1',
      },
    ],
    finalReport: {
      title: 'Final Report',
      url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-245-2023-1/relat%C3%B3rio-final',
    },
  },
  {
    id: 'ce-235-2022-2',
    code: 'CE-235',
    name: 'Real-Time Embedded Systems',
    period: '2022.2',
    semester: '2',
    year: 2022,
    url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2',
    exercises: [
      {
        id: 'listex0',
        title: 'ListEx0',
        code: 'ListEx0',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2/listas-de-exerc%C3%ADcios/listex0',
      },
      {
        id: 'listex1',
        title: 'ListEx1',
        code: 'ListEx1',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2/listas-de-exerc%C3%ADcios/listex1',
      },
      {
        id: 'listex2',
        title: 'ListEx2',
        code: 'ListEx2',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2/listas-de-exerc%C3%ADcios/listex2',
      },
      {
        id: 'listex3',
        title: 'ListEx3',
        code: 'ListEx3',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2/listas-de-exerc%C3%ADcios/listex3',
      },
      {
        id: 'listex4',
        title: 'ListEx4',
        code: 'ListEx4',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2/listas-de-exerc%C3%ADcios/listex4',
      },
      {
        id: 'listex5',
        title: 'ListEx5',
        code: 'ListEx5',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2/listas-de-exerc%C3%ADcios/listex5',
      },
    ],
    labs: [
      {
        id: 'lab1',
        title: 'Lab1',
        code: 'Lab1',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2',
      },
      {
        id: 'lab2',
        title: 'Lab2',
        code: 'Lab2',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2',
      },
      {
        id: 'lab3',
        title: 'Lab3',
        code: 'Lab3',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2',
      },
      {
        id: 'lab4',
        title: 'Lab4',
        code: 'Lab4',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2',
      },
      {
        id: 'lab5',
        title: 'Lab5',
        code: 'Lab5',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2',
      },
      {
        id: 'lab6',
        title: 'Lab6',
        code: 'Lab6',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2',
      },
    ],
    finalReport: {
      title: 'Final Report',
      url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-235-2022-2',
    },
  },
  {
    id: 'ce-237-2022-2',
    code: 'CE-237',
    name: 'Advanced Software Testing Topics',
    period: '2022.2',
    semester: '2',
    year: 2022,
    url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-237-2022-2',
    exercises: [
      {
        id: 'listex0',
        title: 'ListEx0',
        code: 'ListEx0',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-237-2022-2/listas-de-exerc%C3%ADcios/listex0',
      },
      {
        id: 'listex1',
        title: 'ListEx1',
        code: 'ListEx1',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-237-2022-2/listas-de-exerc%C3%ADcios/listex1',
      },
      {
        id: 'listex2',
        title: 'ListEx2',
        code: 'ListEx2',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-237-2022-2/listas-de-exerc%C3%ADcios/listex2',
      },
      {
        id: 'listex3',
        title: 'ListEx3',
        code: 'ListEx3',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-237-2022-2/listas-de-exerc%C3%ADcios/listex3',
      },
      {
        id: 'listex4',
        title: 'ListEx4',
        code: 'ListEx4',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-237-2022-2/listas-de-exerc%C3%ADcios/listex4',
      },
      {
        id: 'listex5',
        title: 'ListEx5',
        code: 'ListEx5',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-237-2022-2/listas-de-exerc%C3%ADcios/listex5',
      },
    ],
    finalReport: {
      title: 'Final Report',
      url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-237-2022-2',
    },
  },
  {
    id: 'ce-240-2022-1',
    code: 'CE-240',
    name: 'Database Systems Design',
    period: '2022.1',
    semester: '1',
    year: 2022,
    url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-240-2022-1',
    exercises: [
      {
        id: 'listex0',
        title: 'ListEx0',
        code: 'ListEx0',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-240-2022-1/listas-de-exerc%C3%ADcios/listex0',
      },
      {
        id: 'listex1',
        title: 'ListEx1',
        code: 'ListEx1',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-240-2022-1/listas-de-exerc%C3%ADcios/listex1',
      },
      {
        id: 'listex2',
        title: 'ListEx2',
        code: 'ListEx2',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-240-2022-1/listas-de-exerc%C3%ADcios/listex2',
      },
      {
        id: 'listex3',
        title: 'ListEx3',
        code: 'ListEx3',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-240-2022-1/listas-de-exerc%C3%ADcios/listex3',
      },
      {
        id: 'listex4',
        title: 'ListEx4',
        code: 'ListEx4',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-240-2022-1/listas-de-exerc%C3%ADcios/listex4',
      },
      {
        id: 'listex5',
        title: 'ListEx5',
        code: 'ListEx5',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-240-2022-1/listas-de-exerc%C3%ADcios/listex5',
      },
    ],
    finalReport: {
      title: 'Final Report',
      url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-240-2022-1',
    },
  },
  {
    id: 'ce-229-2022-1',
    code: 'CE-229',
    name: 'Software Testing',
    period: '2022.1',
    semester: '1',
    year: 2022,
    url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-229-2022-1',
    exercises: [
      {
        id: 'listex0',
        title: 'ListEx0',
        code: 'ListEx0',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-229-2022-1/listas-de-exerc%C3%ADcios/listex0',
      },
      {
        id: 'listex1',
        title: 'ListEx1',
        code: 'ListEx1',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-229-2022-1/listas-de-exerc%C3%ADcios/listex1',
      },
      {
        id: 'listex2',
        title: 'ListEx2',
        code: 'ListEx2',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-229-2022-1/listas-de-exerc%C3%ADcios/listex2',
      },
      {
        id: 'listex3',
        title: 'ListEx3',
        code: 'ListEx3',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-229-2022-1/listas-de-exerc%C3%ADcios/listex3',
      },
      {
        id: 'listex4',
        title: 'ListEx4',
        code: 'ListEx4',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-229-2022-1/listas-de-exerc%C3%ADcios/listex4',
      },
      {
        id: 'listex5',
        title: 'ListEx5',
        code: 'ListEx5',
        url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-229-2022-1/listas-de-exerc%C3%ADcios/listex5',
      },
    ],
    finalReport: {
      title: 'Final Report',
      url: 'https://sites.google.com/view/matheusmota/disciplinas/ce-229-2022-1',
    },
  },
];
