<template>
    <section class="overflow-hidden px-6 py-24 sm:py-32 lg:px-8 bg-indigo-100 bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: `url('/Landing/cover.png')`, opacity: 0.5  }">
        <div class="w-full flex justify-center">
            <h1 class="font-bold text-4xl">What our clients have to say about us</h1>
        </div>
        <div class="w-full flex justify-center">
            <p class="font-bold text-lg">Testimonials</p>
        </div>
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
            <!-- <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> -->
            <figure class="mt-10">
            <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p class="font-bold">“ From start to finish, their team was incredibly professional, attentive, and knowledgeable. They took care of every detail, ensuring a stress-free and enjoyable vacation. I highly recommend CebuPro to anyone looking for a seamless and unforgettable travel experience. Thank you for making my dream vacation a reality! “</p>
            </blockquote>
            <figcaption class="mt-10">
                <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                <div class="font-semibold text-gray-900">Charlotte Wright</div>
                <!-- <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                </svg> -->
                <!-- <div class="text-gray-600"></div> -->
                </div>
            </figcaption>
            </figure>
        </div>
    </section>
  </template>