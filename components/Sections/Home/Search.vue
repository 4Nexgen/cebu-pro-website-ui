<template>
    <div class="px-8 mt-4">
      <SectionsCover></SectionsCover>
      <div class="absolute sm:-mt-60  left-0 right-0 flex justify-center mb-4">
        <!-- <input type="text" /> -->
        <div class="search-bar flex justify-center">
          <!-- <input type="text" /> -->
          <div
            class="flex shrink gap-2 bg-white items-center py-3 px-6 rounded-full s-input"
          >
            <input
              type="text"
              v-model="search_key"
              class="outline-none flex-1 text-grey-500 text-lg py-1"
              placeholder="Search your next adventure ..."
            />
            <a class="s-button" href="#" @click.prevent="">
              <svg
                viewBox="0 0 81 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H42.5C63.763 0 81 17.237 81 38.5C81 59.763 63.763 77 42.5 77H40.5C18.1325 77 0 58.8675 0 36.5V0Z"
                  fill="#1044C6"
                />
                <path
                  d="M26.2675 34.6281C26.2675 31.3122 27.6444 28.1322 30.0955 25.7875C32.5466 23.4428 35.8709 22.1256 39.3373 22.1256C42.8036 22.1256 46.128 23.4428 48.579 25.7875C51.0301 28.1322 52.4071 31.3122 52.4071 34.6281C52.4071 37.9439 51.0301 41.124 48.579 43.4686C46.128 45.8133 42.8036 47.1305 39.3373 47.1305C35.8709 47.1305 32.5466 45.8133 30.0955 43.4686C27.6444 41.124 26.2675 37.9439 26.2675 34.6281ZM58.5221 52.3315L51.2112 45.3395C54.0788 42.448 55.6765 38.6137 55.6745 34.6281C55.6745 25.9967 48.3603 19 39.3373 19C30.3142 19 23 25.9967 23 34.6281C23 43.2594 30.3142 50.2561 39.3373 50.2561C42.7057 50.2583 45.9915 49.2583 48.7394 47.3946L56.2104 54.5429C56.8492 55.1524 57.8833 55.1524 58.5221 54.5429C59.1593 53.9318 59.1593 52.9426 58.5221 52.3315Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search_key: "",
      };
    },
  };
  </script>
  
  <style>
  .s-button {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    svg {
      width: 20%;
    }
  }
  @media screen and (max-width: 500px) {
    .s-button {
      svg {
        width: 50%;
      }
    }
    .s-input {
      width: 75%;
    }
  }
  @media screen and (min-width: 501px) {
    .search-bar {
      margin-top: 5rem;
    }
  }
  </style>