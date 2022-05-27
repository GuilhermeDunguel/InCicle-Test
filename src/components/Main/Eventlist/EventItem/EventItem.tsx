import { useState } from "react"

import './EventItem.scss'

import Dots from '../../../../assets/dots-icon.svg'
import { EventItemInterface } from "../../../../context/EventManagementContext"

interface EventProps {
  event: EventItemInterface;
  onClickDelete: any;
}

export function EventItem(props: EventProps) {

  const {onClickDelete} = props 

  const [isDeleteButtonActive, setIsDeleteButtonActive] = useState(false)

  return (
      <section className='event-item-section'>
      <div className='event-container' key={props.event.id}>
      <div className='event-container-left-side'>
         <div className='event-image-div'>
            <img src={props.event.file.url} alt="" />
         </div>
         <div className="event-info-div">
            <span className="event-title">
            {props.event.title}
            </span>
            <div className='event-details-div'>
            <span id={props.event.type} className='event-category'>{props.event.type.toUpperCase()}</span>
            <span>{props.event.info.date}</span>
            <span>{props.event.info.place}</span>
            {props.event.invited_people !== undefined ? 
               <a 
                  className='event-invited-people' 
                  onClick={() => console.log(props.event.invited_people)}
               >
                  3 CONFIRMAÇÕES DE 15
               </a>
            : null}
            </div>
            <p className='event-description'>{props.event.description}</p>
         </div>
      </div>
      <div className='event-dotted-button-div'>
        <button
          className='dotted-button'
            onClick={() => isDeleteButtonActive ? setIsDeleteButtonActive(false)
            : setIsDeleteButtonActive(true)}
        >
          <img src={Dots} alt="" />
        </button>
        {isDeleteButtonActive === true ? 
          <div className='event-deleting-menu'>
            <button
              onClick={onClickDelete}
            >
                Deletar item
            </button>
          </div>
        : null
        }

      </div>
      </div>
   </section>
  )
}
