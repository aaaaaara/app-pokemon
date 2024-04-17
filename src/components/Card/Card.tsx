interface Props {
  image: string;
  title: string;
  type?: string;
}

function Card({ image, title, type }: Props) {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{type}</p>
    </div>
  );
}

export default Card;
