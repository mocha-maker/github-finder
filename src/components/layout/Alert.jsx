import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"
import {FaExclamationTriangle} from 'react-icons/fa'

function Alert() {
  const { alert } = useContext(AlertContext)
  
    return alert !== null && (
    <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && (
        <div>
        <FaExclamationTriangle color="yellow" className="flex-none mt-0.5"/>
        <p className="flex-1 text-base leader-7 text-white">
            <strong>{alert.msg}</strong>
        </p>
        </div>
        )}
    </p>
    )
        
}

export default Alert