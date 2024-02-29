import { Route, Routes } from "react-router-dom";
import BasicLayout from "@/layout/BasicLayout";
import Home from "../pages/Home/Home";
import Hero from "../pages/Hero/Hero";
import NotFound from "../pages/NotFound/NotFound";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default PublicRoutes;
