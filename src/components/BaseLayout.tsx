import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "../screens/home/Home";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import AboutMe from '../screens/about/AboutMe';
import Portfolio from '../screens/portfolio/Portfolio';

const BaseLayout = () => {
   const [darkMode, setDarkMode] = useState(false);


   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item style={{position: 'sticky', top: 0, zIndex: 1}} className={darkMode ? Style.dark : Style.light}>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item xs={12}>
               <Routes>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/about'} element={<AboutMe/>}/>
                  <Route path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
               
            </Grid>
            <Grid item xs={12}>
               
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>template created by <a href={'https://paytonpierce.dev'}>Yoav Harel</a></p>
                  <p>&copy; 2022</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

export default BaseLayout;