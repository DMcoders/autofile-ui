<template>
  <div>
    <label for='input-one'>
      Technically Permissible Maximum Laden Mass：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tpmlm: $event.target.value})">
    </label>
    <label for='input-two'>
      Technically permissible maximum mass on each axle：
      <input id='input-two'
             v-bind:value='value'
             v-on:input="$emit('input', {tpmmoea: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.3.(R51)"
  }
</script>
