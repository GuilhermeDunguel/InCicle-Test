import axios from "axios"
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

interface APIDataProps {
  children: ReactNode,
}

export interface BoardItemInterface {
  id: string,
  title: string,
  resume_files: [{
    file: string
  }]
}

interface ContextProps {
  listOfBoards: BoardItemInterface[],
  setListOfBoards: Dispatch<SetStateAction<BoardItemInterface[]>>
}
 
export const ManagementBoardContext = createContext<ContextProps>({} as ContextProps)

export default function BoardManagement({children}: APIDataProps) {

  const [listOfBoards, setListOfBoards] = useState<BoardItemInterface[]>([{} as BoardItemInterface])

  useEffect(() => {
    axios.get('http://localhost:3334/data')
    .then((response) => response.data)
    .then((data: any) => {
      if(data && data[0] && data[0].boards) {
        setListOfBoards(data[0].boards.map((board: BoardItemInterface) => {
          return {
            ...board,
            id: encodeURI(board.title)
          }
        }))
      }
    }
      )
    .catch(error => console.log(error))
  }, [])

  return (
    <ManagementBoardContext.Provider value={{listOfBoards, setListOfBoards}}>
      {children}
    </ManagementBoardContext.Provider>
  )
}
