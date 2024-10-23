import { FC, ReactNode } from "react";
import { PageContainer } from "./Container.styled";

interface IProps {
  children: ReactNode;
}

export const Container: FC<IProps> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};


