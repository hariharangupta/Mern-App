import React, { useState, useEffect } from "react";
import { getReport, deleteReport, getReportById } from "./Apis";
import { useHistory, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const AllReport = () => {
  const [reports, setReports] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getAllReports();
  }, []);

  const getAllReports = async () => {
    let response = await getReport();
    setReports(response.data);
    console.log("set", response.data);
  };



  const deleteReportBtn = async (id) => {
    await deleteReport(id);
    getAllReports();
  };
  const editReportBtn =  () => {
    const some =  getReport(id);
    console.log("hello", some);
    history.push("./editreport");
  };

  return (
    <div className="container w-50 m-auto border border-dark">
      <h1>All Reports</h1>

      <div className="row">
        {reports.map((report, index) => (
          <div key={index} className = "">
            <div>
            <table className="table table-dark table-striped mt-2">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Month</th>
                  <th scope="col">Week</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{report._id}</th>
                      <th>{report.month}</th>
                        <td>{report.week}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2"
                      // component={Link} to={`/edit/${report._id}`}
                      onClick={editReportBtn}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => deleteReportBtn(report._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                
              </tbody>
            </table>
            </div>
            {/* -------------------------- */}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReport;
