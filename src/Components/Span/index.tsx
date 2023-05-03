interface Entries {
  text: string| undefined;
}

export function Span({ text }: Entries) {
  return <span className="text-red-700 text-sm">{text}</span>;
}
