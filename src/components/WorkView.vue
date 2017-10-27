<template>
  <div v-if="showWork === true" class="work-container">
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
  import Vue from 'vue';
  import axios from 'axios';
  let data = {
    workName: null,
    imgUrls: [],
    showWork: true,
    projectDescription: null,
  };
  export default {
    name: 'work-view',
    data: function () {
      return data;
    },
    props: ['name'],
    computed: {
      getWork: function () {
        data.workName = this.name;
        axios.get(`/work/${data.workName}`)
          .then((response) => {
            data.showWork = true;
            data.imgUrls = response.data.files.map((file) => {
              return `${window.location.href}work/${data.workName}/${file}`;
            });
            data.projectDescription = response.data.description;
            console.log(response.data);
          });
      },
    },
  }
</script>

<style>
  .work-container {
    width: 100%;
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
