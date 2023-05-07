interface LinkProps {
  link: string;
}

export function Link({ link }: LinkProps) {
  return (
    <a href={link} target="_blank" className=" text-_primary-500">
      Modo de uso: {link}
    </a>
  );
}
