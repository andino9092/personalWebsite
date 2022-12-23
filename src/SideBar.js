import EmailIcon from '@mui/icons-material/Email';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./SideBar.css"

export default function Sidebar(props){
    return(

        <div className='SideBar'>
            <a href="mailto:andyli9092@gmail.com?"><EmailIcon className='email'/></a>
            <a href="https://open.spotify.com/user/t5v8mrhmyr4azxtbfwc872xrv?si=8586a951062543f4"><MusicNoteIcon className='music'/></a>
            <a href="https://www.linkedin.com/in/andyli9092/"><LinkedInIcon className='linkedin'/></a>
            <a href="https://www.instagram.com/and.ylii/?hl=en"><InstagramIcon className='insta'/></a>
        </div>
    )
}