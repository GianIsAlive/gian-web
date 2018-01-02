<template>
  <section class="landing">
    <article class="cta-intro">
      <h2>{{callToAction.message}}</h2>
      <button v-on:click="showContactForm()">{{callToAction.button}}</button>
      <ContactForm :formShow="formShow"></ContactForm>
      <WorkThumbView></WorkThumbView>
    </article>
  </section>
</template>

<script>
  import ContactForm from './ContactForm.vue';
  import WorkThumbView from './WorkThumbView.vue';
  
  let data = {
    callToAction: {
      message: 'Software Engineer with a passion to create elegant and intuitive UX/UI',
      button: 'Wanna Get Coffee ?',
    },
    formShow: false,
  };
  export default {
    name: 'LandingView',
    components: { ContactForm, WorkThumbView },
    data () {
      return data;
    },
    methods: {
      showContactForm: function () {
        if (data.formShow === false) {
          data.formShow = true;
          data.callToAction.button = 'Maybe Later...';
        } else if (data.formShow === true) {
          data.formShow = false;
          data.callToAction.button = 'Wanna Get Coffee ?';
        }
      },
    },
  }
</script>
<style>
  .landing {
    position: relative;
    margin-top: 5%;
  }
  .cta-intro {
    position: relative;
  }
  .cta-intro h2, .cta-intro button {
    margin-bottom: 5%;
  }
  .cta-intro h2 {
    font-size: 2.4rem;
    color: #949494;
    letter-spacing: 2.4px;
  }
  .cta-intro button {
    background-color: #E86748;
    outline: none;
    border: none;
    padding: 2% 4%;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(149, 29, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 1rem;
    color: white;
    transition: all 0.8s cubic-bezier(0.390, 0.500, 0.150, 1.360);
  }
  .cta-intro button:hover {
    cursor: crosshair;
    background-color: #DB5434;
  }
</style>
