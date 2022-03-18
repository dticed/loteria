import styled from 'styled-components'
import TrevoIcon from 'ui/icons/trevo.png'

export const SidebarStyle = styled.aside`
  grid-area: 'sidebar';
  background-color: #6BEFA3;
  height: 100vh;
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
  padding: 10px;
`

export const LotteryIcon = styled.img.attrs({
  src: `${TrevoIcon}`,
})`
`
