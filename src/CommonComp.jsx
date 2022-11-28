// import web from "../src/img/undraw_programming_re_kg9v.svg";
const CommonComp = (props) => {
  return (
    <>
      <section id="home">
        <div className="container h-100 d-flex align-items-center">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 order-2 my-4 my-md-0">
              <h2>{props.heading}</h2>
              <p>
                {props.para}
              </p>
              <button className="btn btn-primary">{props.btn}</button>
            </div>
            <div className="col-md-6 order-md-2 my-5 my-md-0">
              <img className="img-fluid" src={props.img} alt="home-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonComp;
