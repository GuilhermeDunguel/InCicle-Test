import planetIcon from '../../../../assets/planet-icon.svg'
import dotsIcon from '../../../../assets/dots-icon.svg'

import './ComercialDemo.scss'
import { BoardItemInterface } from '../../../../context/ManagementBoardContext'

export function ComercialDemo(props: BoardItemInterface) {
  return (
    <div className="comercial-demo">
      <header>
        <span className="board-title">{props.title}</span>
        <div className="right-buttons-div">
          <button className="right-button">
            <img src={planetIcon} alt="Ícone do planeta terra, simbolizando que o quadro é público." />
          </button>
          <button className="right-button">
            <img src={dotsIcon} alt="Ícone de três pontinhos, simbolizando uma seção a mais." />
          </button>
        </div>
      </header>
      <div className="comercial-images-div">
        {props.resume_files?.map(image => <img className="comercial-images" src={image.file} alt="Imagens comerciais de demonstração"/>)}
      </div>
    </div>
  )
}


