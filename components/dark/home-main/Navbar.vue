<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
      </a>

      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave" class="nav-item dropdown">
            <a class="nav-link" href="/" role="button" aria-haspopup="true"
              aria-expanded="false">
              <span class="rolling-text">{{ t('nav.home') }}</span>
            </a>
          </li>
          <li @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave" class="nav-item dropdown">
            <a class="nav-link" href="/home/works" role="button"
              aria-haspopup="true" aria-expanded="false">
              <span class="rolling-text">{{ t('nav.works') }}</span>
            </a>
          </li>
          <li @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave" class="nav-item">
            <a class="nav-link" href="/home/contact">
              <span class="rolling-text">{{ t('nav.connect') }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="topnav flex items-center gap-1">
        <!-- Botón de idioma -->
        <div class="lang-toggle mt-3 cursor-pointer gap-1" @click="setLocale(current === 'es' ? 'en' : 'es')"
          :aria-label="`Cambiar idioma a ${current === 'es' ? 'Inglés' : 'Español'
            }`">
          <!-- Flag segun locale -->
          <span :class="['fi', current === 'es' ? 'fi-uy h-3' : 'fi-us']"></span>
          <span class="text-xs rolling-text cursor-pointer">
            {{ current === 'es' ? 'Esp' : 'Eng' }}
          </span>
        </div>

        <!-- Menú (hamburguesa) -->
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu ${isOpen && 'open'}`">
    <div class="logo icon-img-100">
      <img src="/dark/assets/imgs/logo-light.png" alt="" />
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>Menu</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li @click="toggleSubMenu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <a href="/" class="sub-link">
                      <span class="fill-text" :data-text="t('nav.home')"> {{ t('nav.home') }} </span>
                      <i></i>
                    </a>
                  </div>
                </div>
              </li>

              <li @click="toggleSubMenu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <a href="/home/works" class="sub-link">
                      <span class="fill-text" :data-text="t('nav.works')"> {{ t('nav.works') }} </span>
                      <i></i>
                    </a>
                  </div>
                </div>
              </li>
              <li @click="toggleSubMenu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/home/contact" class="link">
                    <span class="fill-text" :data-text="t('nav.connect')">
                      {{ t('nav.connect') }}
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">{{ t('nav.address') }}</h6>
              <h5>
                Miami Boulebard 2, <br />
                Punta del Este, Uruguay
              </h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">{{ t('nav.social') }}</h6>
              <ul class="rest social-text">
                <li>
                  <i class="fab fa-instagram mr-10"></i>
                  <a href="https://instagram.com/magnocreative" class="hover-this">
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
                <li class="mb-10">
                  <i class="fab fa-behance mr-10"></i>
                  <a href="https://behance.net/magnocreative" class="hover-this">
                    <span class="hover-anim">Behance</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">{{ t('nav.connect') }}</h6>
              <h5>
                <i class="fa fa-envelope mr-10" aria-hidden="true"></i>
                <a href="/home/contact">hello@magnocreative.es</a>
              </h5>
              <h5 class="underline mt-10">
                <i class="fab fa-whatsapp mr-10"></i>
                <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
                  WhatsApp!
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n';
const { current, setLocale, t } = useI18n();

import { onMounted, onUnmounted, computed } from 'vue';
import { ref } from 'vue';
import { useWhatsapp } from '../../../common/useWhatsapp'
import { MailIcon, MessageCircle } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  number?: string,
  text?: string
}>(), {})


const { buildUrl } = useWhatsapp()
const whatsappUrl = computed(() => buildUrl(props.number, props.text))

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar?.classList.add('nav-scroll');
  else navbar?.classList.remove('nav-scroll');
}

function handleDropdownMouseMove(event: any) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event: any) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    if (hamenu && hamenu instanceof HTMLElement) {
      hamenu.style.left = isOpen.value ? '0' : '-100%';
    }
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector('.hamenu');

  isOpen.value = false;
  setTimeout(() => {
    if (hamenu && hamenu instanceof HTMLElement) {
      hamenu.style.left = '-100%';
    }
  }, 300);
}

function handleMouseEnter(event: any) {
  document.querySelectorAll('ul.main-menu li').forEach((item) => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document
    .querySelectorAll('ul.main-menu li')
    .forEach((item) => item.classList.remove('hoverd'));
}
function toggleSubMenu(event: any) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (subMenu) {
    if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
      document.querySelectorAll('.sub-menu').forEach((item) => {
        item.classList.remove('sub-open');
        if (item instanceof HTMLElement) {
          item.style.maxHeight = '0';
        }
        const prev = item.previousElementSibling;
        if (prev && prev.children && prev.children[0]) {
          prev.children[0].classList.remove('dopen');
        }
      });
      subMenu.classList.remove('sub-open');
      if (subMenu instanceof HTMLElement) {
        subMenu.style.maxHeight = '0';
      }
      subMenu.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!subMenu.classList.contains('sub-open')) {
      if (SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach((item) => {
          item.classList.remove('sub-open');
          if (item instanceof HTMLElement) {
            item.style.maxHeight = '0';
          }
          const prev = item.previousElementSibling;
          if (prev && prev.children && prev.children[0]) {
            prev.children[0].classList.remove('dopen');
          }
        });

        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      } else {
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }
}
function toggleSubMenu2(event: any) {
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (SubMenu2) {
    if (SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item: any) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.remove('sub-open');
      SubMenu2.style.maxHeight = '0';
      SubMenu2.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item: any) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.add('sub-open');
      SubMenu2.style.maxHeight = '450px';
      SubMenu2.previousElementSibling.children[0].classList.add('dopen');
    }
  }
}
</script>

<style scoped>
.lang-toggle {
  /* mismo tamaño que el menú (ajusta si tu menú es 44/48/52) */
  --size: 48px;
  height: var(--size);
  width: 52px;
  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  border-radius: 999px;
  background: transparent;
  border: 1px solid transparent;
  /* evita jump al hover */
  color: #fff;
  padding: 0;
  /* cero padding para mantener el diámetro */
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
}
</style>
