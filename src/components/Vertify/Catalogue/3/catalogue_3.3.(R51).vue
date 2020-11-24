<template>
  <div>
    <label for='input-one'>
      Electric motor：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {electricmotor: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.(R51)"
  }
</script>
