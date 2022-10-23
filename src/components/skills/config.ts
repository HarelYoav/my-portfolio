import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import TS from "./../../images/ts-logo.png";
import Git from "./../../images/git-logo.png";
import NodeJS from "./../../images/nodej-js.png";
import Jenkins from './../../images/jenkins.png';
import Linux from './../../images/linux.png';
import Java from './../../images/java.jpg';
import MongoDB from './../../images/mongodb.png';
import Csharp from './../../images/c#.png';
import Aws from './../../images/aws.png';
import Nginx from './../../images/nginx.png';

export type Skill = {
  name: string;
  img: any;
}

// export const getSkill = (names: string[]) => {
//   let toReturn: Skill[] = [];
//   names.map((name: string) => {
//     skills.map((skill: Skill) => {
//       if(skill.name.toLowerCase() === name.toLowerCase()) {
//         toReturn.push(skill);
//       }
//     });
//   })
//   return toReturn;
// }

export const skills: Skill[] = [
  {
    name: "JavaScript",
    img: JS
  },
  {
    name: "TypeScript",
    img: TS
  },
  {
    name: "NodeJS",
    img: NodeJS
  },
  {
    name: "React",
    img: React
  },
  {
    name: "HTML",
    img: HTML
  },
  {
    name: "CSS",
    img: CSS
  },
  {
    name: "Git",
    img: Git
  },
  {
    name: "Jenkins",
    img: Jenkins
  },
  {
    name: "Linux",
    img: Linux
  },
  {
    name: "Java",
    img: Java
  },
  {
    name: "MongoDB",
    img: MongoDB
  },
  {
    name: "C#",
    img: Csharp
  },
  {
    name: "AWS",
    img: Aws
  },
  {
    name: "Nginx",
    img: Nginx
  },
]