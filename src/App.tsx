import React, { useState } from "react";
import "./App.css";
import Sheet from "./components/resume/Sheet";
import SideBar from "./components/resume/SideBar";
import SkillsSlider from "./components/resume/SkillsSlider";
import ExperienceCard from "./components/resume/ExperienceCard";
import Form from "./components/form/Form";
import { ResumeData } from "./interfaces";
import styled from "styled-components";

const NameAndJobTitleContainer = styled.div`
  padding: 1.5em;
  text-align: left;
`;

const ExperienceContainer = styled.div`
  padding: 1.5em;
`;

const ResumePicture = styled.div`
  background-image: url(${(props: { picture: any }) => props.picture});
  height: 250px;
  width: 100%;
  background-color: red;
  background-position: center;
`;

const App: React.FC = () => {
  const [formData, setFormData] = useState<ResumeData>({
    fullName: "",
    jobTitle: "",
    email: "",
    adress: "",
    workExpreiences: [],
    picture: {}
  });
  const handleImageChange = (e: any): any => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFormData({
        ...formData,
        picture: {
          file,
          imagePreviewUrl: reader.result
        }
      });
    };

    reader.readAsDataURL(file);
  };

  const handleChange = (name: keyof ResumeData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  return (
    <div className="App">
      <Sheet bgColor="#ccc">
        <SideBar bgColor="#16151c" width={35} color="white">
          <ResumePicture picture={formData.picture.imagePreviewUrl} />
          <h4>{formData.email}</h4>
          <SkillsSlider skill="Eat mandarines" percent={100} />
        </SideBar>
        <ExperienceContainer>
          <NameAndJobTitleContainer>
            <h1>{formData.fullName}</h1>
            <h4>{formData.jobTitle}</h4>
          </NameAndJobTitleContainer>
          {formData.workExpreiences && (
            <React.Fragment>
              <h4 style={{ textAlign: "left" }}>Experience</h4>
              <ExperienceCard />
            </React.Fragment>
          )}
        </ExperienceContainer>
      </Sheet>
      <Form
        formData={formData}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
};

export default App;
