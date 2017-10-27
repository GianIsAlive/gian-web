<template>
  <section class="my-work">
    <WorkView v-if="showWork === true" v-bind:name="workName"></WorkView>
    {{getThumbNails}}
    <div class="thumbnail-container" :key="img.id" v-for="img in imageSources">
      <div class="overlay">
        <button class="view-work" v-on:click="getWorkName(img.name)">View</button>
      </div>
      <img :src="img.url" :alt="img.name">
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import WorkView from './WorkView.vue';

  let data = {
    imageSources: [],
    showWork: false,
    workName: null,
  };
  export default {
    name: 'work-view',
    data () {
      return data;
    },
    components: { WorkView },
    methods: {
      getWorkName: function (name) {
        data.showWork = true;
        data.workName = name.split('.')[0];
        window.scrollTo(0, 0);
      }
    },
    computed: {
      getThumbNails: function () {
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
  .thumbnail-container .view-work {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) !important;
    margin: 0 !important;
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
  .overlay .view-work {
    transition: none;
  }
  .thumbnail-container:hover .overlay {
    visibility: visible;
  }
</style>
