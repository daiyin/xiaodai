<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <!-- <router-link to="goods" @click="goods"  href="javascript:void(0)">goods</router-link> -->
    <p @click="goods">1111</p>


    
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
