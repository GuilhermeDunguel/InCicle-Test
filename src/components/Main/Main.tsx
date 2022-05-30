import './Main.scss'
import { Eventlist } from './Eventlist/Eventlist'
import { LateralPopup } from './LateralPopup/LateralPopup'
import EventManagement from '../../context/EventManagementContext'
import { ManagementBoard } from './ManagementBoard/ManagementBoard'
import BoardManagement from '../../context/ManagementBoardContext'
import { FilterEvents } from '../../context/FilterEventsContext'

export default function Main() {
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
            <ManagementBoard />
          </BoardManagement>
        </div>
    </main>
  )
}
