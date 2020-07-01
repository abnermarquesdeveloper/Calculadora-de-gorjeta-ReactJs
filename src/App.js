import React, {useState} from 'react';
import styled from 'styled-components';

const DivRoot = styled.div`
    text-align: center;
`;

const Input = styled.input`
    width: 300px;
    heigth:30px;
    font-size:15px;
    padding: 10px;
    border: 2px solid #000000;
`;

function App() {

  const [conta, setConta] = useState(0);
  const [gorjeta, setGorjeta] = useState(10);


  return (
    <DivRoot>
      <h1>Calculadora de Gorjeta</h1>
      <h4>Quanto deu a conta?</h4>
      <Input type="number" value={conta} onChange={(e)=>setConta(e.target.value)}></Input>
      <h4>Qual a porcentagem da gorjeta?</h4>
      <Input type="number" value={gorjeta} onChange={(e)=>setGorjeta(e.target.value)}></Input>
      <hr/>
      {conta > 0 &&
      <div>
        <p>Sub-Total: R$ {conta}</p>
        <p>Gorjeta: ({gorjeta}%): R$ {conta*gorjeta/100}</p>
        <h4>Total: R$ {parseFloat(conta) + parseFloat(conta*gorjeta/100)}</h4>
      </div>
      }
    </DivRoot>
  );
}

export default App;
