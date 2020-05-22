import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selector';
import './collections-overview.styles.scss';
import CollectionPreview  from '../preview-collection/preview-collection.component'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />))}
    </div>
);

const mapsStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
});


export default connect(mapsStateToProps)(CollectionsOverview);

