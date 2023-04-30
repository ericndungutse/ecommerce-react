import "./custom-btn.stlyes.scss";

export default function CustomBtn({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}
