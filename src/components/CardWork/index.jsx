import Button from '../Button';
import './index.css';

export default function CardWork({src, description, title}){
    return(
        <article className='card-work relative rounded'>
                <div className='overflow-hidden	'>
                    <img src={src} className='w-100 rounded-t'  alt="work" />
                </div>
              

                <div className='work-descriptionp-5 py-5 px-4'>
                    <h3 className='font-bold'>{title}</h3>
                    <p>
                       {description}
                    </p>
                    {/* <Button>
                        Ver mas
                    </Button> */}

                  <div className='w-100'>
                    <svg style={{width:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                  </div>

                </div>
        </article>
    )
}
