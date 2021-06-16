<template>
  <div>
    <div>
      <label for='input-one'>
        Range of vehicle dimensions (overall):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_11: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.11"
  }
</script>
