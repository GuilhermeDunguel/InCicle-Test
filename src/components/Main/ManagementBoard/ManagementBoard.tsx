import { useContext, useState } from 'react'
import { ManagementBoardContext } from '../../../context/ManagementBoardContext'
import { ComercialDemo } from './ComercialDemo/ComercialDemo'
import './ManagementBoard.scss'



export function ManagementBoard() {

  const BoardManagement = useContext(ManagementBoardContext)

  const listOfBoards = BoardManagement.listOfBoards
  const setListOfBoards = BoardManagement.setListOfBoards
  const [comercialDemoId, setComercialDemoId] = useState(0)

  return (
    <div className="management-board">
      <span className='management-board-title'>
        Quadros de Gestão à Vista
      </span>
        {listOfBoards.map(board => 
        <ComercialDemo 
        key={comercialDemoId} 
        title={board.title} 
        resume_files={board.resume_files}/>
        )}
    </div>
  )
}
