<template>
  <div>
    <label for='input-one'>
      Air-suspension for non-driving axle(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {asfnda: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.2.4"
  }
</script>
