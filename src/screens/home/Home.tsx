import React from 'react';
import Style from './Home.module.scss';
import classNames from 'classnames';
import EmojiBullet from "../../components/EmojiBullet";
import SocialIcon from "../../components/SocialIcon";
import {Box} from "@mui/material";
import {info} from '../../info/info';

const Home = () => {

   return (
    <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
      justifyContent={'space-evenly'} minHeight={'calc(100vh - 175px)'}>
      <Box className={classNames(Style.avatar, Style.shadowed)} src={info.selfPortrait} alt={'image of developer'} style={{background: info.gradient}} component={'img'} width={{xs: '35vh', md: '40vh'}}
        height={{xs: '35vh', md: '40vh'}}
          borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
      <Box>
        <h1>
          Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            {info.firstName}
          </span>
          <span className={Style.hand}>
            🤚
          </span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component={'ul'} p={'0.8rem'}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
          ))}
        </Box>
        <Box display={'flex'} gap={'1.5rem'} marginLeft={1} fontSize={{xs: '2rem', md: '2.5rem'}}>
          {info.socials.map((social, index) => (
              <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
   )
}

export default Home;