import React from 'react';
import '../styles/OfficerCard.css';
import type { Officer } from '../../types';
import { IoMdMail } from "react-icons/io";


interface officerRequest {
    officer: Officer
}

const OfficerCard: React.FC<officerRequest> = ({
    officer
}) => {


	return (
		<div className='officers'>
			<div className='picture'>
				<img src={officer.image.src} alt={officer.name} className='rounded-full'/>

			</div>
			<div className='team-content'>
				<h5 className='name'>
						{officer.name}
				</h5>
				<h6 className='title'>{officer.title}</h6>
			</div>
				<ul className='social'>
					{officer.email.length > 0 && (
						<li>
							<a
								href={`mailto:${officer.email}`}
								target='_blank'
								rel='nofollow noopener noreferrer'
								className='transition-transform duration-300 ease-in-out transform hover:scale-150'
							>
								<IoMdMail />
							</a>
						</li>
					)}
				</ul>
		
		</div>
	);
};

export default OfficerCard;