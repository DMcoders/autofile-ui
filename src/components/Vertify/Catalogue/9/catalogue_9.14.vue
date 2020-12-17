<template>
  <div>
    <label for='input-one'>
      Space for mounting rear registration plates (give range where appropriate, drawings may be used where applicable):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {sfmrrp: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.14"
  }
</script>
