<template>
  <div class="container">
    <h1 style="text-align: center">ابحث عن شخص مفقود</h1>
  </div>
  <div>
    <h2 class="text-right">-التعليمات</h2>
    <p class="text-right">*صورة المفقود بكل الزوايا</p>
    <p class="text-right">*--------------------------</p>
    <p class="text-right">*--------------------------</p>
    <p class="text-right">*--------------------------</p>
    <p class="text-right">*--------------------------</p>
  </div>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>

    <input ref="fileInput" type="file" @input="pickFile" />
    <div class="form-row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="الاسم بالكامل"
          style="margin: 20px"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="العمر"
          style="margin: 20px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.imagePreviewWrapper {
  width: 400px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
</style>
