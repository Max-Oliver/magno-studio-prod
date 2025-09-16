<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header />
        <Intro />
        <Services />
        <Services2 />
        <!-- <Marquee /> -->
        <Portfolio />
        <Team />
        <!-- <Clients /> -->
        <WhatsAppFloat :debug="true" />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Clients from '@/components/dark/home-main/Clients';
import Footer from '@/components/dark/home-main/Footer';
import Portfolio from '@/components/dark/home-main/portfolio-metro/SliderPortfolio.vue';

import WhatsAppFloat from '@/components/dark/home-main/WhatsAppFloat';
import Header from '@/components/dark/home-main/header/Header';
import Intro from '@/components/dark/home-main/Intro';
import Marquee from '@/components/dark/home-main/Marquee';
import Navbar from '@/components/dark/home-main/Navbar';
import Services from '@/components/dark/home-main/Services';
// import Services2 from '@/components/dark/home-main/Services2';
import Services2 from '@/components/dark/home-main/services/NewServices2.vue';

import Team from '@/components/dark/home-main/Team';
import { onMounted } from 'vue';

useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
