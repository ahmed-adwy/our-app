<template>
  <div class="container">
    <h1 class="text-center">اتصل بنا</h1>
    <h1 class="text-center">ابقى على تواصل معنا... فنحن نريد أن نسمع منك</h1>
  </div>
  <div class="container">
    <div class="row">
      <!-- <div class="container">
        <div class="row"> -->
      <div class="col-6 mt-5 text-right">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-6">
            <label for="validationCustom01" class="form-label"
              >الاسم الاول</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              value=""
              placeholder="الاسم الاول"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-6 text-right">
            <label for="validationCustom02" class="form-label"
              >الاسم الاخير</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              value=""
              placeholder="الاسم الاخير"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <br />
          <div class="col-md-12">
            <label for="validationCustomUsername" class="form-label"
              >الايميل</label
            >
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
              <input
                type="text"
                class="form-control"
                placeholder="@gmail.com"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-8">
            <label for="validationCustom03" class="form-label">المدينة</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              required
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">المحافظة</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              required
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div class="col-md-10">
            <label for="validationCustom05" class="form-label"
              >الابلاغ عن مشكلة</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div class="col-12 text-right">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                &nbsp;&nbsp;&nbsp;&nbsp;الموافقة علي الخصوصية
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-4 text-right mt-2">
            <button class="btn btn-primary" type="submit">تسجيل</button>
          </div>
        </form>
      </div>
      <div class="col-6">
        <img src="@/assets/1.jpg" width="500" height="500" alt="" />
      </div>
    </div>
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
export default {
  name: "ContactUsPage",
};
</script>

<style></style>
