<template>
  <div>
    <label for='input-one'>
      Gear ratios：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type46: $event.target.value})">
      Mechanical
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_4.6"
  }
</script>
