// export default self = {
//     name: '田海生'
// }

const state = () => ({
    items: [],
    checkoutStatus: null
  })
  
  // getters
  const getters = {
    cartProducts: (state, getters, rootState) => {
    },
  }
  
  // actions
  const actions = {
    addProductToCart ({ state, commit }, product) {
    }
  }
  
  // mutations
  const mutations = {
    setCartItems (state, { name }) {
      state.name = items
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }