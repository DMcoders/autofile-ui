<template>
  <div>
    <div>
      <label for='input-one'>
        Anti-lock braking system：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {albs101_45: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.45",
    props: ['value']
  }
</script>
