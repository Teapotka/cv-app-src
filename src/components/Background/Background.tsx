import { useState } from 'react'
import style from './Background.module.css'
import './BackgroundAnime'

export const Background = () => {
    const [compare, setcompare] = useState(window.innerHeight >= window.innerWidth)
    const fit = () => {
        if (compare) {
            if (window.innerHeight < window.innerWidth) { setcompare(!compare) }
        }
        else {
            if (window.innerHeight >= window.innerWidth) { setcompare(!compare) }
        }
    }
    window.addEventListener('resize', fit)
    return (
        <div className={style.container} data-testid='background'>
            {compare ? <svg xmlns='http://www.w3.org/2000/svg' height='100%' data-testid='h-orientated' viewBox='0 0 1300 1300'>
                <rect fill='#ff9d00' width='1800' height='1800' />
                <g stroke='#000' strokeWidth={80.8} strokeOpacity={0}>
                    <circle id='sector1' fill='#ff9d00' cx='0' cy='0' r='1800' />
                    <circle id="sector2" fill='#fb8d17' cx='0' cy='0' r='1700' />
                    <circle id="sector3" fill='#f47d24' cx='0' cy='0' r='1600' />
                    <circle id="sector4" fill='#ed6e2d' cx='0' cy='0' r='1500' />
                    <circle id="sector5" fill='#e35f34' cx='0' cy='0' r='1400' />
                    <circle id="sector6" fill='#d85239' cx='0' cy='0' r='1300' />
                    <circle id="sector7" fill='#cc453e' cx='0' cy='0' r='1200' />
                    <circle id="sector8" fill='#be3941' cx='0' cy='0' r='1100' />
                    <circle id="sector9" fill='#b02f43' cx='0' cy='0' r='1000' />
                    <circle id="sector10" fill='#a02644' cx='0' cy='0' r='900' />
                    <circle id="sector11" fill='#901e44' cx='0' cy='0' r='800' />
                    <circle id="sector12" fill='#801843' cx='0' cy='0' r='700' />
                    <circle id="sector13" fill='#6f1341' cx='0' cy='0' r='600' />
                    <circle id="sector14" fill='#5e0f3d' cx='0' cy='0' r='500' />
                    <circle id="sector15" fill='#4e0c38' cx='0' cy='0' r='400' />
                    <circle id="sector16" fill='#3e0933' cx='0' cy='0' r='300' />
                    <circle id="sector17" fill='#2e062c' cx='0' cy='0' r='200' />
                    <circle id="sector18" fill='#210024' cx='0' cy='0' r='100' />
                </g>
            </svg>
                :
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' data-testid='w-orientated' viewBox='0 0 1300 1300'>
                    <rect fill='#ff9d00' width='1800' height='1800' />
                    <g stroke='#000' strokeWidth={80.8} strokeOpacity={0}>
                        <circle id='sector1' fill='#ff9d00' cx='0' cy='0' r='1800' />
                        <circle id="sector2" fill='#fb8d17' cx='0' cy='0' r='1700' />
                        <circle id="sector3" fill='#f47d24' cx='0' cy='0' r='1600' />
                        <circle id="sector4" fill='#ed6e2d' cx='0' cy='0' r='1500' />
                        <circle id="sector5" fill='#e35f34' cx='0' cy='0' r='1400' />
                        <circle id="sector6" fill='#d85239' cx='0' cy='0' r='1300' />
                        <circle id="sector7" fill='#cc453e' cx='0' cy='0' r='1200' />
                        <circle id="sector8" fill='#be3941' cx='0' cy='0' r='1100' />
                        <circle id="sector9" fill='#b02f43' cx='0' cy='0' r='1000' />
                        <circle id="sector10" fill='#a02644' cx='0' cy='0' r='900' />
                        <circle id="sector11" fill='#901e44' cx='0' cy='0' r='800' />
                        <circle id="sector12" fill='#801843' cx='0' cy='0' r='700' />
                        <circle id="sector13" fill='#6f1341' cx='0' cy='0' r='600' />
                        <circle id="sector14" fill='#5e0f3d' cx='0' cy='0' r='500' />
                        <circle id="sector15" fill='#4e0c38' cx='0' cy='0' r='400' />
                        <circle id="sector16" fill='#3e0933' cx='0' cy='0' r='300' />
                        <circle id="sector17" fill='#2e062c' cx='0' cy='0' r='200' />
                        <circle id="sector18" fill='#210024' cx='0' cy='0' r='100' />
                    </g>
                </svg>
            }
        </div>
    )
}
