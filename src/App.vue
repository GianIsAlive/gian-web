<template>
  <main id="main">
    <TopNav></TopNav>
    <router-view></router-view>
    <MainFooter></MainFooter>
  </main>
</template>

<script>
  import VueRouter from 'vue-router';

  import TopNav from './components/TopNav.vue';
  import LandingView from './components/LandingView.vue';
  import WorkView from './components/WorkView.vue';
  import Conversations from './components/Conversations.vue';
  import About from './components/About.vue';
  import MainFooter from './components/MainFooter.vue';

  const routes = [
    { path: '/', component: LandingView },
    { path: '/work/:name', component: WorkView },
    { path: '/conversations', component: Conversations },
    { path: '/about', component: About }
  ];
  const router = new VueRouter({ mode: 'history', routes });

  export default {
    name: 'container',
    router,
    components: { TopNav, LandingView, WorkView, Conversations, About, MainFooter },
  }
</script>
