import styled from "styled-components";

export default function HabitosListaDiasDaSemana(props) {
  const {
    dia,
    indice,
    habitoNovo,
    setHabitoNovo,
    tirarElemento,
    carregandoHabitoNovo,
  } = props;

  if (habitoNovo.days.includes(indice) === false) {
    return carregandoHabitoNovo === false ? (
      <DiaDesselecionado
        onClick={() => {
          setHabitoNovo({ ...habitoNovo, days: [...habitoNovo.days, indice] });
        }}
      >
        {dia}
      </DiaDesselecionado>
    ) : (
      <DiaDesselecionado
        disabled
        onClick={() => {
          setHabitoNovo({ ...habitoNovo, days: [...habitoNovo.days, indice] });
        }}
      >
        {dia}
      </DiaDesselecionado>
    );
  } else {
    return carregandoHabitoNovo === false ? (
      <DiaSelecionado
        onClick={() => {
          setHabitoNovo({
            ...habitoNovo,
            days: tirarElemento(habitoNovo.days, indice),
          });
        }}
      >
        {dia}
      </DiaSelecionado>
    ) : (
      <DiaSelecionado
        disabled
        onClick={() => {
          setHabitoNovo({
            ...habitoNovo,
            days: tirarElemento(habitoNovo.days, indice),
          });
        }}
      >
        {dia}
      </DiaSelecionado>
    );
  }
}

const DiaDesselecionado = styled.button`
  font-size: 20px;
  margin-bottom: 0px;
  margin-right: 4px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  color: #dbdbdb;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DiaSelecionado = styled.button`
  font-size: 20px;
  margin-bottom: 0px;
  margin-right: 4px;
  width: 30px;
  height: 30px;
  background: #dbdbdb;
  color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
