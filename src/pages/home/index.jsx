import CardWork from '../../components/CardWork';
import MailCTA from '../../components/MailCTA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import FormacionCard from '../../components/FormacionCard';
import SoftSkillImg from '/images/soft-skills.png';
import ListWorks from '../../components/listWorks';


export default function Home(){
  //   Soy un desarrollador Fullstack con preferencia Frontend. He creado sitios responsivos y atractivos, siempre buscando la obtimizacion y la mejora continua en el desarrollo de interfaces y funcionalidades. Soy una persona que busca consantemente mejorar la calidad de codigo. Tengo experiencia laboral en el sector trabajando en Wave It como desarrollador de wordpress donde he desempeñado tareas de alto desempeño en maquetacion e integraciones
         
    return(
        <div className='relative' >
        <div style={{backgroundImage:'url(/images/fondo.jpg)', maskImage:'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0) 90%)'}}>
        <div className='container mx-auto h-screen max-h-[600px] flex items-center'>
          
          <div className='w-full' id='yo'>
            <p style={{color:'#fff'}}>Hola! me llamo</p>
            <h1 className='text-6xl py-4 font-bold' style={{'color':'#fff'}}>Cristian Salgado</h1>
            <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="4" fill="#fff"/>
            </svg>
          </div>
          <p className='text-2xl' style={{color:'#fff'}}>
                Soy un desarrollador web fullstack. Apasionado, creativo e inovador. Bienvenido/a a mi portafolio
          </p>
          
          
          
        </div>
        </div>

        <div className='container mx-auto my-5'>
            <h2 className='text-6xl font-bold	font-bold	 py-4' style={{'color':'#2d2d2d'}} >Mis trabajos</h2>
            <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="4" fill="#2D2D2D"/>
            </svg>
            <div className='my-5'>
              <ListWorks quantity={5} />
            </div>
        </div>



        
        <div className='container mx-auto my-5'>
            <h2 className='text-6xl font-bold	font-bold	 py-4' style={{'color':'#2d2d2d'}} >Mi stack</h2>
            <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="4" fill="#2D2D2D"/>
            </svg>
            <div className='my-5 flex flex-wrap gap-4 justify-between'>
              
              
            <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/javascript.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/react.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/materialui.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/tailwind.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/bootstrap.svg" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/wordpress.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/php.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/jquery.webp" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/html.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/css.svg" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/sql.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/firebase.webp" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/nodejs.png" alt="" />


            </div>
        </div>



        <div className='my-10 py-20' >
          <div className='container'>
            <div className='pb-5'>
              
              <h2 className='text-6xl font-bold	py-4' style={{'color':'#2d2d2d'}}>Habilidades tecnicas</h2>
              <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="70" height="4" fill="#2D2D2D"/>
              </svg>
            </div>
    
          <ul style={{'color':'#2d2d2d'}}>
            <li><strong>Responsive desing y pixel perfect</strong> en maquetación web.</li>
            <li>Creación de aplicaciones SPA, escalables y mantenibles con <strong>React js.</strong></li>
            <li>Creación de CRUD</li>
            <li>Integraciones con otros servicios y tecnologias</li>
            <li>Solidos conocimientos en <strong>Javascript</strong>, <strong>CSS</strong>, <strong>HTML</strong>. + <strong>jQuery</strong>, <strong>Bootstrap</strong>, <strong>Tailwind</strong>.</li>
            <li>Utilizacion y experiencia en varias librerias de Javascript.</li>
            <li>CMS <strong>Wordpress</strong> para creación de blogs, temas perzonalizados, sitios customizables e <strong>Ecommerce.</strong></li>
            <li>Conocimiento de <strong>SEO</strong> y estrategias de posicionamiento web; Generando una solida estructura semantica y amigable con los motores de busqueda.</li>
          </ul>
          </div>
        </div>
    
    
    
        <div className=''>
    
          <div className='container' style={{'color':'#2d2d2d'}}>
            <h2 className='text-6xl font-bold	 py-4' >Experiencia laboral</h2>
            <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="70" height="4" fill="#2D2D2D"/>
            </svg>
            <div className='my-10'>

            <FormacionCard className="my-10" data={{name:"Freelance", type:"Online",title:"", time:"Agosto 2024 – Actualmente" }} >
              <p>Trabajo como autonomo brindando servicios de desarrollo web a todo tipo de clientes</p>
            </FormacionCard>
            <FormacionCard className="my-10" data={{name:"Fullstack Wordpress", type:"Híbrido",title:"Wave IT", time:"Marzo 2022 – Agosto 2024" }} >
          
            
            <p>
              Creé temas, plugins y widgets de WordPress desde cero para implementar funcionalidades personalizadas y realize integraciones con servicios externos. Entre los proyectos que participe y dirigi se encuentran Ecommerce, sitios institucionales   . Utilicé PHP y la API de WordPress para
              interactuar con el backend y su base de datos.
            </p>
            <p>
            Utilicé HTML, CSS y jQuery para crear sitios web dinámicos y responsivos que se adaptaran a diferentes
            dispositivos y navegadores. Apliqué los principios de diseño web y las mejores prácticas de codificación para
            garantizar la usabilidad, la accesibilidad y la seguridad de los sitios web.
            </p>
         
              <p>
              Utilicé plataformas de gestión de tareas para crear y asignar responsabilidades, hacer seguimiento del progreso,
            reportar el estado y resolver los problemas de los proyectos web que desarrollé con WordPress. Lideré y coordiné
            equipos multidisciplinares de desarrolladores, diseñadores y testers, proporcionando feedback, orientación y apoyo.
            Comuniqué eficazmente con los clientes, obteniendo los requerimientos, resolviendo las dudas, presentando los
            resultados y solicitando la aprobación.
              </p>
          
           </FormacionCard>

          
    
            <FormacionCard className="my-10" data={{name:"Profesor de programación y desarrollo web", type:"Presencial",title:"Instituto Podemos ", time:"Julio 2023  – Octubre 2023" }} >
              <p>
                Impartí el taller de programación y desarrollo web en el Instituto Podemos, gestionando clases con una participación activa de más de 30 alumnos.
              </p>
              <p>
                Facilité el aprendizaje, proporcionando conocimientos fundamentales en programación y desarrollo web, y fomenté la participación y la comprensión a través de enfoques pedagógicos efectivos.
              </p>
    
            </FormacionCard>
    
    
           </div>
          
          </div>
        </div>
        
        <div className='b-10 pb-20' style={{'color':'#2d2d2d'}}>
          <div className='container'>
            <h2 className='text-6xl font-bold	 py-4' >Formación</h2>
            <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="70" height="4" fill="#fff"/>
            </svg>
           
           <div className='my-10'>
            <FormacionCard className="my-10" data={{name:"Coderhouse", type:"Online",title:"React js", time:"Agosto 2023 – Septiembre 2023" }} >
              Curso intensivo de React js en dode amplie conocimientos en el framework, aprendidendo componetizacion, estados, varios hooks, paginacion. Creacion de un ecommerce como proyecto final. Consumir APIs externas. Utilizacion de Firebase storage como base de datos y backend
            </FormacionCard>
    
            <FormacionCard className="my-10" data={{name:"Educación IT", type:"Online",title:"Javascript Desarrollador Avanzado", time:"Diciembre 2022 – Enero 2023" }} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem reiciendis quae voluptas at repellendus cupiditate repellat fuga. Minima dolorem iste explicabo sit libero aliquam blanditiis labore velit impedit nam.
            </FormacionCard>
    
            <FormacionCard className="my-10" data={{name:"UTN", type:"Avellaneda, BS.AS",title:"Técnico superior en programación", time:"Marzo 2019 – Diciembre 2020" }} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem reiciendis quae voluptas at repellendus cupiditate repellat fuga. Minima dolorem iste explicabo sit libero aliquam blanditiis labore velit impedit nam.
            </FormacionCard>
    
            <FormacionCard className="my-10" data={{name:"E.E.S.T N°1", type:"Santa Teresita, BS.AS",title:"Técnico en programación", time:"Marzo 2012 – Diciembre 2018" }} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem reiciendis quae voluptas at repellendus cupiditate repellat fuga. Minima dolorem iste explicabo sit libero aliquam blanditiis labore velit impedit nam.
            </FormacionCard>
    
    
           </div>
          
          </div>
         </div>
    
    
         <div className='mt-10 pt-20'>
    
          <div className='container'>
            <h2 className='text-6xl font-bold	py-4' style={{'color':'#2d2d2d'}}>Herramientas</h2>
            <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="70" height="4" fill="#2D2D2D"/>
            </svg>
            <div className='flex flex-wrap justify-between my-10'>
             

              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/git.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/github.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/gitlab.webp" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/jira.svg" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/asana.svg" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/teamspng.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/vslogo.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/sublime-text.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/filezilla.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/heidi.png" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/figma.webp" alt="" />
              <img style={{width:"50px",height:"50px",objectFit:"contain"}} src="/images/photoshop.png" alt="" />

            </div>
           
    
          </div>
        </div>
    
    
       
          <div className=' fixed bottom-0 right-0 flex mx-auto p-0 w-full' >
            <div className='container flex justify-end'>
              <a href="/cristian_salgado.pdf" className='self-end'  download style={{backgroundColor:"#fff", borderRadius:"10px"}}>
                <button><FontAwesomeIcon className='text-5xl p-2' style={{color:"#2d2d2d"}} icon={faFileArrowDown} /></button>
              </a>
            </div>
          
          </div>
        
        </div>
        
        
    )
}