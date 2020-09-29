<template>
  <div>
    <div>
      <label for='input-one'>
        Bodywork/complete  vehicle：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {bcv: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0312",
    props: ['value']
  }
</script>
