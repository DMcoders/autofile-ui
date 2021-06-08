<template>
   <div>
      <label for='input-one'>
        Technical permissible maximum mass for the front axle or axles of the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10332: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.3.2"
  }
</script>
