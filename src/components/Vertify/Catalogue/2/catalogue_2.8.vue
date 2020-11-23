<template>
  <div>
    <label for='input-one'>
      Technically permissible maximum laden mass：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tpmlm28: $event.target.value})">
      See annex C
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.8"
  }
</script>
