<template>
  <div>
    <div>
      <label for='input-one'>
        Drawbar trailer: 
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_2_11_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.1"
  }
</script>
