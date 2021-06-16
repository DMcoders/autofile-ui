<template>
  <div>
    <div>
      <label for='input-one'>
        Category of vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_5: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.5"
  }
</script>
