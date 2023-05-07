import { PropsWithChildren } from "react";
  
  export const Text: React.FunctionComponent<PropsWithChildren> = ({children}) => {
  return <p className="my-4">{children}</p>
}