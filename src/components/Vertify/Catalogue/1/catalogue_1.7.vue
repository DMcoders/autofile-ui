<template>
  <div>
    <div>
      <label for='input-one'>
        Driving cab (forward control or bonneted) (e):：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {dc: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_1.7",
    props: ['value']
  }
</script>
