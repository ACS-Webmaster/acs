import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import type { Events } from '../../types';


interface EventsRequest {
  events: Events
}

const EventsCard: React.FC<EventsRequest> = ({
  events
}) => {

  return (
    <div className='z-0'>
      <Card className="max-w-[400px] bg-[rgb(247,232,190)]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-lg">{events.name}</p>
          <p className="text-small text-default-500 font-bold">{events.people}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        {
          (events.link) ?
          <a href={events.link} target="_blank" className='underline'>{events.description}</a>
          :
          <p className='text-small'>{events.description}</p>

        }
      </CardBody>
      <Divider/>
      <CardFooter>
        {
          (events.date) ?
          <p className='text-small'>{events.date.toDateString()}</p>
          :
          (events.details) ?
            <ul className='text-small list-disc p-2'>
              {events.details.map((item: String, index: number) => <li key={index}>{item}</li>)}
            </ul>
          :
          <p></p>
        }

      </CardFooter>
    </Card>
    </div>
  )
}

export default EventsCard;