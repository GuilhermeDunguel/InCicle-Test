import { useContext, useState } from 'react'
import { ManagementBoardContext } from '../../../context/ManagementBoardContext'
import { ComercialDemo } from './ComercialDemo/ComercialDemo'
import './ManagementBoard.scss'



export function ManagementBoard() {

  const BoardManagement = useContext(ManagementBoardContext)

  const listOfBoards = BoardManagement.listOfBoards

  return (
    <div className="management-board">
      <span className='management-board-title'>
        Quadros de Gestão à Vista
      </span>
        <div className='list-of-boards'>
          {listOfBoards.map(board =>
          <ComercialDemo
          key={board.id}
          id={board.id}
          title={board.title}
          resume_files={board.resume_files}/>
          )}
        </div>
    </div>
  )
}
