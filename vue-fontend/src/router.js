import Vue from 'vue'
import Router from 'vue-router'

import SpecHistory from './views/SpecHistory'
import Buildspec from './views/Buildspec'
import Account from './views/Account'
import Home from './views/Home'

import Rods from './views/Category/Rods'
import Hooks from './views/Category/Hooks'
import Lines from './views/Category/Lines'
import Reels from './views/Category/Reels'

import AdHooks from './views/Admin/AdHooks'
import AdReels from './views/Admin/AdReels'
import AdLines from './views/Admin/AdLines'
import AdRods from './views/Admin/AdRods'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/spechistory',
      name: 'spechistory',
      component: SpecHistory
    },
    {
      path: '/buildspec',
      name: 'buildspec',
      component: Buildspec
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/rods',
      name: 'rods',
      component: Rods
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: Hooks
    },
    {
      path: '/lines',
      name: 'lines',
      component: Lines
    },
    {
      path: '/reels',
      name: 'reels',
      component: Reels
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adhooks',
      name: 'adhooks',
      component: AdHooks
    },
    {
      path: '/adrods',
      name: 'adrods',
      component: AdRods
    },
    {
      path: '/adreels',
      name: 'adreels',
      component: AdReels
    },
    {
      path: '/adlines',
      name: 'adlines',
      component: AdLines
    },


  ]
})
