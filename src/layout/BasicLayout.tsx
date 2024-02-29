import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default BasicLayout;
