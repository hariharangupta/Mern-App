import React, {useState, useEffect} from 'react';
import { getReport, editReport, getReportById } from './Apis';
import { useParams, useHistory } from 'react-router-dom';

const EditReport = () => {

  const [editMonth, setEditMonth] = useState({month:""});
  const [editWeek, setEditWeek] = useState({week:""});
  
  const { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    loadEditReport()
}, []);


let editArr = {
  month:editMonth,
  week:editWeek
}
  const loadEditReport = async(id) => {
    const response = await getReportById(id);
    console.log("data",response.data);
}
const editReportDetails = async() => {
  const response = await editReport(0, editArr);
  console.log("edit", response);
  history.push('/allreports');
}

// const onValueChange = (e) => {
//   console.log(e.target.value);
//   setEditReportCard({...editReportCard, [e.target.name]: e.target.value})
// }

  return (
    <div>
      <div className="input-group m-auto  w-25">
                  <input
                    value={editMonth.month}
                    onChange={(e) =>setEditMonth({month: e.target.value})}
                    type="text"
                    className="form-control my-3 "
                    placeholder="month "
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group m-auto  w-25">
                  <input
                    value={editMonth.week}
                    onChange={(e) =>setEditWeek({week: e.target.value})}
                    type="text"
                    className="form-control "
                    placeholder="week "
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <button
                  // data-bs-dismiss="modal"
                  type="submit"
                  className="btn btn-primary mt-3"
                  onClick={ editReportDetails}
                >
                  Add report
                </button>
    </div>
  )
}

export default EditReport
