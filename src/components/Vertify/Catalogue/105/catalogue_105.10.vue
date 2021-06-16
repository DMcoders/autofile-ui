<template>
  <div>
    <div>
      <label for='input-one'>
        Driving position: left/right:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_10: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.10"
  }
</script>
