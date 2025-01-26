import { useState } from 'react'
import { useBoardsStore } from './store/store'
import './app/styles/Board.css'

export default function Board(){
    // const nameBoards = useBoardsStore(state=>state.boardsList)

    const [Board, SetBoard] = useState(false)

    function button__add(){
        SetBoard(!Board)
    }
  
    // const boardsList = nameBoards?.map((item, index) => {return <li key={index}>{item}</li>}
    // );   

    return(
        <>
        <div className='block__add'>
            <button onClick={button__add} className="addBoard">
                <box-icon className='button__icon' name='add-to-queue' color='white'></box-icon>
                Новая доска
            </button>
            {
                Board && 
                <div className='create__board'> 
                    <form onSubmit={event=>event.preventDefault()}>
                        <h3>Название доски</h3>
                        <input type="text" pceholder='Моя доска'/>
                        <div className='button__form'>la
                            <button  type='button' onClick={()=>SetBoard(false)}>Отмена</button>
                            <button>Сохранить</button>
                        </div>
                    </form>
                </div>
            }
        </div>
        {/* <div>
           <ul>{boardsList}</ul>
        </div> */}
        </>
    )
}

