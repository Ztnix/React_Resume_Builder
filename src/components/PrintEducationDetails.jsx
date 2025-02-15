import "/src/styles/PrintEntries.css";

export default function PrintEducationDetails({ educationDetails }) {
  return (
    <>
      {educationDetails
        .filter(
          (educationInfo) =>
            educationInfo.start ||
            educationInfo.end ||
            educationInfo.location ||
            educationInfo.school ||
            educationInfo.degree
        )
        .map((educationInfo) => (
          <div className="card" key={educationInfo.id}>
            <div className="topCard">
              <div className="topLeftCard">
                <div>
                  <span>{educationInfo.school}</span>
                  {educationInfo.school && educationInfo.location && (
                    <span>&nbsp;|&nbsp;</span>
                  )}
                  {educationInfo.location}
                </div>
                <div>{educationInfo.degree}</div>
              </div>
              <div className="topRightCard">
                {educationInfo.start}
                {educationInfo.start && educationInfo.end && (
                  <span>&nbsp;-&nbsp;</span>
                )}
                {educationInfo.end}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

// <div className="card" key={educationInfo.id}>
//   <div className="leftCard">
//     <div className="leftCardTop">
//       {educationInfo.start}
//       {educationInfo.start && educationInfo.end && (
//         <span> &nbsp; - &nbsp;</span>
//       )}
//       {educationInfo.end}
//     </div>
//     <div className="leftCardBot">{educationInfo.location}</div>
//   </div>
//   <div className="rightCard">
//     <div className="rightCardTitle">{educationInfo.school}</div>
//     <div className="rightCardDesc">{educationInfo.degree}</div>
//   </div>
// </div>
