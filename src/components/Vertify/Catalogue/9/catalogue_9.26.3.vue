<template>
  <div>
    <label for='input-one'>
      Detailed description (including photographs or drawings) of the aerodynamic device or equipment:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_26_3: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.26.3"
  }
</script>
