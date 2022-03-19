import * as S from './sidebar-styles'

function Sidebar () {
  return (
    <>
      <S.SidebarStyle>
        <S.SelectStyle>
          <option>MEGA-SENA</option>
          <option>QUINA</option>
          <option>LOTOFACIL</option>
          <option>LOTOMANIA</option>
          <option>TIMEMANIA</option>
          <option>DIA DE SORTE</option>
        </S.SelectStyle>
        <S.LogoContainer>
          <S.LotteryIcon />
          <S.LotteryName>MEGA-SENA</S.LotteryName>
        </S.LogoContainer>
        <S.PConcurso>CONCURSO</S.PConcurso>
        <S.NConcurso>4531 - 07/04/2020</S.NConcurso>
      </S.SidebarStyle>
    </>
  )
}

export {
  Sidebar,
}
