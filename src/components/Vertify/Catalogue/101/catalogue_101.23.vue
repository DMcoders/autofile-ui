<template>
  <div>
    <div>
      <label for='input-one'>
        Ignition：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ignition101_23: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.23",
    props: ['value']
  }
</script>
