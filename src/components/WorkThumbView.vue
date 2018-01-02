<template>
  <section class="my-work">
    <!-- <WorkView v-if="showWork === true" v-bind:name="workName"></WorkView> -->
    <router-view></router-view>
    {{getThumbNails}}
    <div class="thumbnail-container" :key="img.id" v-for="img in imageSources">
      <div class="overlay">
          <router-link
            class="view-work-btn"
            :to="'work/' + getWorkName(img.name)">View</router-link>
        <!-- <button class="view-work" v-on:click="getWorkName(img.name)">View</button> -->
      </div>
      <img :src="img.url" :alt="img.name">
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

  let data = {
    imageSources: [],
    workName: null,
  };

  export default {
    name: 'work-view',
    data () {
      return data;
    },
    methods: {
      getWorkName (name) {
        window.scrollTo(0, 0);
        return name.split('.')[0];
      }
    },
    computed: {
      getThumbNails () {
        if (data.imageSources.length !== 0) return;
        axios.get('/thumb')
          .then(function (response) {
            response.data.forEach(d => {
              let obj = {
                url: window.location.href + 'thumb/' + d,
                name: d.split('_')[1],
              }
              data.imageSources.push(obj);
            });
          });
      },
    },
  }
</script>

<style>
  .my-work {
    width: 100%;
    margin-bottom: 5%;
  }
  .my-work img {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .thumbnail-container {
    position: relative;
    display: inline-block;
    width: 50%;
    transition: all ease 0.8s;
  }
  .view-work-btn {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 25%;
    text-align: center;
    color: #FFFFFF;
    font-size: 1.0rem;
    font-weight: 600;
    z-index: 1;
  }
  .thumbnail-container .overlay {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(95, 190, 207, 0.4);
    z-index: 0;
  }
  .thumbnail-container:hover .overlay {
    visibility: visible;
  }
</style>
