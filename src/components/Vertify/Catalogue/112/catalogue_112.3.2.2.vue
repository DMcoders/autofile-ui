<template>
  <div>
      <label for='input-one'>
        Layout drawing of the heat exchanger for heating systems using the exhaust gases for heating or of the parts where the heat exchange takes place (for heating systems using the engine cooling air for heating):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_2_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.2.2"
  }
</script>
