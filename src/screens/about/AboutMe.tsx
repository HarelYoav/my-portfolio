import Skills from '../../components/Skills';
import Bio from '../../components/Bio';
import Experiences from '../../components/Experiences';
import {Box} from '@mui/material';
import { IAboutMe } from '../../interfaces';

interface IProps {
  aboutMe: IAboutMe | undefined;
}

const AboutMe = ({aboutMe}: IProps) => {
  return (
    <Box>
        <Bio bio={aboutMe?.bio}/>
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} 
          justifyContent={'space-evenly'} minHeight={'50vh'}
        >
          <Experiences experiences={aboutMe?.experiences}/>
          <Skills skills={aboutMe?.skills}/>
        </Box>
    </Box>
  )
}

export default AboutMe;