import { Question } from '../types';

export const questions: Question[] = [
  // Big Five Personality Model Questions
  {
    id: 'p1',
    category: 'personality',
    text: 'I enjoy being the center of attention at social gatherings.',
    options: [
      'Strongly Disagree',
      'Disagree',
      'Neutral',
      'Agree',
      'Strongly Agree'
    ],
    weight: 1
  },
  {
    id: 'p2',
    category: 'personality',
    text: 'I prefer structured environments with clear rules and procedures.',
    options: [
      'Strongly Disagree',
      'Disagree',
      'Neutral',
      'Agree',
      'Strongly Agree'
    ],
    weight: 1
  },
  {
    id: 'p3',
    category: 'personality',
    text: 'I often come up with creative solutions to problems.',
    options: [
      'Strongly Disagree',
      'Disagree',
      'Neutral',
      'Agree',
      'Strongly Agree'
    ],
    weight: 1
  },
  {
    id: 'p4',
    category: 'personality',
    text: 'I find it easy to empathize with others\' feelings.',
    options: [
      'Strongly Disagree',
      'Disagree',
      'Neutral',
      'Agree',
      'Strongly Agree'
    ],
    weight: 1
  },
  {
    id: 'p5',
    category: 'personality',
    text: 'I often feel anxious about upcoming challenges.',
    options: [
      'Strongly Disagree',
      'Disagree',
      'Neutral',
      'Agree',
      'Strongly Agree'
    ],
    weight: 1
  },

  // Holland Career Codes (RIASEC) Questions
  {
    id: 'i1',
    category: 'interests',
    text: 'I enjoy working with my hands and building things.',
    options: [
      'Not at all',
      'Slightly',
      'Moderately',
      'Very much',
      'Extremely'
    ],
    weight: 1
  },
  {
    id: 'i2',
    category: 'interests',
    text: 'I like conducting experiments and analyzing data.',
    options: [
      'Not at all',
      'Slightly',
      'Moderately',
      'Very much',
      'Extremely'
    ],
    weight: 1
  },
  {
    id: 'i3',
    category: 'interests',
    text: 'I am drawn to creative activities like writing, music, or art.',
    options: [
      'Not at all',
      'Slightly',
      'Moderately',
      'Very much',
      'Extremely'
    ],
    weight: 1
  },
  {
    id: 'i4',
    category: 'interests',
    text: 'I enjoy helping others and making a positive impact.',
    options: [
      'Not at all',
      'Slightly',
      'Moderately',
      'Very much',
      'Extremely'
    ],
    weight: 1
  },
  {
    id: 'i5',
    category: 'interests',
    text: 'I like leading teams and making strategic decisions.',
    options: [
      'Not at all',
      'Slightly',
      'Moderately',
      'Very much',
      'Extremely'
    ],
    weight: 1
  },
  {
    id: 'i6',
    category: 'interests',
    text: 'I prefer organized, systematic work environments.',
    options: [
      'Not at all',
      'Slightly',
      'Moderately',
      'Very much',
      'Extremely'
    ],
    weight: 1
  },

  // Work Values Assessment Questions
  {
    id: 'v1',
    category: 'values',
    text: 'Having the freedom to work independently is important to me.',
    options: [
      'Not important',
      'Slightly important',
      'Moderately important',
      'Very important',
      'Extremely important'
    ],
    weight: 1
  },
  {
    id: 'v2',
    category: 'values',
    text: 'Job security and stable employment matter to me.',
    options: [
      'Not important',
      'Slightly important',
      'Moderately important',
      'Very important',
      'Extremely important'
    ],
    weight: 1
  },
  {
    id: 'v3',
    category: 'values',
    text: 'I value opportunities for creative expression at work.',
    options: [
      'Not important',
      'Slightly important',
      'Moderately important',
      'Very important',
      'Extremely important'
    ],
    weight: 1
  },
  {
    id: 'v4',
    category: 'values',
    text: 'Being in a leadership position is important to me.',
    options: [
      'Not important',
      'Slightly important',
      'Moderately important',
      'Very important',
      'Extremely important'
    ],
    weight: 1
  },
  {
    id: 'v5',
    category: 'values',
    text: 'I want my work to help others and benefit society.',
    options: [
      'Not important',
      'Slightly important',
      'Moderately important',
      'Very important',
      'Extremely important'
    ],
    weight: 1
  },
  {
    id: 'v6',
    category: 'values',
    text: 'Recognition and acknowledgment for my work is important.',
    options: [
      'Not important',
      'Slightly important',
      'Moderately important',
      'Very important',
      'Extremely important'
    ],
    weight: 1
  },

  // Cognitive Style Analysis Questions
  {
    id: 'c1',
    category: 'cognitive',
    text: 'I prefer to analyze problems systematically and logically.',
    options: [
      'Never',
      'Rarely',
      'Sometimes',
      'Often',
      'Always'
    ],
    weight: 1
  },
  {
    id: 'c2',
    category: 'cognitive',
    text: 'I like to brainstorm and generate multiple solutions.',
    options: [
      'Never',
      'Rarely',
      'Sometimes',
      'Often',
      'Always'
    ],
    weight: 1
  },
  {
    id: 'c3',
    category: 'cognitive',
    text: 'I focus on practical, real-world applications.',
    options: [
      'Never',
      'Rarely',
      'Sometimes',
      'Often',
      'Always'
    ],
    weight: 1
  },
  {
    id: 'c4',
    category: 'cognitive',
    text: 'I prefer collaborative problem-solving with others.',
    options: [
      'Never',
      'Rarely',
      'Sometimes',
      'Often',
      'Always'
    ],
    weight: 1
  }
];

export const careerSuggestions: Record<string, any> = {
  'Computer Science': {
    description: 'Design and develop software, systems, and applications',
    keyTraits: ['Analytical', 'Problem-solving', 'Technical'],
    careerPaths: ['Software Engineer', 'Data Scientist', 'Cybersecurity Analyst'],
    averageSalary: '$95,000',
    jobOutlook: 'Excellent (22% growth)'
  },
  'Psychology': {
    description: 'Study human behavior and mental processes',
    keyTraits: ['Empathetic', 'Analytical', 'Communication'],
    careerPaths: ['Clinical Psychologist', 'Counselor', 'Research Psychologist'],
    averageSalary: '$85,000',
    jobOutlook: 'Good (8% growth)'
  },
  'Business Administration': {
    description: 'Manage and lead organizations and teams',
    keyTraits: ['Leadership', 'Strategic', 'Communication'],
    careerPaths: ['Business Manager', 'Consultant', 'Entrepreneur'],
    averageSalary: '$75,000',
    jobOutlook: 'Good (7% growth)'
  },
  'Engineering': {
    description: 'Design and build solutions to technical problems',
    keyTraits: ['Technical', 'Problem-solving', 'Innovative'],
    careerPaths: ['Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer'],
    averageSalary: '$90,000',
    jobOutlook: 'Good (6% growth)'
  },
  'Healthcare': {
    description: 'Provide medical care and improve patient outcomes',
    keyTraits: ['Caring', 'Detail-oriented', 'Scientific'],
    careerPaths: ['Registered Nurse', 'Physician Assistant', 'Healthcare Administrator'],
    averageSalary: '$80,000',
    jobOutlook: 'Excellent (15% growth)'
  },
  'Education': {
    description: 'Teach and develop educational programs',
    keyTraits: ['Patient', 'Communicative', 'Inspiring'],
    careerPaths: ['Teacher', 'Educational Administrator', 'Curriculum Designer'],
    averageSalary: '$60,000',
    jobOutlook: 'Good (5% growth)'
  }
};