<template>
  <div>
    <label for='input-one'>
      Intake system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_2_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.3"
  }
</script>
