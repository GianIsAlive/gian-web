<template>
  <div class="form-container">
    <form action="post" class="contact-form">
      <h3>Let's get coffeeeeeeeeeeeeee:</h3>
      <p v-if="validContact.name === false">Invalid name</p>
      <input
        v-model="contact.name"
        v-on:keyup="validateName()"
        placeholder="Name"
      />
      <p v-if="validContact.subject === false">Invalid subject</p>
      <input
        v-model="contact.subject"
        v-on:keyup="validateSubject()"
        placeholder="subject"
      />
      <p v-if="validContact.email === false">Invalid email</p>
      <input
        v-model="contact.email"
        v-on:keyup="validateEmail()"
        placeholder="Email"
      />
      <p v-if="validContact.message === false">Required</p>
      <textarea
        v-model="contact.message"
        v-on:keyup="validateMessage()"
        placeholder="Message" cols="30" rows="8"
      ></textarea>
      <button type="button" class="submit-form" v-on:click="sendEmail(contact)">Submit</button>
    </form>
    <button v-on:click="showEmail()" class="show-email">{{myEmail}}</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import validator from 'validator';
  let data = {
    contact: {
      name: '',
      subject: '',
      email: '',
      message: '',
    },
    validContact: {
      name: null,
      subject: null,
      email: null,
      message: null,
    },
    myEmail: 'I prefer the actual email address',
  };
  export default {
    name: 'contact-form',
    data () {
      return data;
    },
    methods: {
      validateName: function () {
        const name = data.contact.name.split(' ').join('');
        data.validContact.name = validator.isAlpha(name);
      },
      validateSubject: function () {
        const subject = data.contact.subject.split(' ').join('');
        data.validContact.subject = validator.isAlphanumeric(subject);
      },
      validateEmail: function () {
        data.validContact.email = validator.isEmail(data.contact.email);
      },
      validateMessage: function () {
        data.validContact.message = !validator.isEmpty(data.contact.message);
      },
      validateForm: function () {
        return data.validContact.name && data.validContact.subject && data.validContact.email && data.validContact.message && true;
      },
      sendEmail: function () {
        console.log(this.validateForm());
        if (this.validateForm() === true) {
          axios.post('/contact', data.contact)
            .then((response) => {
              console.log('This is response: ', response);
            });
        }
      },
      showEmail: function () {
        data.myEmail = 'gianthedesigner@gmail.com';
      },
    },
  }
</script>

<style>
  .form-container{
    margin-bottom: 5%;
  }
  .contact-form input,
  .contact-form p,
  .contact-form button,
  .contact-form textarea,
  .show-email {
    margin-top: 1.5%;
  }
  .contact-form p {
    font-size: 0.8rem;
    color: #D90101;
  }
  .contact-form input, 
  .contact-form textarea {
    padding: 0 1.5%;
    font-size: 1rem;
    border: 0.5px solid #C6C6C6;
    outline: none;
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .contact-form input {
    display: block;
    height: 40px;
    width: 66%;
  }
  .contact-form textarea {
    display: block;
    width: 66%;
    padding-top: 1.5%;
  }
  .submit-form {
    margin-bottom: 0 !important;
  }
  .show-email {
    background-color: transparent !important;
    padding: 0 !important;
    margin-bottom: 0 !important;
    box-shadow: none !important;
    font-size: 0.8rem !important;
    color: #1A98D8 !important;
    border-bottom: 0.5px solid transparent !important;
    transition: all ease 0.8s;
  }
  .show-email:hover {
    border-bottom: 0.5px solid #1A98D8 !important;
  }
</style>
