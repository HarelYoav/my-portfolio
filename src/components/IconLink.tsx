import React from 'react';
import {Link} from 'react-router-dom';


interface IProps {
    link: string;
    title: string;
    icon: string;
}

function IconLink({ link, title, icon }: IProps) {
   return (
      <Link to={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon}/> {title}
      </Link>
   );
}

export default IconLink;