import CollectionItem from "../collection-item/collectionItem";

import "./collection-preview.styles.scss";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
}
