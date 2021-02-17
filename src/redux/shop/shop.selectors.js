import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collections,
)

// Get collections as an array to use it in collections-overview to map over and display components
export const selectCollectionForPreview = createSelector(
  [selectShopData],
  (collections) => Object.keys(collections).map((key) => collections[key]),
)

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectShopData], (categories) => categories[categoryUrlParam])
