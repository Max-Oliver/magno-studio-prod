<template>
  <section class="work-metro section-padding pt-40 sub-bg">
    <div class="container-xl">

      <div class="row xxlg-marg justify-content-between">
        <div class="col-lg-8 col-md-6">
          <div class="item mt-140">
            <div class="img">
              <img src="/dark/assets/imgs/works/stand/1.jpg" alt="" />
            </div>
            <div class="cont d-flex align-items-center mt-20">
              <h5 class="fz-22">
                <a href="#">Aevoe</a>
              </h5>
              <p class="ml-auto">
                <a href="#">Branding</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item mt-140">
            <div class="img">
              <img src="/dark/assets/imgs/works/stand/2.jpg" alt="" />
            </div>
            <div class="cont d-flex align-items-center mt-20">
              <h5 class="fz-22">
                <a href="#">Digital Design</a>
              </h5>
              <p class="ml-auto">
                <a href="#">Branding</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item mt-140">
            <div class="img">
              <img src="/dark/assets/imgs/works/stand/3.jpg" alt="" />
            </div>
            <div class="cont d-flex align-items-center mt-20">
              <h5 class="fz-22">
                <a href="#">Nice guy</a>
              </h5>
              <p class="ml-auto">
                <a href="#">Photography</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-6">
          <div class="item mt-140">
            <div class="img">
              <img src="/dark/assets/imgs/works/stand/4.jpg" alt="" />
            </div>
            <div class="cont d-flex align-items-center mt-20">
              <h5 class="fz-22">
                <a href="#">Digital Design</a>
              </h5>
              <p class="ml-auto">
                <a href="#">Branding</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-6">
          <div class="item mt-140">
            <div class="img">
              <img src="/dark/assets/imgs/works/stand/5.jpg" alt="" />
            </div>
            <div class="cont d-flex align-items-center mt-20">
              <h5 class="fz-22">
                <a href="#">Digital Design</a>
              </h5>
              <p class="ml-auto">
                <a href="#">Branding</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item mt-140">
            <div class="img">
              <img src="/dark/assets/imgs/works/stand/6.jpg" alt="" />
            </div>
            <div class="cont d-flex align-items-center mt-20">
              <h5 class="fz-22">
                <a href="#">Digital Design</a>
              </h5>
              <p class="ml-auto">
                <a href="#">Branding</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item mt-140">
            <div class="img">
              <img src="/dark/assets/imgs/works/stand/7.jpg" alt="" />
            </div>
            <div class="cont d-flex align-items-center mt-20">
              <h5 class="fz-22">
                <a href="#">Digital Design</a>
              </h5>
              <p class="ml-auto">
                <a href="#">Branding</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-6">
          <div class="item mt-140">
            <div class="img">
              <img src="/dark/assets/imgs/works/stand/8.jpg" alt="" />
            </div>
            <div class="cont d-flex align-items-center mt-20">
              <h5 class="fz-22">
                <a href="#">Digital Design</a>
              </h5>
              <p class="ml-auto">
                <a href="#">Branding</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { useI18n } from '@/i18n';
const { t } = useI18n();

</script>

<style scoped>
.sep-line {
  position: relative;
  padding-top: 25px;
}

.sep-line::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: rgba(255, 255, 255, .12);
  /* súbelo a .2 si el fondo es muy oscuro */
  pointer-events: none;
}
</style>