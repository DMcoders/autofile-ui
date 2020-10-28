<template>
  <table width="500" border="1">
    <thead>
    <tr>
      <th>V-V</th>
      <th>Code</th>
      <th>Features</th>
      <th>Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td rowspan="10">Variant</td>
      <td rowspan="2">
        <select v-model="selectedCabinType"
                v-on:change="$emit('change', {cabinType: $event.target.value,buildStage:value.buildStage,
                        powerPlant:value.powerPlant,drivenAxles:value.drivenAxles,massGrade:value.massGrade,
                        trailerCoupling:value.trailerCoupling,engineCapacity:value.engineCapacity,emission:value.emission,wheelbase:value.wheelbase})">
          <option v-for="option in cabinTypes" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
      <td rowspan="2">Cabin type</td>
      <td>
        WS: Wider single cabin
      </td>
    </tr>
    <tr>
      <td>
        WK: Wider king cabin
      </td>
    </tr>


    <tr>
      <td rowspan="3">
        <select v-model="selectedBuildStage"
                v-on:change="$emit('change', {cabinType:value.cabinType,buildStage:$event.target.value,powerPlant:value.powerPlant,
                        drivenAxles:value.drivenAxles,massGrade:value.massGrade,trailerCoupling:value.trailerCoupling,
                engineCapacity:value.engineCapacity,emission:value.emission,wheelbase:value.wheelbase})">
          <option v-for="option in buildStages" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
      <td rowspan="3">Build Stage</td>
      <td>
        L: Lorry, completed
      </td>
    </tr>
    <tr>
      <td>
        C: Cab chassis, incomplete
      </td>
    </tr>
    <tr>
      <td>
        V: Van, completed
      </td>
    </tr>


    <tr>
      <td rowspan="3">
        <select v-model="selectedPowerPlant"
                v-on:change="$emit('change', {cabinType:value.cabinType,buildStage:value.buildStage,powerPlant:$event.target.value,
                        drivenAxles:value.drivenAxles,massGrade:value.massGrade,trailerCoupling:value.trailerCoupling,
                engineCapacity:value.engineCapacity,emission:value.emission,wheelbase:value.wheelbase})">
          <option v-for="option in powerPlants" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
      <td rowspan="3">Power Plant</td>
      <td>
        A: Engine, L4
      </td>
    </tr>
    <tr>
      <td>
        B: Engine, L6
      </td>
    </tr>
    <tr>
      <td>
        E: Electrical
      </td>
    </tr>


    <tr>
      <td rowspan="2">
        <select v-model="selectedDrivenAxles"
                v-on:change="$emit('change', {cabinType:value.cabinType,buildStage:value.buildStage,powerPlant:value.powerPlant,drivenAxles:$event.target.value,
                        massGrade:value.massGrade,trailerCoupling:value.trailerCoupling,
                engineCapacity:value.engineCapacity,emission:value.emission,wheelbase:value.wheelbase})">
          <option v-for="option in drivenAxles" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
      <td rowspan="2">Driven axles</td>
      <td>
        A: 4×2
      </td>
    </tr>
    <tr>
      <td>
        B: 4×4
      </td>
    </tr>


    <tr>
      <td rowspan="28">Version</td>
      <td rowspan="8">
        <select v-model="selectedMassGrade" v-on:change="$emit('change', {cabinType:value.cabinType,buildStage:value.buildStage,powerPlant:value.powerPlant,
                drivenAxles:value.drivenAxles,massGrade:$event.target.value,trailerCoupling:value.trailerCoupling,
                engineCapacity:value.engineCapacity,emission:value.emission,wheelbase:value.wheelbase})">
          <option v-for="option in massGrades" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select></td>
      <td rowspan="8">Mass Grade</td>
      <td>
        A: Grade A≤5500Kg
      </td>
    </tr>
    <tr>
      <td>
        B: 5500kg&lt;Grade B≤ 6000kg
      </td>
    </tr>
    <tr>
      <td>
        C: 6000kg&lt;Grade C≤ 6800kg
      </td>
    </tr>
    <tr>
      <td>
        D: 6800kg&lt;Grade D≤ 7200kg
      </td>
    </tr>
    <tr>
      <td>
        E: 7200kg&lt;Grade E≤ 7500kg
      </td>
    </tr>
    <tr>
      <td>
        F: 7500kg&lt;Grade F≤ 8500kg
      </td>
    </tr>
    <tr>
      <td>
        G: 8500kg&lt;Grade G≤ 9000kg
      </td>
    </tr>
    <tr>
      <td>
        H: 9000 kg&lt;Grade H≤ 10000kg
      </td>
    </tr>


    <tr>
      <td rowspan="2">
        <select v-model="selectedTrailerCoupling" v-on:change="$emit('change', {cabinType:value.cabinType,buildStage:value.buildStage,powerPlant:value.powerPlant,
                drivenAxles:value.drivenAxles,massGrade:value.massGrade,trailerCoupling:$event.target.value,
                engineCapacity:value.engineCapacity,emission:value.emission,wheelbase:value.wheelbase})">
          <option v-for="option in trailerCouplings" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
      <td rowspan="2">Trailer coupling</td>
      <td>
        A: Coupling with
      </td>
    </tr>
    <tr>
      <td>
        C: Coupling without
      </td>
    </tr>



    <tr>
      <td rowspan="7">
        <select v-model="selectedEngineCapacity" v-on:change="$emit('change', {cabinType:value.cabinType,buildStage:value.buildStage,powerPlant:value.powerPlant,
                drivenAxles:value.drivenAxles,massGrade:value.massGrade,trailerCoupling:value.trailerCoupling,engineCapacity:$event.target.value,
                emission:value.emission,wheelbase:value.wheelbase})">
          <option v-for="option in engineCapacitys" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
      <td rowspan="7">Engine capacity</td>
      <td>
        A: 2746ml
      </td>
    </tr>
    <tr>
      <td>
        B: 2951ml
      </td>
    </tr>
    <tr>
      <td>
        C: 3760ml
      </td>
    </tr>
    <tr>
      <td>
        D: 3900ml
      </td>
    </tr>
    <tr>
      <td>
        E: 3960ml
      </td>
    </tr>
    <tr>
      <td>
        F: 4752ml
      </td>
    </tr>
    <tr>
      <td>
        G: Electrical Motor
      </td>
    </tr>




    <tr>
      <td rowspan="6">
        <select v-model="selectedEmission" v-on:change="$emit('change', {cabinType:value.cabinType,buildStage:value.buildStage,powerPlant:value.powerPlant,
                drivenAxles:value.drivenAxles,massGrade:value.massGrade,trailerCoupling:value.trailerCoupling,
                engineCapacity:value.engineCapacity,emission:$event.target.value,wheelbase:value.wheelbase})">
          <option v-for="option in engineEmissions" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
      <td rowspan="6">Emission</td>
      <td>
        A: EU2
      </td>
    </tr>
    <tr>
      <td>
        B: EU3
      </td>
    </tr>
    <tr>
      <td>
        C: EU4
      </td>
    </tr>
    <tr>
      <td>
        D: EU5
      </td>
    </tr>
    <tr>
      <td>
        E: EU6
      </td>
    </tr>
    <tr>
      <td>
        F: Zero Emission
      </td>
    </tr>


    <tr>
      <td rowspan="5">
        <select v-model="selectedWheelbase" v-on:change="$emit('change', {cabinType:value.cabinType,buildStage:value.buildStage,powerPlant:value.powerPlant,
                drivenAxles:value.drivenAxles,massGrade:value.massGrade,trailerCoupling:value.trailerCoupling,
                engineCapacity:value.engineCapacity,emission:value.emission,wheelbase:$event.target.value})">
          <option v-for="option in engineWheelbases" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
      <td rowspan="5">Wheelbase</td>
      <td>
        A: 2800mm
      </td>
    </tr>
    <tr>
      <td>
        B: 3365mm
      </td>
    </tr>
    <tr>
      <td>
        C: 3845mm
      </td>
    </tr>
    <tr>
      <td>
        D: 4175mm
      </td>
    </tr>
    <tr>
      <td>
        E: 4475mm
      </td>
    </tr>
    </tbody>
  </table>
