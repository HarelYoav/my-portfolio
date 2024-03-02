import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from './Toggler';
import {Link, useLocation} from "react-router-dom";
import { Box, Typography } from "@mui/material";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About me',
        to: '/about',
        active: 'about'
    },
    {
      name: 'Portfolio',
      to: '/portfolio',
      active: 'portfolio'
    },
    {
      name: 'My-Blog',
      to: '/my-blog',
      active: 'my-blog'
    },
    // {
    //     name: info.initials,
    //     type: 'initials',
    //     to: '/',
    //     active: 'home'
    // },
    
]

interface IProps {
    state: any;
    darkMode: boolean;
    handleClick: () => void;
   
}

const Navbar = ({ state, darkMode, handleClick } : IProps) => {

    const location = useLocation()
    const [active, setActive] = useState(location.pathname.slice(1, location.pathname.length));

    return (
      <Box component={'nav'} width={'100%'} borderBottom={1} pb={1} pt={2}>
        <Box component={'ul'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}
            gap={{xs: '1rem', md: '8rem'}} textTransform={'lowercase'} fontSize={'1rem'}>
          {links.map((link, index) => (
            <Box key={index} component={'li'} className={link.active === active  ? Style.active : ''}
                sx={{borderImageSource: state?.gradient}}>
              <Box className={Style.headerLink}>
                <Link to={link.to} onClick={() => setActive(link.active)}>
                  <Typography style={{paddingBottom: '0.5rem'}}>{link.name}</Typography>
                </Link> 
              </Box>
            </Box>
            ))}
            <li>
              <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </li>
        </Box>
      </Box>
    )
}

export default Navbar