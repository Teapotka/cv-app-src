import path from '../../../assets/webfoto1.webp'
import style from './About.module.css'

export const About = () => {
    const { photo, container, box, info } = style
    return (
        <div className={`${container} gridLayout`}>
            <div className={`${box} boxItem`}>
                <img className={photo} src={path} draggable={false} alt="" />
            </div>
            <div className={`${info} regular`}>Hi there, my name is Tim Sukhariev. I'm a Front-end
                Developer based in Ukraine.
                Working in the field of website and web app development for over 1.5
                years, I have evolved a fertile, groundbreaking and individual approach to each project and
                a sincere desire to please customers with high-quality work.</div>
        </div>
    )
}
