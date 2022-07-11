import style from './Home.module.css'
import path from '../../../assets/webfoto2.webp'

export const Home = () => {
    const { container, photo, info, box, mt1 } = style
    return (
        <div className={`${container} gridLayout`}>
            <div className={`${box} boxItem`}>
                <img className={photo} src={path} draggable={false} alt="" />
            </div>
            <div className={info}>
                <div className="head">Tymofii Sukhariev</div>
                <div className={`subhead ${mt1}`}>Front-end developer</div>
            </div>
        </div>
    )
}
