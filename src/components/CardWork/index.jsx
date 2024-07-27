import Button from '../Button';
import './index.css';

export default function CardWork({src, description, title}){
    return(
        <article className='card-work relative'>
            
                <img src={src} className='w-100'  alt="work" />

                <div className='work-descriptionp-5 py-5 px-2'>
                    <h3 className='font-bold'>{title}</h3>
                    <p>
                       {description}
                    </p>
                    <Button>
                        Ver mas
                    </Button>
                </div>
                
           
        </article>
    )
}
