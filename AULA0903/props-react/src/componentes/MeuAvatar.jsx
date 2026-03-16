

export default function MeuAvatar(props){
    return (
    <>
      <h1>{props.perfil}</h1>
      <img src={props.img} width="400"/>
      <h3>Nome: {props.nome}</h3>
      <p>Idade: {props.idade}</p>
      <p>Música: {props.eMsc}</p>
      <p>Disciplina: {props.disciplina}</p>
    </>
  )
}