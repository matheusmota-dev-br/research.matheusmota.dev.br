export interface PresentationProps {
  id: string;
  image: Record<string, string>;
  title: string;
  summary: string;
  keywords: Array<string>;
  date: string;
  slide_url?: string;
  video_url?: string;
  links?: Array<Record<string, string>>;
}

export const presentations: PresentationProps[] = [
  {
    id: 'blockchain-testing',
    image: {
      url: 'https://www.testing-whiz.com/wp-content/uploads/2022/08/Top-Things-You-Should-Know-About-Blockchain-Testing.jpg',
      alt: '',
    },
    title: 'Blockchain Testing',
    summary:
      "Presentation on Blockchain Testing for the Software Testing course (CE-229) conducted in the 1st Semester of 2022. Blockchain testing is the process of verifying the functionality, security, and performance of a blockchain network and its components. It involves various steps such as unit testing, integration testing, system testing, and acceptance testing to ensure the blockchain is free from bugs and vulnerabilities. Security is a central concern, with tests conducted to detect potential weaknesses such as code vulnerabilities, 51% attacks, and encryption failures. Additionally, performance testing evaluates the network's ability to handle transactions at scale and confirmation times. Data consistency is another critical area, where tests ensure that all copies of the distributed ledger maintain accurate and up-to-date consensus. Smart contract testing is essential to ensure that the code executing transactions automatically is secure and accurate. Automation is often employed to streamline the testing process and enhance its effectiveness. In summary, blockchain testing is crucial to ensuring the reliability and security of ever-evolving blockchain networks.",
    keywords: [
      'blockchain',
      'testing',
      'security',
      'consistency',
      'performance',
      'CE-229',
    ],
    date: '2022-05-27',
    slide_url:
      'https://docs.google.com/presentation/d/1Oiit-GsVLRZ1HV1hOW_rRVNMWDJgxNUSrFxhdwWIPHY/present?slide=id.p',
    video_url: 'https://youtu.be/peFD3IStpvg',
    links: [
      {
        title: 'References',
        link: 'https://drive.google.com/drive/folders/1mHQxIr9EFf7qJX199s_6vxt1Vdenu7op',
      },
    ],
  },
  {
    id: 'mutation-testing',
    image: {
      url: 'https://cdn.educba.com/academy/wp-content/uploads/2019/10/Mutation-Testing.png',
      alt: '',
    },
    title: 'Mutation Testing',
    summary:
      "Presentation on Mutation Testing for the Advanced Software Testing Topics course (CE-237) conducted in the 2nd Semester of 2022. Mutation testing is a software testing technique aimed at assessing the effectiveness of existing test cases by introducing small, deliberate changes, known as mutations, into the source code. These mutations simulate potential faults or bugs in the codebase. The primary goal of mutation testing is to evaluate the quality of the test suite by measuring its ability to detect these artificially introduced mutations. If the test suite can identify and fail on mutated code, it suggests that the tests are robust and capable of catching real bugs. Conversely, if mutations go undetected, it indicates weaknesses in the test suite's coverage. Mutation testing helps improve the overall reliability and effectiveness of software testing by highlighting areas where additional test cases or improvements are needed.",
    keywords: ['mutation testing', 'testing', 'introduced mutations', 'CE-237'],
    date: '2022-10-13',
    slide_url:
      'https://docs.google.com/presentation/d/1dSjRtA-X5J5v-LHNDEjuTSiOEuASqNB3n_qreuS5Fhk/present?slide=id.p',
    links: [
      {
        title: 'References',
        link: 'https://drive.google.com/file/d/1dJESNkCeXDui3kvRJs5dD25xYSZWZDGy/view?usp=sharing',
      },
      {
        title: 'Resume',
        link: 'https://docs.google.com/document/d/14XJrYVpl-K-p_rStQb7pqrmPQf1_Ms5zpcBTp1_ICyA/edit',
      },
    ],
  },
  {
    id: 'blockchain-ssa',
    image: {
      url: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/storage/uploads/view/36d5255132340b02636ffe46d137d25f.jpg',
      alt: '',
    },
    title: 'Blockchain SSA',
    summary:
      'Presentation on Blockchain for satellite constellation for the Information Technology course (CE-245) conducted in the 1st Semester of 2023. Blockchain technology has gained attention for its potential applications beyond traditional finance, including in the field of space exploration and satellite communications. In the context of space, blockchain offers several advantages such as decentralized data storage, enhanced security, and improved transparency. One notable application is in satellite communications, where blockchain can facilitate secure and efficient data exchange between satellites and ground stations. By utilizing blockchain, satellite networks can ensure the integrity and authenticity of data transmitted over long distances, reducing the risk of tampering or interception. Furthermore, blockchain technology can also play a role in space governance and resource management. As space exploration ventures expand, issues such as property rights, resource allocation, and dispute resolution may arise. Blockchain-based systems could provide transparent and immutable records of ownership and transactions, helping to establish clear regulations and protocols for space activities. Additionally, blockchain has the potential to enable innovative funding mechanisms for space projects through tokenization and crowdfunding. By leveraging blockchain-based platforms, space startups and organizations can raise capital from a global pool of investors, democratizing access to space exploration initiatives. Overall, blockchain technology holds promise for addressing various challenges and opportunities in the space sector, from improving communication infrastructure to enhancing governance and resource management. As awareness of these possibilities grows, stakeholders in the space industry are increasingly exploring the potential benefits of integrating blockchain into their operations.',
    keywords: ['SSA', 'blockchain', 'satellite', 'CE-245', 'constellation'],
    date: '2023-04-13',
    slide_url:
      'https://docs.google.com/presentation/d/12-leSonGyKvOLjKkIN9yPIcw4q3qmge4LsoFmEDRlSk/present?slide=id.p',
    links: [
      {
        title: 'References',
        link: 'https://drive.google.com/drive/folders/1qKpdZlKL3RUSrI9IIWmVJD6AfajkVBvF?usp=sharing',
      },
      {
        title: 'Glossary',
        link: 'https://docs.google.com/spreadsheets/d/1FKbyrYIhzNBdgqi22gfj4ezgZpVtsdCk0q3G9e94h30/edit?usp=sharing',
      },
    ],
  },
  {
    id: 'blockchain-ethics',
    image: {
      url: 'https://www.rhyslindmark.com/content/images/2019/07/image-1.png',
      alt: '',
    },
    title: 'Blockchain Ethics',
    summary:
      'Presentation on Blockchain, Ethics and Human Rights for the Information Technology course (CE-245) conducted in the 1st Semester of 2023. Ethics in the context of blockchain involves fundamental considerations regarding transparency, privacy, security, and accountability. While blockchain offers benefits such as immutability, decentralization, and data integrity, it also presents ethical challenges that need to be addressed. Issues like privacy concerns due to the transparency of blockchain data, the importance of robust cybersecurity measures to prevent fraud and data breaches, and the need for fair dispute resolution mechanisms are crucial. Additionally, ensuring equitable access and distribution of blockchain benefits is essential for ethical blockchain implementation, avoiding widening socioeconomic disparities. Overall, a holistic approach that prioritizes transparency, privacy, security, accountability, and fairness is necessary to maximize the ethical application of blockchain technology.',
    keywords: ['ethics', 'blockchain', 'privacy', 'human rights', 'CE-245'],
    date: '2023-04-13',
    slide_url:
      'https://docs.google.com/presentation/d/1Ns3FSClXQPvBI5-b2hOVsUoUrh0gbWt1BtiRKMANj9A/present?slide=id.p',
    links: [
      {
        title: 'References',
        link: 'https://drive.google.com/drive/folders/1b494T1CmkdyuOGOcPUfOI53KPQERwpHV?usp=sharing',
      },
    ],
  },
];
