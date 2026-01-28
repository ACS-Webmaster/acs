import React from 'react'
import { useState } from 'react'

const Tutors = () => {
    const [active, setActive] = useState(0);
    return (    
    <div>

        <h2>Tutors & Schedule</h2>
        <p className="bg-[#FBBA00] w-fit p-1 mb-2">Notice: Please e-mail us at acs.at.uh@gmail.com if you have any concerns or questions. </p>
        <ul className="flex flex-row gap-3">
            {active == 0 ?
                <li onClick={()=>setActive(0)} className="border-black border-2 p-2 rounded-lg bg-[#0057A3] text-white">
                    <p className='cursor-pointer'>General Chemistry</p>
                </li> :
                <li onClick={()=>setActive(0)}  className="border-black border-2 p-2 rounded-lg hover:bg-[#0057A3] hover:text-white duration-300">
                    <p onClick={()=>setActive(0)} className='cursor-pointer'>General Chemistry</p>
                </li>
            }
            {active == 1 ?
                 <li onClick={()=>setActive(1)} className="border-black border-2 p-2 rounded-lg bg-[#0057A3] text-white">
                    <p className='cursor-pointer'>Biochemistry</p>
                 </li> :
                <li onClick={()=>setActive(1)}  className="border-black border-2 p-2 rounded-lg hover:bg-[#0057A3] hover:text-white duration-300">
                    <p className='cursor-pointer'>Biochemistry</p>
                </li>
            }
            {active == 2 ?
                 <li onClick={()=>setActive(2)} className="border-black border-2 p-2 rounded-lg bg-[#0057A3] text-white">
                    <p className='cursor-pointer'>Organic Chemistry</p>
                </li>:
                <li onClick={()=>setActive(2)} className="border-black border-2 p-2 rounded-lg hover:bg-[#0057A3] hover:text-white duration-300">
                    <p className='cursor-pointer'>Organic Chemistry</p>
                </li>
            }
        
          
          
        </ul>
        <div className="tab-content" id="myTabContent">
                <br />
            {active === 0 ? 
                <div>
                    <br/>
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSlvQAwQGJ_V0jVE30gUTsT5hoZ7aXw4sL99Fom3EJtUR3fEROfJNPPD_mazIokiVt649UIw7cJis0i/pubhtml?gid=1605407668&amp;single=true&amp;widget=true&amp;headers=false"></iframe>                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTrSQOMvXHBKE-nmLMRczs_wqhUCOviq99QQi-NcT5N_vwVQ-HJKxEI1VEbMXDVrRMEj1R10kUjVjQ_/pubhtml?gid=1218014201&amp;single=true&amp;widget=true&amp;headers=false"></iframe>             </div>

            : null}
            {active === 1 ? 
                <div>
                   <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRT7oeVPKEMtfD1BtuHjcYm9jttv-4Qwmi2nQN8A9BdG_EUTRRsmbBoSx4nmZRw7r5WGPLKoSsUTR8z/pubhtml?gid=1045993556&amp;single=true&amp;widget=true&amp;headers=false"></iframe>   <br/>
                </div>

            : null}
            {active === 2 ? 
                <div className="tab-pane fade" id="orgchem" role="tabpanel" aria-labelledby="orgchem-tab">
                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSV-eQA4_sZ8QrLEJzPqE-n4dHAe1Htingm0fRaNsgmTlqJOTEJ7_ybWfzl-eu6YczMj4iAFW8YinTn/pubhtml?gid=365659047&amp;single=true&amp;widget=true&amp;headers=false"></iframe>  <br />
                    <br/>
                   <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSS4AuVh2ij-eR3626FACJaleoJYvx_p7vz2gtL6YJ27Ngs0oxrnfiOns_4DfaCcl-rXhnBAVmCr49F/pubhtml?gid=1887151687&amp;single=true&amp;widget=true&amp;headers=false"></iframe>  </div>
            : null}
      
            
          
        </div>
    </div>
    )
}

export default Tutors;