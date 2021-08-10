<template>
  <div>
    <div>
      <label for='input-one'>
        Dimensional drawing of the whole vehicle：
        <br/>
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_1_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_1.2"
  }
</script>
