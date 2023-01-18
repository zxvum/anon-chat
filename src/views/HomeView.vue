<template>
  <div class="screen">
    <div class="screen__bg">
      <div class="screen__bg-top"></div>
      <div class="screen__bg-bottom"></div>
    </div>
    <form @submit="submitForm" method="post" class="form">
      <div class="form__logo">
        <p class="form__logo-text">ACVA</p>
        <img src="../assets/img/msg.png" alt="" class="form__logo-img">
      </div>
      <p class="form__info">Anonymous Chat With Random</p>
      <div class="form__inputs">
        <div class="group">
          <input type="text" class="form__inputs-input" v-model="form.name" placeholder="Enter Nickname">
          <p class="text-danger text-sm" v-if="errors.name">{{ errors.name }}</p>
        </div>
        <div class="group">
          <textarea name="status" id="status" v-model="form.status" class="form__inputs-input textarea" placeholder="Include a Status"></textarea>
<!--          <p class="text-danger text-sm">error</p>-->
        </div>
      </div>
      <button class="form__button">Chat Now</button>
    </form>
  </div>
</template>

<style lang="scss">
  @import "../assets/css/login";
</style>

<script>
import router from "@/router";

export default {
  name: 'HomeView',
  data() {
    return {
      errors: {},
      form: {
        name: '',
        status: ''
      }
    }
  },
  methods: {
    submitForm(e) {
      if (this.form.name) {
        localStorage.setItem('name', this.form.name)
        router.push({name: 'chat-room'})
      }

      this.errors = {};

      if (!this.form.name) {
        this.errors.name = 'Name field is empty'
      }

      e.preventDefault()
    }
  }
}
</script>
