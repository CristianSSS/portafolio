import './index.css';

export default function Button({children, handler}){
    return(

       <button onClick={handler} className='btn' >
        {children}
       </button>

    );
}