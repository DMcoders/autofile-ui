<template>
  <div>
    <div>
      <label for='input-one'>
        Minimum permissible width:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_11_1_1_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.11.1.1.2"
  }
</script>
