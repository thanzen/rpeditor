// import { createSelector } from 'reselect'
//
// const filterBlocksSelector = state => state.blocks
// const showBlockEditor = state => state.showBlockEditor
//
// const subtotalSelector = createSelector(
//   filterBlocksSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// )
//
// const taxSelector = createSelector(
//   subtotalSelector,
//   taxPercentSelector,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )
//
// export const totalSelector = createSelector(
//   subtotalSelector,
//   taxSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )
