import React, {useEffect, useState} from 'react';
import * as S from './styled';

const Watch = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time.toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [time])

    return (
        <S.Container>
            <S.ClockContainer>
                <S.NumberContainer>
                    <S.Number>1</S.Number>
                    <S.Number>2</S.Number>
                    <S.Number>3</S.Number>
                    <S.Number>4</S.Number>
                    <S.Number>5</S.Number>
                    <S.Number>6</S.Number>
                    <S.Number>7</S.Number>
                    <S.Number>8</S.Number>
                    <S.Number>9</S.Number>
                    <S.Number>10</S.Number>
                    <S.Number>11</S.Number>
                    <S.Number>12</S.Number>
                </S.NumberContainer>
              {time} 
            </S.ClockContainer>
        </S.Container>
    )
}

export default Watch;
