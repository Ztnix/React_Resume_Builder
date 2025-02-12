import InputComponent from "./InputComponent";

export default function AddPersonalDetails({
  personalDetails,
  onShow,
  activeIndex,
  onChange,
}) {
  return (
    <>
      <div className="detailsContainer">
        <button className="inputButtons" onClick={onShow}>
          Personal Details
        </button>
        {activeIndex === 0 && (
          <div className="inputContainer">
            <InputComponent
              label="Full Name"
              placeholder="John Doe"
              onChange={onChange}
              value={personalDetails.name}
              name="name"
            />
            <InputComponent
              label="Email"
              placeholder="exampleEmail@gmail.com"
              onChange={onChange}
              value={personalDetails.email}
              name="email"
            />
            <InputComponent
              label="Phone Number"
              placeholder="555-555-5555"
              onChange={onChange}
              value={personalDetails.phone}
              name="phone"
            />
            <InputComponent
              label="Address"
              placeholder="City, State, Country"
              onChange={onChange}
              value={personalDetails.location}
              name="location"
            />
          </div>
        )}
      </div>
    </>
  );
}
