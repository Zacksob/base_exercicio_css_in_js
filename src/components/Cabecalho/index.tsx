import styled from 'styled-components'

const CabecalhoContainer = styled.header`
  background-color: var(--cor-principal);
  color: white;
  padding: 1rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`

const Cabecalho = () => (
  <CabecalhoContainer>
    <h1>EBAC Jobs</h1>
  </CabecalhoContainer>
)

export default Cabecalho
