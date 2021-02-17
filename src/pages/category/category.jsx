import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item'

import { selectCategory } from '../../redux/shop/shop.selectors'

import './category.scss'

const CategoryPage = ({ category }) => {
  const { title, items } = category
  return (
    <div className="category-page">
      {console.log('CATEGORY==> ', category)}
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
})

export default connect(mapStateToProps)(CategoryPage)
