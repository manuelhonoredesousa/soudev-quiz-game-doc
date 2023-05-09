import "./index.css";

interface Entries {
  buttonType: "primary" | "secondary" | "error";
  type?: 'button' | 'reset' | 'submit';
  textColor?: "black" | "gray-200" | "white";
  text: string;
  onClickButton?: () => void;
}

export function Button({ text, buttonType, type, textColor, onClickButton = () => {}, ...rest}: Entries) {
  let btnColorStyle;
  if (buttonType === "primary") btnColorStyle = "bg-_primary-100 hover:bg-_primary-500";
  if (buttonType === "secondary") btnColorStyle = "bg-_primary-700 hover:bg-_primary-500";
  if (buttonType === "error") btnColorStyle = "bg-_error-500 hover:bg-_error-600";

  textColor = textColor ? textColor : "white";

  return (
    <button
      className={btnColorStyle + ` button text-${textColor} rounded-md font-bold`}
      type={type}
      onClick={()=> onClickButton()}
      {...rest}
    >
      {text}
    </button>
  );
}
