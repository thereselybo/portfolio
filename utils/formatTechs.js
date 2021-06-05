export const formatTechs = (techs) => {
  const formattedTechs = techs.map((tech, i) => {
    return (
      <span key={i}>
        {tech.title} {i < techs.length - 1 ? " | " : ""}
      </span>
    );
  });

  return formattedTechs;
};
