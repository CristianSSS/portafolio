import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-regular-svg-icons'

export default function Button({children, handler, copyStatus}){
    return(
       <button onClick={handler} className={'btn' + ` ${copyStatus ? 'btn--copy' : ''}` } >
        {
           ( copyStatus ? <FontAwesomeIcon icon={faCircleCheck} /> : children)
        }
       </button>
    );
}