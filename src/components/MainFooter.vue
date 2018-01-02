<template>
  <footer>
    <span class="footer-breakline"></span>
    <ul>
      <li><a href="https://www.linkedin.com/in/giancui/" target="_blank">LinkedIn</a></li>
      <li><a href="https://github.com/GianIsAlive" target="_blank">Github</a></li>
      <li><a href="https://www.instructables.com/member/CrazyGian/" target="_blank">Instructable</a></li>
      <li><a href="https://www.instagram.com/gianisalive/" target="_blank">Instagram</a></li>
      <li><a href="https://twitter.com/GianIsAlive" target="_blank">Twitter</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style>
  footer {
    margin-bottom: 5%;
  }
  .footer-breakline {
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #C6C6C6;
    margin-bottom: 1.5%;
  }
  ul li {
    display: inline-block;
  }
  footer a {
    margin-right: 25px;
    font-size: 0.8rem;
    border-bottom: 1px solid transparent;
    transition: all ease 0.8s;
  }
  footer a:hover {
    cursor: crosshair;
    color: #8B8989;
    border-bottom: 1px solid #8B8989;
  }
</style>

