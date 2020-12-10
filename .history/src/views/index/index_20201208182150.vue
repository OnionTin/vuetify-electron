<template>
  <div class="Index">
    <div>作者:{{name}}</div>
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
  import HelloWorld from "@/components/HelloWorld";
  import { mapState } from 'vuex'
  export default {
    name:'Index',
    components:{ HelloWorld },
    computed: mapState({
      name: state=> state.mySelf.name
    })
  }
</script>