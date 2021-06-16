<template>
  <div>
    <div>
      <label for='input-one'>
        Location of that marking:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_4: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.4"
  }
</script>
