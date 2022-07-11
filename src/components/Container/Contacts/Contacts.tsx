import { MouseEventHandler, useState } from 'react'
import style from './Contacts.module.css'
import { ReactComponent as Link } from "../../../assets/link.svg";
import { ReactComponent as Phone } from "../../../assets/phone.svg";
import { ReactComponent as LinkedIn } from "../../../assets/linkedin.svg";
import { ReactComponent as Mail } from "../../../assets/mail.svg";
import { ReactComponent as GitHub } from "../../../assets/github.svg";
import classNames from 'classnames';

export const Contacts = () => {
    const { container, label, box, button, phone, linkedin, mail, github, unmask, mask } = style
    const [visible, setvisible] = useState<boolean>(false)
    const opacity = classNames(visible ? unmask : mask)
    const handler: MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (!visible) {
            e.preventDefault()
        }
    }
    return (
        <div className={`${container} gridLayout`}>
            <div className={`${label} subhead`}>Choose the link</div>
            <div className={box}>
                <div className={`${button} buttonLink`} onClick={() => setvisible(!visible)}><Link /></div>
                <div className={`${phone} ico ${opacity}`}>
                    <a onClick={handler} href='tel:+380664894676'>
                        <Phone />
                    </a>
                </div>
                <div className={`${linkedin} ico ${opacity}`}>
                    <a onClick={handler} href='https://www.linkedin.com/in/tymofii-sukhariev-9630a2244'>
                        <LinkedIn />
                    </a>
                </div>
                <div className={`${mail} ico ${opacity}`}>
                    <a onClick={handler} href='mailto:tymofii.sukhariev@gmail.com'>
                        <Mail />
                    </a>
                </div>
                <div className={`${github} ico ${opacity}`}>
                    <a onClick={handler} href='https://github.com/Teapotka'>
                        <GitHub />
                    </a>
                </div>
            </div>
        </div>
    )
}
