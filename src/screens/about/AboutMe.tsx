import React from 'react';
import Skills from '../../components/skills/Skills';
import IAm from '../../components/IAm';
import {Box} from '@mui/material';
import Experience from '../../components/Experience';

const AboutMe = () => {
  return (
    <Box>
        <IAm/>
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} 
          justifyContent={'space-evenly'} minHeight={'50vh'}
        >
          <Experience/>
          <Skills/>
        </Box>
    </Box>
  )
}

export default AboutMe;