import './Main.scss'
import { Eventlist } from './Eventlist/Eventlist'
import { LateralPopup } from './LateralPopup/LateralPopup'
import EventManagement from '../../context/EventManagementContext'

export default function Main() {
  return (
    <main>
      <EventManagement>
        <Eventlist />
      </EventManagement>
        
        <div className='testar'>
          <LateralPopup />
          <div className='teste2'></div>
        </div>
    </main>
  )
}
