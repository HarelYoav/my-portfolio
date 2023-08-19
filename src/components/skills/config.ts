import React from "./../../images/react-logo.png";
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
import Python from './../../images/python.png';
import Docker from '../../images/docker.png';
import Bash from '../../images/bash.png';
import K8s from '../../images/Kubernetes.png';



export type Skill = {
  name: string;
  img: any;
}



export const skills: Skill[] = [
  {
    name: "Python",
    img: Python
  },
  {
    name: "JavaScript",
    img: JS
  },
  {
    name: "TypeScript",
    img: TS
  },
  {
    name: "C#",
    img: Csharp
  },
  {
    name: "Java",
    img: Java
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
    name: "Nginx",
    img: Nginx
  },
  {
    name: "Linux",
    img: Linux
  },
  {
    name: "Bash",
    img: Bash
  },
  {
    name: "Docker",
    img: Docker
  },
  {
    name: "Kubernetes",
    img: K8s
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
    name: "AWS",
    img: Aws
  },
  {
    name: "MongoDB",
    img: MongoDB
  },


]