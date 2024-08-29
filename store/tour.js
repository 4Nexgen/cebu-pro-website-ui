export const state = () => ({
  data: [],
  single: []
})

export const getters = {
  DATA(state) {
      return state.data
  },
  SINGLE(state) {
      return state.single
  },
}

export const mutations = {
  setTours(state, data) {
    state.data = data;
  },

  setTour(state, data) {
    state.single = data;
  },
}

export const actions = {
  async fetchList(context) {
    let response = await this.$axios.get('/tour-by-category');
    if (response.status == 200) {
      context.commit('setTours', response.data.data)
    }
  },

  async fetchOne(context, id=1) {
    let response = await this.$axios.get(`/tour-with-category/${id}`);
    if (response.status == 200) {
      context.commit('setTour', response.data)
        return response.data;
    }
},

}
