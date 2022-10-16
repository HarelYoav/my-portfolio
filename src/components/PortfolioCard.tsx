import React from 'react';
import IconLink from './IconLink';
import { Box, Grid } from '@mui/material';

interface IProps {
    image: string;
    live: string;
    source: string;
    title: string;
}

function PortfolioBlock({ image, live, source, title }: IProps) {
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Box component={'img'} src={image} alt={'mockup'}/>
        <h1 style={{fontSize: '2rem'}}>{title}</h1>
        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
          alignItems={'center'} fontSize={'1.5rem'} pb={'2rem'} py={'1rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
        </Box>
      </Box>
   );
}

export default PortfolioBlock;