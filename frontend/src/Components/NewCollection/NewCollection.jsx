import React from "react";
import "./NewCollection.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

function NewCollection() {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
