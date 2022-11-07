import { FC, ReactElement } from "react";
import MainLayout from "../../layout/main-layout";
import MainForm from "../../forms/main-form";

const Home: FC = (): ReactElement => {
  return (
    <MainLayout>
      <MainForm />
    </MainLayout>
  );
};

export default Home;
