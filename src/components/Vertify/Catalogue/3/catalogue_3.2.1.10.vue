<template>
  <div>
    <label for='input-one'>
      Maximum net torque (manufacturer’s declared value)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mnt: $event.target.value})">
      2950 min-1
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.1.10"
  }
</script>
