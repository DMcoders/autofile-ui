<template>
  <div>
    <label for='input-one'>
      Dimensional drawings of the characteristics parts of the structure of the head restraint:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9104322: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.4.3.2.2"
  }
</script>
