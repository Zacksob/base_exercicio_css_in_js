import styled from 'styled-components'

const VagaContainer = styled.div`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

const VagaTitulo = styled.h2`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}) => (
  <VagaContainer>
    <VagaTitulo>{titulo}</VagaTitulo>
    <p>Localização: {localizacao}</p>
    <p>Nível: {nivel}</p>
    <p>Modalidade: {modalidade}</p>
    <p>
      Salário: R${salarioMin} - R${salarioMax}
    </p>
    <p>Requisitos: {requisitos.join(', ')}</p>
    <VagaLink href="#">Ver detalhes</VagaLink>
  </VagaContainer>
)

export default Vaga
