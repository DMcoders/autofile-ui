<template>
  <div>
    <label for='input-one'>
      Height  on intended chassis type(s) (for suspensions adjustable for height, indicate normal running position):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_4_3_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.3.3"
  }
</script>
