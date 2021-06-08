<template>
  <div>
    <label for='input-one'>
      of a semi-trailer, a centre-axle trailer or a rigid drawbar trailer：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type2122: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.12.2"
  }
</script>
