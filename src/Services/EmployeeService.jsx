import axios from 'axios';//axios object
const REST_API_BASE_URL='http://localhost:8081/api/employees';

// export const listEmployees=()=>{
//     return axios.get(REST_API_BASE_URL);
// }

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee=(employee) => axios.post(REST_API_BASE_URL,employee);
