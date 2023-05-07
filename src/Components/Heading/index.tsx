interface Entries {
  text: string;
  headType?: "h2";
}

export function Heading({ text, headType }: Entries) {
  if (headType == "h2")
    return (
      <h2 className="text-3xl font-bold text-_primary-100 mb-4">{text}</h2>
    );
  else
    return (
      <h1 className="text-5xl font-bold text-_primary-100 mb-4">{text}</h1>
    );
}
