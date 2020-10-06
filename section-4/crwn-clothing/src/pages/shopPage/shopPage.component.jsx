import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import SHOP_DATA from "./shop.data";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import { selectCollections } from "../../redux/shop/shop.selectors";
// import collectionsOverview from "../../components/collections-overview/collections-overview.component";

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collections: SHOP_DATA
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <collectionsOverview />
  </div>
);

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// });

export default ShopPage;
