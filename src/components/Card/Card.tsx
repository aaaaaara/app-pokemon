interface Props {
  image: string;
  name: string;
  type?: string;
}

function Card({ image, name, type }: Props) {
  return (
    <div>
      <img src={image} alt={name} />
      <p>NAME : {name}</p>
      <p>{type}</p>
    </div>
  );
}

export default Card;
