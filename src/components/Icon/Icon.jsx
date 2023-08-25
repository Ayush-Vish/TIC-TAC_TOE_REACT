import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa"
function Icon ( { name }) {
    if(name === "circle" ) {
        return <FaRegCircle></FaRegCircle>
    }else if ( name === "cross") { 
        return <FaTimes></FaTimes>
    }else  { 
        return <FaPen/>
    }
}


export default Icon