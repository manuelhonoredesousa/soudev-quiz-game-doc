interface Entries {
  text: string;
  labelFor: string;
}

export function Label({ labelFor, text }: Entries) {
  return (
    <label className="text-_primary-100 font-bold" htmlFor={labelFor}>
      {text}
    </label>
  );
}
