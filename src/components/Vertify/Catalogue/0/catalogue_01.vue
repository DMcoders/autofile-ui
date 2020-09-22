<template>
  <div>
    <div>
      <label for='input-one'>
        Make(trade name of manufacture)：
        <br>
        <input id='input-one'
               v-bind:value='value.tnom'
               v-on:input="$emit('input', {tnom: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_01",
    props: ['value']
  }
</script>
