import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_KEYWORD,
  SET_WIKI_DATA
} from './mutation-types'
import axios from 'axios'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const state = {
  keyword: '',
  wikiData: ''
}

const getters = {
  keyword: (state, getters) => {
    console.log('getters keyword')
    return state.keyword
  },
  wikiData: (state, getters) => {
    console.log('getters wikiData')
    return state.wikiData
  }
}

const actions = {
  [SET_KEYWORD] ({ commit }, keyword) {
    console.log('actions SET_KEYWORD')
    commit(SET_KEYWORD, keyword)
  },
  [SET_WIKI_DATA] ({ commit }) {
    console.log('actions SET_WIKI_DATA')
    let keyword = encodeURI(state.keyword)
    let url = 'https://ja.wikipedia.org/w/api.php?action=query&prop=revisions&titles=' + keyword + '&rvprop=content&format=json&origin=*'
    axios({
      method: 'GET',
      // url: 'https://ja.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&origin=*',
      // url: 'http://ja.wikipedia.org/w/api.php?format=xml&action=query&prop=revisions&titles=%E3%82%A8%E3%83%9E%E3%83%BB%E3%83%AF%E3%83%88%E3%82%BD%E3%83%B3&rvprop=content',
      url: url,
      data: {
      }
    })
      .then(r => {
        console.log('success')
        commit(SET_WIKI_DATA, r)
      })
      .catch(e => {
        console.log('error')
        commit(SET_WIKI_DATA, e)
      })
  }
}

const mutations = {
  [SET_KEYWORD] (state, keyword) {
    console.log('mutations SET_KEYWORD')
    state.keyword = keyword
  },
  [SET_WIKI_DATA] (state, data) {
    console.log('mutations SET_WIKI_DATA')
    state.wikiData = data
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
