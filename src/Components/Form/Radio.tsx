interface RadioProps {
  text: numberOrString;
  id: string;
  group: string;
}

import { numberOrString } from "../../Routes/Documentation";
import "./Radio.css";

export function Radio({ id, text, group }: RadioProps) {
  return (
      <label htmlFor={id}>
        <div className="p-2 rounded-lg my-4 bg-_primary-100 border-2 border-_primary-100 hover:border-white">
          <input hidden type="radio" id={id} name={group} value={text}/>
          <div className="flex gap-2 items-center">
            <div className=" w-4 h-4 bg-white rounded-full border-2  check-radio"></div>{id.replace("_"," ")}</div>
            <div className="ml-6">{text}</div>
        </div>
      </label>
  );
}
