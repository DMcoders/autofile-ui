<template>
  <div>
    <label for='input-one'>
      Types(s) of head restraints: integrated/detachable/separate:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type91041: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.4.1"
  }
</script>
