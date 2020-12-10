  const state = () => ({
    name: '田海生',
    sex: 'Man'
  })
  
  // getters
  const getters = {
    getRealName: (state, getters) => {
        return getters.name;
    },
    name: (state)=>{
        return state;
    }
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