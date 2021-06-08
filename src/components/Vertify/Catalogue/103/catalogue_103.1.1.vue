<template>
    <div>
      <label for='input-one'>
        Make(trade name of manufacture)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10311: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.1.1"
  }
</script>
