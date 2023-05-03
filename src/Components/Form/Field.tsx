import { PropsWithChildren } from "react";


const Field: React.FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      {children}
    </div>
  );
};

export { Field };
