import react,{ useState } from 'react'
import {createEmployee} from '../Services/EmployeeService'

import{useNavigate} from 'react-router-dom'
const EmployeeComponent =()=>{

    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname] =useState('')
    const [email,setemail]=useState('')

     const navigator =  useNavigate();

    // function handleFirstname(event){
    //  setFirstname(event.target.value)
    // }
    
    

    // function handleLastname(event){
    // setLastname(event.target.value)
    // }
    
    

    // function handleEmail(event){
    // setemail(event.target.value)
    // }
    // const handleFirstname=(event) => setFirstname(event.target.value)
    // const handleLastname=(event) => setLastname(event.target.value)
    // const handleEmail=(event) =>  setemail(event.target.value)
    

    function saveEmployee(event){
        event.preventDefault();

        const employee={firstname,lastname,email}
        console.log(employee)
        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
    }
    return(
        <div className="container">
            <br/> <br/>
            <div className="row">
                <div className="card col-md-6  offset-md-3 offset-md-3">
                    <h2 className="text-center">Add Employee </h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-3 text-start">
                                <label className="form-label"> First Name:</label>
                                <input type="text"
                                       placeholder="Enter employee FirstName"  
                                       name="firstName" 
                                       value={firstname}
                                       className="form-control"
                                    //    onChange={handleFirstname}
                                    onChange={(event) => setFirstname(event.target.value)}
                                     />
                                        
            
                            </div>

                            <div className="form-group mb-3 text-start">
                                <label className="form-label">Last Name:</label>
                                <input type="text"
                                       placeholder="Enter employee LastName"
                                       name="lastName"
                                       value={lastname}
                                       className="form-control"
                                    //    onChange={handleLastname}
                                          onChange={(event) => setLastname(event.target.value)}
                                       />
                                
                            </div>

                            <div className="form-group mb-3 text-start">
                                <label className="form-label">Email:</label>
                                <input type="text"
                                       placeholder="Enter employee Email"
                                       name="email"
                                       value={email}
                                       className="form-control"
                                    //    onChange={handleEmail}
                                    onChange={(event) =>  setemail(event.target.value)}
                                       />
                                
                            </div>

                            <button className="btn btn-success" onClick={saveEmployee}>Submit

                            </button>
                        </form>

                    </div>
                </div>

            </div>
            
        </div>


        
        
    );
}
export default EmployeeComponent;