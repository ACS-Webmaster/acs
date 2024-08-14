import React from 'react'
import { useState } from 'react'

const Tutors = () => {
    const [active, setActive] = useState(0);
    return (    
    <div>
        {/* <div className='border-[#0057A3] border-t-3 mt-12 mb-10'></div> */}

        <h2>Tutors & Schedule</h2>
        <p className="bg-[#FBBA00] w-fit p-1 mb-2">Notice: Please e-mail us at acs.at.uh@gmail.com if you have any concerns or questions. </p>
        <ul className="flex flex-row gap-3">
            <li className="border-black border-2 p-2 rounded-lg hover:bg-[#0057A3] hover:text-white duration-300">
            <p onClick={()=>setActive(0)} className='cursor-pointer'>General Chemistry</p>
            </li>
            <li className="border-black border-2 p-2 rounded-lg hover:bg-[#0057A3] hover:text-white duration-300">
            <p onClick={()=>setActive(1)} className='cursor-pointer'>Biochemistry</p>
            </li>
            <li className="border-black border-2 p-2 rounded-lg hover:bg-[#0057A3] hover:text-white duration-300">
            <p onClick={()=>setActive(2)} className='cursor-pointer'>Organic Chemistry</p>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
                <br />
            {active === 0 ? 
                <div>
                    <br/>
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/1ZyTCgvjc1G_HyFEMvAUld2EtzOXF5ZlOcKjzyfBoOqM/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                    <br />
                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/1JEBF5n4YqbR8_ckRWZPp8qXzfgg_TLQgOn6JWCMsjU0/pubhtml?widget=true&amp;headers=false"></iframe>                    <br />
                </div>

            : null}
            {active === 1 ? 
                <div>
                    <iframe  width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/1QJEi940c9S7Ak_d6b4h5B-gUkEB5jnjXLRZIO4wV9DY/pubhtml?widget=true&amp;headers=false"></iframe>                    <br />
                    <br/>
                </div>

            : null}
            {active === 2 ? 
                <div className="tab-pane fade" id="orgchem" role="tabpanel" aria-labelledby="orgchem-tab">
                    <br />
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/1wqkVnSiBri4jI9r_WhwKmjsjbKEBw_-B_kWHXTMp9Mo/pubhtml?widget=true&amp;headers=false"></iframe>                    <br />
                    <br />
                    <br/>
                    <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/1l3NznLGNtGc0zD7sz8AB-snzlkQgQyUKHZvSyyAQAIY/pubhtml?widget=true&amp;headers=false"></iframe>                    <br />
                </div>
            : null}
      
            
          
        </div>
    </div>
    )
}

export default Tutors