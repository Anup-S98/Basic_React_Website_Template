import Cards from "./Cards";
import Cdata from "./Cdata";


const Service = () => {
  return (
    <>
      <h1 className="text-center my-3">Technologies</h1>
      <div className="container mb-4">
        <div className="row ">
          <div className="col-lg-10 mx-auto">
            <div className="row g-4">
              {
                Cdata.map((val,index)=>{
                 return <Cards title= {val.title} desc={val.desc} img={val.imgsrc}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
