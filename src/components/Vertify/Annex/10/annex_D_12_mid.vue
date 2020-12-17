<template>
  <table border="1px solid #ccc" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
      <td COLSPAN="3">Automatic Switching Conditions Dipped-Beam Headlamps </td>
    </tr>
    <tr>
      <td COLSPAN="1">Ambient light outside the vehicle </td>
      <td COLSPAN="1">Dipped-beam headlamps</td>
      <td COLSPAN="1">Response time
      </td>
    </tr>
    <tr>
      <td COLSPAN="1">Less than 1000 lux </td>
      <td COLSPAN="1">ON</td>
      <td COLSPAN="1">Less than 1 seconds
      </td>
    </tr>
    <tr>
      <td COLSPAN="1">Between 1000 lux and 7,000 lux </td>
      <td COLSPAN="1">In consonance with the previous condition (when the illuminance increased from 100 lux to 1500 lux, the dipped-beam headlamps keep on lighting, when the illuminance decreased from 7000 lux to 1000 lux,  the dipped-beam headlamps are off)</td>
      <td COLSPAN="1">/
      </td>
    </tr>
    <tr>
      <td COLSPAN="1">More than 7,000 lux </td>
      <td COLSPAN="1">OFF</td>
      <td COLSPAN="1">6 seconds
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "annex_10_D_12_mid"
  }
</script>
