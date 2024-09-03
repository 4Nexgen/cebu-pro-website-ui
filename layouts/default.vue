<template>
    <div style="background-image: url('/bg-image.png');background-size:contain;" >
        <HeaderTop class="fixed top-0 left-0 w-full z-50" />
        <HeaderNavigation  class="fixed top-0 left-0 w-full z-50 mt-12"/>
        <div class="content-wrapper">
        <slot></slot>
        </div>
        <FooterSection />
        <FooterBottom />
    </div>
</template>

<style>
.content-wrapper {
  padding-top: 120px; /* adjust this value to match the height of your headers */
}
</style>