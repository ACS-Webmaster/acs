import {Accordion, AccordionItem} from "@nextui-org/react";
import img1 from '../assets/IMG_0329.jpg';
import officers18 from '../assets/officers/18-19/IMG_2801.jpg'
import Tutors from "./Tutors";

export default function AboutAccordion() {

  return (
    <Accordion defaultExpandedKeys={["1"]} selectionMode="multiple" variant="shadow">
      <AccordionItem key="1" 
      aria-label="Accordion 1" 
      title="Membership"
      >
       <div className="bg-[#0057A3] p-4 text-white text">
        <div className="sm:grid sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="text-[#FBBA00] text-xl">
                  Become a Member
                </p>
                <div className="sm:hidden m-2 flex-col justify-center">
                <img src={img1.src} className="rounded-lg" alt="membership"/>
                </div>
                <p className="border-b-2 pb-2 mb-2 border-[#FBBA00] font-light"> 
                If you are interested in becoming a member, <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3gG5_lZOiysjRv9AT0dYQFpi6keaG9Apyo9FpAl2p-uPUnQ/viewform?usp=sf_link" className="border-2 border-black font-semibold rounded-lg p-1 text-black bg-[rgb(253,220,128)]" target="_blank">click here</a> to sign up!
                <br />
                <strong>Semester Chapter Membership: </strong>$25.00
                <br />
                <strong>Yearly Chapter Membership: </strong>$30.00
                <br />
                <strong>Yearly National Membership: </strong>$25.00 (additional)
              </p>
                <p className="text-[#FBBA00] text-xl">
                  UH Chapter Benefits
                </p>
                <div className="border-[#FBBA00] border-b-2">
                  <ul className="pb-2 mb-2 ml-6 list-disc"> 
                  <li>Receive an awesome free custom-made T-shirt</li>
                  <li>Networking and research opportunities</li>
                  <li>Ability to attend our Organic Chemistry Final Review</li>
                  <li>Most active members will receive scholarships and awesome prizes</li>
                  </ul>
                </div>
              
                <p className="text-[#FBBA00] text-xl">
                  National Membership
                </p>
                <p className="pb-2 mb-2"> 
                  To become a National Member, you will need to also pay our Chapter Membership fees in addition to the National Member fees.
                  <br />
                  <strong>National Membership Benefits:</strong>
                  <ul className="list-disc ml-6">
                    <li>  Receive a certificate of National Membership and ACS member handbook in the mail</li>
                    <li>  Benefit from ACS national networks and numerous assets</li>
                    <li>  For more info on ACS National Membership, click here
                  </li>
                  </ul>
                </p>
            </div>
            <div className="hidden sm:block m-2 flex-col justify-center">
            <img src={img1.src} className="rounded-lg" alt="membership"/>
            </div>

        </div>
       </div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Tutor Hours">
        <Tutors />

        <iframe width="100%" height="600px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRf4TpB2BTGR1ZGQlrXAVWqk_Y-02Tt0cIopKRYb_g9WPjixlw7tjkZde3lwKbtvVyp_nwZFQocX3CU/pubhtml?widget=true&amp;headers=false"></iframe>

      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Contact Us">
        <div className="flex flex-col gap-3 sm:p-2 text">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between">
            <div className="border-[#0057A3] border-l-4 pl-3">
              <h3>Location</h3>
                <p>
                <strong>Lamar Fleming, Jr. Building</strong> <br/>
                University of Houston Department of Chemistry <br/>
                3585 Cullen Blvd #112, Houston, TX 77004 <br/>
                Room 218 & 220
                </p>
            </div>
            <div className="border-[#0057A3] border-l-4 pl-3">
              <h3>Contact Us</h3>
              <div>
                <p>
                  E-mail: acs.at.uh@gmail.com <br/>
                  Alternatively, you can also contact us on our Facebook page.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9315083485926!2d-95.34834618897544!3d29.721743174983864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be514b3a6f47%3A0x72b46ff575b57b2d!2s3585%20Cullen%20Blvd%20%23112%2C%20Houston%2C%20TX%2077004%2C%20USA!5e0!3m2!1sen!2sin!4v1716132691358!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
