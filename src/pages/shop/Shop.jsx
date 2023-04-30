import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

export default class Shop extends Component {
  constructor() {
    super();

    this.state = { collections: SHOP_DATA };
  }
  render() {
    return (
      <div>
        {this.state.collections.map((collection) => {
          let previewItems = collection.items.slice(0, 4);
          return (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={previewItems}
            />
          );
        })}
      </div>
    );
  }
}
