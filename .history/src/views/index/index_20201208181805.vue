<template>
  <div class="Index">
    <div>{{name}}</div>
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
  import HelloWorld from "@/components/HelloWorld";
  export default {
    name:'Index',
    components:{ HelloWorld },
    computed:{
      name(){
        return this.$store.state.mySelf.name
      }
    }
  }
</script>