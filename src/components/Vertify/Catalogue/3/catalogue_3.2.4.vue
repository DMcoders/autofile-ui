<template>
  <div>
    <label for='input-one'>
      Exhaust system：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_2_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.4"
  }
</script>
