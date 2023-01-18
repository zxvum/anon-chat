<template>
  <div class="chat-screen">
    <p class="text-primary logout" @click="logout">logout</p>
    <div class="chat">
      <div class="header">
        <img src="../assets/img/user.png" alt="" class="header__user">
        <p class="header__name">{{ name }}</p>
      </div>
      <div class="messages">
        <div class="container to-right">
          <p class="messages__text my">Привет, я Лиза, я очень люблю смотреть аниме и на серкана болата, а так жизнь очень скучная, хочу уже погулять</p>
        </div>
        <div class="container to-left">
          <p class="messages__text user">Привет, я Лиза, я очень люблю смотреть аниме и на серкана болата, а так жизнь очень скучная, хочу уже погулять</p>
        </div>
      </div>
      <div class="action">
        <input type="text" class="action__input" placeholder="Enter your message">
        <button class="action__button">
          <img src="../assets/img/send.png" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/chat';
</style>

<script>
import router from "@/router";

export default {
  name: 'ChatRoomView',
  data() {
    return {
      name: localStorage.getItem('name')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('name')
      router.push({name: 'home'})
    }
  }
}
</script>