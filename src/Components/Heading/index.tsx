interface Entries {
  text: string;
}

export function Heading({ text }: Entries) {
  return <h1 className="text-5xl font-bold text-_primary-100 mb-4">{text}</h1>;
}
