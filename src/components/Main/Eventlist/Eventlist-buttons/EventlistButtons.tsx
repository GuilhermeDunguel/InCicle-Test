import plusIcon from '../../../../assets/plus-icon.svg'
import triangleIcon from '../../../../assets/triangle-icon.svg'

import './EventlistButtons.scss'

export function EventlistButtons() {
  return (
    <div className='newslist-buttons'>
      <button className='content-filter-button button-default-style'>
        <span>TIPO</span>
        <img src={triangleIcon} alt="Triângulo para baixo representando uma lista de tipos de eventos" />
      </button>
      <button className='content-creator-button button-default-style'>
        <span>CRIAR</span>
        <img src={plusIcon} alt="Sinal de mais representando a ação de criar" />
      </button>
    </div>
    
    
  )
}
