import React, {useState, useEffect} from 'react'
import * as S from './styled'
import { WiDayCloudy } from "react-icons/wi"

const Watch = () => {

const [time, setTime] = useState(null)
useEffect(()=>{
    setInterval(()=>{
        const localTime= new Date()
        setTime(localTime.toLocaleTimeString())
    }, 1000)
}, [])
    return (
        <S.Container>
            <WiDayCloudy size={250} />
            {time}
        </S.Container>
    )
}

export default Watch