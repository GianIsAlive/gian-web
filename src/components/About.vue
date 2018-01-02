<template>
  <section class="about">
    <h3>Born to design and write code</h3>
    <p>I’m a software engineer with experiences in full stack Javascript, Python, and C++ with additional focus on providing intuitive UX/UI.</p>
    <p>I’m into topics like the unconscious mind, time travel, alternate reality, and occasional morbid humor.</p>
    <img :src="gian" alt="gian in desert">
  </section>
</template>

<script>
import gian from '../assets/gian.jpg';
let data = {
  gian,
}
export default {
  name: 'About',
  data () {
    return data;
  }
}
</script>

<style>
  .about {
    margin: 5% 0;
  }
  .about h3, .about p {
    margin-bottom: 1.5%;
  }
  .about h3 {
    font-size: 1.6rem;
  }
  .about p {
    font-size: 1.0rem;
  }
  .about img {
    width: 100%;
  }
</style>

