<template>
  <main>
    <TopNav></TopNav>
    <LandingView></LandingView>
  </main>
</template>

<script>
  import TopNav from './components/TopNav.vue';
  import LandingView from './components/LandingView.vue';
  const NotFound = { template: '<p>Page not found</p>' }
  const Home = { template: '<p>home page</p>' }
  const About = { template: '<p>about page</p>' }
  const routes = {
    '/': Home,
    '/about': About
  }
  let data = { currentRoute: window.location.pathname };
  export default {
    name: 'container',
    components: { TopNav, LandingView },
    data() {
      return data;
    },
    computed: {
      ViewComponent () {
        return routes[data.currentRoute] || NotFound;
      }
    },
  }
  console.log('This is current route: ', data.currentRoute);
</script>
