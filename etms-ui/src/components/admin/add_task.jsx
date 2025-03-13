import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AddTask()
{
    const[title,setTitle]=useState("");
    const[shortDescription,setShortDescription]=useState("");
    const [startDate, setStartDate] = useState("");
    const [estimatedEndDate, setEstimatedEndDate] = useState("");
    const [pid,setProjectId]=useState();
    const[msg,setMsg]=useState("");
    const[project,setProjects]=useState([])
    useEffect(()=>{
        const getProjects=async()=>{
            let url='http://localhost:5001/api/project/get';
            let header={
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
            try{
                const projects=await axios.get(url,
                    {headers:header}
                )
                setProjects(projects.data)
            }
            catch(err)
            {
                setMsg("Error in api")
            }
            
        }
        getProjects();

    },[])
    const addTask=async(e)=>{
        e.preventDefault();
        let url='http://localhost:5001/api/task/add/'+pid;
        let header={
            'Authorization':'Bearer '+localStorage.getItem('token')
        }
        try{
            let response=await axios.post(url,{
                title,estimatedEndDate,shortDescription,startDate
                
            },{headers:header})
            setMsg("Task Added Successfully")
            console.log(response.data)
        }
        catch(err)
        {
            console.log(err);
            setMsg("Error in api")

        }
    }
    return(
        <>
            <div className="row">
                <div className="col-lg-12">
                    <AdminNavbar/>
                </div>
            </div>
            <div className="row" style={{'marginTop':'7%'}}>
                <div className="col-sm-2">

                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Add Task
                        </div>
                        <div className="card-body">
                            <form className="row g-3" onSubmit={addTask}>
                                {msg?<div className="btn btn-primary">{msg}</div>:""}
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Title</strong></label>
                                    <input className="form-control" type="text" 
                                    onChange={($event)=>setTitle($event.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Short Description</strong></label>
                                    <input className="form-control" type="text" 
                                    onChange={($event)=>setShortDescription($event.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><strong>EstimatedEndDate</strong></label>
                                    <input className="form-control" type="date" 
                                    onChange={($event)=>setEstimatedEndDate($event.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><strong>Start Date</strong></label>
                                    <input className="form-control" type="date" 
                                    onChange={($event)=>setStartDate($event.target.value)}/>
                                </div>
                                <div>
                                    <label className="form-label"><strong>Select Project</strong></label>
                                    <select className="form-control" onChange={($event)=>setProjectId($event.target.value)}>
                                        <option >----Select Project Title----</option>
                                        {
                                            project.map((p,index)=>(
                                                <option key={index} value={p._id}>
                                                    {p.title}
                                                </option>

                                            ))
                                        }
                                    </select>
                                </div>
                                <div >
                                    <input className="btn btn-info" type="submit" value="submit"/>
                                </div>
                                
                            </form>
                           
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">

                </div>
            </div>
        </>
    )
}
export default AddTask;