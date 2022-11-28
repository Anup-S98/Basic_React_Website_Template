import web from "../src/img/undraw_programming_re_kg9v.svg";
import CommonComp from "./CommonComp";
const Home = () => {
  return (
    <>
      <CommonComp
        heading="Welcome To First React Website"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit!"
        btn="Get Started"
        img={web}
      />
    </>
  );
};

export default Home;
