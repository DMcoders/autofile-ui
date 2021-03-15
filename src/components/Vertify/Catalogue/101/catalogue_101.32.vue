<template>
  <div>
    <div>
      <label for='input-one'>
        Electronic engine management control unit for NG fuelling：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {eemcufnf101_32: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.32",
    props: ['value']
  }
</script>
