import "./form-input.styles.scss";

export default function FormInput({ label, handleOnChange, ...otheProps }) {
  return (
    <div className="group">
      <input className="form-input" onClick={handleOnChange} {...otheProps} />
      {label && (
        <label
          className={`${
            otheProps.value.length ? "shrink" : ""
          } form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
}
