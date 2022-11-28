import { NavLink } from "react-router-dom";
// import web from "../src/img/.png";
const Cards = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.desc}
            </p>
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
