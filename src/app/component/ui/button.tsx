interface IButton {
  onClick: any;
  title?: string;
  addClass: string;
  addDataSet?: string;
  type?: "submit" | "button";
}

const Button: React.FC<IButton> = ({
  onClick,
  title,
  addClass,
  addDataSet,
  type,
}) => {
  return (
    <button
      data-click={addDataSet}
      onClick={onClick}
      className={addClass}
      type={type}
    >
      {title}
    </button>
  );
};
export default Button;