</template>


<script>
  export default {
    name: "common_annex_A",
    props: ['value'],
    data: () => ({
      selectedCabinType: undefined,
      selectedBuildStage: undefined,
      selectedPowerPlant: undefined,
      selectedDrivenAxles: undefined,
      selectedMassGrade: undefined,
      selectedTrailerCoupling: undefined,
      selectedEngineCapacity: undefined,
      selectedEmission: undefined,
      selectedWheelbase: undefined,
      cabinTypes: [
        {"key": "WS", "value": "['WS']"},
        {"key": "WK", "value": "['WK']"},
        {"key": "※", "value": "['WS','WK']"}],
      buildStages: [
        {"key": "L", "value": "['L']"},
        {"key": "C", "value": "['C']"},
        {"key": "V", "value": "['V']"},
        {
          "key": "※",
          "value": "['L','C','V']"
        }],
      powerPlants: [{"key": "A", "value": "['A']"},
        {"key": "B", "value": "['B']"},
        {"key": "E", "value": "['E']"},
        {
          "key": "※",
          "value": "['A','B','E']"
        }],
      drivenAxles: [{"key": "A", "value": "['A']"},
        {"key": "B", "value": "['B']"},
        {
          "key": "※",
          "value": "['A','B']"
        }],
      massGrades: [{"key": "A", "value": "['A']"},
        {"key": "B", "value": "['B']"},
        {"key": "C", "value": "['C']"},
        {"key": "D", "value": "['D']"},
        {"key": "E", "value": "['E']"},
        {"key": "F", "value": "['F']"},
        {"key": "G", "value": "['G']"},
        {"key": "H", "value": "['H']"},
        {
          "key": "※",
          "value": "['A','B','C','D','E','F','G','H']"
        }],
      trailerCouplings: [{"key": "A", "value": "['A']"},
        {"key": "C", "value": "['C']"},
        {
          "key": "※",
          "value": "['A','C'}]"
        }],
      engineCapacitys: [{"key": "A", "value": "['A']"},
        {"key": "B", "value": "['B']"},
        {"key": "C", "value": "['C']"},
        {"key": "D", "value": "['D']"},
        {"key": "E", "value": "['E']"},
        {"key": "F", "value": "['F']"},
        {"key": "G", "value": "['G']"},
        {
          "key": "※",
          "value": "['A','B','C','D','E','F','G']"
        }],
      engineEmissions: [{"key": "A", "value": "['A']"},
        {"key": "B", "value": "['B']"},
        {"key": "C", "value": "['C']"},
        {"key": "D", "value": "['D']"},
        {"key": "E", "value": "['E']"},
        {"key": "F", "value": "['F']"},
        {
          "key": "※",
          "value": "['A','B','C','D','E','F']"
        }],
      engineWheelbases: [{"key": "A", "value": "['A']"},
        {"key": "B", "value": "['B']"},
        {"key": "C", "value": "['C']"},
        {"key": "D", "value": "['D']"},
        {"key": "E", "value": "['E']"},
        {
          "key": "※",
          "value": "['A','B','C','D','E']"
        }],
    }),
  }
</script>
