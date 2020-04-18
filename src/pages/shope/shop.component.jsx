import React from 'react';
import Shop_Data from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/preview-collection.component'
// import i from '../../images/shop-img/hats'
class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Shop_Data
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">{collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />))}
                <img src='.'/>
            </div>)
    }
}
export default ShopPage;