<template>
  <div>
    <label for='input-one'>
      Type and design of the suspension of each axle or wheel：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tadotsoeaow: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.2"
  }
</script>
