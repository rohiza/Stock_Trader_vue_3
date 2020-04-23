import Vue from 'vue'

export const fetchData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(resp => resp.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks
        const portfolio = { funds: data.funds, stockPortfolio: data.stockPortfolio }
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}
