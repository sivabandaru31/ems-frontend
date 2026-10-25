import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HeaderComponent from './Components/Header';
import Footer from './Components/Footer';
import EmployeeComponent from './Components/EmployeeComponent';
// import ListDepartmentsComponent from './Components/ListDepartmentsComponent' ;
import ListDepartmentsComponent from './Components/ListDepartmentsComponent';
import DepartmentComponent from './Components/DepartmentComponent';

function App() {

  return (
    <>
    {/* <HelloWorld/> */}
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* //http:localhost:3000 */}
        <Route path='/' element={<ListEmployeeComponent/>}/>
         {/* //http:localhost:3000/employees */}
         <Route path='employees' element={<ListEmployeeComponent/> }/>

         {/* //http://localhost:3000/add-employee */}
         <Route path='add-employee' element={<EmployeeComponent/>}/>
        
        {/* http://localhost:3000/edit-employee/1 */}

        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>

        {/* http:localhost:8081/departments */}
        <Route path='/departments' element={<ListDepartmentsComponent/>}></Route>

        {/* http://localhost:3000/add-departments */}
        <Route  path='/add-departments' element={<DepartmentComponent/>}></Route>

        

      </Routes>
      
      <Footer/>
    </BrowserRouter>
    {/* <EmployeeComponent/> */}
    </>
  );
}

export default App
