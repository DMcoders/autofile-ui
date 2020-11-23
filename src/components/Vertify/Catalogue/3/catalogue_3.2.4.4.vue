<template>
  <div>
    <label for='input-one'>
      Exhaust silencer containing fibrous materials：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {escfm: $event.target.value})">
      See annex C page 3
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.4.4"
  }
</script>
