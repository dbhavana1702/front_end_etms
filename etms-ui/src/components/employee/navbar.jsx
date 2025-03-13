import { NavLink } from "react-router";

function EmployeeNavbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ETMS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            
                            <li class="nav-item">
                                <NavLink to="/employee/tasks" style={{ 'textDecoration': 'none' }}>
                                <a className="nav-link" href="#"  >Tasks</a>
                                
                                </NavLink> 
                            </li>
                            {/* <li class="nav-item">
                                <NavLink to="/employee/details" style={{ 'textDecoration': 'none' }}>
                                <a className="nav-link" href="#"  >Full Details</a>
                                
                                </NavLink> 
                            </li> */}
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default EmployeeNavbar;
