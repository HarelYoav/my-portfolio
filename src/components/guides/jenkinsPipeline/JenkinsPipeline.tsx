import React from 'react';
import {blogImgs} from './blog-info';
import {
  Box, 
  Typography, 
  List, 
  ListItem, 
  ThemeProvider, 
  createTheme,
} from '@mui/material';
import './style.css';

const theme = createTheme();
theme.typography.subtitle1 = {
  margin: '1.5rem 0 0.25rem',
  fontSize: '1.25rem',
  fontWeight: 600
}
theme.typography.body1 = {
  marginBottom: '1rem',
  fontSize: '1rem',

  [theme.breakpoints.up('md')]: {
    marginRight: '1rem',
  },
}


const JenkinsPipeline = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box dir={'rtl'} maxWidth='md' display={'flex'} flexDirection={'column'} mx={'auto'} px={2}>
        <Box py={2} my={2}>
          <Typography variant='h4' textAlign={'center'}>
            הגדרת CD/CI Pipeline להעלאה אוטומטית של אפליקציית React לשרת AWS ec2.
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
            <ListItem>2. הגדרת זכרון Swap לשרת</ListItem>
            <ListItem>3. התקנת Java</ListItem>
            <ListItem>4. התקנת Jenkins והגדרתו בשרת</ListItem>
            <ListItem>5. התקנת Nodejs</ListItem>
            <ListItem>6. התקנת Nginx והגדרתו</ListItem>
            <ListItem>7. יצירת ה - Pipeline</ListItem>
          </List>
        </Box>
        <Typography variant='subtitle1'>
          1. הקצאת שרת AWS ec2 אשר מריץ מערכת הפעלה Linux Ubuntu (ניתן לבחור בכל גרסא).
        </Typography>
        <Typography variant='body1'>
          <b>א.</b> נווטו אל: <a href='https://console.aws.amazon.com/ec2/' target='_blank' rel="noopener noreferrer">AWS ec2 Console</a>  (במידה ואין לכם חשבון AWS, זה הזמן להרשם – שימו לב שיש צורך לשים פרטי אשראי,
          אך במדריך זה אנו נשתמש רק בשירותים שהם  Free Tier).
        </Typography>
        <Typography variant='body1'>
          <b>ב.</b> לחצו על “Lunch Instance” – ראו תמונה מצורפת.
        </Typography>
        <Box component="img" src={blogImgs.AWSconsole} alt='' className='image'/>
        <Typography variant='body1'>
          <b>ג.</b> תחת “Name and tags”, מלאו את שם השרת שלכם (יכול להיות כל שם, משמש להבדיל בין השרתים שלכם, במידה ויש לכם יותר מאחד).
        </Typography>
        <Typography variant='body1'>
          <b>ד.</b> תחת “Application and OS Images”, בחרו מערכת הפעלה, מומלץ לבחור בLinux Ubuntu על מנת שתוכלו לעקוב אחרי המדריך בצורה קלה. בנוסף חשוב לשים לב שאתם בוחרים באחת האופציות שהן “Free tier eligible” (כל גרסה תעבוד 18.04, 20.04. 22.04).
        </Typography>
        <Box component="img" src={blogImgs.OsName} alt='' className='image'/>
        <Typography variant='body1'>
          <b>ה.</b> תחת “Instance type”, בחורים את חומרת השרת (מעבד וזכרון RAM). בחרו בt2.micro על מנת להנות מ”Free tier”.
        </Typography>
        <Box component="img" src={blogImgs.InstanceType} alt='' className='image'/>
        <Typography variant='body1'>
          <b>ו.</b> תחת “Key pair (login)”, לחצו על create new key pair (זה המפתח אשר ישמש אותנו להתחברות לשרת שלנו). ישנם כמה אופציות להתחבר לשרת, הדרך הקלה והמהירה היא באמצעות OpenSSH אשר ניתן בקלות להתקין לwindows, או אם אתם משתמשים במחשב האישי שלכם בLinux אין צורך להתקים דבר שכן OpenSSH כבר מובנה בLinux.
        </Typography>
        <Typography variant='body1'>
          תנו שם למפתח שלכם (לשם אין משמעות, השם נועד להקל עליכם בזיהוי במידה ויש לכם כמה שרתים עם כמה מפתחות שונים)
        </Typography>
        <Typography variant='body1'>
          לאחר  שתלחו על “Create key pair”, ירד לכם למחשב קובץ עם סיומת pem. אשר מכיל את המפתח שלכם.
        </Typography>
        <Box component="img" src={blogImgs.CreateKey} alt='' className='image'/>
        <Typography variant='body1'>
          <b>ז.</b> תחת “Network settings”, השאירו את האופציה “Allow SSH traffic from” על Anywhere (אופציית ברירת מחדל), זו בעצם הרשאה לבצע חיבור SSH לשרת שלכם מכל IP שהוא (אפשר גם להגדיר את הIP שלכם על מנת שרק אתם תוכלו להתחבר, אך שימו לב שהIP שלכם יכול להתשנות ולכן לצורך הפשטות נאפשר התחברות מכל IP).
        </Typography>
        <Typography variant='body1'>
          הוסיפו את האופציה  “Allow HTTP traffic from the internet” אשר תאפשר בקשות מהעולם החיצוני לשרת של בפורט 80 (HTTP).
        </Typography>
        <Box component="img" src={blogImgs.NetworkSetting} alt='' className='image'/>
        <Typography variant='body1'>
          <b>ח.</b> תחת “Configure Storage” שנו מ8 ל16 ג'יגה לפחות, מכיוון שהשרת מגיע רק עם 1GB זכרון RAM נקצה לו בהמשך חלק מההארד דיסק כך שימש כזכרון Swap (Paging). - בהמשך אסביר מזה הכוונה.
        </Typography>
        <Box component="img" src={blogImgs.ConfigureStorage} alt='' className='image'/>
        <Typography variant='body1'>
          <b>ט.</b> עכשיו לחצו על “Lunch instance”  ותוך כמה שניות יש לכם שרת באמאזון.
        </Typography>
        <Typography variant='body1'>
          <b>י.</b> לאחר שהשרת שלכם מוכן, לחצו על Connect על מנת להתחבר אליו.
        </Typography>
        <Box component="img" src={blogImgs.ServerReady} alt='' className='image'/>
        <Typography variant='body1'>
          <b>כ.</b> K.	בחרו ב”SSH client”, פתחו את הטרמינל ונווטו לתיקייה בה שמרתם את המפתח שלכם קובץ ה .pem
          והריצו את הפקודה שתחת “Example” בטרמינל בו יש לכם גישה לOpenSSH.
        </Typography>
        <Box component="img" src={blogImgs.SSHClient} alt='' className='image'/>
        <Typography variant='body1'>
          <b>ל.</b> בהתחברות הראשונה לשרת תופיע לכם ההודעה הבאה, הקלידו yes ולחצו Enter על מנת להתחבר.
        </Typography>
        <Box component="img" src={blogImgs.FirstConnect} alt='' className='image'/>
        <Typography variant='body1'>
          כל הכבוד! סיימתם את השלב הראשון של הגדרת השרת באמאזון והתחברות אליו. עכשיו נמשיך בהתקנת שאר הכלים שלנו. 
        </Typography>
        <Typography variant='subtitle1'>
          2. הוספת זכרון Swap.
        </Typography>
        <Typography variant='body1'>
          חלק זה הכרחי בעיקר כאשר עובדים עם השרת בFree Tier כיוון שהוא מגיע רק עם 1GB זכרון RAM, וכאשר על השרת שלנו יהיו מספר תהליכים כמו: Jenkins, Nginx, אפליקציית הReact ועוד..         </Typography>
        <Typography variant='body1'>
          הזכרון לא יספיק ומה שקורה לרוב הוא שהשרת קורס, במיוחד כאשר עושים Build לאפליקציה.
          הקצאת זכרון SWAP מאפשרת למערכת ההפעלה להעביר תהליכים שכרגע לא פעילים לזכרון הSWAP (הארד דיסק) וכך לפנות זכרון RAM לתהליכים אחרים.
        </Typography>
        <Typography variant='body1'>
          <b>א.</b>	אחרי שאתם מחוברים, הריצו בטרמינל את הפקודה: free -h, ניתן ככה לראות כמה זכרון פנוי יש וגם כמה זכרון swap קיים. שימו לב שכרגע זכרון הswap הוא 0 בתים, ואילו זכרון הRAM פנוי הוא כ 640MB ~ (וזה עוד לפני שכל התהליכים שלנו רצים על השרת)
        </Typography>
        <Box component="img" src={blogImgs.FreeRAM} alt='' className='image'/>
        <Typography variant='body1'>
          <b>ב.</b>	הריצו את הפקודות הבאות אחת אחרי השנייה על מנת להקצות 4GB מהארד דיסק שישמש בתור זכרון Swap: 
        </Typography>
        <Box className='code'>
          <Typography>
            $ sudo /bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=4096
          </Typography>
          <Typography>
            $ sudo /sbin/mkswap /var/swap.1
          </Typography>
          <Typography>
            $ sudo chmod 600 /var/swap.1
          </Typography>
          <Typography>
            $ sudo /sbin/swapon /var/swap.1
          </Typography>
        </Box>
        <Typography variant='body1'>
          עכשיו אם תריצו שוב את הפקודה free -h תוכלו לראות שהוקצה זכרון swap. 
        </Typography>
        <Typography variant='subtitle1'>
          3.	התקנת JAVA על השרת (Jenkins  משתמש בJava)
        </Typography>
        <Typography variant='body1'>
          הריצו את הפקודה על מנת לעדכן את רשימת החבילות הזמינות
        </Typography>
        <Box className='code'>
          <Typography>
            $ sudo apt update
          </Typography>
        </Box>
        <Typography variant='body1'>
          הריצו את הפקודה להתקנת Java
        </Typography>
        <Box className='code'>
          <Typography>
            $ sudo apt install default-jre
          </Typography>
        </Box>
        <Typography variant='body1'>
          פדוקה על מנת לוודא איזו גרסת Java הותקנה
        </Typography>
        <Box className='code'>
          <Typography>
            $ java -version
          </Typography>
        </Box>
        <Typography variant='subtitle1'>
          4.	התקנת Jenkins
        </Typography>
        <Typography variant='body1'>
          הריצו את הפקודות הבאות אחת אחרי השניה - <a href='https://www.jenkins.io/doc/book/installing/linux/'>מקור</a>
        </Typography>
        <Box className='code'>
          <Typography>
            $ curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \  /usr/share/keyrings/jenkins-keyring.asc {'>'} /dev/null
          </Typography>
          <Typography>
            $ echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
            https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
            /etc/apt/sources.list.d/jenkins.list {'>'} /dev/null
          </Typography>
          <Typography>
            $ sudo apt-get update
          </Typography>
          <Typography>
            $ sudo apt-get install jenkins
          </Typography>
        </Box>
        <Typography variant='body1'>
            לאחר שההתקנה הסתיימה בהצלחה נתחיל את פעולת Jenkins
        </Typography>
        <Box className='code'>
          <Typography>
            $ sudo systemctl start jenkins
          </Typography>
        </Box>
        <Typography variant='body1'>
          ונבדוק שJenkins אכן רץ על השרת שלנו
        </Typography>
        <Box className='code'>
          <Typography>
            $	sudo systemctl status jenkins
          </Typography>
        </Box>
        <Typography variant='body1'>
          כך נראית ההודעה כשאר Jenkins  רץ על השרת:
        </Typography>
        <Box component="img" src={blogImgs.JenkinsStatus} alt='' className='image'/>
        <Typography variant='body1'>
          על מנת לתחבר לJenkins הכניסו בדפדפן את הכתובת הבאה: 
        </Typography>
        <Box className='code'>
          <Typography>
            {'http://<your-server-ip-adress>:<Jenkins-port>'}
          </Typography>
        </Box>
        <Typography variant='body1'>
          לדוגמא אם הIP של השרת שלכם הוא 123.456.789.321 וJenkins מאזין לפורט 8080 
        </Typography>
        <Typography variant='body1'>
          תכניס בדפדפן את הכתובת הבאה:
        </Typography>
        <Box className='code'>
          <Typography>
            http://123.456.789.321:8080 
          </Typography>
        </Box>
        <Typography variant='body1'>
          בתור ברירת מחדל Jenkins מאזין לבקשות בפורט 8080 (ניתן לשנות זו, אך לא נעשה זאת במדריך הזה). <br/>
          עכשיו תשימו לב שהדף לא יטען, כיוון שאנו צריכים לאשר תקשורת נכנסת בפורט 8080 בשרת שלנו.
        </Typography>
        <Typography variant='body1'>
          כאשר הקמנו את השרת שלנו, נתנו הרשאות לתעבורה נכנסת בפורטוקולים SSH וHTTP מכל IP שהוא. כעת נאפשר גם תקשורת נכנסת בפרוטוקול TCP בפורט 8080.
        </Typography>
        <Typography variant='body1'>
          כאשר אתם במסך ניהול השרת שלכם, לחצו על הטאב הSecurity ולאחר מכן לחצו על הSecurity Group המוגדר לכם.
        </Typography>
        <Box component="img" src={blogImgs.Security} alt='' className='image'/>
        <Typography variant='body1'>
          לאחר מכן לחצו על Edit inbound rules 
        </Typography>
        <Box component="img" src={blogImgs.EditInboudRule} alt='' className='image'/>
        <Typography variant='body1'>
          הוסיפו Rule חדש כפי שמופיע בתמונה הבאה ולחצו על Save rules:
        </Typography>
        <Box component="img" src={blogImgs.NewInboudRule} alt='' className='image'/>
        <Typography variant='body1'>
          ועכשיו נסו שוב לנווט אל:
        </Typography>
        <Box className='code'>
          <Typography>
            {'http://<your-server-ip-adress>:8080'}
          </Typography>
        </Box>
        <Box component="img" src={blogImgs.UnlockJenkins} alt='' className='image'/>
        <Typography variant='body1'>
          אתם יכולים לצפות בססמת המנהל שלכם ע"י הרצת הפקודה הבאה בטרמינל של השרת שלכם:  
        </Typography>
        <Box className='code'>
          <Typography>
            $ sudo cat /var/lib/jenkins/secrets/initialAdminPassword
          </Typography>
        </Box>
        <Typography variant='body1'>
          הכניסו את הססמא ויופיע לכם החלון הבא: <br/>
          בחרו בInstall suggested plugins, ותראו את מסך ההתקנה.
        </Typography>
        <Box component="img" src={blogImgs.InstallPlugins} alt='' className='image'/>
        <Typography variant='body1'>
          לאחר שהסתיימה ההתקנה, תצטרכו להגדיר את חשבון הAdmin  הראשון שלכם. <br/>
          חשוב שאת הפרטים הללו תזכרו, כיוון שהם ישמשו אותכם להתחבר אל Jenkins בפעמים הבאות.
        </Typography>
        <Box component="img" src={blogImgs.FirstAdmin} alt='' className='image'/>
        <Typography variant='body1'>
          וברוכים הבאים ל Jenkins :)
        </Typography>
        <Box component="img" src={blogImgs.WelcomeToJenkins} alt='' className='image'/>
        <Typography variant='subtitle1'>
          5.	התקנת Node js – הריצו את הפקודות הבאות:
        </Typography>
        <Box className='code'>
          <Typography>
            $	curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash
          </Typography>
          <Typography>
            $	sudo apt-get install -y nodejs
          </Typography>
        </Box>
        <Typography variant='body1'>
          כדי לבדקו שההתקנה עברה בהצלחה, הריצו בטרמינל:
        </Typography>
        <Box className='code'>
          <Typography>
            $	node -v
          </Typography>
        </Box>
        <Typography variant='body1'>
          אם node  הותקן כפי שצריך תופיע לכם הגרסא המותקנת אצלכם.
        </Typography>
      </Box>
    </ThemeProvider>

  )
}

export default JenkinsPipeline;