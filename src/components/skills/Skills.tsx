import React from "react";
import { skills, Skill } from './config';
import {Grid, Box, Typography} from '@mui/material';


const Skills = () => {
  return(
    <Box>
      <Box ml={5} mb={5}>
        <Typography variant="h2" fontWeight={800} className="heading" pt={{xs:5, md: 0}}>Skillset</Typography>
        <Typography variant="h6" className="text">Technologies I use in my development:</Typography>
      </Box>
      <Box>
        <Grid container className="skill-icons-gird" display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {skills.map((skill: Skill, idx: number) => {
            return(
              <Grid key={idx} item xs={4} md={2} textAlign='center'>
                <a href={skill.url} target="_blank" rel="noreferrer">
                  <Box className="skill">
                    <img src={skill.img} alt="Skill logo" style={{borderRadius:'2vh', height: '7vh', width: '7vh', boxShadow: '0 4px 16px rgb(17 17 26 / 5%), 0 8px 32px rgb(17 17 26 / 5%)'}}/>
                  </Box>
                  <Typography variant="body2" padding={1}>{skill.name}</Typography>
                </a>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default Skills;