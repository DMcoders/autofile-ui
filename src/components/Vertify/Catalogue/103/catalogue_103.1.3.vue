<template>
   <div>
      <label for='input-one'>
        Means of identification of type, if marked on the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10313: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.1.3"
  }
</script>
