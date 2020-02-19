import React from "react";

type TitleProps = {
  name: string;
  title: string;
};

const Title: React.FC<TitleProps> = ({ name, title }) => {
  return (
    <div>
      <h1>
        {name}
        <strong>{title}</strong>
      </h1>
    </div>
  );
};

export default Title;
