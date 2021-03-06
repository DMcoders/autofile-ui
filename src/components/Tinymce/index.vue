<template>
  <div class="tinymce-editor">
    <editor
      v-model="myValue"
      :init="init"
      :disabled="disabled"
      @onClick="onClick"
    ></editor>
  </div>
</template>
<script>
  import axios from 'axios';
  import tinymce from "tinymce/tinymce";
  import Editor from "@tinymce/tinymce-vue";
  import "tinymce/themes/silver";
  import "tinymce/plugins/image";
  import "tinymce/plugins/autoresize";
  import "tinymce/icons/default/icons.min.js";

  import { getToken } from '@/utils/auth'

  export default {
    components: {
      Editor
    },
    props: {
      value: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plugins: {
        type: [String, Array],
        default:
          "image autoresize"
      },
      toolbar: {
        type: [String, Array],
        default:
          "image"
      }
    },
    data() {
      return {
        init: {
          language_url: "/tinymce/zh_CN.js", //如果语言包不存在，指定一个语言包路径
          language: "zh_CN", //语言
          skin_url: "/tinymce/skins/ui/oxide", //如果主题不存在，指定一个主题路径
          content_css: "/tinymce/skins/content/default/content.css",
          height: "120px",
          width: "100%",
          plugins: this.plugins, //插件
          toolbar: this.toolbar, //工具栏
          branding: false, //技术支持(Powered by Tiny || 由Tiny驱动)
          menubar: false, //菜单栏
          theme: "silver", //主题
          // images_upload_base_path: '/demo',
          images_upload_handler: (blobInfo, success, failure) => {
            this.handleImgUpload(blobInfo, success, failure)
          }
        },
        myValue: this.value
      };
    },
    mounted() {
      tinymce.init({});
    },
    methods: {
      calcWidth() {
        return document.body.clientWidth / 2 + "px";
      },
      onClick(e) {
        this.$emit("onClick", e, tinymce);
      },
      // 上传本地 图片执行事件
      handleImgUpload(blobInfo, success, failure) {
        let formdata = new FormData()
        // append 方法中的第一个参数就是 我们要上传文件 在后台接收的文件名
        // 这个值要根据后台来定义
        // 第二个参数是我们上传的文件
        formdata.append('file', blobInfo.blob())
        // axios 定义上传方法
        axios({
          method: "post", // post方法
          url: process.env.VUE_APP_BASE_API+"/vertify/image/uploadImage", // 请求上传图片服务器的路径
          headers: {
            // 配置headers请求头
            Authorization: 'Bearer ' + getToken(), // token认证，看后台
            'Content-Type': 'multipart/form-data', // 采用表单上传的方式，看后台如何接受
          },
          data: formdata // 请求数据formdata
        }).then(res => {
          if (res.data.code != 200) {
            // 上传失败执行此方法，将失败信息填入参数中
            failure('HTTP Error: ' + res.msg);
            return
          }
          // 上传成功之后，将对应完整的图片路径拼接在success的参数中
          success(res.data.data.fileUrl);
        })
      }
    },
    watch: {
      value(newValue) {
        this.myValue = newValue;
      },
      myValue(newValue) {
        this.$emit("input", newValue);
      }
    },

  };
</script>
