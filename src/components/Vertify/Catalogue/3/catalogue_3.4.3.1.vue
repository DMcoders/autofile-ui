<template>
  <div>
    <label for='input-one'>
      Selectable modes：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {selectablemodes: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.3.1"
  }
</script>
