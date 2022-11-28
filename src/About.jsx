import CommonComp from "./CommonComp";
import web from "../src/img/undraw_online_re_x00h.svg";

const About = () => {
  return (
    <>
      <CommonComp
        heading="Welcome To About Section React Website"
        para="Click on the button to know more"
        btn="Get Info"
        img={web}
      />
    </>
  );
};

export default About;
