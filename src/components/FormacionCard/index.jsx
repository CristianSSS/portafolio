

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export default function FormacionCard({children, data, className}){
    return(
        <div className={className} >

            <Accordion>
              <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <div className="flex w-full justify-between">
                    <div>
                       <h3 className="font-bold text-xl">{data.name}</h3>
                    <h4 className="text-sky">{data.title}</h4> 
                    </div>
                    
                    
                </div>
                <div className="flex w-full justify-end gap-5 items-center pe-4">
                    <span>{data.type}</span>
                    <span>{data.time}</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
              <p className="py-2">{children}</p>
              </AccordionDetails>
            </Accordion>

        </div>
    )
}