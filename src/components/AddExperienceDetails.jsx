import InputComponent from "./InputComponent";
import { useState } from "react";

export default function AddExperienceDetails({
  onShow,
  activeIndex,
  experienceDetails,
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
          Experience
        </button>
        {activeIndex === 2 &&
          (!isActive ? (
            <>
              <div className="listContainer">
                {experienceDetails.map((ex, index) => (
                  <button
                    key={ex.id}
                    onClick={() => {
                      handleOpen();
                      onSelection(index);
                      onBackUp(ex);
                    }}
                  >
                    {ex.company ? ex.company : "Add New Entry"}
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
                label="Company Name"
                placeholder="Generic Company Name"
                onChange={onChange}
                value={experienceDetails[index].company}
                name="company"
              />
              <InputComponent
                label="Position"
                placeholder="Social Studies"
                onChange={onChange}
                value={experienceDetails[index].position}
                name="position"
              />
              <InputComponent
                label="Start"
                placeholder="2020"
                onChange={onChange}
                value={experienceDetails[index].start}
                name="start"
              />
              <InputComponent
                label="End"
                placeholder="2025"
                onChange={onChange}
                value={experienceDetails[index].end}
                name="end"
              />
              <InputComponent
                label="Location"
                placeholder="City, State, Country"
                onChange={onChange}
                value={experienceDetails[index].location}
                name="location"
              />
              <InputComponent
                label="Description"
                placeholder="City, State, Country"
                onChange={onChange}
                value={experienceDetails[index].description}
                name="description"
                type="textarea"
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
