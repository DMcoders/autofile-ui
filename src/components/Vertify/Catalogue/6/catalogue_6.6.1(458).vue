<template>
  <div>
    <label for='input-one'>
      Tyre/wheel combination(s)
      (a) for tyres indicate;
      — size designation(s),
      — load-capacity index
      — speed category symbol,
      — rolling resistance coefficient (measured in accordance with ISO 28580);
      (b) for wheels indicate rim size(s) and off-set(s).
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {twc6612: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1(458)"
  }
</script>
