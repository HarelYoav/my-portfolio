import self from "./../images/self.png"
import mock1 from "./../images/battleShip.png"
import mock2 from "../images/rupBnb.png"
import mock3 from "../images/myPortfolio.png"
import mock4 from "../images/mxDash.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Yoav",
    lastName: "Harel",
    initials: "yh", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Computer Sience Student",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Battle Ship - Online",
            live: "http://yoavharel.com/battle-ship", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            tech: 'TypeScript, NodeJS, Express, React, Socket.IO, Jenkins CD/CI, AWS'
        },
        {
            title: "RupBnb",
            live: "http://194.90.158.74/cgroup4/test2/tar5/Pages/index.html",
            source: "https://github.com/HarelYoav/Airbnb-ServerSideExam",
            image: mock2,
            tech: 'C# .net, JavaScript, JQuery, SQL, mssql'
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
            tech: 'JavaScript, NodeJS, Express, React, MongoDB'
        },

    ]
}