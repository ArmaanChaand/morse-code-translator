import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div className="text-center my-auto">
        <h1 className="text-3xl">Page Not Found</h1>
        <p className="text-bright-blue underline mt-2">Visit our <Link to="generate/">homepage</Link></p>
        </div>
    )
}
export default NotFound