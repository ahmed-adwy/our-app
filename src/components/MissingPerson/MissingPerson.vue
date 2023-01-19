<template>
  <div class="container">
    <h4 class="text-right">الإبلاغهه عن شخص مفقود</h4>
  </div>
  <div id="regForm" action="">
    <h1 style="text-align: center">بلغ عن شخص مفقود</h1>
    <div class="tab">
      <h1>البيانات الأساسية</h1>
      <p>
        <input
          type="text"
          class="form-control"
          value=""
          placeholder="الأسم·الكامل"
          required
        />
      </p>
      <p><input placeholder="أسم الأب" oninput="" /></p>
      <p><input placeholder="أسم الأم" oninput="" /></p>
      <p><input placeholder="سنة الميلاد" oninput="" required /></p>
      <p><input placeholder="الجنس" oninput="" required /></p>
      <p><input placeholder="الجنسية" oninput="" required /></p>
      <p><input placeholder="الطول" oninput="" /></p>
      <p><input placeholder="الوزن" oninput="" /></p>
    </div>
    <div class="tab">
      <h1>البيانات الأضافية</h1>
      <p><input placeholder="E-mail..." oninput="this.className = ''" /></p>
      <p><input placeholder="Phone..." oninput="this.className = ''" /></p>
    </div>
    <div class="tab">
      <h1>شوهد اخر مرة</h1>
      <p><input placeholder="dd" oninput="this.className = ''" /></p>
      <p><input placeholder="mm" oninput="this.className = ''" /></p>
      <p><input placeholder="yyyy" oninput="this.className = ''" /></p>
    </div>
    <div class="tab">
      <h1>بيانات الأتصال</h1>
      <p><input placeholder="Username..." oninput="this.className = ''" /></p>
      <p><input placeholder="Password..." oninput="this.className = ''" /></p>
    </div>
    <div style="overflow: auto">
      <div style="float: right">
        <button type="button" id="prevBtn" onclick="nextPrev(-1)">
          السابق
        </button>
        <button type="button" id="nextBtn" onclick="nextPrev(1)">التالي</button>
      </div>
    </div>
    <div style="text-align: center; margin-top: 40px">
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MissingPerson",
};
</script>

<style>
* {
  direction: rtl;
}

#regForm {
  background-color: #ffffff;
  margin: 100px auto;
  padding: 40px;
  width: 70%;
  min-width: 300px;
}

/* Style the input fields */
input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

h1 {
  text-align: center;
}

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}
/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

/* Mark the active step: */
.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #04aa6d;
}

#nextBtn {
  background-color: #04aa6d;
  border-color: #04aa6d;
  color: white;
  width: 150px;
  height: 40px;
}

#prevBtn {
  width: 150px;
  height: 40px;
}
</style>
