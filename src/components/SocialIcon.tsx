interface ISocialIcon {
    link: string;
    icon: string;
    label: string;
}

const SocialIcon = ({link, icon, label}: ISocialIcon) => {
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;