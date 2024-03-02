import IconLink from './IconLink';
import { Box, Typography } from '@mui/material';
import classNames from "classnames";
import Style from "./IAm.module.scss";
import { IPortfolio } from '../interfaces';
const iconClass = "fa fa-circle";


function PortfolioBlock({ image, live, source, title, tech }: IPortfolio) {
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
        <Box component={'img'} src={image} alt={'mockup'} height={180} width={1}/>
        <Box display={'flex'} justifyContent={'center'}>
          <Typography variant='subtitle2' color='primary' fontWeight={600} maxWidth={0.9} py={1}>
            {tech}
          </Typography>
        </Box>
        <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
          alignItems={'center'} justifyContent={'space-around'} fontSize={'1.5rem'} fontWeight={400} pb={'2rem'} py={'1rem'}>
            <IconLink link={live} title={'Live'} icon={'fa fa-chrome'} blank={false}/>
            <IconLink link={source} title={'GitHub'} icon={'fa fa-github'} blank={true}/>
        </Box>
      </Box>
     </Box>
  );
}

export default PortfolioBlock;