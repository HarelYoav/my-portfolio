import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import TS from "./../../images/ts-logo.png";
import NPM from "./../../images/npm-logo.png";
import Git from "./../../images/git-logo.png";
import Socket from "./../../images/socket.svg";
import NodeJS from "./../../images/nodej-js.png";
import Jenkins from '../../images/jenkins.png';
import Linux from '../../images/linux.png';
import Java from '../../images/java.jpg';
import MongoDB from '../../images/mongodb.png';

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  let toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  })
  return toReturn;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    img: TS
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS
  },
  {
    name: "Socket.io",
    url: "https://socket.io/",
    img: Socket
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
  {
    name: "Jenkins",
    url: "https://git-scm.com/",
    img: Jenkins
  },
  {
    name: "Linux",
    url: "https://git-scm.com/",
    img: Linux
  },
  {
    name: "Java",
    url: "https://git-scm.com/",
    img: Java
  },
  {
    name: "MongoDB",
    url: "https://git-scm.com/",
    img: MongoDB
  },
]