<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>你若盛开清风自来</p>
    <p>风在歌唱，雨滴敲打着窗台</p>
    <p @click="clickMe">点我</p>
    <ul>
      <li v-for="item in list" @click="clickme(item.name,item.age,item.address)">
        {{item.bank_name}} {{item.name}}
      </li>
    </ul>
    <transition name="fade">
        <router-view />
    </transition>
    <input type="" name="" v-model="a.name">
    <p>{{a.name}}</p>
    <ul>
        <li v-for="item in arr" @click="arrme">{{item}}</li>
    </ul>
  </div>
</template>

<script>
    import Vue from 'vue'
export default {
    data() {
      return {
        a: {
          'name':'xiaodai'
        },
        b: {
          'name':'xiaodai'
        },
        arr: [
            0,1,2,3,4,5,6,7,8,9
        ],
        list: [
            {
                'name': '小戴',
                'age': '20',
                'address': '重庆长寿',
                'love': 'more'
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
    created() {
      this.axios.get('/api/pay/quota').then((response)=>{
        console.log(response)
        this.$nextTick(function() {
          this.a.name = response.data.user_msg;
        });
      })
      Vue.set(this.b,'age',20);
      console.log(this.b);
    },
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
        },
        clickMe() {
            this.axios.get('/api/pay/quota').then((response)=>{
                this.list.push('aha');
                this.$nextTick(function() {
                    this.list = response.data.data;
                });
                console.log(response)
            })
        },
        arrme() {
            this.arr.push(10);
            this.$nextTick(function() {
                this.arr.push(11);
                console.log(this.arr);
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

li {
  display: inline-block;
  list-style: none;
}

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
