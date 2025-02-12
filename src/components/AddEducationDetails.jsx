import InputComponent from "./InputComponent";
import { useState } from "react";

export default function AddEducationDetails({
  onShow,
  activeIndex,
  educationDetails,
  onChange,
  onSelection,
  index,
  onBackUp,
  onCancel,
  onDelete,
  onNewEntry,
}) {
  const [isActive, setIsActive] = useState(false);

  function handleOpen() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="detailsContainer">
        <button className="inputButtons" onClick={onShow}>
          Education
        </button>
        {activeIndex === 1 &&
          (!isActive ? (
            <>
              <div className="listContainer">
                {educationDetails.map((edu, index) => (
                  <button
                    key={edu.id}
                    onClick={() => {
                      handleOpen();
                      onSelection(index);
                      onBackUp(edu);
                    }}
                  >
                    {edu.degree ? edu.degree : "Add New Entry"}
                  </button>
                ))}
              </div>
              <div className="listContainerBot">
                <button className="addEntryBtn" onClick={onNewEntry}>
                  Add Entry
                </button>
              </div>
            </>
          ) : (
            <div className="inputContainer">
              <InputComponent
                label="School"
                placeholder="Generic University"
                onChange={onChange}
                value={educationDetails[index].school}
                name="school"
              />
              <InputComponent
                label="Degree"
                placeholder="Social Studies"
                onChange={onChange}
                value={educationDetails[index].degree}
                name="degree"
              />
              <InputComponent
                label="Start"
                placeholder="2020"
                onChange={onChange}
                value={educationDetails[index].start}
                name="start"
              />
              <InputComponent
                label="End"
                placeholder="2025"
                onChange={onChange}
                value={educationDetails[index].end}
                name="end"
              />
              <InputComponent
                label="Location"
                placeholder="City, State, Country"
                onChange={onChange}
                value={educationDetails[index].location}
                name="location"
              />
              <div className="inputOptionsButtons">
                <button
                  className="deleteBtn"
                  onClick={() => {
                    onDelete();
                    handleOpen();
                  }}
                >
                  Delete Entry
                </button>
                <div className="optionsRight">
                  <button
                    className="cancelBtn"
                    onClick={() => {
                      handleOpen();
                      onCancel();
                    }}
                  >
                    Cancel
                  </button>
                  <button className="applyBtn" onClick={handleOpen}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
