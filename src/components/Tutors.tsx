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
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSwaOzeiXP2v06JWkpLingFQPP20aFmMWN_Dtl6SRYzcUXPmTsyE57itfkqIfO_NKLGBk4KKyQXe3ir/pubhtml?widget=true&amp;headers=false"></iframe>                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTSBimAaPb4iBun23Oi6Wcf_3NdH8tqwdNfJ7UtFwV1C3gzgdhZNZM0EpOOXHgQ5lb652qRU_d4N5ND/pubhtml?widget=true&amp;headers=false"></iframe>                </div>

            : null}
            {active === 1 ? 
                <div>
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRP2Eg4cqeupAPZ9N2kxha2YAn7Et2IW1ZQbMfGTFpJhF3yO82D8PnCVSbUZJuDH6Y_en46DoASVYnj/pubhtml?widget=true&amp;headers=false"></iframe>                    <br/>
                </div>

            : null}
            {active === 2 ? 
                <div className="tab-pane fade" id="orgchem" role="tabpanel" aria-labelledby="orgchem-tab">
                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFBy0IQcuRUp8xtgCKNrqzLqBMz4MVDtxES8cNrl9pL1FsPn1XTKJfzZ626_5ZL0R4ApI7t_RsYW4R/pubhtml?widget=true&amp;headers=false"></iframe>                    <br />
                    <br/>
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTz2-VOIvavSCUInKjQibtAZaQdpvmYbKaTmf8SIVoDRRV5_9Y6e5A5Fr65gqipLJrqm8w_DfHnTdZk/pubhtml?widget=true&amp;headers=false"></iframe>                </div>
            : null}
      
            
          
        </div>
    </div>
    )
}

export default Tutors;