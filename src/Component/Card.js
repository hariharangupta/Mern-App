import React, { useState, useRef,useEffect } from "react";
import { addReport, getReport } from "./Apis";

function Card({ name }) {
  const [inputFeild, setInputFeild] = useState({ week: "" });
  const [arrayList, setArrayList] = useState([]);
  const [showInputFeild, setShowInputFeild] = useState(false);
console.log(setArrayList)
  const cardRef = useRef();

  const handleReset = () => {
    setInputFeild({ week: "" });
  };
  useEffect(() => {
      getReport();
  }, []);

  

  console.log("vaule", name);
  const handleSubmit = (event) => {
    event.preventDefault();
    arrayList.push(cardRef.current.value);
    //   if (inputFeild !== "") {
    //     let taskDetails = {
    //       value: inputFeild,
    //     };

    //     setArrayList([...arrayList, taskDetails]);
    //   }
    //   arrayList.push(inputFeild);
    //   // addCard(inputFeild);

    handleReset();
    addReport(array);
  };

  let array = {
    month: name,
    week: inputFeild.week
  };


  const showbtn = () => {
    setShowInputFeild(true);
  };

  // const deletetask = (e, id) => {
  //   e.preventDefault();
  //   setArrayList(arrayList.filter((t) => t.id !== id));
  // };

  // const taskCompleted = (e, id) => {
  //   e.preventDefault();
  //   const element = arrayList.findIndex((elem) => elem.id === id);

  //   const newarrayList = [...arrayList];

  //   newarrayList[element] = {
  //     ...newarrayList[element],
  //     isCompleted: true,
  //   };

  //   setArrayList(newarrayList);
  // };

  return (
    <div>
      <div>
        <div className="card m-3 " style={{ width: "15rem" }}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {arrayList !== [] ? (
              <ul className="list-group">
                {arrayList.map((index, id) => (
                  <li
                    className={
                      index.isCompleted
                        ? "text-decoration-line-through list-group-item bg-light text-uppercase "
                        : "list-group-item  text-uppercase "
                    }
                    key={id}
                  >
                    <div>
                      <p> {name} </p>
                      {index}
                    </div>

                    {/* <button
                    className="btn btn-warning mx-2"
                    onClick={(e) => taskCompleted(e, index.id)}
                  >
                    Completed
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={(e) => deletetask(e, index.id)}
                  >
                    Delete
                  </button> */}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {showInputFeild ? (
            <div>
              <input
                value={inputFeild.week}
                ref={cardRef}
                onChange={(e) => setInputFeild({ week: e.target.value })}
                // onChange={ e => setInputFeild(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button className="btn btn-primary my-3 " onClick={handleSubmit}>
                Add Report
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={showbtn}>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
