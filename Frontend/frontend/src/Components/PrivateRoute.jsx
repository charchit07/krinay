import {Navigate} from "react-router-dom"
function PrivateRoute({children}) {
const isAuthenticated = localStorage.getItem("token");
if(!isAuthenticated){
return <Navigate to="/login" />
}
return children
}

export default PrivateRoute;