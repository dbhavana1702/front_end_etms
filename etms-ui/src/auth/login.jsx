import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState();
    const navigate = useNavigate();
    const processLogin = async ($event) => {
        $event.preventDefault();//this ensures that after form is submitted , it does not refresh the page
        /** Call login API  */
        let loginApi = 'http://localhost:5001/api/auth/login'
        console.log(`Inside processLogin....with ${username} & ${password}`)
        try {
            const response = await axios.post(loginApi, {
                'username': username,
                'password': password
            })
            console.log(response)
            let role = response.data.role
            localStorage.setItem("token", response.data.token)
            switch (role) {
                case 'ROLE_ADMIN':
                    navigate('/admin/dashboard')
                    break;
                case 'ROLE_EMPLOYEE':
                    navigate('/employee/dashboard')
                    break;
                default:
                    break;
            }
            return
        }
        catch (error) {
            setMsg('Invalid credentials')
        }
    }

    return (
        <div className="row" style={{ marginTop: '10%' }}>
            <div className="col-sm-4">

            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header etms-header">
                        ETMS Login
                    </div>

                    <div className="card-body">
                        {msg ? <div className="alert alert-primary">
                            {msg}
                        </div> : ""}
                        <form onSubmit={processLogin}>
                            <div className="mt-2">
                                <label className="form-label align-left"><strong>Username: </strong></label>
                                <input type="text"
                                    className="form-control"
                                    onChange={($event) => setUsername($event.target.value)}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="form-label align-left"><strong>Password:</strong> </label>
                                <input type="password"
                                    className="form-control"
                                    onChange={($event) => setPassword($event.target.value)}
                                />
                            </div>
                            <div className="mt-2">

                                <input type="submit"
                                    className="btn custom-button " 
                                    disabled={!username || !password}
                                />
                            </div>
                        </form>

                    </div>

                </div>

            </div>
            <div className="col-sm-4">

            </div>
        </div>
    )
}
export default Login;