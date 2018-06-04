<template>
    <div id="apps">
        <div style="margin: 0 auto;width: 60%;">
            <span>请输入人你的名字：</span>
            <input type="text" name="" v-model="inputVal" placeholder="请输入你的名字" style="width: 50%;" ref="textVal">
            <button @click="complete">完成</button>
        </div>
        <audio style="opacity: 0;" id="music" ref="music">
            <source src="../music/yidalipao.mp3" ref="musicurl">
        </audio>
        <audio style="opacity: 0;" id="kp" ref="kp">
            <source src="../music/kp.mp3" >
        </audio>
        <audio style="opacity: 0;" id="music1" ref="musicurl1">
            <source src="../music/youyan.mp3" >
        </audio>
        <audio style="opacity: 0;" id="bz" ref="bz" loop="loop">
            <source src="../music/bz.mp3" >
        </audio>
        <transition name="fade">
            <div class="mask" v-show="mask">
                <div class="tellMe" id="demo">{{inputVal}}你喜欢我吗？</div>
                <div class="choice">
                    <div @mouseover="oHyes" class="yes" @click="clickye">{{yes}}</div>
                    <div @mouseover="oHno" class="no" @click="clickye">{{no}}</div>
                </div>
            </div>
        </transition>    

        <div class="maskBg" v-show="fire"></div>
        <img src="../assets/liyunlong.jpeg" width="500" height="300" class="img" v-show="liyunlong" />
        <img src="../assets/kaipao.png" width="300" height="300" class="img" ref="fire" v-show="fires" />
        <img src="../assets/timg.gif" width="100%" height="100%" class="img" ref="blast" v-show="blast" />
        <img src="../assets/youyan.jpeg" width="500" height="300" class="img" ref="fire" v-show="youyan" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputVal: '',
            yes: '喜欢',
            no: '不喜欢',
            mask: false,
            fire: false,
            fires: false,
            blast: false,
            liyunlong: false,
            youyan: false
        }
    },
    created() {
    },
    methods: {
        complete() {
            let han = /^[\u4e00-\u9fa5]+$/;
            let inputvalue = this.$refs.textVal.value;
            let inplength = this.$refs.textVal.value.length;

            if(inplength < 2 || !han.test(inputvalue)) {
                alert('你输入的不是不是汉字，或者你输入的名字长度不足两个汉字');
                return;
            }
            this.mask = true;
            let _this = this;
        },
        oHyes() {
            this.yes = '喜欢'
            this.no = '不喜欢'
        },
        oHno() {
            this.yes = '不喜欢',
            this.no = '喜欢'
        },
        clickye() {
            var text=confirm("这么说你能当我女朋友了？");
            if (text==true){
               this.$refs.musicurl1.play();
            }
            else{
                this.musicandimg();
            }
        },
        musicandimg() {
            this.$refs.music.play();
            this.liyunlong = true;
            this.mask = false;
            this.fire = true;
            setTimeout(function() {
                this.$refs.kp.play()
                this.liyunlong = false;
                this.fires = true;
            }.bind(this),3000);
            setTimeout(function() {
                this.fires = false;
                this.blast = true;
                this.$refs.bz.play();
                console.log(this.$refs.bz.duration);
            }.bind(this),4000)
            setTimeout(function() {
                var t=confirm("再给你一次选择的机会,做不做我女朋友");
                if (t==true){
                   this.$refs.musicurl1.play();
                   this.youyan = true;
                   this.blast = false;
                   this.$refs.bz.pause();
                   this.mask = true;
                   setTimeout(function() {
                       this.youyan = false;    
                       this.fire = false;
                   }.bind(this),1500);
                }else {
                    this.$refs.kp.play();
                    this.fires = true;
                    this.blast = false;
                    setTimeout(function() {
                        this.blast = true;
                    }.bind(this),1000);
                    setTimeout(function() {
                        this.blast = false;
                        this.fire = false;
                        this.fires = false;
                        this.mask = true;
                        this.$refs.bz.pause();
                    }.bind(this),1500);
                    this.$refs.bz.play();
                }
            }.bind(this),4500);
        }
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
select {
    outline: none;
}
input {
  outline: none;
  width: 90%;
  margin: 10px 0 0 0;
  height: 45px;
  padding-left: 10px;
  border: 1px solid #e1e1e1;
}
button {
  width: 100px;
  height: 45px;
  margin-top: 20px;
  background: #3385ff;
  border: 0;
  outline: none;
  color: #fff;
}

li {
  display: inline-block;
  list-style: none;
}
.title {
    text-align: center;
    margin: 20px;
}
.tellMe {
    margin: 20px;
}
.mask {
    width: 500px;
    height: 300px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    margin: 20px auto;
    background: #f1f1f1;
    box-shadow: 5px 5px 5px #e3e3e3;
    position: relative;
}
.choice {
    width: 300px;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.yes {
    width: 80px;
    padding: 5px 0;
    background: #3385ff;
    display: inline-block;
    text-align: center;
    color: #fff;
    border: 1px solid #3385ff;
    cursor: pointer;
}
.no {
    width: 80px;
    padding: 5px 0;
    display: inline-block;
    text-align: center;
    color: #fff;
    background: #3385ff;
    float: right;
    cursor: pointer;
}
 .fade-enter-active, .fade-leave-active {
  transition: .2s;
  position:relative;
  left: 0;
}
.fade-enter, .fade-leave-to .fade-leave-active 
 {
    left: -330px;
}  
.maskBg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: #000;
    opacity: .5;
}
.img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
