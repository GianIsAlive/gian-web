<template>
  <div class="work-container">
    {{getWork}}
    <div v-if="projectDescription !== null" class="work-description">
      <h3>{{projectDescription.name}}</h3>
      <p><span>Description: </span>{{projectDescription.description}}</p>
      <p><span>Users: </span>{{projectDescription.users}}</p>
      <p><span>Purpose: </span>{{projectDescription.purpose}}</p>
      <p><span>Process: </span>{{projectDescription.process}}</p>
      <p><span>Role: </span>{{projectDescription.role}}</p>
    </div>
    <img
      v-bind:key="url.id"
      v-for="url in imgUrls"
      :src="url"
      alt="project">
  </div>
</template>

<script>
  import axios from 'axios';

  let data = {
    workName: null,
    imgUrls: [],
    projectDescription: null,
  };
  export default {
    name: 'work-view',
    data () {
      return data;
    },
    computed: {
      getWork () {
        data.workName = window.location.pathname;
        axios.get(data.workName)
          .then((response) => {
            data.imgUrls = response.data.files.map((file) => {
              return `${window.location.href}/${file}`;
            });
            data.projectDescription = response.data.description;
          });
      },
    },
  }
</script>

<style>
  .work-container {
    margin: 5% 0;
    width: 100%;
  }
  .work-container img {
    width: 100%;
  }
  .work-container img:last-child {
    margin-bottom: 0;
  }
  .work-container img, .work-description {
    margin-bottom: 2%;
  }
  .work-description h3 {
    font-size: 1.4rem;
  }
  .work-description span {
    font-weight: 600;
  }
  .work-description p {
    margin-top: 1%;
    font-size: 1rem;
  }
</style>
