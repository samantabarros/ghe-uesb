<template>
  <nav class="nav flex-column justify-content-between">
    <div>
      <router-link
        exact
        :key="i"
        class="nav-link"
        exact-active-class="active"
        :to="{ name: router.name }"
        v-for="(router, i) in routerLinks"
      >
        <i class="fa" :class="`fa-${router.meta.icon}`"></i>
        {{ router.meta.title }}
      </router-link>

      <hr>

      <layout-nota/>
    </div>

    <layout-logout/>
  </nav>
</template>

<script>
import LayoutLogout from './LayoutLogout'
import LayoutNota from './LayoutNota'

export default {
  components: {
    LayoutLogout,
    LayoutNota,
  },
  computed: {
    routerLinks () {
      return this.$router.options.routes.filter(r => r.name !== 'login-vue' && r.name !== 'register-vue')
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  margin-left: -15px;
  width: calc(100% + 30px);
  height: calc(100vh - 49px);
  .nav-link {
    color: var(--white);
    transition: .4s;
    &.active {
      color: var(--featured);
      background-color: transparent;
    }
    &:hover {
      color: var(--dark);
      background-color: var(--featured);
    }
  }
}
</style>
