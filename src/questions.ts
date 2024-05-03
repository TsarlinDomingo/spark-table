export type Question = {
  id: number;
  icon: string;
  prompt: string;
};

export const questions: Question[] = [
  {
    id: 1,
    icon: '💢',
    prompt: 'What makes you angrier than it perhaps should?',
  },
  {
    id: 2,
    icon: '🧑‍⚖️',
    prompt: 'What are your attitudes to authority, and what shaped them, do you think?',
  },
  {
    id: 3,
    icon: '🍀',
    prompt: 'What good luck have you had?'
  },
  {
    id: 4,
    icon: '🏳️‍🌈',
    prompt: 'On a good day, for what can you legitimately be proud of yourself?',
  },
  {
    id: 5,
    icon: '😔',
    prompt: 'How have you let people down?',
  },
  {
    id: 6,
    icon: '🙈',
    prompt: 'What are you ashamed of in yourself?',
  },
  {
    id: 7,
    icon: '👩‍❤‍👨',
    prompt: 'If you had to redesign the institution of marriage, what would you alter?',
  },
  {
    id: 8,
    icon: '🪞',
    prompt: 'When you look in the mirror, what are you most afraid of seeing in yourself?',
  },
  {
    id: 9,
    icon: '🚀',
    prompt: 'What are your remaining ambitions?',
  },
  {
    id: 10,
    icon: '🛠️',
    prompt: 'What would you want to tell your child about the world of work?',
  }
];