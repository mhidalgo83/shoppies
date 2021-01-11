const Button = (props) => {
  return (
    <button className={`btn ${props.className}`} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
