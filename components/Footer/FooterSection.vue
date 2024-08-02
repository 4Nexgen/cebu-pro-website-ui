<template>
    <div class="bg-[#EEF3FF] relative ">
        
        <div class="h-[30vh] bg-cover bg-top" :style="{ backgroundImage: `url(/Landing/Rectangle-699.png)`,  backgroundRepeat: 'no-repeat'  }">

        </div>
        
        <div class="h-[15vw] w-[90vw] bg-indigo-600 rounded-3xl absolute top-1/6 left-1/2  -translate-x-1/2 -translate-y-1/2">
            <div class="flex pl-24 mt-16">
                <div class="grow basis-3/5">
                    <p class="text-6xl font-bold text-white"> We are ready for your <br> next adventure.</p>
                </div>
                <div class="grow-0 basis-2/4 p-8 flex justify-center">
                    <span class="rounded-full bg-[#FFC700] p-8 text-xl font-bold border border-white border-2 text-[#1044C6] cursor-pointer">CONTACT US</span>
                </div>
            </div>
        </div>
        <div class="mt-16">
            
        </div>
        <div class="p-4 md:p-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-24 mt-24">
                <div class="flex justify-center">
                    <div class="flex flex-col ...">
                        <div>
                            <img src="/public/cebupro-logo.png" class="h-24 w-auto "/>
                        </div>
                        <div>
                            <a>
                                3/F Arcada 5, Lopez Jaena St, Tipolo,<br> Mandaue City, Cebu 6014
                            </a>
                            <br><br><br>
                            <a>
                                Call us: (032) 505-2433<br>
                                Office Hours: Mon - Fri 9:00 - 19:00
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-8">
                    <div class="grid grid-cols-2 md:gap-4 mx-0 md:mx-24">
                        <div>
                            <a class="font-bold">Site Maps</a><br><br>
                            <a class="cursor-pointer">About Us</a><br>
                            <a class="cursor-pointer">Team</a><br>
                            <a class="cursor-pointer">Careers</a><br>
                            <a class="cursor-pointer">Contact Us</a><br>
                            <a class="cursor-pointer">FAQ</a><br>
                        </div>
                        <div>
                            <a class="font-bold">Legal</a><br><br>
                            <a class="cursor-pointer">Privacy Policy</a><br>
                            <a class="cursor-pointer">TLC</a><br>
                            <a class="cursor-pointer">Support</a><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>