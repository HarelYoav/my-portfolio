import self from "./../images/self.png"
import mock1 from "./../images/battleShip.png"
import mock2 from "../images/rupBnb.png"
import mock3 from "../images/myPortfolio.png"
import mock4 from "../images/mxDash.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
  firstName: "Yoav",
  lastName: "Harel",
  initials: "yh", 
  position: "a Computer Sience Student",
  selfPortrait: self, 
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [ 
    {
      emoji: '🛵',
      text: 'motorbike rider'
    },
    {
      emoji: '🌎',
      text: 'based in IL'
    },
    {
      emoji: "💼",
      text: "Enterprise Support Tier 1 at IBM"
    },
    {
      emoji: "📧",
      text: "yoavbkk@gmail.com"
    }
  ],
  socials: [
    {
      link: "https://github.com/HarelYoav",
      icon: "fa fa-github",
      label: 'github'
    },
    {
      link: "https://www.linkedin.com/in/yoav-harel-9134591bb/",
      icon: "fa fa-linkedin",
      label: 'linkedin'
    },
  ],
  bio: `Hello, I'm Yoav Harel. I'm a student for Computer Science, and working as Enterprise Support Tier 1 at IBM.
  I enjoy coding, solving problems, and collaborate with other persons. My hubbies are Hiking, Motorcycle riding, and relax on the beach.  
  I am looking for a role as a software developer intern / student.`,
  portfolio: [ 
    {
      title: "Battle Ship - Online",
      live: "http://yoavharel.com/battle-ship", 
      source: "https://github.com/HarelYoav/BattleShip-React-Multiplayer", 
      image: mock1,
      tech: 'TypeScript, NodeJS, Express, React, Socket.IO, Jenkins CD/CI, AWS'
    },
    {
      title: "RupBnb",
      live: "http://194.90.158.74/cgroup4/test2/tar5/Pages/index.html",
      source: "https://github.com/HarelYoav/Airbnb-ServerSideExam",
      image: mock2,
      tech: 'C# .net, JavaScript, JQuery, SQL, mssql, firebase'
    },
    {
      title: "My Portfolio",
      live: "https://yoavharel.com",
      source: "https://github.com/HarelYoav/my-portfolio",
      image: mock3,
      tech: 'TypeScript, React, Mui Material, Jenkins CD/CI, AWS'
    },
    {
      title: "Notes and Weather",
      live: "http://mx-dash.herokuapp.com/",
      source: "https://github.com/HarelYoav/mx-dashboard",
      image: mock4,
      tech: 'JavaScript, NodeJS, Express, React, MongoDB, Redux'
    },
  ]
}