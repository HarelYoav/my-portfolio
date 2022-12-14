import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Card, Typography} from '@mui/material';

const Blogs = () => {
  return (
    <Box dir={'rtl'} display={'flex'} flexDirection={'column'} alignItems={'center'}
    minHeight={'40vh'}>
      <Typography variant='h3' mb={2}>
        הדף עדיין בבנייה
      </Typography>
      <Card sx={{backgroundColor: 'inherit', color: 'inherit', boxShadow: 'rgba(0, 0, 0, 0.16) 2px 2px 2px 5px'}}>
        <Box display={'flex'} p={4} justifyContent={'space-between'} gap={2}>
          <Typography variant='h5'>
            הגדרת CD/CI Pipeline להעלה אוטומטית של אפליקצייית React לשרת AWS ec2.
          </Typography>
          <Link to='jenkins-pipeline' style={{textDecoration: 'none'}}>
            <Button variant='contained'>
              צפה 
            </Button>
          </Link>
        </Box>
      </Card>
    </Box>
  )
}

export default Blogs;