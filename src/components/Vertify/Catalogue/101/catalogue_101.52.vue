<template>
  <div>
    <div>
      <label for='input-one'>
        A brief description of the electronic components (if any) of the adjustment system：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ab101_52: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.52",
    props: ['value']
  }
</script>
