import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import PortfolioCard from '../../components/PortfolioCard';

const Portfolio = ({state}: any) => {
  console.log(state?.portfolio)
  return (
    <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
      justifyContent={'center'} minHeight={'40vh'} mt={{xs: 5, md: 10}}
    >
      <Container maxWidth='xl'>
        <Grid container display={'flex'} justifyContent={'center'}>
          {state?.portfolio.map(
            (project: {image: string, live: string, source: string, title:string, tech: string}, index: number) => (
            <Grid item xs={12} md={6} key={index}>
              <PortfolioCard 
                image={project.image} 
                live={project.live} 
                source={project.source} 
                title={project.title} 
                tech={project.tech} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Portfolio;