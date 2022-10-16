import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import {info} from '../info/info';
import Style from "./IAm.module.scss";
import classNames from "classnames";
const iconClass = "fa fa-circle";

const theme = createTheme();

theme.typography.h6 = {
  fontFamily: 'Roboto, Helvetica, Arial ,sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: 1.75,
  letterSpacing: '0.00938em',
  color: '#f8f8f8',
 
  [theme.breakpoints.up('md')]: {
    fontFamily: 'Roboto, Helvetica, Arial ,sans-serif',
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
};

const IAm = () => {
  return (
    
    <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
      justifyContent={'center'} minHeight={'40vh'} mt={{xs: 5, md: 5}}
    >
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
            width={{xs: '80%', md: '50%'}} borderRadius={'0.5rem'} mb={'4rem'}>
          <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
                fontSize={'1rem'}>
              <i className={classNames(iconClass, Style.red)}/>
              <i className={classNames(iconClass, Style.amber)}/>
              <i className={classNames(iconClass, Style.green)}/>
          </Box>
          <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
                sx={{backgroundColor: '#27242f'}} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
              <ThemeProvider theme={theme}>
                <Typography variant='h6' my={1}>{info.bio}</Typography>
              </ThemeProvider>
          </Box>
      </Box>
    </Box>
  )
}

export default IAm;