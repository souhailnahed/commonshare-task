<template>
          <div
              class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
            >
              <div
                class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
              >
                <h3
                  class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-32 h-6 shrink-0"
                >
                  Koenigsegg
                </h3>
                <b
                  class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                  >Sport</b
                >
              </div>
              <button
                class="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[24px] left-[256px] w-6 h-6"
              >
                <img
                  class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/assets/vuesaxboldheart.svg"
                />
              </button>
              <div
                class="absolute top-[320px] left-[24px] h-11 flex flex-col items-start justify-start"
              >
                <b class="relative flex items-center w-[116px] h-11 shrink-0">
                  <span class="[line-break:anywhere] w-full">
                    <span>$99.00/ </span>
                    <span class="text-sm text-secondary-300">day</span>
                  </span>
                </b>
              </div>
              <button
                class="cursor-pointer [border:none] py-0 px-5 bg-primary-500 absolute top-[320px] right-[24px] rounded w-[116px] h-11 flex flex-row box-border items-center justify-center"
              >
                <div
                  class="relative text-base tracking-[-0.02em] leading-[150%] font-semibold font-bold-type32 text-white text-center flex items-center justify-center w-[76px] h-6 shrink-0"
                >
                  Rent Now
                </div>
              </button>
              <div
                class="absolute top-[272px] left-[24px] flex flex-row items-start justify-start gap-[16px] text-sm text-secondary-300"
              >
                <div class="flex flex-row items-start justify-start gap-[6px]">
                  <img
                    class="relative w-6 h-6"
                    alt=""
                    src="/assets/vuesaxboldgasstation.svg"
                  />
                  <div
                    class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                  >
                    90L
                  </div>
                </div>
                <div class="flex flex-row items-start justify-start gap-[4px]">
                  <img
                    class="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/assets/car.svg"
                  />
                  <div
                    class="relative font-medium flex items-center w-12 h-6 shrink-0"
                  >
                    Manual
                  </div>
                </div>
                <div class="flex flex-row items-start justify-start gap-[6px]">
                  <img
                    class="relative w-6 h-6"
                    alt=""
                    src="/assets/vuesaxboldprofile2user.svg"
                  />
                  <div
                    class="relative font-medium flex items-center w-[60px] h-6 shrink-0"
                  >
                    2 People
                  </div>
                </div>
              </div>
              <img
                class="absolute top-[136px] left-[36px] w-[232px] h-[72px] object-cover"
                alt=""
                src="/assets/car1@2x.png"
              />
              <div
                class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
              />
            </div>
</template>
<script>

  export default {
    props: {
      car : {

        type: Object,
        default : () => {}

      }
    }
  }
</script>