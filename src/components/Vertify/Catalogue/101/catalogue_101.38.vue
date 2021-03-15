<template>
  <div>
    <div>
      <label for='input-one'>
        Electronic control unit (ECU)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ecu101_38: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.38",
    props: ['value']
  }
</script>
