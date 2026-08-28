
export default function CardAssunto({ name, concluido }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{concluido ? 'Concluído' : 'Pendente'}</p>
    </div>
  );
}
