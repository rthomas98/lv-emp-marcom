import Marcom from "@/Layouts/MarcomLayout.jsx";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

export default function SmartTeams() {
    return (
        <Marcom>
            <div className="">

                <div className="pb-12 bg-white sm:pb-16 lg:pb-20">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="relative py-12 overflow-hidden bg-indigo-600 rounded-xl sm:py-16 lg:py-20">
                            <div className="absolute inset-0">
                                <img className="object-contain object-right w-full h-full transform scale-125"
                                     src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                                     alt=""/>
                            </div>

                            <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                                <div className="relative">
                                    <div className="absolute"></div>

                                    <div
                                        className="relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
                                        <div className="flex flex-col justify-between lg:col-span-3">
                                            <div>
                                                <h1 class="text-4xl font-bold text-white sm:text-5xl">
                                                    Get
                                                    <span className="relative inline">
                                            <img className="absolute top-0 w-auto h-8 -right-8"
                                                 src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/design-element.svg"
                                                 alt=""/>
                                            marketing </span
                                                    ><br/>
                                                    inspirations weekly
                                                </h1>
                                                <p className="mt-6 text-base font-normal leading-7 text-white text-opacity-80">Lorem
                                                    ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in
                                                    enim
                                                    luctus. Rutrum arcu.</p>
                                            </div>

                                            <div className="mt-8 lg:mt-auto">
                                                <div className="flex -space-x-2">
                                                    <img
                                                        className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-1.png"
                                                        alt=""/>
                                                    <img
                                                        className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-2.png"
                                                        alt=""/>
                                                    <img
                                                        className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-3.png"
                                                        alt=""/>
                                                    <img
                                                        className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-4.png"
                                                        alt=""/>
                                                    <img
                                                        className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-5.png"
                                                        alt=""/>
                                                    <img
                                                        className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-6.png"
                                                        alt=""/>
                                                    <img
                                                        className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-7.png"
                                                        alt=""/>
                                                </div>
                                                <p className="mt-4 text-base font-medium text-white">Join other 3200+
                                                    Marketers now</p>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-2">
                                            <p className="text-lg font-bold text-white">Join our email list</p>
                                            <form action="#" method="POST" class="mt-4 space-y-4">
                                                <div>
                                                    <label for="" class="sr-only"> Full name </label>
                                                    <div className="">
                                                        <input type="text" name="" id=""
                                                               class="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                                                               placeholder="ex: James Darek"/>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label for="" class="sr-only"> Email address </label>
                                                    <div className="">
                                                        <input type="email" name="" id=""
                                                               class="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                                                               placeholder="Email address"/>
                                                    </div>
                                                </div>

                                                <div className="relative group">
                                                    <div
                                                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                                                    <button
                                                        type="submit"
                                                        class="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent"
                                                    >
                                                        Join LandingFolio Newsletter For Free
                                                    </button>
                                                </div>
                                            </form>

                                            <div className="mt-8 sm:mt-12">
                                                <p className="text-xs font-bold tracking-widest text-white uppercase text-opacity-70">Featured
                                                    on</p>
                                                <div className="inline-grid grid-cols-2 gap-8 mt-8 lg:gap-x-12">
                                                    <img className="object-contain w-auto h-6"
                                                         src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-1.svg"
                                                         alt=""/>
                                                    <img className="object-contain w-auto h-6"
                                                         src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-2.svg"
                                                         alt=""/>
                                                    <img className="object-contain w-auto h-6"
                                                         src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-3.svg"
                                                         alt=""/>
                                                    <img className="object-contain w-auto h-6"
                                                         src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-4.svg"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-black sm:py-16 lg:20">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-5 gap-x-16">
                        <div className="lg:col-span-2">
                            <h2 className="tracking-tighter text-white">
                                <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl"> Sed velit venenatis, </span>
                                <span className="font-serif text-5xl italic sm:text-6xl sm:block md:text-7xl"> ac pellentesque. </span>
                            </h2>
                            <p className="mt-6 font-sans text-lg text-opacity-50 text-white">
                                Ultricies tortor in feugiat dolor convallis sed. A pellentesque vitae ac nulla. Nunc
                                curabitur id placerat imperdiet semper ac dui. At lorem suspendisse vestibulum mauris
                                scelerisque nulla at laoreet. Egestas eu sed tincidunt enim arcu sed malesuada.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#"
                                    title=""
                                    className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                                    role="button"
                                >
                                    Learn More
                                    <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-5 lg:col-span-3">
                            <div className="relative rounded-lg bg-dark-gray">
                                <div className="py-8 pl-8 pr-12 lg:px-12">
                                    <div className="max-w-md">
                                        <h3 className="font-sans text-2xl font-normal sm:text-3xl lg:text-4xl text-white">Et
                                            enim nisl viverra molestie risus.</h3>
                                        <p className="mt-3 font-sans text-lg font-normal text-opacity-50 text-white">Amet
                                            dui blandit ultrices pellentesque tristique adipiscing bibendum
                                            tincidunt.</p>
                                    </div>
                                </div>

                                <div className="absolute z-10 right-8 md:right-24 -bottom-16">
                                    <svg className="w-6 h-auto text-neutral" viewBox="0 0 24 92" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.9393 91.0607C11.5251 91.6464 12.4749 91.6464 13.0607 91.0607L22.6066 81.5147C23.1924 80.9289 23.1924 79.9792 22.6066 79.3934C22.0208 78.8076 21.0711 78.8076 20.4853 79.3934L12 87.8787L3.51472 79.3934C2.92894 78.8076 1.97919 78.8076 1.3934 79.3934C0.807615 79.9792 0.807615 80.9289 1.3934 81.5147L10.9393 91.0607ZM10.5 6.55671e-08L10.5 90L13.5 90L13.5 -6.55671e-08L10.5 6.55671e-08Z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="relative rounded-lg bg-dark-gray">
                                <div className="py-8 pl-8 pr-12 lg:px-12">
                                    <div className="max-w-md">
                                        <h3 className="font-sans text-2xl font-normal sm:text-3xl lg:text-4xl text-white">Et
                                            enim nisl viverra molestie risus.</h3>
                                        <p className="mt-3 font-sans text-lg font-normal text-opacity-50 text-white">Amet
                                            dui blandit ultrices pellentesque tristique adipiscing bibendum
                                            tincidunt.</p>
                                    </div>
                                </div>

                                <div className="absolute z-10 right-8 md:right-24 -bottom-16">
                                    <svg className="w-6 h-auto text-neutral" viewBox="0 0 24 92" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.9393 91.0607C11.5251 91.6464 12.4749 91.6464 13.0607 91.0607L22.6066 81.5147C23.1924 80.9289 23.1924 79.9792 22.6066 79.3934C22.0208 78.8076 21.0711 78.8076 20.4853 79.3934L12 87.8787L3.51472 79.3934C2.92894 78.8076 1.97919 78.8076 1.3934 79.3934C0.807615 79.9792 0.807615 80.9289 1.3934 81.5147L10.9393 91.0607ZM10.5 6.55671e-08L10.5 90L13.5 90L13.5 -6.55671e-08L10.5 6.55671e-08Z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="relative rounded-lg bg-dark-gray">
                                <div className="py-8 pl-8 pr-12 lg:px-12">
                                    <div className="max-w-md">
                                        <h3 className="font-sans text-2xl font-normal sm:text-3xl lg:text-4xl text-white">Et
                                            enim nisl viverra molestie risus.</h3>
                                        <p className="mt-3 font-sans text-lg font-normal text-opacity-50 text-white">Amet
                                            dui blandit ultrices pellentesque tristique adipiscing bibendum
                                            tincidunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div
                        className="grid items-center grid-cols-1 sm:grid-cols-2 sm:gap-y-12 sm:gap-x-12 gap-y-6 lg:grid-cols-3 lg:gap-x-16">
                        <div className="lg:order-2 sm:col-span-2 lg:col-span-1">
                            <img className="object-cover w-full h-full rounded-xl"
                                 src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-overview/2/product-1.png"
                                 alt=""/>
                        </div>

                        <div className="mt-4 lg:order-1 sm:mt-0">
                            <ul className="space-y-6 sm:space-y-12 xl:space-y-16">
                                <li className="flex items-start">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-200">Superpower</h3>
                                        <p className="mt-5 text-sm font-normal text-gray-500">Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit. Sagittis ante viverra in arcu et. Nec
                                            faucibus arcu, blandit ultrices nec.</p>
                                    </div>
                                </li>

                                <li className="flex items-start">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                    </svg>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-200">New Design</h3>
                                        <p className="mt-5 text-sm font-normal text-gray-500">Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit. Sagittis ante viverra in arcu et. Nec
                                            faucibus arcu, blandit ultrices nec.</p>
                                    </div>
                                </li>

                                <li className="flex items-start">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                                    </svg>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-200">High Quality Sound</h3>
                                        <p className="mt-5 text-sm font-normal text-gray-500">Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit. Sagittis ante viverra in arcu et. Nec
                                            faucibus arcu, blandit ultrices nec.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:order-3">
                            <ul className="space-y-6 sm:space-y-12 xl:space-y-16">
                                <li className="flex items-start">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"/>
                                    </svg>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-200">Superfast 5G</h3>
                                        <p className="mt-5 text-sm font-normal text-gray-500">Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit. Sagittis ante viverra in arcu et. Nec
                                            faucibus arcu, blandit ultrices nec.</p>
                                    </div>
                                </li>

                                <li className="flex items-start">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-200">Better Camera</h3>
                                        <p className="mt-5 text-sm font-normal text-gray-500">Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit. Sagittis ante viverra in arcu et. Nec
                                            faucibus arcu, blandit ultrices nec.</p>
                                    </div>
                                </li>

                                <li className="flex items-start">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                                    </svg>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-200">Cloud Storage</h3>
                                        <p className="mt-5 text-sm font-normal text-gray-500">Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit. Sagittis ante viverra in arcu et. Nec
                                            faucibus arcu, blandit ultrices nec.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better
                                    workflow</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                    perferendis suscipit eaque,
                                    iste dolor cupiditate blanditiis ratione.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                              aria-hidden="true"/>
                                                {feature.name}
                                            </dt>
                                            {' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked
                        questions</h2>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
                        Have a different question and can’t find the answer you’re looking for? Reach out to our support
                        team by{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            sending us an email
                        </a>{' '}
                        and we’ll get back to you as soon as we can.
                    </p>
                    <div className="mt-20">
                        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                            {faqs.map((faq) => (
                                <div key={faq.id}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-100">
                <div
                    className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Ready to dive in?
                        <br/>
                        Start your free trial today.
                    </h2>
                    <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </Marcom>
    )
        ;
}
