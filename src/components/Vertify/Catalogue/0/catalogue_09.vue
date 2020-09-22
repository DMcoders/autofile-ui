<template>
  <div>
    <div>
      <label for='input-one'>
        Name and address of the manufacture’s representative(if any)：
        <input id='input-one'
               v-bind:value='value.naaotmr'
               v-on:input="$emit('input', {naaotmr: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_09",
    props: ['value']
  }
</script>
