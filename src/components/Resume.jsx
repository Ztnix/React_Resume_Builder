import PrintPersonalDetails from "./PrintPersonalDetails.jsx";
import PrintExperienceDetails from "./PrintExperienceDetails.jsx";
import PrintEducationDetails from "./PrintEducationDetails.jsx";
import "/src/styles/Resume.css";

export default function Resume({
  personalDetails,
  educationDetails,
  experienceDetails,
}) {
  return (
    <>
      <div className="header">
        <PrintPersonalDetails personalDetails={personalDetails} />
      </div>
      <div className="resumeBody">
        <div className="resumeSubsectionContainer">
          <div className="resumeHeader">Education</div>
          <div className="resumeEntries">
            <PrintEducationDetails educationDetails={educationDetails} />
          </div>
        </div>
        <div className="resumeSubsectionContainer">
          <div className="resumeHeader">Profesional Experience</div>
          <div className="resumeEntries">
            <PrintExperienceDetails experienceDetails={experienceDetails} />
          </div>
        </div>
      </div>
    </>
  );
}
