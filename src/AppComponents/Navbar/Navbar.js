import {useState, useEffect ,useRef} from 'react'
import logo from '../../Assets/Images/logo.jpg'
import './navbar.css'

import {NavLink, Link} from 'react-router-dom'
import {IoIosReorder} from 'react-icons/io'


function Navbar() {
    const[toggleBtn, setToggle] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        
        if(toggleBtn){
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }else{
            linksContainerRef.current.style.height = `0px`;
        }
    } , [toggleBtn])
    
    const toggleFunction = ()=>{
        setToggle(!toggleBtn)
    }
    return (
        <nav>
             <div className='nav-center'>
            <div className='nav-header' id={toggleBtn ? 'open' : 'close'}>
               <Link to='/'><img className='logo' src={logo} alt='logo'/></Link> 
               <button className='nav-toggle' onClick={toggleFunction} >
                  <IoIosReorder/>
                </button>
            </div>
            {/* {console.log(logo)} */}
            <div className={`${ toggleBtn ? 'links-container show-container' : 'links-container' }`} 
            ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                <NavLink to='/' onClick={toggleFunction} exact className="normal" activeClassName='active'>Home</NavLink>
                <NavLink to='/product' onClick={toggleFunction} exact className="normal" activeClassName='active'>Product</NavLink>
                </ul>
            </div>
        </div>
        </nav>
       
    )
}

export default Navbar
