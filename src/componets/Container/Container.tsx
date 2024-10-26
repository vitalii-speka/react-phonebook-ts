import { FC } from "react";
import { PageContainer } from "./Container.styled";
import { IPropsChildren } from "interface-ts/IProps";


export const Container: FC<IPropsChildren> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};


