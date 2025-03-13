import { useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AddProject() {
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [estimatedEndDate, setEstimatedEndDate] = useState("");
    const [clientName, setClientName] = useState("");
    const [techStack, setTechStack] = useState("");
    const [msg, setMsg] = useState("");

    const add = async (e) => {
        e.preventDefault(); // Prevents page refresh

        let url = "http://localhost:5001/api/project/add";
        let header = {
            Authorization: "Bearer " + localStorage.getItem("token"),
        };

        try {
            const response = await axios.post(
                url,
                { title, startDate, shortDescription, clientName, techStack, estimatedEndDate },
                { headers: header }
            );
            setMsg("Project added successfully");
            console.log(response.data);
        } catch (err) {
            console.log(err);
            setMsg("Error in API");
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <AdminNavbar />
                </div>
            </div>
            <div className="row" style={{ marginTop: "10%" }}>
                <div className="col-sm-2"></div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Add Project</div>
                        <div className="card-body">
                            <form onSubmit={add} className="row g-3">
                                {msg && <div className="btn btn-primary">{msg}</div>}
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Title</strong></label>
                                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Short Description</strong></label>
                                    <input type="text" className="form-control" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Start Date</strong></label>
                                    <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Estimated End Date</strong></label>
                                    <input type="date" className="form-control" value={estimatedEndDate} onChange={(e) => setEstimatedEndDate(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Client Name</strong></label>
                                    <input className="form-control" type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Tech Stack</strong></label>
                                    <input type="text" className="form-control" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
                                </div>
                                <input type="submit" value="Submit" className="btn btn-info" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </>
    );
}

export default AddProject;
