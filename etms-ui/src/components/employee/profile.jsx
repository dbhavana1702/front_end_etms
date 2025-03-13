import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EmpProfile = () => {

    const [name, setName] = useState(undefined);
    const [city, setCity] = useState(undefined);
    const [salary, setSalary] = useState(undefined);
    const [jobTitle, setjobTitle] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    //For data fetching
    useEffect(() => {
        const gettingProfile = async () => {
            try {
                const getApiUrl = 'http://localhost:5001/api/employee/getProfile';
                const header = {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                };

                const response = await axios.get(getApiUrl, { headers: header });
                const data = response.data;

                console.log("Fetched Data: ", data);

                setName(data.name)
                setCity(data.city)
                setSalary(data.salary)
                setUsername(data.username)
                setPassword(data.password)
                setjobTitle(data.jobTitle)
            }
            catch (error) {
                console.log(error);
            }
        };
        gettingProfile();
    }, []);

    //For CV uploads

    const [file, setFile] = useState(null)

    const handlefile = (e) => {
        setFile(e.target.files[0])
    }

    const uploadCv = async () => {
        if (!file)
            toast("No file is uploaded")

        const fData = new FormData();
        fData.append('file', file)
        

        const postApi = 'http://localhost:5001/api/employee/uploadcv';
        const header = {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data'
        }

        try {
            const response = await axios.post(postApi, fData, {
                headers: header
            })
            toast("CV uploaded Successfully")
        }
        catch (err) {
            console.log(err)
        }
    }


    //For Profil Pic uploads

    const [img, setImg] = useState(null);

    const handleImage = (e) => {
        setImg(e.target.files[0])
    }

    const UploadPic = async () => {
        if (!img)
            toast("No Image Uploaded")

        const fData = new FormData();
        fData.append('file', img);

        const postApi = 'http://localhost:5001/api/employee/uploadprofile';
        const header = {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data'
        }

        try {
            const response = await axios.post(postApi, fData, {
                headers: header
            })
            toast("Profile Pic Uploaded successfully")
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="card">
            <div className="card-header">
                Employee Profile
            </div>
            <div className="card-body">
                <form class="row g-3 " >
                    <div class="col-md-6">
                        <label class="form-label align-left"><strong>Name</strong></label>
                        <input type="text" class="form-control" value={name}
                            onChange={($event) => setName($event.target.value)}
                        />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label align-left"><strong>City</strong></label>
                        <input type="text" class="form-control" value={city}
                            onChange={($event) => setCity($event.target.value)}
                        />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label align-left"><strong>Salary</strong></label>
                        <input type="text" class="form-control" value={salary}
                            onChange={($event) => setSalary($event.target.value)}
                        />
                    </div>
                    <div class="col-6">
                        <label  class="form-label align-left"><strong>Select Job Title</strong></label>
                        <input type="text" class="form-control" value={jobTitle} />
                    </div>
                    <hr />
                    <div class="col-md-6">
                        <label class="form-label align-left"><strong>Username</strong></label>
                        <input type="text" class="form-control" value={username}
                            onChange={($event) => setUsername($event.target.value)}
                        />
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label align-left"><strong>Password</strong></label>
                        <input type="text" class="form-control" value={password}
                            onChange={($event) => setPassword($event.target.value)}
                        />
                    </div>
                    <hr />
                </form>
                <div class="col-lg-12">
                    <label  class="form-label align-left"><strong>Profile Pic</strong></label>
                    <input type="file" class="form-control" id="inputCity" onChange={handleImage} />
                    <br />
                    <button className="btn btn-secondary align-left" onClick={UploadPic}>Upload</button>
                </div>
                <hr />
                <div class="col-lg-12">
                    <label  class="form-label align-left"><strong>Upload updated CV</strong></label>
                    <input type="file" class="form-control" id="inputCity" onChange={handlefile} />
                    <br />
                    <button className="btn btn-secondary align-left" onClick={uploadCv}>Upload</button>
                </div>
                <hr />
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Save Profile</button>
                </div>

            </div>
        </div>
    )
}

export default EmpProfile
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import { toast } from "react-toastify";

// function EmpProfile() {
//     const location = useLocation(); // Move useLocation() here
//     const [name, setName] = useState("");
//     const [jobTitle, setJobTitle] = useState("");
//     const [city, setCity] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [salary, setSalary] = useState("");
//     const [profilePic, setProfilePic] = useState("");
//     const [cv, setCv] = useState("");
//     const [employees, setEmployees] = useState([]);
//     const [msg, setMsg] = useState("");

//     const handleFileChange = (e) => {
//         setProfilePic(e.target.files[0]);//the file is not being represented by 'file' state variable
//     }
//     const uploadCv = async () => {
//         if (!file) {
//             console.log('file not present ' + file)
//         }
//         const fData = new FormData();
//         fData.append('file', file)
//         const header = {
//             'Authorization': 'Bearer ' + localStorage.getItem('token'),
//             'Content-Type': 'multipart/form-data'
//         }
//         try {
//             const resp = await axios.post('', fData, {
//                 headers: header
//             })
//             console.log(resp)
//             toast("Uploaded profile pic")
//         }
//         catch (err) {
//             console.log(err)
//             setMsg(err)
//         }
//     }
//     // useEffect(() => {
//     //     let url = 'http://localhost:5001/api/employee/uploadprofile';
//     //     let header = {
//     //         Authorization: "Bearer " + localStorage.getItem("token"),
//     //     };

//     //     const getEmployees = async () => {
//     //         try {
//     //             let response = await axios.get(url, { headers: header });
//     //             setEmployees(response.data);
//     //             setName(response.data.name);
//     //             setCity(response.data.city);
//     //             setPassword(response.data.password);
//     //             setUsername(response.data.username);
//     //             setJobTitle(response.data.jobTitle);
//     //             setProfilePic(response.data.profilePic);
//     //             setSalary(response.data.salary);
//     //         } catch (err) {
//     //             console.log(err);
//     //             setMsg("Error in API");
//     //         }
//     //     };

//     //     getEmployees();
//     // }, []); // Added dependency array to re-run on ID change

//     // const updateEmp = async (event) => {
//     //     event.preventDefault();
//     //     let url = "http://localhost:5001/api/employee/uploadcv";
//     //     let header = {
//     //         Authorization: "Bearer " + localStorage.getItem("token"),
//     //     };

//     //     try {
//     //         await axios.put(
//     //             url,
//     //             {
//     //                 name,
//     //                 jobTitle,
//     //                 city,
//     //                 salary,
//     //                 username,
//     //                 password,
//     //                 cv,
//     //                 profilePic,
//     //             },
//     //             { headers: header }
//     //         );
//     //     } catch (err) {
//     //         console.log(err);
//     //         setMsg("Error in API");
//     //     }
//     // };

//     return (
//         <div>
//             <div className="card">
//                 <div className="card-header">Employee Profile</div>
//             </div>
//             <div className="card-body">
//                 {msg ? <div className="btn btn-secondary" >{msg}</div> : ""}
//                 <form className="row g-3">
//                     <div className="col-md-6">
//                         <label className="form-label">Name</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="col-md-6">
//                         <label className="form-label">City</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={city}
//                             onChange={(e) => setCity(e.target.value)}
//                         />
//                     </div>
//                     <div className="col-md-6">
//                         <label className="form-label">Salary</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={salary}
//                             onChange={(e) => setSalary(e.target.value)}
//                         />
//                     </div>
//                     <div className="col-6">
//                         <label className="form-label">Select Job Title</label>
//                         <input type="text" className="form-control" disabled={true} value={jobTitle} />
//                     </div>
//                     <hr />
//                     <div className="col-md-6">
//                         <label className="form-label">Username</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={username}
//                             placeholder={employees.username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </div>
//                     <div className="col-md-6">
//                         <label className="form-label">Password</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <hr />
//                     <div className="col-lg-12">
//                         <label className="form-label">Profile Pic</label>
//                         <input type="file" className="form-control" />
//                         <br />
//                         <button className="btn btn-secondary">Upload</button>
//                     </div>
//                     <hr />
//                     <div className="col-lg-12">
//                         <label className="form-label">Upload updated CV</label>
//                         <input type="file" className="form-control" />
//                         <br />
//                         <button className="btn btn-secondary" onClick={uploadCv}>Upload</button>
//                     </div>
//                     <hr />
//                     <div className="col-12">
//                         <button type="submit" className="btn btn-primary">
//                             Save Profile
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default EmpProfile;
