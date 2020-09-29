<template>
  <div>
    <div>
      <label for='input-one'>
        Dimensional drawing of the whole vehicle：
        <br/>
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ddotwv: $event.target.value})">
      </label>
      See annex B
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_12",
    props: ['value']
  }
</script>
