import './Eventlist.scss'

import {EventlistButtons} from './Eventlist-buttons/EventlistButtons'
import { EventItem } from './EventItem/EventItem'
import EventManagement, { EventManagementContext } from '../../../context/EventManagementContext'
import { useContext } from 'react'

export function Eventlist() {

  const ContextConsumer = useContext(EventManagementContext)
  const listOfEvents = ContextConsumer.listOfEvents
  const setListOfEvents = ContextConsumer.setListOfEvents

  function handleDeletingEvent(id: number) {
    const updatedArrayWithEvents = listOfEvents.filter(event => {
      return event.id !== id
    })
    setListOfEvents(updatedArrayWithEvents)
  }

  return (
    <section className='eventlist-section'>
      <header className='eventlist-header'>
        <div className='eventlist-title-div'>
          <h1>Endomarketing</h1>
        </div>
        <div className='eventlist-buttons-div'>
          <EventlistButtons />
        </div>
      </header>
      {listOfEvents.map(event => <EventItem key={event.id} event={event} onClickDelete={() => handleDeletingEvent(event.id)}/>)}
    </section>
  )
}