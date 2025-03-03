import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useBoardsStore } from '../../store/store';
import Button from '../../shader/Button';
import './MyBoard.css'

export default function MyBoard() {
    const { boardName } = useParams(); 

    const [newListName, setNewListName] = useState(''); 

    const addNewList = useBoardsStore(state => state.addNewList);
    const nameList = useBoardsStore(state => state.listOfLists);

    const [isListVisible, setIsListVisible] = useState(false); 

    const handleAddList = (event) => {
        event.preventDefault();
        if (newListName.trim()) { 
            addNewList(newListName); 
            setNewListName(''); 
            setIsListVisible(false); 
        }
    };

 
    const toggleAddList = () => {
        setIsListVisible(!isListVisible);
        setNewListName(''); 
    };

    const myBoardList = nameList.map((list, index) => (
        <li className="listItem" key={index}>{list}</li>
    ))

    return (
        <div className="myboard__element">
            <h2>Доска: {boardName}</h2>
            <Button className="addListButton" handleClick={toggleAddList}>
                Добавить список
            </Button>
    
            {isListVisible && (
                <div className="create__list">
                    <form onSubmit={handleAddList}>
                        <h3>Название списка</h3>
                        <input
                            type="text"
                            placeholder='Название списка'
                            value={newListName}
                            onChange={(event) => setNewListName(event.target.value)}
                        />
                        <div className="button__form">
                            <Button type='button' onClick={toggleAddList}>Отмена</Button>
                            <Button type='submit'>Добавить список</Button>
                        </div>
                    </form>
                </div>
            )}
    
            <div className="lists__container">
                <ul>
                    {myBoardList}
                </ul>
            </div>
        </div>
    ); 
}
