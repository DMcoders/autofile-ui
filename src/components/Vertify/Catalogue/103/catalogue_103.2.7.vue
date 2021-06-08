<template>
   <div>
      <label for='input-one'>
        Driving cab (cab-over-engine or bonnet):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10327: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.2.7"
  }
</script>
