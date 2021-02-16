import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopData } from '../../redux/shop/shop.selectors'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {console.log('[Shop - component]', collections)}
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
})

export default connect(mapStateToProps)(ShopPage)
