export interface ResumeData {
  fullName: string;
  jobTitle: string;
  email: string;
  adress: string;
  skills?: Skill[];
  workExpreiences: workExpreience[];
}

interface Skill {
  skill: string;
  percent: number;
}

interface workExpreience {
  jobTitle: string;
  since: string;
  to: string;
  jobDescription: string;
}

export interface Action {
  type?: string;
  payload?: any;
}
