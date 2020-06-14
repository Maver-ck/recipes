import React from "react";
import data from "../../data/data.json";

const ImageList = () => {
  data.map((a) => console.log(a.name.replace(/\s/g, "")));
  return (
    <div className="ui stackable cards">
      {data.map((a) => (
        <div className="card" key={a.id}>
          <div className="image">
            <img
              src={require(`../../data/images/${a.name.replace(
                /\s/g,
                ""
              )}.jpg`)}
              alt={a.name}
            />
          </div>
          <div className="content">
            <div className="header">{a.name}</div>
            <div className="meta">{a.type}</div>
            <div className="description" style={{ whiteSpace: "pre-line" }}>
              {a.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
