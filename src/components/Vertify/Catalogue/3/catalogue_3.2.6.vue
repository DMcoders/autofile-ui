<template>
  <div>
    <label for='input-one'>
      Pressure charger(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_2_6: $event.target.value})">
      Yes
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.6"
  }
</script>
