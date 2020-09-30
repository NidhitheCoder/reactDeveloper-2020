import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 class="title">{title.toUpperCase()}</h1>
      <div class="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
