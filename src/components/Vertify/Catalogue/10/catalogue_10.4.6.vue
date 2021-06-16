<template>
  <div>
    <label for='input-one'>
      Marks assigned for loading conditions:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {maflc: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.4.6"
  }
</script>
