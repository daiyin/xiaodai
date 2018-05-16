<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p @click="goods">点我</p>
    <p>你若盛开清风自来</p>
    <transition name="fade">
        <router-view />
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    methods: {
        goods() {
            const id = {
                'name': '小戴',
                'age': '20',
                'address': '重庆长寿'
            }
            this.$router.push({
                name: 'goods',
                query: {
                    id,
                }
            })
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .fade-enter-active, .fade-leave-active {
  transition: .2s;
  position:relative;
  left: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
/* {
    left: -330px;
}  */



.fade-enter-active {
  animation: bounce-in .5s;
}
.fade-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
