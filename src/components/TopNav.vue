<template>
  <header class="main-header">
    <h1 class="my-name">Gian</h1>
    <nav class="top-nav">
      <ul>
        <li><a
          v-on:click="switchActiveA()"
          v-bind:class="{ active: isActive.work }" href="/"
        >Work</a></li>
        <li
          v-bind:class="{ active: isActive.conversations }"
        ><a href="/conversations">Conversations</a></li>
        <li
          v-bind:class="{ active: isActive.about }"
        ><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
let data = {
  listItems: ['Work', 'Conversations', 'About'],
  isActive: {
    work: true,
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
    switchActiveA () {
      console.log('hellooo');
    }
  },
}
</script>

<style>
  .main-header {
    position: relative;
    top: 10%;
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
    cursor: crosshair;
    color: #8B8989;
    border-bottom: 1px solid #8B8989;
  }
  .top-nav .active {
    color: #8B8989;
    border-bottom: 1px solid #8B8989;
  }
</style>
