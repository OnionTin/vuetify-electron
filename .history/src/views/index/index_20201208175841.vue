<template>
  <div class="Index">
    <div>{{this.$store}}</div>
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
  import HelloWorld from "@/components/HelloWorld";
  export default {
    name:'Index',
    components:{ HelloWorld }
  }
</script>