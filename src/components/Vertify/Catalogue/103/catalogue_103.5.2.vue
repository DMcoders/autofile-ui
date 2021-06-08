<template>
   <div>
      <label for='input-one'>
        Range and method of adjustment (if any), of the steering control:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10352: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.5.2"
  }
</script>
