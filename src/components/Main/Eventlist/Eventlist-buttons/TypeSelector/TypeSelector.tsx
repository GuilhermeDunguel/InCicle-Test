import './TypeSelector.scss'

export function TypeSelector() {

  function handleFilteringEvents(event: any) {
    event.preventDefault()

    console.log(document.querySelector('#release-input'))
  }

  return (
    <form className="type-selector">
      <div className='input-div'>
        <input type="checkbox" id="event-input" value='event' />
        <label htmlFor="event-input">Evento</label>
      </div>
      
      <div className='input-div'>
        <input type="checkbox" id="release-input" value='release'/>
        <label htmlFor="release-input">Lançamento</label>
      </div>
      
      <div className='input-div'> 
        <input type="checkbox" id="publication-input" value='publication'/>
        <label htmlFor="publication">Publicação</label>
      </div>
      
      <button
        type='submit'
        onClick={handleFilteringEvents}
      >
        Filtrar
      </button>
    </form>
  )
}
