import React from "react";
import {Link} from 'react-router-dom';
import { skills, Skill } from './config';
import {Grid, Box, Typography} from '@mui/material';


const Skills = () => {
  return(
    <Box>
      <Box ml={5} mb={5}>
        <Typography variant="h2" fontWeight={800} className="heading">Skillset</Typography>
        <Typography variant="h6" className="text">Technologies I use in my development:</Typography>
      </Box>
      <Box>
        <Grid container className="skill-icons-gird" display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {skills.map((skill: Skill, idx: number) => {
            return(
              <Grid key={idx} item xs={4} md={2} textAlign='center'>
                <Link to={skill.url} target="_blank">
                  <Box className="skill">
                    <img src={skill.img} alt="Skill logo image" style={{borderRadius:'2vh', height: '7vh', width: '7vh', boxShadow: '0 4px 16px rgb(17 17 26 / 5%), 0 8px 32px rgb(17 17 26 / 5%)'}}/>
                  </Box>
                  <Typography variant="body2" padding={1}>{skill.name}</Typography>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default Skills;