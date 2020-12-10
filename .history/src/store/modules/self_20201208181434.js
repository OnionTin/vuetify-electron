  const state = () => ({
    name: '田海生'
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
    state,
    getters,
    actions,
    mutations
  }