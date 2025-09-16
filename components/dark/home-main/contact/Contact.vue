<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 valign">
          <div class="sec-head info-box full-width md-mb80">
            <div class="phone fz-30 fw-600 underline main-color">

              <h5 class="underline mt-10">
                <i class="fab fa-whatsapp mr-10"></i>
                <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
                  WhatsApp!
                </a>
              </h5>
            </div>
            <div class="morinfo mt-50 pb-30 bord-thin-bottom">
              <h6 class="mb-15">{{t('tab_contact.address_info.address')}}</h6>
              <p>
                Miami Boulebard 2, <br />
                Punta del Este, Uruguay
              </p>
            </div>
            <div class="morinfo mt-30 pb-30 bord-thin-bottom">
              <h6 class="mb-15">{{t('tab_contact.address_info.email')}}</h6>
              <p>
                <i class="fa fa-envelope mr-10" aria-hidden="true"></i>
                <a href="#">{{t('tab_contact.address_info.info_email')}}</a>
              </p>
            </div>

            <div class="social-icon-circle mt-50">
              <a href="#0">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#0">
                <i class="fab fa-dribbble"></i>
              </a>
              <a href="#0">
                <i class="fab fa-behance"></i>
              </a>
              <a href="https://www.instagram.com/magnocreativee/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15"> {{t('tab_contact.send_message_info.sub_title')}} </h6>
              <h3 class="text-u ls1">
                {{t('tab_contact.send_message_info.title_a')}} <span class="fw-200">{{t('tab_contact.send_message_info.title_b')}}</span>
              </h3>
            </div>
            <form id="contact-form" class="form2" method="post" action="contact.php">
              <div class="messages"></div>
 
              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input id="form_name" type="text" name="name" :placeholder="t('tab_contact.send_message_info.name')" required />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input id="form_email" type="email" name="email" :placeholder="t('tab_contact.send_message_info.email')" required />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group mb-30">
                    <input id="form_subject" type="text" name="subject" :placeholder="t('tab_contact.send_message_info.subject')" />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <textarea id="form_message" name="message" :placeholder="t('tab_contact.send_message_info.message')" rows="4" required></textarea>
                  </div>
                  <div class="mt-30">
                    <button type="submit" class="butn butn-full butn-bord radius-30">
                      <span class="text">{{t('tab_contact.send_message_info.cta')}}</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n';
const { current, setLocale, t } = useI18n();

import { computed } from 'vue'
import { useWhatsapp } from '../../../../common/useWhatsapp'
import { MailIcon, MessageCircle } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  number?: string,
  text?: string
}>(), {})


const { buildUrl } = useWhatsapp()
const whatsappUrl = computed(() => buildUrl(props.number, props.text))
</script>