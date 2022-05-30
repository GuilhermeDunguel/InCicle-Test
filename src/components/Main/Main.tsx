import './Main.scss'
import { Eventlist } from './Eventlist/Eventlist'
import { LateralPopup } from './LateralPopup/LateralPopup'
import EventManagement from '../../context/EventManagementContext'
import { ManagementBoard } from './ManagementBoard/ManagementBoard'
import BoardManagement, { ManagementBoardContext } from '../../context/ManagementBoardContext'
import { FilterEvents } from '../../context/FilterEventsContext'
import { useContext, useEffect } from 'react'

export default function Main() {

  const ManagementBoardContextData = useContext(ManagementBoardContext)
  const listOfBoards = ManagementBoardContextData.listOfBoards

  return (
    <main>
      <EventManagement>
        <FilterEvents>
          <Eventlist />
        </FilterEvents>
      </EventManagement>
        
        <div className='testar'>
          <LateralPopup />
          <BoardManagement>
            {listOfBoards !== [] ? <ManagementBoard /> : null}
          </BoardManagement>
        </div>
    </main>
  )
}
