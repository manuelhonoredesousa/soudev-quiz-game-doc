interface Entries {
  text: string;
}

export function TextSpace({ text }: Entries) {
  return <p className="my-4 font-medium">{text}</p>;
}
