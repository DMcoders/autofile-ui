<template>
  <div>
    <label for='input-one'>
      Service braking system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {od: $event.target.value})">
      Auxiliary force
      - Foot pedal type
      - Two circuits
      - Mechanical pneumatic transfer
      - Front / rear distribution (H type)
      - Drum brake on axle 1,
      - Drum brake on axle 2,
      - ABS,ESC
      The operation of the anti-lock system is not affected by magnetic or electrical fields
      (see certificate approval number n°
      E1-056793*02 or the further extension  )
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.2.1"
  }
</script>
