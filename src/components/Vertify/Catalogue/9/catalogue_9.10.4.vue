<template>
  <div>
    <label for='input-one'>
      Head restraint(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9104: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.4"
  }
</script>
