import React, { PropsWithChildren } from "react";

interface DetailsGroupProps extends PropsWithChildren {
  title: string;
}

export const Group: React.FunctionComponent<DetailsGroupProps> = ({
  children,
  title,
}) => {
  return (
    <details>
      <summary className="text-_primary-100 mb-4">{title}</summary>
      <div className="ml-10">
        {children}
        <hr className="mb-8 mt-4" />
      </div>
    </details>
  );
};
