
import OrgTree from './src/tree.vue'

export function install (Vue) {
  if (install.installed) {
    return
  }

  install.installed = true

  Vue.component(OrgTree.name, OrgTree)
}

OrgTree.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(OrgTree)
}

export default OrgTree
