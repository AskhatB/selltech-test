import { FC, ReactElement } from "react";

interface MainLayoutProps {
  children: ReactElement | ReactElement[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }): ReactElement => {
  return <div>{children}</div>;
};

export default MainLayout;
