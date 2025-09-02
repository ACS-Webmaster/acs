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
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQdPb_By7iGq3oOBe2uU7Hcsn6v0EkZMaIr00pWEd0EDTp3N6lDeiU2ZVdrE2M_kyuAJjZkbTQxnCR/pubhtml?gid=1605407668&amp;single=true&amp;widget=true&amp;headers=false"></iframe>                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTsi7rJsI4YEl39_iC-oj5UU3Xb-6yV-FIbYn35Leuds0zkrQz7u1AzOxhtvl4YB5cCQKkU9oVKUOR7/pubhtml?gid=1311330992&amp;single=true&amp;widget=true&amp;headers=false"></iframe>             </div>

            : null}
            {active === 1 ? 
                <div>
                   <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRiMOD0rFAJz0ZWqdRV6MDlTirKIYmvw5B2OQS36WszynECPAScnQkFPdtMoubQwgLLT0Yu8JeD-ssh/pubhtml?gid=2066533032&amp;single=true&amp;widget=true&amp;headers=false"></iframe>   <br/>
                </div>

            : null}
            {active === 2 ? 
                <div className="tab-pane fade" id="orgchem" role="tabpanel" aria-labelledby="orgchem-tab">
                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSAyGT5J10N-9VLdeDOjQiw0s_Nx01_BgSAi64NQZ_3M9gXQ4rEd5bUlgLolQKw3sMyw1tuwkI0Q2Ro/pubhtml?gid=1420990976&amp;single=true&amp;widget=true&amp;headers=false"></iframe>  <br />
                    <br/>
                   <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNhtvRiLhIBeWRSoG0yAfI_FdEP1LzMc5YsZCpO9a5ZBYHaiCWzQ5d54MMWXC06_aJMgHt8SFDc0DJ/pubhtml?gid=688810819&amp;single=true&amp;widget=true&amp;headers=false"></iframe>  </div>
            : null}
      
            
          
        </div>
    </div>
    )
}

export default Tutors;