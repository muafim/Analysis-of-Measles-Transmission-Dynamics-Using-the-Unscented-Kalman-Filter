interface ResearchFigureProps {
  src: string;
  alt: string;
  caption: string;
  prominent?: boolean;
}

export function ResearchFigure({ src, alt, caption, prominent = false }: ResearchFigureProps) {
  return (
    <figure className={`research-figure ${prominent ? "prominent" : ""}`}>
      <img src={`${import.meta.env.BASE_URL}${src}`} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
