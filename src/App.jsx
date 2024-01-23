import './App.css'
import CardWork from './components/CardWork';
import Footer from './components/Footer';
import Header from './components/Header';
import MailCTA from './components/MailCTA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import FormacionCard from './components/FormacionCard';
export default function App() {


  return (

    <div className=' relative'>
    <div className='container mx-auto h-auto md:h-screen min-h-600'>
      
      <Header/>

      <MailCTA/>

      <div className='py-10 mt-20' id='yo'>
        <p>Hola! me llamo</p>
        <h1 className='text-6xl py-4' style={{'color':'#2d2d2d'}}>Cristian Salgado</h1>
        <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="70" height="4" fill="#2D2D2D"/>
        </svg>
      </div>
      <p>
         Soy un desarrollador web enfocado y apasionado en el frontend utilizando <span className='text-sky'>React js</span> con conocimientos fullstack en el desarrollo de Wordpress. He creado sitios responsivos y atractivos, siempre buscando la obtimizacion y la mejora continua en el desarrollo de interfaces y funcionalidades. Soy una persona que busca consantemente mejorar la calidad de codigo. Tengo experiencia laboral en el sector trabajando en Wave It como desarrollador de wordpress donde he desempeñado tareas de alto desempeño en maquetacion e integraciones
      </p>
      
      <div className='flex justify-end'>
        <a href="/cristian_salgado.pdf" className='ms-auto text-sky relative'  download >Descargar CV </a>
      </div>
      
    </div>
    <div className='my-10 py-20' style={{backgroundColor:"#2d2d2d"}}>
      <div className='container'>
        <div className='pb-5'>
          
          <h1 className='text-6xl py-4' style={{'color':'#fff'}}>Habilidades</h1>
          <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="4" fill="#fff"/>
          </svg>
        </div>

      <ul style={{color:'#fff'}}>
        <li><strong>Responsive desing y pixel perfect</strong> en maquetación web.</li>
        <li>Creacion de aplicaciones SPA, escalables y mantenibles con <strong>React js.</strong></li>
        <li>Solidos conocimientos en <strong>Javascript</strong>, <strong>CSS</strong>, <strong>HTML</strong>. + <strong>jQuery</strong>, <strong>Bootstrap</strong>, <strong>Tailwind</strong>.</li>
        <li>Utilizacion y experiencia en varias librerias de Javascript.</li>
        <li>CMS <strong>Wordpress</strong> para creación de blogs, temas perzonalizados y sitios customizables.</li>
        <li>Conocimiento de <strong>SEO</strong> y estrategias de posicionamiento web; Generando una solida estructura semantica y amigable con los motores de busqueda.</li>
      </ul>
      </div>
    </div>


    <div className='mt-10 pt-20'>

      <div className='container'>
        <h2 className='text-6xl py-4' style={{'color':'#2d2d2d'}}>Herramientas</h2>
        <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="4" fill="#2D2D2D"/>
        </svg>
        <ul style={{color:'#2d2d2d'}}>
        <li>Git / Github / GitLab </li>
        <li>Jira / Asana </li>
        <li>Microsoft Teams</li>
        <li>VS Code / Sublime text</li>
        <li>FileZilla</li>
        <li>HeidiSQL</li>
        <li>Figma / Photoshop</li>
        <li>Excel / Word / Notion </li>
     
      </ul>
      
      </div>
    </div>


    <div className='mt-10 pt-20'>

      <div className='container'>
        <h2 className='text-6xl py-4' style={{'color':'#2d2d2d'}}>Experiencia</h2>
        <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="4" fill="#2D2D2D"/>
        </svg>
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis magna. Turpis massa tincidunt dui ut ornare lectus sit amet est. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Arcu dui vivamus arcu felis bibendum. Sollicitudin ac orci phasellus egestas. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Diam sollicitudin tempor id eu nisl nunc. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Quis lectus nulla at volutpat diam ut venenatis tellus.
      </p>
      
      </div>
    </div>
    
    <div className='b-10 pb-20' style={{backgroundColor:"#2d2d2d"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L60,256C120,256,240,256,360,245.3C480,235,600,213,720,197.3C840,181,960,171,1080,170.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className='container my-10 py-10'>
        <h2 className='text-6xl py-4' style={{'color':'#fff'}}>Formación</h2>
        <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="4" fill="#fff"/>
        </svg>
       
       <div className='my-10'>
        <FormacionCard className="my-10" data={{name:"Coderhouse", type:"Online",title:"React js", time:"Agosto 2023 – Septiembre 2023" }} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem reiciendis quae voluptas at repellendus cupiditate repellat fuga. Minima dolorem iste explicabo sit libero aliquam blanditiis labore velit impedit nam.
        </FormacionCard>

        <FormacionCard className="my-10" data={{name:"Educación IT", type:"Online",title:"Javascript Desarrollador Avanzado", time:"Diciembre 2022 – Enero 2023" }} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem reiciendis quae voluptas at repellendus cupiditate repellat fuga. Minima dolorem iste explicabo sit libero aliquam blanditiis labore velit impedit nam.
        </FormacionCard>

        <FormacionCard className="my-10" data={{name:"UTN", type:"Avellaneda, BS.AS",title:"Técnico superior en programación", time:"Marzo 2019 – Diciembre 2019" }} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem reiciendis quae voluptas at repellendus cupiditate repellat fuga. Minima dolorem iste explicabo sit libero aliquam blanditiis labore velit impedit nam.
        </FormacionCard>

        <FormacionCard className="my-10" data={{name:"E.E.S.T N°1", type:"Santa Teresita, BS.AS",title:"Técnico en programación", time:"Marzo 2012 – Diciembre 2018" }} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem reiciendis quae voluptas at repellendus cupiditate repellat fuga. Minima dolorem iste explicabo sit libero aliquam blanditiis labore velit impedit nam.
        </FormacionCard>


       </div>
      
      </div>
     </div>


    <Footer/>


    <div className=' fixed bottom-0 right-0 flex mx-auto p-0  container' >
        <a href="/cristian_salgado.pdf" className='ms-auto'  download style={{backgroundColor:"#fff", borderRadius:"10px"}}>
          <button><FontAwesomeIcon className='text-5xl p-2' style={{color:"#2d2d2d"}} icon={faFileArrowDown} /></button>
        
        </a>
    
      </div>
    
    </div>
    
    
  )
}
