<template>
  <div>
    <label for='input-one'>
      EC type-approval number(s) of spray-suppression device(s), if available:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {etnosd: $event.target.value})">

    </label>
    Fornt: e13*109/2011*2015/166*0020*00
    Rear: e11*109/2011*2015/166*1157*00
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.20.2"
  }
</script>
