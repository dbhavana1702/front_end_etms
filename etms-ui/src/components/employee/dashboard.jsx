import EmployeeNavbar from "./navbar";
import EmpProfile from "./profile";

function EmployeeDashboard(){
    return(
        <div>
            <div className="row" style={{'marginTop':'2%'}}>
                <div className="col-lg-12">
                    <EmployeeNavbar/>
                </div>
                
            </div>
            <div className="row">
                <EmpProfile/>
            </div>
            

        </div>
    )
}
export default EmployeeDashboard;
{/* <form className="row"><p><strong>Welcome!!!</strong></p></form> */}