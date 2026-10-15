import react from 'react' 
import React ,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {listEmployees} from '../Services/EmployeeService';



const ListEmployeeComponent =()=>{

   const [employees,setEmployees] =  useState([])
   const navigator=useNavigate();

   useEffect(()=>{

    listEmployees().then((response)=>{
        setEmployees(response.data);
    }).catch(error=>{
        console.error(error);
    })
   },[])
    // const dummydata=[
    //     {
    //         "id":1,
    //         "firstName":"siva",
    //         "lastName":"krishna",
    //         "email":"siva@gmail.com"

    //     },

    //     {
    //         "id":2,
    //         "firstName":"basha",
    //         "lastName":"mahaboob",
    //         "email":"basha@gmail.com"

    //     },

    //     {
    //         "id":3,
    //         "firstName":"raja",
    //         "lastName":"nayak",
    //         "email":"raja@gmail.com"

    //     }
    // ];


    function addNewEmployee(){
        navigator('/add-employee');
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    return (
        <div className='container' >
            <h2 className='text-center'>List of Employees</h2>
            <div className="text-start">
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button></div>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee FirstName</th>
                        <th>Employee LastName</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {// dummydata.map(employee =>( 
                            employees.map((employee) =>{ 
                                console.log(employee);
                                return( 
                            <tr key={employee.id}>
                                <td> {employee.id} </td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info " onClick={()=> updateEmployee(employee.id)}>Update</button>
                                </td>
                            </tr>
                        );
                    
                    
                    })}
                </tbody>
            </table>
        </div>
    )

}
export default ListEmployeeComponent