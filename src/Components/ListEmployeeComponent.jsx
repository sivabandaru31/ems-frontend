import react from 'react' 
import {listEmployees} from '../Services/EmployeeService';
import React,{useEffect,useState} from 'react'

const ListEmployeeComponent =()=>{

   const [employees,setEmployees] =  useState([])

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



    return (
        <div className='container' >
            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee FirstName</th>
                        <th>Employee LastName</th>
                        <th>Employee Email</th>
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
                                <td>{employee.lastame}</td>
                                <td>{employee.email}</td>
                            </tr>
                        );
                    
                    
                    })}
                </tbody>
            </table>
        </div>
    )

}
export default ListEmployeeComponent