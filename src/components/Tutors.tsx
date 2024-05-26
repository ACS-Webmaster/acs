import React from 'react'
import { useState } from 'react'

const Tutors = () => {
    const [active, setActive] = useState(0);
    return (    
    <div>
        <h2>Tutors & Schedule</h2>
        <p className="bg-[#FBBA00] w-fit p-1 mb-2">Notice: Please e-mail us at acs.at.uh@gmail.com if you have any concerns or questions. </p>
        <ul className="flex flex-row gap-3">
            <li className="border-black border-2 p-2 rounded-lg">
            <p onClick={()=>setActive(0)} className='cursor-pointer hover:font-semibold'>General Chemistry</p>
            </li>
            <li className="border-black border-2 p-2 rounded-lg">
            <p onClick={()=>setActive(1)} className='cursor-pointer hover:font-semibold'>Biochemistry</p>
            </li>
            <li className="border-black border-2 p-2 rounded-lg">
            <p onClick={()=>setActive(2)} className='cursor-pointer hover:font-semibold'>Organic Chemistry</p>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
                <br />
            {active === 0 ? 
                <div>
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSdx4INm-oq1uG02PujWt-wgu2wITd9zrou9UwuYaUWk1TJajuO5XQ_PzleBWJpYxp_ozn-ibAbJyea/pubhtml?widget=true&amp;headers=false"></iframe>
                    <br />
                    <br />
                </div>

            : null}
            {active === 1 ? 
                <div>
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSdxuRhrIDMXU5n6gicH03mhvuY7GhTD9duVqR4p2z-jT2G96upkm1xUYjMuMXB7I9dDFVoq_9vtxNB/pubhtml?widget=true&amp;headers=false"></iframe>
                    <br />
                </div>

            : null}
            {active === 2 ? 
                <div className="tab-pane fade" id="orgchem" role="tabpanel" aria-labelledby="orgchem-tab">
                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTCvC0uFUfk9FH7i8H9rjkcGp_V3rbzMchk2epnxIjLdzvI6n6-I_T4ocCN-1GhR1WksSJWBJg2wvww/pubhtml?widget=true&amp;headers=false"></iframe>
                    <br />
                    <br />
                    <iframe width="100%" height="400px"src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnCaQvD1dgzwtP-PFQjyJtGFLj9UjbpvnLkm91f4YI4QXK8VeOQjVkVZZyHhel3JIAnWELMFBfL_9t/pubhtml?widget=true&amp;headers=false"></iframe>
                    <br />
                </div>
            : null}
      
            
          
        </div>
    </div>
    )
}

export default Tutors