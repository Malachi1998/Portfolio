
import Sidebar from '../Sidebar'
import './index.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>Miracle Malaquias</span> 
            
            <Outlet />

            <span className='tag bottom-tags'>JUNIOR WEB DEVELOPER<br />
            <span className='bottom-tag-html'>Student at Factoria F-5</span></span>
            </div>
        </div>
    )
}
export default Layout