import react,{ useState } from 'react'

const EmployeeComponent =()=>{

    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname] =useState('')
    const [email,setemail]=useState('')

    function handleFirstname(event){
        setFirstname(event.target.value)
    }

    function handleLastname(event){
        setLastname(event.target.value)
    }

    function handleEmail(event){
        setemail(event.target.value)
    }

    function saveEmployee(event){
        event.preventDefault();

        const employee={firstname,lastname,email}
        console.log(employee)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="card ">
                    <h2 className="text-center">Add Employee </h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-3">
                                <label className="form-label"> First Name:</label>
                                <input type="text"
                                       placeholder="Enter employee FirstName"  
                                       name="firstName" 
                                       value={firstname}
                                       className="form-control"
                                       onChange={handleFirstname}
                                     />
                                        
            
                            </div>

                            <div className="form-group mb-3">
                                <label className="form-label">Last Name:</label>
                                <input type="text"
                                       placeholder="Enter employee LastName"
                                       name="lastName"
                                       value={lastname}
                                       className="form-control"
                                       onChange={handleLastname}
                                       />
                                
                            </div>

                            <div className="form-group mb-3">
                                <label className="form-label">Email:</label>
                                <input type="password"
                                       placeholder="Enter employee Email"
                                       name="email"
                                       value={email}
                                       className="form-control"
                                       onChange={handleEmail}
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