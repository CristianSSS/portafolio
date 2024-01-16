import './index.css';

export default function CardWork(){
    return(
        <div className='card-work relative'>
            <img className='w-100'  alt="work" />

            <div className='work-description absolute bottom-0 left-0 p-5'>
                <h3>Titulo proyecto </h3>
                <p>
                    descripcion
                </p>
            </div>
            <div className='absolute bottom-0 left-0 p-2 work-shadow w-full '>
                
            </div>
        </div>
    )
}
