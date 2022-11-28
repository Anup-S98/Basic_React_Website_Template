import { useState } from "react";

const Contact = () => {
  const [input, setinput] = useState({
    Name: "",
    Email: "",
    Add: "",
    City: "",
    Zip: "",
  });

  const InputEvent = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setinput((preval) => {
      return {
        ...preval,
        [name]: value,
      }
    });
    
  };

  const SubForm=(e)=>{
    // e.preventdefault();
    alert(`My full name is ${input.Name} and my email is ${input.Email} and I live at ${input.Add}, ${input.City}-${input.Zip}`);
    // setinput("");
  }
  return (
    <>
      <div className="container mt-5">
        <form className="row g-3" onSubmit={SubForm}>
          <div className="col-md-5 mx-auto">
            <div className="row">
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  onChange={InputEvent}
                  name="Email"
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPassword4" className="form-label">
                  Full Name
                </label>
                <input
                  name="Name"
                  onChange={InputEvent}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  name="Add"
                  onChange={InputEvent}
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  name="City"
                  onChange={InputEvent}
                  type="text"
                  className="form-control"
                  id="inputCity"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input
                  name="Zip"
                  onChange={InputEvent}
                  type="text"
                  className="form-control"
                  id="inputZip"
                />
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
