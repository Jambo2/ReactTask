import { useParams } from 'react-router-dom';

export default function MyBoard(){
    const { boardName } = useParams();
    return(
        <>
       <div>
            <h1>Доска: {boardName}</h1>
             <p>{boardName}</p>
        </div>
        </>
    )
}