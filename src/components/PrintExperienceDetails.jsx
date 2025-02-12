export default function PrintExperience({ experienceDetails }) {
  return (
    <>
      {experienceDetails
        .filter(
          (exInfo) =>
            exInfo.start ||
            exInfo.end ||
            exInfo.location ||
            exInfo.company ||
            exInfo.position ||
            exInfo.description
        )
        .map((experienceInfo) => (
          <div className="card" key={experienceInfo.id}>
            <div className="leftCard">
              <div className="leftCardTop">
                {experienceInfo.start}
                {experienceInfo.start && experienceInfo.end && (
                  <span> &nbsp; - &nbsp;</span>
                )}
                {experienceInfo.end}
              </div>
              <div className="leftCardBot">{experienceInfo.location}</div>
            </div>
            <div className="rightCard">
              <div className="rightCardTitle">{experienceInfo.company}</div>
              <div className="rightCardSubtitle">{experienceInfo.position}</div>
              <div className="rightCardDesc">{experienceInfo.description}</div>
            </div>
          </div>
        ))}
    </>
  );
}
