<template>
    <div>
      <label for='input-one'>
        Make(trade name of manufacture)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_1: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_105.1"
  }
</script>
