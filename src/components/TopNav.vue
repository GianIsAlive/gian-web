<template>
  <header class="main-header">
    <h1 class="my-name"><a href="/">Gian</a></h1>
    <nav class="top-nav">
      <ul>
        <li>
          <router-link
            to="/"
            v-on:click.native="switchActiveClass('work')"
            v-bind:class="{ active: isActive.work }">Work</router-link>
        </li>
        <li>
          <router-link 
            to="conversations"
            v-on:click.native="switchActiveClass('conversations')"
            v-bind:class="{ active: isActive.conversations }">Conversations</router-link>
        </li>
        <li>
          <router-link
            to="about"
            v-on:click.native="switchActiveClass('about')"
            v-bind:class="{ active: isActive.about }">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
let data = {
  listItems: ['Work', 'Conversations', 'About'],
  isActive: {
    work: false,
    conversations: false,
    about: false,
  },
}
export default {
  name: 'TopNav',
  data () {
    return data;
  },
  methods: {
    switchActiveClass (className) {
      let isActiveProps = Object.keys(data.isActive);
      isActiveProps.forEach((prop) => {
        data.isActive[prop] = false;
      });
      data.isActive[className] = true;
    }
  },
}
</script>

<style>
  .main-header {
    position: relative;
    margin-top: 10%;
  }
  .my-name, .top-nav {
    display: inline-block;
    vertical-align: middle;
  }
  .top-nav {
    position: absolute;
    right: 0;
  }
  .top-nav ul {
    display: inline-block;
    list-style: none;
    clear: both;
  }
  .top-nav li {
    display: inline-block;
  }
  .top-nav a {
    margin-right: 25px;
    padding-bottom: 1%;
    font-size: 1.0rem;
    border-bottom: 1px solid transparent;
    transition: all ease 0.8s;
  }
  .top-nav li:last-child a {
    margin-right: 0;
  }
  .top-nav a:hover {
    color: #8B8989;
    border-bottom: 1px solid #8B8989;
  }
  .top-nav .active {
    color: #8B8989;
    border-bottom: 1px solid #8B8989;
  }
</style>
