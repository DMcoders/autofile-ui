<template>
  <div>
    <label for='input-one'>
      Nominal output：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type32522: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.5.2.2"
  }
</script>
