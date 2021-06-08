<template>
   <div>
      <label for='input-one'>
        Location of that marking:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type103133: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.1.3.3"
  }
</script>
