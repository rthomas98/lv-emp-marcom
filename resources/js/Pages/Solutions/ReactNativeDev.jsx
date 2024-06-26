import Marcom from "@/Layouts/MarcomLayout.jsx";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

export default function ReactNativeDev() {
    return (
        <Marcom>
            <div className="bg-white">

                <div className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div>
                                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">A social
                                    media for learners</p>
                                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Connect
                                    & learn from the experts</h1>
                                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with
                                    right mentor.</p>

                                <a href="#" title=""
                                   className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                                   role="button">
                                    Join for free
                                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </a>

                                <p className="mt-5 text-gray-600">Already joined us? <a href="#" title=""
                                                                                        className="text-black transition-all duration-200 hover:underline">Log
                                    in</a></p>
                            </div>

                            <div>
                                <img className="w-full"
                                     src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <div
                            className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                            <p className="text-xs font-semibold tracking-widest text-white uppercase">130+ Handcoded
                                Blocks</p>
                        </div>
                        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Celebration
                            helps you build beautiful website</h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                            mollit.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                        <div className="transition-all duration-200 bg-white hover:shadow-xl">
                            <div className="py-10 px-9">
                                <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white hover:shadow-xl">
                            <div className="py-10 px-9">
                                <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                                </svg>
                                <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white hover:shadow-xl">
                            <div className="py-10 px-9">
                                <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                                <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-white">
                        Trusted by the world’s most innovative teams
                    </h2>
                    <div
                        className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>
            <div className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                        <div className="pr-12 sm:pr-0">
                            <div className="relative max-w-xs mb-12">
                                <img className="object-bottom rounded-md"
                                     src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                                     alt=""/>

                                <img className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                                     src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                                     alt=""/>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow
                                business with Celebration.</h2>
                            <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
                    <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
                        <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                      id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"/>
                  </pattern>
                </defs>
                <rect
                    fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                    width="52"
                    height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
                            brown fox
                        </h2>
                        <p className="mb-4 text-gray-900 lg:mb-6">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            laudantium, totam rem aperiam, eaque ipsa quae explicabo.
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path
                                    d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex-grow pt-1">
                        <div className="flex items-center mb-3">
            <span className="font-bold tracking-wide text-gray-900">
              Categories
            </span>
                            <span className="ml-1">
              <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
              >
                <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
                        </div>
                        <div className="grid grid-cols-2 row-gap-6 sm:grid-cols-4">
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Computers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Health
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Reference
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        World
                                    </a>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        eCommerce
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Business
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Video
                                    </a>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Brochure
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Nonprofit
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Educational
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Sports
                                    </a>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Infopreneur
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Health
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Web
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                                    >
                                        Personal
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="object-cover w-full h-56 sm:h-96"
                        src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50"/>
                </div>
            </div>
            <div className="bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl divide-y divide-white/10">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked
                            questions</h2>
                        <dl className="mt-10 space-y-6 divide-y divide-white/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({open}) => (
                                        <>
                                            <dt>
                                                <DisclosureButton
                                                    className="flex w-full items-start justify-between text-left text-white">
                                                    <span
                                                        className="text-base font-semibold leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                          ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                          )}
                        </span>
                                                </DisclosureButton>
                                            </dt>
                                            <DisclosurePanel as="dd" className="mt-2 pr-12">
                                                <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div
                        className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fillOpacity="0.7"/>
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6"/>
                                    <stop offset={1} stopColor="#E935C1"/>
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Boost your productivity.
                                <br/>
                                Start using our app today.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                                sagittis vel nulla.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href="#"
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                                alt="App screenshot"
                                width={1824}
                                height={1080}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
