<template>
  <div>
    <label for='input-one'>
      Vehicle is/is not (1) suitable for towing loads：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {vinsftl: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.5"
  }
</script>
