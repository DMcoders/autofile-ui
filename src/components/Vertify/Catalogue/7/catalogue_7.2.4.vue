<template>
  <div>
    <label for='input-one'>
      Diagram of the steering equipment as a whole, showing the position on the vehicle of the various devices influencing its steering behaviour：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotseaaw: $event.target.value})">
      See annex C
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.2.4"
  }
</script>
