<template>
  <div>
    <label for='input-one'>
      Location of the exhaust outlet：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {loteo: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.4.3"
  }
</script>
