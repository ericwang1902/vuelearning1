<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <Hello propt="父组件向子组件传值"></Hello>
    <input v-model="newItem" @keyup.enter="addNew()">
    <ul>
      <li 
      v-for = "item in items" 
      v-bind:class="[liClass,{finished:item.isFinished}]" 
      v-text="item.label"
      v-on:click="toggleFisnish(item)"></li>
    </ul>
    <p>child tells me : {{childWords}}</p>
    <son></son>
    
  </div>
</template>

<script>
import store from './utils/store'
import Hello from './components/Hello'
import son from './components/sontoparent'

export default {
  components:{
    Hello,son
  },
  data:function(){
    return {
      title:'<span>?</span>this is a todo list',
      items:store.getValue(),
      liClass:'this is liClass',
      newItem:'',
      childWords:''
    }
  },
  methods:{
    toggleFisnish:function(item){
      console.log(item.label+' '+item.isFinished);
      item.isFinished = !item.isFinished
    },
    addNew:function(){
      this.items.push({
        label:this.newItem,
        isFinished:false
        })
        this.newItem=''
    }

  },
  watch:{
      items:{
        handler: function(items){
          store.setValue(items)
        },
        deep:true
      }
    },
    events:{
      'child-tellme-something': function(msg){
      this.childWords = msg;
    }
}
}
</script>

<style>
.finished {
  text-decoration:underline;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>