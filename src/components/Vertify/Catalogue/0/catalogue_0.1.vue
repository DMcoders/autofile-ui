<template>
    <div>
      <label for='input-one'>
        Make(trade name of manufacture)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tnom: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_0.1",
    props: ['value']
  }
</script>
