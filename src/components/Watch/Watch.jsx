import React, { useState, useEffect} from 'react'
import * as S from './styled'
import Images from '../../assets'
console.log(Images.Clock)

const Watch = () => { 
    const [clock, setClock] = useState(null)
    useEffect(() =>{
        setInterval(()=>{
            const Time= new Date()
            setClock(Time.toLocaleTimeString())
        }, 1000)
    }, [])
    return (
        <S.Container>
            <S.Clock>
                {/* <S.Hour>
                    <S.Hr></S.Hr>
                </S.Hour>
                <S.Minutes>
                    <S.Minut></S.Minut>
                </S.Minutes>
                <S.Seceonds>
                    <S.Sec></S.Sec>
                </S.Seceonds> */}
            </S.Clock>
        </S.Container>
    )
}

export default Watch