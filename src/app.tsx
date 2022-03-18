import { Sidebar } from 'sidebar/sidebar'
import { Content } from 'content/content'
import styled from 'styled-components'

function App () {
  return (
    <>
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-areas:
    'sidebar content'
`

export {
  App,
}
