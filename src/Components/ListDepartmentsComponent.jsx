import React, { useEffect, useState } from 'react'
import { deleteDepartment, getAllDepartments } from '../Services/DepartmentService';
import { Link,useNavigate } from 'react-router-dom';

function ListDepartmentsComponent() {

  // let dummyData=[ 
  //   {
  //     "id":1,
  //     "departmentName":"R&D",
  //     "departmentDescription":"Research and Development Department"

  //   },
  //   {
  //     "id":2,
  //     "departmentName":"Finance",
  //     "departmentDescription":"Finance Department"

  //   },
  //   {
  //     "id":3,
  //     "departmentName":"Sports",
  //     "departmentDescription":"Sports Department"

  //   }
  // ]

  const[departments,setDepartments]=useState([]);

  const navigator=useNavigate();
  useEffect(()=> {
    listOfDepartments();
    
  },[]);

  function listOfDepartments(){
    getAllDepartments().then((response)=>{
      console.log(response.data);
      setDepartments(response.data);
    }).catch((error) =>{
      console.error(error);
    });
  }

  function updateDepartment(id){
    navigator(`/edit-department/${id}`)
  }

  function removeDepartment(id){
    deleteDepartment(id).then((response)=>{
      console.log(response.data)
    }).catch(error=>{
      console.error(error);
    })

  }


  return (
    <div className="container">
      <h2 className="text-center">List of Departments</h2>
      <div className='text-start mb-2'> 
      <Link to='/add-departments' className='btn btn-primary mb-2' >Add Department</Link>
      </div>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Department Id </th>
          <th>Department Name</th>
          <th>Department Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          departments.map(department=>
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>
                <button onClick={()=> updateDepartment(department.id)} className='btn btn-info'>Update</button>       
                <button onClick={()=> removeDepartment(department.id)} className='btn btn-danger'
                  style={{marginLeft:"10px"}}
                  >Delete</button>
                
              </td>
              <td>
                
              </td>
            </tr>
          )
        }
      </tbody>

    </table>
    </div>
  )
}

export default ListDepartmentsComponent
