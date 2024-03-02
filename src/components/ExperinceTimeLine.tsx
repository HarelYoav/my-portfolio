import {ReactElement} from 'react'
import {
	TimelineItem, 
	TimelineSeparator, 
	TimelineConnector, 
	TimelineContent, 
	TimelineOppositeContent, 
	TimelineDot} from '@mui/lab';
import { Typography } from '@mui/material';
import { JsxElement } from 'typescript';

interface IProps {
	timeRange: string;
	role: string;
	location: string;
	icon: JSX.Element;
}


const ExperinceTimeLine= ({timeRange, role, location, icon}: IProps) => {
    return (
			<TimelineItem>
			<TimelineOppositeContent
				sx={{ m: 'auto 0' }}
				variant="body2"
			>
				{timeRange}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineConnector />
				<TimelineDot color="primary">
					{icon}
				</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent sx={{ py: '12px', px: 2 }}>
				<Typography variant="h6" component="span">
					{role}
				</Typography>
				<Typography>{location}</Typography>
			</TimelineContent>
		</TimelineItem>
    )
}

export default ExperinceTimeLine;