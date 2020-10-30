<template>
  <div>
    <input type="file" multiple="multiple" @change="uploadFun">
  </div>
</template>

<script>
  export default {
    name: "common_annex_B",
    methods: {
      uploadFun(event) {
        let formData = new FormData();
        for (let i = 0; i < event.target.files.length; i++) {
          formData.append("files", event.target.files[i]);
        }
        this.formData = formData;
      },
    },
    data: () => ({
      formData: undefined
    })
  }
</script>
