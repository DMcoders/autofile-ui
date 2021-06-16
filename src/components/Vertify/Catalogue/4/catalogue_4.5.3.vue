<template>
  <div>
    <label for='input-one'>
      Method of control：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_4_5_3: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.5.3"
  }
</script>
