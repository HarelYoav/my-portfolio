import React from 'react';

interface IProps {
    link: string | undefined;
    title: string;
    icon: string;
    blank: boolean | undefined;
}

function IconLink({ link, title, icon, blank }: IProps) {
   const target = blank ? "_blank" : "_self"
   return (
      <a href={link?.length ? link : ''} target={target} rel="noopener noreferrer" style={{textDecoration: 'none'}}>
         <i className={icon}/> {title}
      </a>
   );
}

export default IconLink;