export interface ResumeData {
  fullName: string;
  jobTitle: string;
  email: string;
  adress: string;
  skills?: Skill[];
}

interface Skill {
  skill: string;
  percent: number;
}

export interface Action {
  type?: string;
  payload?: any;
}
