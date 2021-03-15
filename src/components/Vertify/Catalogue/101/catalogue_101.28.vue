<template>
  <div>
    <div>
      <label for='input-one'>
        Electronic engine management control unit for LPG fuelling：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {eemcuflf101_28: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.28",
    props: ['value']
  }
</script>
