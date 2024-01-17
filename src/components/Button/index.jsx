import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-regular-svg-icons'

export default function Button({children, handler, copyStatus, classNameAdd}){
    return(
       <button  onClick={handler} className={'btn' + ` ${copyStatus ? 'btn--copy' : ''} ${classNameAdd}` } >
        {
           ( copyStatus ? <FontAwesomeIcon icon={faCircleCheck} /> : children)
        }
       </button>
    );
}