<template>
   <div>
      <label for='input-one'>
        Technically permissible maximum laden mass stated by the manufacturer (maximum and minimum mass for each version):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10331: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.3.1"
  }
</script>
