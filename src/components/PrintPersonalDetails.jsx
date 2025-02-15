import "/src/styles/PrintHeader.css";

export default function PrintPersonalDetails({ personalDetails }) {
  return (
    <>
      <div className="headerName">{personalDetails.name}</div>
      <div className="headerExpertise">{personalDetails.expertise}</div>
      <div className="headerDetails">
        <div className="email">{personalDetails.email}</div>
        <div className="phone">{personalDetails.phone}</div>
        <div className="location">{personalDetails.location}</div>
      </div>
      <div className="headerDescription">{personalDetails.description}</div>
    </>
  );
}
