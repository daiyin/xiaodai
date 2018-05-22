<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>你若盛开清风自来</p>
    <p>风在歌唱，雨滴敲打着窗台</p>
    <ul>
      <li v-for="item in list" @click="clickme(item.name,item.age,item.address)">
        {{item.name}}
      </li>
    </ul>
    <transition name="fade">
        <router-view />
    </transition>
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        list: [
            {
                'name': '小戴',
                'age': '20',
                'address': '重庆长寿'
            },
            {
                'name': '小谢',
                'age': '21',
                'address': '重庆长寿'
            },
            {
                'name': '小张',
                'age': '22',
                'address': '重庆长寿'
            },
            {
                'name': '小李',
                'age': '23',
                'address': '重庆长寿'
            }
        ]
      }
    },
    name: 'App',
    components: {
    },
    methods: {
        clickme(name,age,address) {
          const list = {
            'name': name,
            'age': age,
            'address': address
          }
          this.$router.push({
            name: 'goods',
            query: {
              list
            }
          });
        }
    }
}
</script>

<style>
#app {
  text-align: center;
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
