import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sheet from "./components/resume/Sheet";
import SideBar from "./components/resume/SideBar";
import SkillsSlider from "./components/resume/SkillsSlider";
import Form from "./components/form/Form";

const App: React.FC = () => {
  return (
    <div className="App">
      <Sheet bgColor="red">
        <SideBar bgColor="blue" width={35}>
          <SkillsSlider skill="Eat mandarines" percent={100} />
        </SideBar>
      </Sheet>
      <Form />
    </div>
  );
};

export default App;
