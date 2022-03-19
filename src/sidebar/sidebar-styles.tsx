import styled from 'styled-components'
import TrevoIcon from 'ui/icons/trevo.png'

export const SidebarStyle = styled.aside`
  grid-area: 'sidebar';
  background-color: #6BEFA3;
  height: 100vh;
`

export const SelectStyle = styled.select`
  position: absolute;
  width: 215px;
  height: 45px;
  font-family: 'Montserrat';
  font-weight: 500;
  border-radius: 10px;
  margin-left: 100px;
  margin-top: 60px;
  padding-left: 15px;
  border: none;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  margin-left: 100px;
`

export const LotteryName = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  color: #EFEFEF;
  font-style: normal;
  font-weight: 700;
  line-height: 37px;
  padding: 20px;
`

export const LotteryIcon = styled.img.attrs({
  src: `${TrevoIcon}`,
})`
`

export const PConcurso = styled.p`
  position: absolute;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
`

export const NConcurso = styled.p`
  position: absolute;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
`
