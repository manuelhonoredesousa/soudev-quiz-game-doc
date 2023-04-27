import "./index.css";

interface Entries {
  text: string;
}

export function Link({ text }: Entries) {
  return <a href="#" className="link text-_primary-100 hover:text-_primary-500"> {text} </a>
}
