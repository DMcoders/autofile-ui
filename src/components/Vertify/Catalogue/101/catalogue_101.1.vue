<template>
    <div>
      <label for='input-one'>
        Make(trade name of manufacture)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tnom101_1: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_101.1",
    props: ['value']
  }
</script>
