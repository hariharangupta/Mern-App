import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
// import { addReport, getReport } from "./Apis";

const ModalForm = () => {
  const [names, setNames] = useState({month:""});
  const [condition, setCondition] = useState(false);
  const [users, setUsers] = useState([]);


  let renderCard = users.map((value, index) => (
    <div className="d-flex"  key = {index}>
      <Card name={value}  />
    </div>
  ));

  const refName = useRef();

  const handleReset = () => {
    setNames({month:""});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    users.push(refName.current.value);
    console.log("users", users)
    // addReport(names)
    handleReset();
    setCondition(!condition);
    console.log("names", names.month);
    
  };



  useEffect(() => {
    // getReport();
  }, [condition]);

  return (
    <div>
      <button
        type="button"
        className="btn btn-lg btn-outline-dark mt-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Report
      </button>

      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    ref={refName}
                    value={names.month}
                    onChange={(e) => setNames({month:e.target.value})}
                    type="text"
                    className="form-control"
                    placeholder="Report"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <button
                  data-bs-dismiss="modal"
                  type="submit"
                  className="btn btn-primary"
                >
                  Add report
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group">
   
          <div className="col d-flex mt-2">{renderCard}
          </div>
      </ul>
    </div>
  );
};

export default ModalForm;
