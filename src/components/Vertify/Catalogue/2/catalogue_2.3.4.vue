<template>
  <div>
    <label for='input-one'>
      Width of the foremost axle (measured at the outermost part of the tyres excluding the bulging of the tyres close to the ground)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_3_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.3.4"
  }
</script>
