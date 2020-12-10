<template>
  <div class="Index">
    <div></div>
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
        return store.state.mySelf.name
      }
    },
    mounted(){
      console.log(this.$store);
    }
  }
</script>