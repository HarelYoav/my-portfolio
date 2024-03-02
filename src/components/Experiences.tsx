import Timeline from '@mui/lab/Timeline';
import ExperienceTimeLine from './ExperinceTimeLine'
import {School, Work} from '@mui/icons-material';
import {Box, Typography} from '@mui/material';
import { Experience, icon } from '../interfaces';


const icons = {
  work: <Work/>,
  school: <School/>
}

interface IProps {
  experiences: Experience[] | undefined
}

const Experiences = ({experiences}: IProps) => {
  return (
    <Box>
      <Box ml={5} mb={5}>
        <Typography variant="h2" fontWeight={800} className="heading">Experience</Typography>
        <Typography variant="h6" className="text">My Journey as a developer:</Typography>
      </Box>
      <Timeline position="alternate">
        {experiences?.map((exp: {timeRange: string, role: string, location: string, icon: icon}, idx: number) =>  
          <ExperienceTimeLine 
            key={idx}
            timeRange={exp.timeRange} 
            role={exp.role} 
            location={exp.location} 
            icon={icons[exp.icon]}
          />
        )}
      </Timeline>
    </Box>
  );
}

export default Experiences;