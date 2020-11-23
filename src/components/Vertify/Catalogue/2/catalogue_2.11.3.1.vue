<template>
  <div>
    <label for='input-one'>
      Maximum ratio of the coupling overhang to the wheelbase：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mrotcottw: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.3.1"
  }
</script>
