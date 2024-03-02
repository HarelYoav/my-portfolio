import Style from './Home.module.scss';
import classNames from 'classnames';
import EmojiBullet from "../../components/EmojiBullet";
import SocialIcon from "../../components/SocialIcon";
import {Box} from "@mui/material";
import { IHome } from '../../interfaces';

interface IProps {
  home: IHome | undefined;
}

const Home = ({home}: IProps) => {
   return (
    <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
      justifyContent={'space-evenly'} minHeight={'calc(100vh - 175px)'}>
      <Box className={classNames(Style.avatar, Style.shadowed)} src={home?.selfPortrait} alt={'image of developer'} style={{background: home?.gradient}} component={'img'} width={{xs: '35vh', md: '40vh'}}
        height={{xs: '35vh', md: '40vh'}}
          borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
      <Box>
        <h1>
          Hi, I'm <span key={home?.firstName} style={{background: home?.gradient, backgroundClip: 'text',WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: "transparent"}}>
            {home?.firstName}
          </span>
          <span className={Style.hand}>
            🤚
          </span>
        </h1>
        <h2>I'm {home?.position}.</h2>
        <Box component={'ul'} p={'0.8rem'}>
          {home?.miniBio.map((bio: {emoji: string, text: string}, index: number) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
          ))}
        </Box>
        <Box display={'flex'} gap={'1.5rem'} marginLeft={1} fontSize={{xs: '2rem', md: '2.5rem'}}>
          {home?.socials.map((social:{link: string, icon: string, label: string}, index: number) => (
              <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
   )
}

export default Home;