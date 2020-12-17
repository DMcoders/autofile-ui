<template>
  <div>
    <label for='input-one'>
      Control of the voltage at the terminals of the lamp (OVIG):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {cotvattotl: $event.target.value})">
    </label>

    <table border="1px solid #ccc" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
        <td>Concerned lamp list</td>
        <td>Alimentation type</td>
        <td>Maximum voltage</td>
      </tr>
      <tr>
        <td>Main-beam headlamps</td>
        <td>Halogen: without voltage control gear</td>
        <td>Halogen: < or = required voltage by the regulation (28 V + 3%)</td>
      </tr>

      <tr>
        <td>Dipped-beam headlamps</td>
        <td>Halogen: without voltage control gear</td>
        <td>Halogen: < or = required voltage by the regulation (28 V + 3%)</td>
      </tr>
      <tr>
        <td>Front position lamps</td>
        <td>Halogen: without voltage control gear</td>
        <td>Halogen: < or = required voltage by the regulation (28 V + 3%)</td>
      </tr>
      <tr>
        <td>Rear position lamps</td>
        <td>Halogen: without voltage control gear</td>
        <td>LEDs: < or = required voltage by the regulation (28 V + 3%)</td>
      </tr>
      <tr>
        <td>Stop lamps S1</td>
        <td>Halogen: without voltage control gear</td>
        <td>LEDs: < or = required voltage by the regulation (28 V + 3%)</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.6"
  }
</script>
