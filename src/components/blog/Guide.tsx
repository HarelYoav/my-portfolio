import React from 'react';
import {blogImgs} from './blog-info';
import {
  Box, 
  Container, 
  Typography, 
  List, 
  ListItem, 
  ThemeProvider, 
  createTheme,
} from '@mui/material';


const theme = createTheme();
theme.typography.subtitle1 = {
  marginBottom: '1rem',
  fontSize: '1.15rem',
  fontWeight: 600
}
theme.typography.body1 = {
  marginBottom: '1rem',
  fontSize: '1rem',

  [theme.breakpoints.up('md')]: {
    marginRight: '1rem',
  },
}



const Guide = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box dir={'rtl'} maxWidth='md' display={'flex'} flexDirection={'column'} mx='auto' >
        <Container className='blogImg'>
          <Box py={2} my={2}>
            <Typography variant='h4' textAlign={'center'}>
              הגדרת CD/CI Pipeline להעלה אוטומטית של אפליקצייית React לשרת AWS ec2.
            </Typography>
            <Typography variant='h6' textAlign={'center'} color={'text.secondary'}>
              מדריך זה ילווה אתכם שלב אחרי שלב להעלאה אוטומטית של אפליקציית React בשימוש עם Jenkins pipeline, Nginx web server והכל מאוחסן על AWS ec2.
            </Typography>
          </Box>
          <Typography variant='subtitle1'>
            כלים: 
          </Typography>
          <Typography>
            React, שרת ec2 באמזון אשר מריץ מערכת הפעלה Ubuntu, Nginx וJenkins.
          </Typography>
          <Typography variant='subtitle1'>
            דרישות קדם:
          </Typography>  
          <Typography>
            אפליקציית React (create-react-app) שהועלתה ל GitHub, תוכלו להשתמש בפרוייקט בו השתמשתי במדריך: <a 
              href='https://github.com/HarelYoav/sample-app' target="_blank" rel="noopener noreferrer">לינק לפרוייקט</a>
          </Typography>
          <Typography variant='subtitle1'>
            שלבים:
          </Typography>
          <Box fontSize={'1rem'}>
            <List>
              <ListItem>1. הקצאת שרת AWS ec2 (Free Tier)</ListItem>
              <ListItem>2. הוספת זכרון Swap לשרת</ListItem>
              <ListItem>3. התקנת Java</ListItem>
              <ListItem>4. התקנת Jenkins והגדרתו בשרת</ListItem>
              <ListItem>5. התקנת Nodejs</ListItem>
              <ListItem>6. התקנת Nginx והגדרתו</ListItem>
              <ListItem>7. יצירת ה - Pipeline</ListItem>
            </List>
          </Box>
          <Typography variant='subtitle1' mt={2} fontWeight={600}>
            1. הקצאת שרת AWS ec2 אשר מריץ מערכת הפעלה Linux Ubuntu (ניתן לבחור בכל גרסא).
          </Typography>
          <Typography variant='body1'>
            <b>א.</b> נווטו אל: <a href='https://console.aws.amazon.com/ec2/' target='_blank' rel="noopener noreferrer">AWS ec2 Console</a>  (במידה ואין לכם חשבון AWS, זה הזמן להרשם – שימו לב שיש צורך לשים פרטי אשראי,
            אך במדריך זה אנו נשתמש רק בשירותים שהם  Free Tier)
          </Typography>
          <Typography variant='body1'>
            <b>ב.</b> לחצו על “Lunch Instance” – ראו תמונה מצורפת
          </Typography>
          <Box component="img" src={blogImgs.AWSconsole} alt='' />
          <Typography variant='body1'>
            <b>ג.</b> תחת “Name and tags”, מלאו את שם השרת שלכם (יכול להיות כל שם, משמש להבדיל בין השרתים שלכם, במידה ויש לכם יותר מאחד)
          </Typography>
          <Typography variant='body1'>
            <b>ד.</b> תחת “Application and OS Images”, בחרו מערכת הפעלה, מומלץ לבחור בLinux Ubuntu על מנת שתוכלו לעקוב אחרי המדריך בצורה קלה – חשבו לשים לב שאתם בוחרים באחת האופציות שהן “Free tier eligible” (כל גרסה תעבוד 18.04, 20.04. 22.04)
          </Typography>
          <Box component="img" src={blogImgs.Name_os} alt=''/>

        </Container>
      </Box>
    </ThemeProvider>

  )
}

export default Guide;