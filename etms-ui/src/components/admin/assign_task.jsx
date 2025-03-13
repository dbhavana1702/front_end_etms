
import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AssignTask() {
    const [employees, setEmployees] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [empId, setEmpId] = useState("");
    const [taskId, setTaskId] = useState("");
    useEffect(() => {
        const getAllEmployees = async () => {
            let header = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')

            }
            const resp = await axios.get('http://localhost:5001/api/employee/get', { headers: header })
            setEmployees(resp.data)

        }
        const getAllTask = async () => {
            let header =
            {
                'Authorization': 'Bearer ' + localStorage.getItem('token')

            }
            const resp = await axios.get('http://localhost:5001/api/task/getall', { headers: header })
            setTasks(resp.data)

        }
        getAllEmployees();
        getAllTask();
    }, [])
    const process = (e) => {
        e.preventDefault();
        //call post api
        console.log(taskId);
        console.log(empId);
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-12"><AdminNavbar /></div>

            </div>
            <div className="row">
                <div className="col-sm-4">

                </div>
                <div className="col-sm-4" style={{ marginTop: '9%' }}>
                    <div className="card">
                        <div className="card-header">
                            Assign task to Employee
                        </div>
                        <div className="card-body">
                            <form onSubmit={process}>
                                <div className="mt-4 align-left">
                                    <label><strong>Select Employee:</strong> </label>
                                    <select className="form-control mt-2"
                                        onChange={(e) => setEmpId(e.target.value)}>
                                        <option>-------Select Employee------</option>
                                        {
                                            employees.map((e, index) => (
                                                <option key={index} value={e._id}>
                                                    {e.name} --- {e.jobTitle}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="mt-4 align-left">
                                    <label><strong>Select Task: </strong></label>
                                    <select className="form-control mt-2"
                                        onChange={(e) => setTaskId(e.target.value)}>
                                        <option>-------Select Task---------</option>
                                        {
                                            tasks.map((e, index) => (
                                                <option key={index} value={e._id}>
                                                    {e.title}
                                                </option>
                                            ))
                                        }

                                    </select>

                                </div>
                                <div className="mt-4">
                                    <input type="submit" value="Process" className="btn btn-warning" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4"></div>
            </div>
            <div className="row" style={{ height: '50px', marginBottom: '50px' }}></div>




        </div>
    )
}
export default AssignTask;