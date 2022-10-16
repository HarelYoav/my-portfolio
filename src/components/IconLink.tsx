import React from 'react';


interface IProps {
    link: string;
    title: string;
    icon: string;
}

function IconLink({ link, title, icon }: IProps) {
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon}/> {title}
      </a>
   );
}

export default IconLink;