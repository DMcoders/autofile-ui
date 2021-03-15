<template>
  <div>
    <div>
      <label for='input-one'>
        LPG fuelling system: yes/no：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {lfs101_27: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.27",
    props: ['value']
  }
</script>
