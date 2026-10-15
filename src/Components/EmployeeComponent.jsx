import react,{ useEffect, useState } from 'react'
import {createEmployee, updateEmployee} from '../Services/EmployeeService'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEmployee} from '../Services/EmployeeService';

import{useNavigate,useParams} from 'react-router-dom'
const EmployeeComponent =()=>{

    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname] =useState('')
    const [email,setemail]=useState('')

   const {id}= useParams();

     const navigator =  useNavigate();

     useEffect(()=> {

        if(id){
            getEmployee(id).then((response) =>{
                setFirstname(response.data.firstname);
                setLastname(response.data.lastname);
                setemail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
     },[id])

    const [errors,setErrors]= useState({
        firstname:'',
        lastname:'',
        email:''
     })

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
    

    function saveOrUpdateEmployee(event){
        event.preventDefault();

        if(validateForm()){

        const employee={firstname,lastname,email}
        console.log(employee)


            if(id){ 
                updateEmployee(id, employee).then((response)=>{ 
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })

            }else{
                createEmployee(employee).then((response) => {
                console.log(response.data);
                 navigator('/employees')
                }).catch(error =>{
                    console.error(error);
                })

                

           }

        
        
        

        }

       
    }

    function validateForm(){
        let valid=true;
        const errorsCopy={...errors}

        if(firstname.trim()){
            errorsCopy.firstname='';

        }else{
            errorsCopy.firstname='FirstName is required';
            valid=false;
        }

        if(lastname.trim()){
            errorsCopy.lastname='';

        }else{
            errorsCopy.lastname='Lastname is required';
            valid=false;
        }

        if(email.trim()){
            errorsCopy.email='';
        }else{
            errorsCopy.email='Email is required';
            valid=false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle(){

        if(id){
            return <h2 className="text-center">Add Employee </h2>
        }else{
            return <h2 className="text-center">Add Employee </h2>
        }
    }


    return(
        <div className="container">
            <br/> <br/>
            <div className="row">
                <div className="card col-md-6  offset-md-3 offset-md-3">
                    {/* <h2 className="text-center">Add Employee </h2> */}
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-3 text-start">
                                <label className="form-label"> First Name:</label>
                                <input type="text"
                                       placeholder="Enter employee FirstName"  
                                       name="firstName" 
                                       value={firstname}
                                       className={`form-control ${errors.firstname ? 'is-invalid':''} `}
                                    //    onChange={handleFirstname}
                                    onChange={(event) => setFirstname(event.target.value)}
                                     />
                                   {errors.firstname && <div className='invalid-feedback '>{errors.firstname} </div>}
                            </div>

                            <div className="form-group mb-3 text-start">
                                <label className="form-label">Last Name:</label>
                                <input type="text"
                                       placeholder="Enter employee LastName"
                                       name="lastName"
                                       value={lastname}
                                       className={`form-control ${errors.lastname ? 'is-invalid':''} `}
                                    //    onChange={handleLastname}
                                          onChange={(event) => setLastname(event.target.value)}
                                       />
                                       
                                        {errors.lastname && <div className='invalid-feedback '>{errors.lastname} </div>}
                                       
                                
                            </div>

                            <div className="form-group mb-3 text-start">
                                <label className="form-label">Email:</label>
                                <input type="text"
                                       placeholder="Enter employee Email"
                                       name="email"
                                       value={email}
                                       className={`form-control ${errors.email ? 'is-invalid':''} `}
                                    //    onChange={handleEmail}
                                    onChange={(event) =>  setemail(event.target.value)}
                                       />

                                        {errors.email && <div className='invalid-feedback '>{errors.email} </div>}
                                
                            </div>

                            <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit

                            </button>
                        </form>

                    </div>
                </div>

            </div>
            
        </div>


        
        
    );
}
export default EmployeeComponent;