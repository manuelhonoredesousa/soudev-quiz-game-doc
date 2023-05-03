interface Entries {
  text: string;
  onClickLink?: () => void;
}

export function Link({ text, onClickLink = () => {} }: Entries) {
  return (
    <a
      href="#"
      className="link font-medium text-_primary-100 hover:text-_primary-500"
      onClick={() => onClickLink()}
    >
      {text}
    </a>
  );
}
