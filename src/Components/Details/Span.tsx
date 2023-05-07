
interface Entries {
  textColor: "Primary 100" | "Primary 500"
  text: string;
}

export function Span({ text,textColor}: Entries) {
  let spanColor

  if (textColor === "Primary 100") spanColor = "text-_primary-100";
  if (textColor === "Primary 500") spanColor = "text-_primary-500";

  return <span className={spanColor}>{text}</span>
}
