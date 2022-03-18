import * as S from './sidebar-styles'

function Sidebar () {
  return (
    <>
      <S.SidebarStyle>
        <S.LogoContainer>
          <S.LotteryIcon />
          <S.LotteryName>Mega-Sena</S.LotteryName>
        </S.LogoContainer>
      </S.SidebarStyle>
    </>
  )
}

export {
  Sidebar,
}
