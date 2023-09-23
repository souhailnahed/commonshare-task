<template>

<main
      class="absolute top-[124px] left-[0px] bg-whitesmoke w-[1440px] h-[2381px] overflow-hidden text-left text-13xl text-white font-bold-type32"
    >
      <div
        class="absolute top-[32px] left-[64px] rounded-3xs bg-information-500 w-[640px] h-[360px] overflow-hidden"
      >
        <img
          class="absolute top-[0px] left-[0px] w-[775px] h-[775px]"
          alt=""
          src="/bg.svg"
        />
        <div
          class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[20px]"
        >
          <div class="flex flex-col items-start justify-start gap-[16px]">
            <h1
              class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-semibold font-inherit flex items-center w-[272px]"
            >
              The Best Platform for Car Rental
            </h1>
            <div
              class="relative text-base tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[284px]"
            >
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </div>
          </div>
          <button
            class="cursor-pointer [border:none] py-0 px-5 bg-primary-500 rounded w-[120px] h-11 flex flex-row box-border items-center justify-center"
          >
            <div
              class="relative text-base tracking-[-0.02em] leading-[150%] font-semibold font-bold-type32 text-white text-center flex items-center justify-center w-20 h-6 shrink-0"
            >
              Rental Car
            </div>
          </button>
        </div>
      </div>
      <div
        class="absolute top-[32px] left-[736px] rounded-3xs bg-primary-500 w-[640px] h-[360px] overflow-hidden"
      >
        <img
          class="absolute top-[0px] left-[0px] w-[758px] h-[360px]"
          alt=""
          src="/bg1.svg"
        />
        <div
          class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[20px]"
        >
          <div class="flex flex-col items-start justify-start gap-[16px]">
            <h1
              class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-semibold font-inherit flex items-center w-[272px]"
            >
              Easy way to rent a car at a low price
            </h1>
            <div
              class="relative text-base tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[284px]"
            >
              Providing cheap car rental services and safe and comfortable
              facilities.
            </div>
          </div>
          <button
            class="cursor-pointer [border:none] py-0 px-5 bg-information-500 rounded w-[120px] h-11 flex flex-row box-border items-center justify-center"
          >
            <div
              class="relative text-base tracking-[-0.02em] leading-[150%] font-semibold font-bold-type32 text-white text-center flex items-center justify-center w-20 h-6 shrink-0"
            >
              Rental Car
            </div>
          </button>
        </div>
      </div>
      <section
        class="absolute top-[412px] left-[70px] flex flex-col items-start justify-start gap-[32px] text-center text-base text-secondary-300 font-bold-type32"
      >
        <div class="flex flex-col items-start justify-start gap-[20px]">
          <div class="flex flex-row items-start justify-start gap-[1076px]">
            <div
              class="rounded w-[132px] h-11 flex flex-row py-0 px-5 box-border items-center justify-center"
            >
              <div
                class="relative font-semibold flex items-center justify-center w-[92px] h-6 shrink-0"
              >
                Popular Car
              </div>
            </div>
            <div
              class="rounded w-[104px] h-11 flex flex-row py-0 px-5 box-border items-center justify-center text-primary-500"
            >
              <div
                class="relative font-semibold flex items-center justify-center w-16 h-6 shrink-0"
              >
                View All
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-start justify-start gap-[32px] text-left text-xl text-secondary-500"
          >
          <CarCard />
            <div
              class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
            >
              <div
                class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
              >
                <h3
                  class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-32 h-6 shrink-0"
                >
                  Nissan GT - R
                </h3>
                <b
                  class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                  >Sport</b
                >
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
                    src="/vuesaxboldgasstation.svg"
                  />
                  <div
                    class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                  >
                    80L
                  </div>
                </div>
                <div class="flex flex-row items-start justify-start gap-[4px]">
                  <img
                    class="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/car.svg"
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
                    src="/vuesaxboldprofile2user1.svg"
                  />
                  <div
                    class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                  >
                    2 People
                  </div>
                </div>
              </div>
              <button
                class="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[24px] left-[256px] w-6 h-6"
              >
                <img
                  class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </button>
              <div
                class="absolute top-[330px] left-[24px] flex flex-col items-start justify-start"
              >
                <b class="relative flex items-center w-32 h-6 shrink-0">
                  <span class="[line-break:anywhere] w-full">
                    <span>$80.00/ </span>
                    <span class="text-sm text-secondary-300">day</span>
                  </span>
                </b>
              </div>
              <img
                class="absolute top-[138px] left-[50px] w-[204px] h-16 object-cover"
                alt=""
                src="/car2@2x.png"
              />
              <div
                class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
              />
            </div>
            <div
              class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
            >
              <div
                class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
              >
                <h3
                  class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-32 h-6 shrink-0"
                >
                  Rolls - Royce
                </h3>
                <b
                  class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                  >Sedan</b
                >
              </div>
              <button
                class="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[24px] left-[256px] w-6 h-6"
              >
                <img
                  class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vuesaxboldheart.svg"
                />
              </button>
              <div
                class="absolute top-[320px] left-[24px] h-11 flex flex-col items-start justify-start"
              >
                <b class="relative flex items-center w-[116px] h-11 shrink-0">
                  <span class="[line-break:anywhere] w-full">
                    <span>$96.00/ </span>
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
                    src="/vuesaxboldgasstation.svg"
                  />
                  <div
                    class="relative font-medium flex items-center w-7 h-6 shrink-0"
                  >
                    70L
                  </div>
                </div>
                <div class="flex flex-row items-start justify-start gap-[4px]">
                  <img
                    class="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/car.svg"
                  />
                  <div
                    class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                  >
                    Manual
                  </div>
                </div>
                <div class="flex flex-row items-start justify-start gap-[6px]">
                  <img
                    class="relative w-6 h-6"
                    alt=""
                    src="/vuesaxboldprofile2user2.svg"
                  />
                  <div
                    class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                  >
                    4 People
                  </div>
                </div>
              </div>
              <img
                class="absolute top-[136px] left-[42px] w-[220px] h-[68px] object-cover"
                alt=""
                src="/car3@2x.png"
              />
              <div
                class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
              />
            </div>
            <div
              class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
            >
              <div
                class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
              >
                <h3
                  class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit"
                >
                  Nissan GT - R 2
                </h3>
                <b
                  class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                  >Sport</b
                >
              </div>
              <div
                class="absolute top-[320px] right-[24px] rounded bg-primary-500 w-[116px] h-11 flex flex-row py-0 px-5 box-border items-center justify-center"
              >
                <button
                  class="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base tracking-[-0.02em] leading-[150%] font-semibold font-bold-type32 text-white text-center flex items-center justify-center w-[76px] h-6 shrink-0"
                >
                  Rent Now
                </button>
              </div>
              <div
                class="absolute top-[272px] left-[24px] flex flex-row items-start justify-start gap-[16px] text-sm text-secondary-300"
              >
                <div class="flex flex-row items-start justify-start gap-[6px]">
                  <img
                    class="relative w-6 h-6"
                    alt=""
                    src="/vuesaxboldgasstation.svg"
                  />
                  <div
                    class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                  >
                    80L
                  </div>
                </div>
                <div class="flex flex-row items-start justify-start gap-[4px]">
                  <img
                    class="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/car.svg"
                  />
                  <div
                    class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                  >
                    Manual
                  </div>
                </div>
                <div class="flex flex-row items-start justify-start gap-[6px]">
                  <img
                    class="relative w-6 h-6"
                    alt=""
                    src="/vuesaxboldprofile2user1.svg"
                  />
                  <div
                    class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                  >
                    2 People
                  </div>
                </div>
              </div>
              <img
                class="absolute top-[138px] left-[50px] w-[204px] h-16 object-cover"
                alt=""
                src="/car4@2x.png"
              />
              <img
                class="absolute top-[24px] left-[256px] w-6 h-6"
                alt=""
                src="/vuesaxlinearheart.svg"
              />
              <div
                class="absolute top-[330px] left-[24px] flex flex-col items-start justify-start"
              >
                <b class="relative flex items-center w-32 h-6 shrink-0">
                  <span class="[line-break:anywhere] w-full">
                    <span>$80.00/ </span>
                    <span class="text-sm text-secondary-300">day</span>
                  </span>
                </b>
              </div>
              <div
                class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-[20px]">
          <div
            class="rounded w-[196px] h-11 flex flex-row py-0 px-5 box-border items-center justify-center"
          >
            <div
              class="relative font-semibold flex items-center justify-center w-[156px] h-6 shrink-0"
            >
              Recomendation Car
            </div>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[32px] text-left text-xl text-secondary-500"
          >
            <div class="flex flex-row items-start justify-start gap-[32px]">
              <div
                class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
              >
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
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                    >
                      70L
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4px]"
                  >
                    <img
                      class="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                    >
                      Manual
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldprofile2user3.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                    >
                      6 People
                    </div>
                  </div>
                </div>
                <img
                  class="absolute top-[24px] left-[256px] w-6 h-6"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
                <div
                  class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <h3
                    class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-32 h-6 shrink-0"
                  >
                    All New Rush
                  </h3>
                  <b
                    class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >SUV</b
                  >
                </div>
                <img
                  class="absolute top-[122px] left-[40px] w-56 h-[100px] object-cover"
                  alt=""
                  src="/car5@2x.png"
                />
                <div
                  class="absolute top-[330px] left-[24px] flex flex-col items-start justify-start"
                >
                  <b class="relative flex items-center w-32 h-6 shrink-0">
                    <span class="[line-break:anywhere] w-full">
                      <span>$72.00/ </span>
                      <span class="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                </div>
                <div
                  class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
                />
              </div>
              <div
                class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
              >
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
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                    >
                      80L
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4px]"
                  >
                    <img
                      class="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                    >
                      Manual
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldprofile2user4.svg"
                    />
                    <div
                      class="relative font-medium flex items-center w-[60px] h-6 shrink-0"
                    >
                      6 People
                    </div>
                  </div>
                </div>
                <img
                  class="absolute top-[24px] left-[256px] w-6 h-6"
                  alt=""
                  src="/vuesaxboldheart.svg"
                />
                <div
                  class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <h3
                    class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-32 h-6 shrink-0"
                  >
                    CR - V
                  </h3>
                  <b
                    class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >SUV</b
                  >
                </div>
                <div
                  class="absolute top-[320px] left-[24px] h-11 flex flex-col items-start justify-start"
                >
                  <b class="relative flex items-center w-32 h-11 shrink-0">
                    <span class="[line-break:anywhere] w-full">
                      <span>$80.00/ </span>
                      <span class="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                </div>
                <img
                  class="absolute top-[122px] left-[28px] w-[248px] h-[100px] object-cover"
                  alt=""
                  src="/car6@2x.png"
                />
                <div
                  class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
                />
              </div>
              <div
                class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
              >
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
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                    >
                      90L
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4px]"
                  >
                    <img
                      class="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                    >
                      Manual
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldprofile2user5.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                    >
                      6 People
                    </div>
                  </div>
                </div>
                <img
                  class="absolute top-[24px] left-[256px] w-6 h-6"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
                <div
                  class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <h3
                    class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit"
                  >
                    All New Terios -2
                  </h3>
                  <b
                    class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >SUV</b
                  >
                </div>
                <div
                  class="absolute top-[320px] left-[24px] h-11 flex flex-col items-start justify-start"
                >
                  <b class="relative flex items-center w-32 h-11 shrink-0">
                    <span class="[line-break:anywhere] w-full">
                      <span>$74.00/ </span>
                      <span class="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                </div>
                <img
                  class="absolute top-[122px] left-[40px] w-56 h-[100px] object-cover"
                  alt=""
                  src="/car7@2x.png"
                />
                <div
                  class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
                />
              </div>
              <div
                class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
              >
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
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                    >
                      80L
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4px]"
                  >
                    <img
                      class="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                    >
                      Manual
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldprofile2user4.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                    >
                      6 People
                    </div>
                  </div>
                </div>
                <img
                  class="absolute top-[24px] left-[256px] w-6 h-6"
                  alt=""
                  src="/vuesaxboldheart.svg"
                />
                <div
                  class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <h3
                    class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-32 h-6 shrink-0"
                  >
                    CR - V
                  </h3>
                  <b
                    class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >SUV</b
                  >
                </div>
                <div
                  class="absolute top-[320px] left-[24px] h-11 flex flex-col items-start justify-start"
                >
                  <b class="relative flex items-center w-32 h-11 shrink-0">
                    <span class="[line-break:anywhere] w-full">
                      <span>$80.00/ </span>
                      <span class="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                </div>
                <img
                  class="absolute top-[122px] left-[28px] w-[248px] h-[100px] object-cover"
                  alt=""
                  src="/car8@2x.png"
                />
                <div
                  class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
                />
              </div>
            </div>
            <div class="flex flex-row items-start justify-start gap-[32px]">
              <div
                class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
              >
                <img
                  class="absolute top-[24px] left-[256px] w-6 h-6"
                  alt=""
                  src="/vuesaxboldheart1.svg"
                />
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
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                    >
                      70L
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4px]"
                  >
                    <img
                      class="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                    >
                      Manual
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldprofile2user3.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                    >
                      4 People
                    </div>
                  </div>
                </div>
                <div
                  class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <h3
                    class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-40 h-6 shrink-0"
                  >
                    MG ZX Exclusice
                  </h3>
                  <b
                    class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >Hatchback</b
                  >
                </div>
                <div
                  class="absolute top-[316px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <b class="relative flex items-center w-32 h-6 shrink-0">
                    <span class="[line-break:anywhere] w-full">
                      <span>$76.00/ </span>
                      <span class="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                  <b
                    class="relative text-sm [text-decoration:line-through] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >$80.00</b
                  >
                </div>
                <img
                  class="absolute top-[118px] left-[24px] w-[264px] h-[108px] object-cover"
                  alt=""
                  src="/car9@2x.png"
                />
                <div
                  class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
                />
              </div>
              <div
                class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
              >
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
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                    >
                      80L
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4px]"
                  >
                    <img
                      class="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                    >
                      Manual
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldprofile2user4.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                    >
                      6 People
                    </div>
                  </div>
                </div>
                <img
                  class="absolute top-[24px] left-[256px] w-6 h-6"
                  alt=""
                  src="/vuesaxlinearheart1.svg"
                />
                <div
                  class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <h3
                    class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-32 h-6 shrink-0"
                  >
                    New MG ZS
                  </h3>
                  <b
                    class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >SUV</b
                  >
                </div>
                <div
                  class="absolute top-[320px] left-[24px] h-11 flex flex-col items-start justify-start"
                >
                  <b class="relative flex items-center w-32 h-11 shrink-0">
                    <span class="[line-break:anywhere] w-full">
                      <span>$80.00/ </span>
                      <span class="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                </div>
                <img
                  class="absolute top-[116px] left-[8px] w-72 h-28 object-cover"
                  alt=""
                  src="/car10@2x.png"
                />
                <div
                  class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
                />
              </div>
              <div
                class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
              >
                <img
                  class="absolute top-[24px] left-[256px] w-6 h-6"
                  alt=""
                  src="/vuesaxboldheart1.svg"
                />
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
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                    >
                      90L
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4px]"
                  >
                    <img
                      class="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                    >
                      Manual
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldprofile2user5.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                    >
                      4 People
                    </div>
                  </div>
                </div>
                <div
                  class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <h3
                    class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-40 h-6 shrink-0"
                  >
                    MG ZX Excite 2
                  </h3>
                  <b
                    class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >Hatchback</b
                  >
                </div>
                <img
                  class="absolute top-[118px] left-[24px] w-[264px] h-[108px] object-cover"
                  alt=""
                  src="/car11@2x.png"
                />
                <div
                  class="absolute top-[320px] left-[24px] h-11 flex flex-col items-start justify-start"
                >
                  <b class="relative flex items-center w-32 h-11 shrink-0">
                    <span class="[line-break:anywhere] w-full">
                      <span>$74.00/ </span>
                      <span class="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                </div>
                <div
                  class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
                />
              </div>
              <div
                class="relative rounded-3xs bg-white w-[304px] h-[388px] overflow-hidden shrink-0"
              >
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
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-7 h-6 shrink-0"
                    >
                      80L
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4px]"
                  >
                    <img
                      class="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-12 h-6 shrink-0"
                    >
                      Manual
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[6px]"
                  >
                    <img
                      class="relative w-6 h-6"
                      alt=""
                      src="/vuesaxboldprofile2user4.svg"
                    />
                    <div
                      class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[60px] h-6 shrink-0"
                    >
                      6 People
                    </div>
                  </div>
                </div>
                <img
                  class="absolute top-[24px] left-[256px] w-6 h-6"
                  alt=""
                  src="/vuesaxlinearheart1.svg"
                />
                <div
                  class="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[4px]"
                >
                  <h3
                    class="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-inherit flex items-center w-32 h-6 shrink-0"
                  >
                    New MG ZS
                  </h3>
                  <b
                    class="relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center w-32 h-5 shrink-0"
                    >SUV</b
                  >
                </div>
                <div
                  class="absolute top-[320px] left-[24px] h-11 flex flex-col items-start justify-start"
                >
                  <b class="relative flex items-center w-32 h-11 shrink-0">
                    <span class="[line-break:anywhere] w-full">
                      <span>$80.00/ </span>
                      <span class="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                </div>
                <img
                  class="absolute top-[116px] left-[8px] w-72 h-28 object-cover"
                  alt=""
                  src="/car12@2x.png"
                />
                <div
                  class="absolute top-[167px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="absolute top-[2012px] left-[642px] flex flex-row items-center justify-start text-right text-sm text-secondary-300"
      >
        <div
          class="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[140px] h-6 shrink-0"
        >
          120 Car
        </div>
      </div>
      <button
        class="cursor-pointer [border:none] py-0 px-5 bg-primary-500 absolute top-[1824px] right-[652px] rounded w-[156px] h-11 flex flex-row box-border items-center justify-center"
      >
        <div
          class="relative text-base tracking-[-0.02em] leading-[150%] font-semibold font-bold-type32 text-white text-center flex items-center justify-center w-[116px] h-6 shrink-0"
        >
          Show more car
        </div>
      </button>

    </main>
</template>