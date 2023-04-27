import "./index.css";

interface Entries {
  type: "primary" | "secondary" | "error";
  text: string;
}

export function Button({ text, type }: Entries) {

  return (
    
    <button className="button font-bold bg-_primary-100 hover:bg-_primary-500"  >{text}</button>
  );
}

