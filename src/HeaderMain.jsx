import 'boxicons'
import { Link } from 'react-router-dom'
import './app/styles/HeaderMain.css'
export default function HeaderMain(){
    return(
        <>
            <div className='header__main'>
                <Link  to='/boards' >
                    <box-icon name='smile' size='4em' color='white'></box-icon> 
                </Link>
            </div>
        </>
    )
}