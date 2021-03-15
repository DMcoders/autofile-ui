<template>
  <div>
    <div>
      <label for='input-one'>
        Name(s) and address(es) of assembly plant(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {naaoap101_5: $event.target.value,poeamotv101_5:value.poeamotv101_5})">
      </label>
      <br/>
      <label for='input-two'>
        Position of ECE approval mark on the vehicle：
        <input id='input-two'
               v-bind:value='value'
               v-on:input="$emit('input', {poeamotv101_5: $event.target.value,naaoap101_5:value.naaoap101_5})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.5",
    props: ['value']
  }
</script>
