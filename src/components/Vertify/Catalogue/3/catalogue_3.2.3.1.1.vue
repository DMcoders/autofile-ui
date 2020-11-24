<template>
  <div>
    <label for='input-one'>
      Make(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {make32311: $event.target.value})">
      See annex C page 4
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.3.1.1"
  }
</script>
