import { FaLandmark, FaChartPie, FaBook, FaUsers } from 'react-icons/fa';

export const SectionData = {
  successStories: [
    {
      id: 1,
      image: 'https://msbsvet.blob.core.windows.net/msbsvet/msbsvetlive/candidate/202212c100084/photo_ec724d4420314334b3bf81b3e7504408.jpg',
      name: 'RADHIKA BAPU DIGHE',
      year: '1 2016',
      description: 'Selected as TEST at TEST 3 in',
    },
    {
      id: 2,
      image: 'https://msbsvet.blob.core.windows.net/dvettesting/dvettesting/successstories/msb120515/photo_d9b37f1a3df9481b94ba41ade7892ac4.jpg',
      name: 'DEVENDRA SURESH BHARAMBE',
      year: '0 2023',
      description: 'Selected as PROJECT LEAD at TALISMA PVT LTD in',
    },
    {
      id: 3,
      image: 'https://msbsvet.edu.in/Images/blank_profile.png',
      name: 'RADHIKA BAPU DIGHE',
      year: '1 2024',
      description: 'Selected as ENGINEER at TALISMA in',
    },
    {
      id: 4,
      image: 'https://msbsvet.blob.core.windows.net/msbsvet/msbsvetlive/candidate/202212c115412/photo_a8f851b4467a43d185cdccfd0688ca76.jpg',
      name: 'Kajal Balu Mahale',
      year: '2 2024',
      description: 'Selected as DEVELOPER at TECH CORP',
    }
  ],
  higherEducation: [
    {
      id: 1,
      image: 'https://staging.msbsvet.edu.in/Images/RatanTataMaharashtraStateSkillUniversity.jpg',
      title: 'Ratan Tata Maharashtra State Skill University',
      link: null,
    },
    {
      id: 2,
      image: 'https://staging.msbsvet.edu.in/Images/msbte.jpg',
      title: 'Engineering Diploma',
      link: null,
    },
    {
      id: 3,
      image: 'https://staging.msbsvet.edu.in/Images/TISS.jpg',
      title: 'Bachelor of Vocation (B.Voc.)',
      link: { text: 'Circular for Admission', url: '#' },
    },
    {
      id: 4,
      image: 'https://staging.msbsvet.edu.in/Images/dvet.jpg',
      title: 'Industrial Training Institute (ITI)',
      link: null,
    }
  ],
  opportunities: [
    {
      id: 1,
      image: 'https://staging.msbsvet.edu.in/Images/NAPS.png',
      title: 'National Apprenticeship Training Scheme',
    },
    {
      id: 2,
      image: 'https://staging.msbsvet.edu.in/Images/dvet.jpg',
      title: 'Maharashtra Apprenticeship Promotion Scheme (MAPS)',
    },
    {
      id: 3,
      image: 'https://staging.msbsvet.edu.in/Images/CSDEE.jpg',
      title: 'Commissionerate of Skill Development, Employment and Entrepreneurship',
    },
    {
      id: 4,
      image: 'https://staging.msbsvet.edu.in/Images/koshlya.jpg',
      title: 'CM Internship Program',
    }
  ],
  entrepreneurshipOpportunities: [
    {
      id: 1,
      image: 'https://staging.msbsvet.edu.in/Images/udyog.jpg',
      title: 'Annasaheb Patil Arthik Magas Vikas Mahamandal',
    },
    {
      id: 2,
      image: 'https://staging.msbsvet.edu.in/Images/msobcfdc.jpg',
      title: 'Maharashtra State OBC Finance and Development Corporation',
    },
    {
      id: 3,
      image: 'https://staging.msbsvet.edu.in/Images/mpbcdc.jpg',
      title: 'Mahatma Phule Backward Class Development Corporation',
    }
  ],
  stats: [
    { id: 1, count: '2,880', label: 'Institutes', icon: FaLandmark },
    { id: 2, count: '39', label: 'Sectors', icon: FaChartPie },
    { id: 3, count: '2,121', label: 'Courses', icon: FaBook },
    { id: 4, count: '46,559', label: 'Candidates', icon: FaUsers },
  ]
};
