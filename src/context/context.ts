import React, { Dispatch } from "react";
import { ResumeData } from "./interfaces";

const resumeData: { state: ResumeData; dispatch?: Dispatch<any> } = {
  state: {
    fullName: "",
    jobTitle: "",
    email: "",
    adress: ""
  }
};

export const ResumeDataContext = React.createContext(resumeData);
