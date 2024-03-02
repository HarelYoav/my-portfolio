import React from 'react';
import Skills from '../../components/Skills';
import IAm from '../../components/IAm';
import {Box} from '@mui/material';
import Experience from '../../components/Experience';

const AboutMe = ({state}: any) => {
  return (
    <Box>
        <IAm state={state}/>
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} 
          justifyContent={'space-evenly'} minHeight={'50vh'}
        >
          <Experience state={state}/>
          <Skills state={state}/>
        </Box>
    </Box>
  )
}

export default AboutMe;