import { createGlobalStyle } from 'styled-components'
import { App } from 'app'

function Root () {
  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
    }

    body {
      background-color: #EFEFEF;
    }
  `
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
}

export {
  Root,
}
