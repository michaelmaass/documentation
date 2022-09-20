import { Search } from '@/components/Search'
import Image from 'next/future/image'
import HeroImage from '@/images/yooess-hero.png'

export function Hero() {
  return (
    <div className="overflow-hidden bg-[#fb5c75] dark:bg-slate-900">

      <div className="relative pt-6 pb-16">

        <main className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-display text-slate-900 dark:text-slate-500 sm:text-lg lg:text-base xl:text-lg">
                  Documentation
                </span>
                <span className="mt-1 block text-4xl font-bold tracking-tight text-white">
                  <span className="block text-white">
                    Explore our guides and examples to integrate Essentials for  <span className="whitespace-nowrap">YOOtheme Pro</span>
                  </span>
                </span>
              </h1>
              {/* <p className="mt-3 text-base text-[#febfca] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Integrate Essentials Addons for <span className="whitespace-nowrap">YOOtheme Pro</span>
              </p> */}
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <Search full/>
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">

              <div className="relative mx-auto w-full lg:max-w-md">
                  <Image
                    className="w-full"
                    src={HeroImage}
                    alt="Essentials for YOOtheme Pro"
                    priority
                  />
              </div>

            </div>
          </div>
        </main>
      </div>

    </div>
  )
}
