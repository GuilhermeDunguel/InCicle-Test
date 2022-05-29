import axios from "axios"
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

interface APIDataProps {
  children: ReactNode,
}

export interface BoardItemInterface {
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
    .then(data => data.forEach((x: { boards: []}) => {
      setListOfBoards(x.boards)
    }))
    .catch(error => console.log(error))
  }, [])

  return (
    <ManagementBoardContext.Provider value={{listOfBoards, setListOfBoards}}>
      {children}
    </ManagementBoardContext.Provider>
  )
}
