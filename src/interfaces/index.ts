export interface ResumeData {
  fullName: string;
  jobTitle: string;
  email: string;
  adress: string;
  skills?: Skill[];
  workExpreiences: WorkExpreience[];
  picture: any;
  pictureSize: number;
}

interface Skill {
  skill: string;
  percent: number;
}

export interface WorkExpreience {
  position: string;
  since: string;
  to: string;
  description: string;
}

export interface Action {
  type?: string;
  payload?: any;
}
