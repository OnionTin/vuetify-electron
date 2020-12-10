  const state = () => ({
    name: '田海生',
    sex: 'Man'
  })
  
  // getters
  const getters = {
    cartProducts: (state, getters, rootState) => {
    },
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