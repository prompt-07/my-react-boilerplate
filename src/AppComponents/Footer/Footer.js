import './footer.css'
import {IconContext} from 'react-icons'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
    let d = new Date()
    let year = d.getFullYear()
    

    return (
        <div className='footer'>
            <IconContext.Provider
         value={{ color: '#bb2525'}}
        >   <div className='socialMedia'>
                <AiFillInstagram />
                <AiFillFacebook />
                <AiFillLinkedin />
                <AiFillTwitterSquare />
            </div>
            </IconContext.Provider>
            <p> &copy; : {year} <a href="https://github.com/prompt-07" 
            rel="noopener noreferrer" target="_blank"
            >prompt07</a> </p>
        </div>
    )
    }

export default Footer