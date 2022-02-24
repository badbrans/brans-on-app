import { useState } from 'react'
import './app.css'


export default function App(){
  const [dias, setDias] = useState('');
  const [horas, setHoras] = useState('');

  const [mensagem, setMensagem] = useState('');
  
function calcularHoras(){
  const totalDias = dias * 8;
  const media = horas - totalDias  ;

  if(media === 0){
  setMensagem("Você não deve e não tem horas sobrando.Total de horas: " + media.toFixed(0))
}else if(media > 0){
  setMensagem("Você tem horas sobrando! Total de horas: " + media.toFixed(0))
}else if(media < 0){
  setMensagem("Você está devendo horas! Total de horas: " + media.toFixed(0))

}

}
  return(
    <div className="app">
      <h1>Cálculo de banco de horas</h1>
      <span> Calcular total de horas</span>

      <div className="area-input"> 
      <input
      type="text"
      placeholder="Total de dias trabalhados. Ex:60"
      value={dias}
      onChange={ (e) => setDias(e.target.value)}
      />
      
      <input
      type="text"
      placeholder="Total de horas trabalhadas. Ex: 200"      
      value={horas}
      onChange={ (e) => setHoras(e.target.value)}     
      />
    <button onClick={calcularHoras}>
      Calcular
      </button>  
    </div>
    <h2>{mensagem}</h2>
    </div>
  )
}
