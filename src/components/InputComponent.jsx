import "/src/styles/Inputs.css";

export default function InputComponent({
  label,
  onChange,
  value,
  placeholder,
  name,
  type,
}) {
  return (
    <>
      {!type ? (
        <div className="input">
          <div className="inputLabel">{label}</div>
          <input
            type="text"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            name={name}
          />
        </div>
      ) : (
        <div className="input">
          <div className="inputLabel">{label}</div>
          <textarea
            rows={5}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            name={name}
          />
        </div>
      )}
    </>
  );
}
