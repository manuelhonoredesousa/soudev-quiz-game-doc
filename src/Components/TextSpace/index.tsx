interface Entries {
  text: string;
}

export function TextSpace({ text }: Entries) {
// export function Text(prop) {
  // return <p className="text-justify my-4 font-medium">{text}</p>;
  return <p className="my-4 font-medium">{text}</p>;
}
