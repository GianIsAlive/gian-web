<template>
  <section class="conversation">
    {{getBlogPost}}
    <article class="blog-posts" v-for="blogPost in blogPosts" v-bind:key="blogPost.id">
      <h3 class="blog-title">{{blogPost.title}}</h3>
      <p class="pub-date">{{blogPost.pubDate}}</p>
      <div class="post-container" v-html="blogPost.content"></div>
      <a :href="blogPost.link" target="blank" :v-if="blogPosts.length !== 0">Read Full Story</a>
    </article>
  </section>
</template>
<script>
import axios from 'axios';
let data = {
  blogPosts: [],
}
export default {
  name: 'conversations',
  data () {
    return data;
  },
  computed: {
    getBlogPost () {
      axios.get('/feed')
        .then((response) => {
          const blogPosts = [];
          response.data.forEach((post) => {
            const postData = {
              title: post.title,
              pubDate: post.pubDate,
              content: post['content:encoded'],
              link: post.guid,
            }
            blogPosts.push(postData);
          });
          data.blogPosts = blogPosts;
        })
        .catch((err) => {
          data.blogPosts = 'Oooops, something is not correct...';
        });
    }
  }
}
</script>
<style>
  .conversation {
    margin: 5% 0;
  }
  .conversation h3 {
    font-size: 1.6rem;
  }
  .blog-posts {
    height: 600px;
    border-bottom: 1px solid black;
    overflow: hidden;
  }
  .blog-posts:last-of-type {
    border-bottom: none;
  }
  .blog-posts a {
    font-size: 0.8rem;
    color: #1A98D8;
    border-bottom: 0.5px solid transparent;
  }
  .blog-posts a:hover {
    border-bottom: 0.5px solid #1A98D8;
  }
  .blog-title,
  .pub-date,
  .post-container figure,
  .post-container p {
    margin-bottom: 2%;
  }
  .pub-date {
    font-size: 0.6rem;
  }
  .post-container figure {
    display: none;
  }
  .post-container figure:first-child {
    display: block;
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  .post-container img {
    display: none;
    width: 100%;
    height: auto;
  }
  .post-container figure img {
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }
  .post-container p {
    display: none;
    font-size: 0.8rem;
  }
  .post-container p:first-of-type {
    display: block;
  }
  .post-container p:nth-of-type(2) {
    display: block;
  }
  .post-container p:nth-of-type(2)::after {
    content: "......";
  }
</style>

