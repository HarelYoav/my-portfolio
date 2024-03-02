
export interface IHome {

        firstName: string,
        lastName: string,
        initials: string, 
        position: string,
        selfPortrait: string, 
        gradient: string,
        baseColor: string,
        miniBio: [{
            emoji: string,
            text: string
        }]
        socials: [{
            link: string,
            icon: string,
            label: string
        }]
    
}

export interface IPortfolio {
    title: string;
    live: string;
    source: string;
    image: string;
    tech: string;
}

export type Skill = {
    name: string;
    img: any;
}

export type icon = 'work' | 'school';

export type Experience = {
    timeRange: string;
    role: string;
    location: string;
    icon: icon;
}
export interface IAboutMe {

        bio: string;
        experiences: Experience[] | undefined,
        skills: Skill[] | undefined

}

export interface IState {
    home: IHome
    portfolio: IPortfolio[] | undefined
    aboutMe: IAboutMe | undefined
}