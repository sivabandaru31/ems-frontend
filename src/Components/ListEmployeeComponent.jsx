import react from 'react' 
const ListEmployeeComponent =()=>{
    const dummydata=[
        {
            "id":1,
            "firstName":"siva",
            "lastName":"krishna",
            "email":"siva@gmail.com"

        },

        {
            "id":2,
            "firstName":"basha",
            "lastName":"mahaboob",
            "email":"basha@gmail.com"

        },

        {
            "id":3,
            "firstName":"raja",
            "lastName":"nayak",
            "email":"raja@gmail.com"

        }
    ];

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

                    {
                        dummydata.map(employee =>( 
                            <tr key={employee.id}>
                                <td> {employee.id} </td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    )
                    
                    }
                </tbody>
            </table>
        </div>
    )

}
export default ListEmployeeComponent