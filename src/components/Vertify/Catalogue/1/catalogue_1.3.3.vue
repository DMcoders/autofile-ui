<template>
  <div>
    <div>
      <label for='input-one'>
        Powered axles (number, position, interconnection)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {pa: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_1.3.3",
    props: ['value']
  }
</script>
