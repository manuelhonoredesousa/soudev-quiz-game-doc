import { useRef, useState } from "react";

interface RadioProps {
  text: string;
  id: string;
  group: string;
  handleRadioClick: () => void;
}

export function Radio({
  id,
  text,
  group,
  handleRadioClick = () => {},
}: RadioProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  function clicked(e: React.MouseEvent<HTMLElement>) {
    document.querySelectorAll("input").forEach((input) => input.removeAttribute("checked"));
    (e.target as HTMLDivElement).children[0].setAttribute("checked", "true");
    // setIsActive(true)
    handleRadioClick();
  }

  return (
    <div
      className="p-2 rounded-lg flex gap-2 items-center my-4 bg-_primary-100 border-2 border-_primary-100 hover:border-white"
      onClick={clicked}
    >
      <div className="w-4 h-4 bg-white rounded-full border-2 hover:bg-_primary-500"></div>
      <input type="radio" id={id} name={group} value={text}  />
      {text}
    </div>
  );
}
