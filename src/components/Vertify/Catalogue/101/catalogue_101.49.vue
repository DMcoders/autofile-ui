<template>
  <div>
    <div>
      <label for='input-one'>
        Windscreen and other windows：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {waow101_49: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.49",
    props: ['value']
  }
</script>
