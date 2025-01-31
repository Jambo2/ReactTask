import { useState } from 'react';
import { useBoardsStore } from './store/store';
import './app/styles/Board.css';

export default function Board() {
    const nameBoards = useBoardsStore(state => state.boardsList);
    const addNewBoard = useBoardsStore(state => state.addNewBoard); 

    const [isBoardVisible, setIsBoardVisible] = useState(false);
    const [newBoardName, setNewBoardName] = useState(''); 

    function toggleAddBoard() {
        setIsBoardVisible(!isBoardVisible);
        setNewBoardName(''); 
    }

    const handleSave = (event) => {
        event.preventDefault(); 
        if (newBoardName.trim()) { 
            addNewBoard(newBoardName); 
            setNewBoardName(''); 
            setIsBoardVisible(false); 
        }
    };

    const boardsList = nameBoards.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    return (
        <>
            <div className='block__add'>
                <button onClick={toggleAddBoard} className="addBoard">
                    <box-icon className='button__icon' name='add-to-queue' color='white'></box-icon>
                    Новая доска
                </button>
                {
                    isBoardVisible &&
                    <div className='create__board'>
                        <form onSubmit={handleSave}>
                            <h3>Название доски</h3>
                            <input 
                                type="text" 
                                placeholder='Моя доска' 
                                value={newBoardName} 
                                onChange={(event) => setNewBoardName(event.target.value)} 
                            />
                            <div className='button__form'>
                                <button type='button' onClick={toggleAddBoard}>Отмена</button>
                                <button type='submit'>Сохранить</button> 
                            </div>
                        </form>
                    </div>
                }
            </div>
            <div>
                <ul>{boardsList}</ul>
            </div>
        </>
    );
}
