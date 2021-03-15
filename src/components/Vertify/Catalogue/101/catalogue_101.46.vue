<template>
  <div>
    <div>
      <label for='input-one'>
        For vehicle with-lock systems, description of system operation (including any electronic parts), electric block diagram, hydraulic or pneumatic circuit plan：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {fv101_46: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.46",
    props: ['value']
  }
</script>
