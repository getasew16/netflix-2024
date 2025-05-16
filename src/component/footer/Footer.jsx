import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'

const Footer=()=> {
return (
    <div className='Footer_outer_container' >
        <div className='Footer_inner_container'>
            <div className='Footer_icons'>
            <FacebookOutlinedIcon />  
            <InstagramIcon/>
            <YouTubeIcon/>
            </div>
            <div className='footer_data'>
                <div>
                    <ul>
                        <li>Auto Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Notice</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporates Information</li>
                </ul>
                </div>
                <div>
                    <ul>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='Service_cod'>
                <p>
                    Service Code
                </p>
                </div>
                <div className='Copy-write'>
                &copy;1997-2024Netflix,Inc
                </div>
        </div>

    </div>
)
}

export default Footer