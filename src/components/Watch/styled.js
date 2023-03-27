import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`  
  background-color: ${theme.black};
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
`
export const ClockContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 200px;
border-radius: 50%;
background-color: #fff;
border: 4px solid ${theme.black};
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
margin: 0 auto;
`
export const NumberContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
`
export const Number = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: bold;
width: 20px;
height: 20px;
background-color: #fff;
border-radius: 50%;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`


