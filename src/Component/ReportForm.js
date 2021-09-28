import React, {useState} from 'react'
import { addReport } from "./Apis";

const ReportForm = () => {
    const [report, setreport] = useState("");


    const onValueChange = (e) => {
        console.log(e.target.value);
        setreport({...report, [e.target.name]: e.target.value})
    }

    
    const addUserDetails = async() => {
        await addReport(report)
    }


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
              <form onSubmit={addUserDetails}>
                <div className="input-group mb-3">
                  <input
                    
                    name='report'
                     value={report} 
                    onChange={(e) => onValueChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="Username"
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
      
    </div>
  );
}

export default ReportForm
