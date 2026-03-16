

export default function BemVindo(props){
    return (
    <>
        <h1>{props.título}</h1>
        <h1>{props.BemVindo}<span>{props.nome}</span></h1>
    </>
  )
}