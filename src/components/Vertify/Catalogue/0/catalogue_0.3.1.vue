<template>
  <div>
    <div>
      <label for='input-one'>
        Location of that marking ：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {lotm: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.3.1",
    props: ['value']
  }
</script>
