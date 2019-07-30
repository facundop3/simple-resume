import React, { useState } from "react";
import "./App.css";
import Sheet from "./components/resume/Sheet";
import SideBar from "./components/resume/SideBar";
import SkillsSlider from "./components/resume/SkillsSlider";
import Form from "./components/form/Form";
import { ResumeData } from "./context/interfaces";
import styled from "styled-components";

const NameAndJobTitleContainer = styled.div`
  padding: 1.5em;
  text-align: left;
`;

const App: React.FC = () => {
  const [formData, setFormData] = useState<ResumeData>({
    fullName: "",
    jobTitle: "",
    email: "",
    adress: ""
  });

  const handleChange = (name: keyof ResumeData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [name]: event.target.value });
  };
  return (
    <div className="App">
      <Sheet bgColor="red">
        <SideBar bgColor="blue" width={35}>
          <h4>{formData.email}</h4>
          <SkillsSlider skill="Eat mandarines" percent={100} />
        </SideBar>
        <NameAndJobTitleContainer>
          <h1>{formData.fullName}</h1>
          <h4>{formData.jobTitle}</h4>
        </NameAndJobTitleContainer>
      </Sheet>
      <Form formData={formData} handleChange={handleChange} />
    </div>
  );
};

export default App;
