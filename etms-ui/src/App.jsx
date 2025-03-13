import { Route, Routes } from "react-router"
import Login from "./auth/login"
import AdminDashboard from "./components/admin/dashboard"
import EmployeeDashboard from "./components/employee/dashboard"
import EmployeeOnboarding from "./components/admin/onboarding_emp"
import EmployeeList from "./components/admin/employee-list"
import './App.css'
import AssignTask from "./components/admin/assign_task"
import EmployeeTask from "./components/employee/employee_task"
import { ToastContainer, Zoom } from "react-toastify"
import AddProject from "./components/admin/add_project"
import Addtask from "./components/admin/add_task"
import FullDetails from "./components/employee/completeDetails"

function App() {


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin/employee-onboarding" element={<EmployeeOnboarding />} />
        <Route path="/admin/employees" element={<EmployeeList />} />
        <Route path="/admin/assign-task" element={<AssignTask />} />
        <Route path="/employee/tasks" element={<EmployeeTask />} />
        <Route path="/admin/add/project" element={<AddProject />} />
        <Route path="/admin/add/task" element={<Addtask />} />
        <Route path="/employee/details" element={<FullDetails/>}/>

      </Routes>

    </>
  )
}

export default App
