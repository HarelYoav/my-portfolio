import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import {info} from '../../info/info';
import PortfolioCard from '../../components/PortfolioCard';

const Portfolio = () => {
  return (
    <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
      justifyContent={'center'} minHeight={'40vh'} mt={{xs: 5, md: 10}}
    >
      <Container maxWidth='xl'>
        <Grid container display={'flex'} justifyContent={'center'}>
          {info.portfolio.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PortfolioCard image={project.image} live={project.live} source={project.source} title={project.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Portfolio;