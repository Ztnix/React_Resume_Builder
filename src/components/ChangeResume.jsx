export default function ChangeResume({ onClick, onClear }) {
  return (
    <>
      <button className="leftSideTopButton" onClick={onClear}>
        Clear Data
      </button>
      <button className="leftSideTopButton" onClick={onClick}>
        Load Default
      </button>
    </>
  );
}
