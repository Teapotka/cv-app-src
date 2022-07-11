import { FC } from 'react'
import style from './Skills.module.css'

type Props = {
    array: Array<string>
}
export const SwipeItem: FC<Props> = ({ array }) => {
    return (
        <div className={style.grid}>
            {array.map((i: string) => <div className={`${style.gridItem} bigregular`} key={array.indexOf(i)}>{i}</div>)}
        </div>
    )
}