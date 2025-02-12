import { useState } from "react";
import { v4 as uuid } from "uuid";
import ChangeResume from "./ChangeResume.jsx";
import AddPersonalDetails from "./AddPersonalDetails.jsx";
import AddEducationDetails from "./AddEducationDetails.jsx";
import AddExperienceDetails from "./AddExperienceDetails.jsx";
import Resume from "./Resume.jsx";
import {
  exampleEducationData,
  exampleExperienceData,
  examplePersonalData,
} from "./ExampleData.jsx";
import "/src/styles/App.css";

export default function App() {
  const [personalDetails, setPersonalDetails] = useState(examplePersonalData);
  const [educationDetails, setEducationDetails] =
    useState(exampleEducationData);
  const [experienceDetails, setExperienceDetails] = useState(
    exampleExperienceData
  );
  const [activeIndex, setActiveIndex] = useState(false);
  const [selected, setSelected] = useState({});
  const [backUp, setBackUp] = useState({});

  function handleReset() {
    setPersonalDetails(examplePersonalData);
    setEducationDetails(exampleEducationData);
    setExperienceDetails(exampleExperienceData);
  }

  function handleClear() {
    setPersonalDetails({});
    setEducationDetails([]);
    setExperienceDetails([]);
  }

  function handleActiveIndex(n) {
    activeIndex === n ? setActiveIndex(false) : setActiveIndex(n);
  }

  const handleObjectSelection = (index) => {
    setSelected(index);
    console.log(index);
  };

  const handleCreateBackUp = (obj) => {
    setBackUp(obj);
  };

  const handleEduCancel = () => {
    const updatedData = educationDetails.map((obj) =>
      obj.id === backUp.id ? backUp : obj
    );
    setEducationDetails(updatedData);
  };

  const handleExCancel = () => {
    const updatedData = experienceDetails.map((obj) =>
      obj.id === backUp.id ? backUp : obj
    );
    setExperienceDetails(updatedData);
  };

  function handlePersonalDetailsChange(e) {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  }

  function handleEducationDetailsChange(e) {
    setEducationDetails((prevItems) =>
      prevItems.map((item, i) =>
        i === selected ? { ...item, [e.target.name]: e.target.value } : item
      )
    );
  }

  function handleExperienceDetailsChange(e) {
    setExperienceDetails((prevItems) =>
      prevItems.map((item, i) =>
        i === selected ? { ...item, [e.target.name]: e.target.value } : item
      )
    );
  }

  function handleEduDelete() {
    let updatedObj = [...educationDetails];
    updatedObj.splice(selected, 1);
    setEducationDetails(updatedObj);
  }

  function handleExDelete() {
    let updatedObj = [...experienceDetails];
    updatedObj.splice(selected, 1);
    setExperienceDetails(updatedObj);
  }

  function handleNewEduEntry() {
    let newObj = {
      school: "",
      degree: "",
      start: "",
      end: "",
      location: "",
      id: uuid(),
    };
    setEducationDetails([...educationDetails, newObj]);
  }

  const handleNewExEntry = () => {
    let newObj = {
      company: "",
      position: "",
      start: "",
      end: "",
      location: "",
      description: "",
      id: uuid(),
    };
    setExperienceDetails([...experienceDetails, newObj]);
  };

  return (
    <div className="main">
      <div className="leftSide">
        <div className="leftSideTop">
          <ChangeResume onClick={handleReset} onClear={handleClear} />
        </div>
        <div className="leftSideBot">
          <AddPersonalDetails
            personalDetails={personalDetails}
            activeIndex={activeIndex}
            onShow={() => handleActiveIndex(0)}
            onChange={handlePersonalDetailsChange}
          />
          <AddEducationDetails
            activeIndex={activeIndex}
            onShow={() => handleActiveIndex(1)}
            onChange={handleEducationDetailsChange}
            onSelection={handleObjectSelection}
            educationDetails={educationDetails}
            index={selected}
            onBackUp={handleCreateBackUp}
            onCancel={handleEduCancel}
            onDelete={handleEduDelete}
            onNewEntry={handleNewEduEntry}
          />
          <AddExperienceDetails
            activeIndex={activeIndex}
            onShow={() => handleActiveIndex(2)}
            onChange={handleExperienceDetailsChange}
            onSelection={handleObjectSelection}
            experienceDetails={experienceDetails}
            index={selected}
            onBackUp={handleCreateBackUp}
            onCancel={handleExCancel}
            onDelete={handleExDelete}
            onNewEntry={handleNewExEntry}
          />
        </div>
      </div>
      <div className="rightSide">
        <Resume
          personalDetails={personalDetails}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
        />
      </div>
    </div>
  );
}
