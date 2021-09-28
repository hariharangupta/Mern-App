import axios from 'axios';

const reportUrl = 'http://localhost:5000';



// get all reports
export const getReport = async (id) => {
    id = id || '';
    return await axios.get(`${reportUrl}/all/${id}`);
}

// add report
export const addReport = async (report) => {
    return await axios.post(`${reportUrl}/addreport`, report);
}

// // //  get report by id
export const getReportById = async (id) => {
    id = id || '';
    return await axios.get(`${reportUrl}/edit/${0}`);
}

// edit report
export const editReport = async (id, report) => {
    return await axios.put(`${reportUrl}/edit/${0}`, report)
}

// delete report
export const deleteReport = async (id) => {
    return await axios.delete(`${reportUrl}/delete/${id}`);
}




// card apis

// export const addCard = async (card) => {
//     return await axios.post(`${reportUrl}/addcard`, card);
// }

// // get all reports
// export const getCard = async (id) => {
//     id = id || '';
//     return await axios.get(`${reportUrl}/allcard ${id}`);
// }