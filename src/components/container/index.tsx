import React, { ReactElement } from "react";

type Props = {
    children: React.ReactNode;
};
export const Container = ({ children }: Props): ReactElement => {
    return <div className="min-h-screen flex flex-col">{children}</div>;
};
