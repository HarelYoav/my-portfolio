import React from 'react';
import IconLink from './IconLink';
import { Box, Typography } from '@mui/material';
import classNames from "classnames";
import Style from "./IAm.module.scss";

const iconClass = "fa fa-circle";



interface IProps {
    image: string;
    live: string;
    source: string;
    title: string;
    tech: string;
}

// function PortfolioBlock({ image, live, source, title }: IProps) {
//    return (
//       <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
//         <Box component={'img'} src={image} alt={'mockup'}/>
//         <h1 style={{fontSize: '2rem'}}>{title}</h1>
//         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
//           alignItems={'center'} fontSize={'1.5rem'} pb={'2rem'} py={'1rem'}>
//             <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//             <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
//             </Box>
//             <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//             <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
//             </Box>
//         </Box>
//       </Box>
//    );
// }


function PortfolioBlock({ image, live, source, title, tech }: IProps) {
  return (
     <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Typography variant='h5'>{title}</Typography>
        <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
              width={{xs: '80%', md: '50%'}} borderRadius={'0.5rem'} mb={'4rem'}>
          <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
                fontSize={'1rem'}>
              <i className={classNames(iconClass, Style.red)}/>
              <i className={classNames(iconClass, Style.amber)}/>
              <i className={classNames(iconClass, Style.green)}/>
          </Box>
        <Box component={'img'} src={image} alt={'mockup'} maxHeight={180} width={1}/>
        <Box display={'flex'} justifyContent={'center'}>
          <Typography variant='subtitle2' color='primary' fontWeight={600} maxWidth={0.9} py={1}>
            {tech}
          </Typography>
        </Box>
        <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
          alignItems={'center'} justifyContent={'space-around'} fontSize={'1.5rem'} fontWeight={400} pb={'2rem'} py={'1rem'}>
            <IconLink link={live} title={'Live'} icon={'fa fa-chrome'}/>
            <IconLink link={source} title={'GitHub'} icon={'fa fa-github'}/>
        </Box>
      </Box>
     </Box>
     
  );
}


export default PortfolioBlock;