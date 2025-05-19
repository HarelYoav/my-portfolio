import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "../screens/home/Home";
import AboutMe from '../screens/about/AboutMe';
import Portfolio from '../screens/portfolio/Portfolio';
import Blogs from '../screens/blogs/Blogs';
import JenkinsPipeline from './guides/jenkinsPipeline/JenkinsPipeline';
import {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import { IState } from '../interfaces';

const BaseLayout = () => {
  const [state, setState] = useState<IState>();
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  //Load info.json config file for the portfolio information
  useEffect(()=>{
      fetch('./config/info.json').then(response => {
          response.json().then(json => {
            setState(json);
          })
      })
  }, [])


  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
        <Grid item style={{position: 'sticky', top: 0, zIndex: 1}} className={darkMode ? Style.dark : Style.light}>
          <Navbar state={state} darkMode={darkMode} handleClick={handleClick}/>
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path={'/'} element={<Home home={state?.home}/>}/>
            <Route path={'about'} element={<AboutMe aboutMe={state?.aboutMe}/>}/>
            <Route path={'portfolio'} element={<Portfolio portfolio={state?.portfolio}/>}/>
            <Route path={'my-blog'} >
               <Route index={true} element={<Blogs/>}/>
               <Route index={false} path={'jenkins-pipeline'} element={<JenkinsPipeline/>}/>
            </Route>
          </Routes>
        </Grid>
        <Grid item>
          <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
              py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
            <p>template created by <a href={'https://yoavharel.com'}>Yoav Harel</a></p>
            <p>&copy; 2022</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BaseLayout;