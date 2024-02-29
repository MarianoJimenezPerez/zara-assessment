import "./style.scss";

import CoverExample from "@/assets/cover_example.jpg";
import HeartIcon from "@/assets/heart_icon.svg";

const Cover: React.FC = () => {
  return (
    <div className="cover">
      <article className="cover__wrapper">
        <img src={CoverExample} alt="" />
        <div className="cover__wrapper__desc">
          <h1>ADAM WARLOCK</h1>
          <p>
            Created by the Enclave to be part of a race of super humans who
            would abolish war, illness, and crime, Adam Warlock is a unique
            being who uses his immense and formidable powers to safeguard the
            universe.
          </p>
          <img src={HeartIcon} alt="" />
        </div>
      </article>
    </div>
  );
};
export default Cover;
