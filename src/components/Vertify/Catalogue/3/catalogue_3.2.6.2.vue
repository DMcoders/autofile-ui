<template>
  <div>
    <label for='input-one'>
      Type(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type3262: $event.target.value})">
      See annex C page 6
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.6.2"
  }
</script>
