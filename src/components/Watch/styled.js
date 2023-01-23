import styled from 'styled-components'
import theme from '../../theme'
import Images  from '../../assets'
console.log(Images.Clock)

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
backgorund-: ${theme.ClockBackground};
`
export const Clock = styled.div`
width : 350px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
background: url("./png/Clock.png") no-repeat center center;
background-size: cover;
border: 4px solid ${theme.ClockBackground};
border-radius: 50%;
box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
            inset 0 -15px 15px rgba(255, 255. 255 .0.05),
            0 15px 15px rgba(0,0, 0.5),
            inset 0 15px 15px rgba(0,0,0,0.5);

`
