import { useState } from "react"
import AdminNavbar from "./navbar"
import axios from "axios";

function EmployeeOnboarding() {

    const [name, setName] = useState(undefined);
    const [jobTitle, setjobTitle] = useState(undefined);
    const [city, setCity] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [salary, setSalary] = useState(undefined);
    const [msg, setMsg] = useState(undefined)
    

    const processForm = async (e) => {
        e.preventDefault();
        let url = "http://localhost:5001/api/employee/add"
        let token = localStorage.getItem('token')
        let header = {
            'Authorization': 'Bearer ' + token
        }
        try {
            const response = await axios.post(url, {
                'name': name,
                'jobTitle': jobTitle,
                'city': city,
                'salary': salary,
                'username': username,
                'password': password
            },
                { headers: header }
            );
            setMsg('Employee Onboarded Successfully!!!!')
        }
        catch (error) {
            setMsg('Error in Onboarding')
            console.error(error)
        }

    }
    return (
        <>
            <div className="row">
                <div className="col-lg-12"> <AdminNavbar /></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"> </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                        <strong>Employee Onboarding - Add Details</strong>
                        </div>
                        <div className="card-body" style={{ 'textAlign': 'left' }}>

                            <form className="row g-3" onSubmit={processForm}>
                                {msg ? <div class="col-md-12">
                                    <div className="alert alert-primary">
                                        {msg}
                                    </div>
                                </div> : ""}

                                <div class="col-md-6">
                                    <label class="form-label"><strong>Name</strong></label>
                                    <input type="text" class="form-control"
                                        onChange={($event) => setName($event.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label"><strong>City</strong></label>
                                    <input type="text" class="form-control"
                                        onChange={($event) => setCity($event.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label"><strong>Salary</strong></label>
                                    <input type="text" class="form-control"
                                        onChange={($event) => setSalary($event.target.value)} />
                                </div>
                                <div class="col-6">
                                    <label class="form-label"><strong>Job Title</strong></label>
                                    <select className="form-control"
                                        onChange={($event) => setjobTitle($event.target.value)}>
                                        <option value="">----select job title----</option>
                                        <option value="Software Developer">Software Dev</option>
                                        <option value="Software Tester">Software tester</option>
                                        <option value="Product Owner">Product Owner</option>
                                    </select>
                                </div>
                                <div class="col-lg-12">
                                    <label  class="form-label"><strong>Profile Pic</strong></label>
                                    <input type="file" class="form-control"  />
                                    <br />
                                    <button className="btn btn-secondary">Upload</button>
                                </div>
                                <div class="col-lg-12">
                                    <label  class="form-label"><strong>Upload updated CV</strong></label>
                                    <input type="file" class="form-control"  />
                                    <br />
                                    <button className="btn btn-secondary">Upload</button>
                                    {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <button className="btn btn-secondary">Upload</button>
                                    </div> */}

                                </div>
                                <div class="col-md-6">
                                    <label  class="form-label"><strong>Username</strong></label>
                                    <input type="text" class="form-control"
                                        onChange={($event) => setUsername($event.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label  class="form-label"><strong>Password</strong></label>
                                    <input type="text" class="form-control"
                                        onChange={($event) => setPassword($event.target.value)} />
                                </div>

                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Employee Onboarding</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"> </div>

            </div>
            <div className="row mt-4">

            </div>
        </>
    )
}

export default EmployeeOnboarding