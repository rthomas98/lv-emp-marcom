import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
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

const services = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Powerful API.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
        icon: ServerIcon,
    },
]

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '37' },
    { label: 'Countries', value: '12' },
    { label: 'Raised', value: '$25M' },
]

export default function EcommerceDevelopment() {
    return (
        <Marcom>
            <div className="relative bg-white">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <img
                                className="h-11"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                                <div
                                    className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                                    <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                                        <span className="absolute inset-0" aria-hidden="true"/>
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                                Data to enrich your online business
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                commodo. Elit sunt amet
                                fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
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
                    <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                        <img
                            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">No server? No
                            problem.</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                            suscipit eaque, iste
                            dolor cupiditate blanditiis.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                            alt="App screenshot"
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                            width={2432}
                            height={1442}
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"/>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {services.map((services) => (
                            <div key={services.name} className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <services.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                   aria-hidden="true"/>
                                    {services.name}
                                </dt>
                                {' '}
                                <dd className="inline">{services.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                        <div className="mx-auto w-full max-w-xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white">Trusted by the most innovative
                                teams</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                                sed. Quam a
                                scelerisque amet ullamcorper eu enim et fermentum, augue.
                            </p>
                            <div className="mt-8 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Create account
                                </a>
                                <a href="#" className="text-sm font-semibold text-white">
                                    Contact us <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                            <img
                                className="max-h-12 w-full object-contain object-left"
                                src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
                                alt="Tuple"
                                width={105}
                                height={48}
                            />
                            <img
                                className="max-h-12 w-full object-contain object-left"
                                src="https://tailwindui.com/img/logos/reform-logo-white.svg"
                                alt="Reform"
                                width={104}
                                height={48}
                            />
                            <img
                                className="max-h-12 w-full object-contain object-left"
                                src="https://tailwindui.com/img/logos/savvycal-logo-white.svg"
                                alt="SavvyCal"
                                width={140}
                                height={48}
                            />
                            <img
                                className="max-h-12 w-full object-contain object-left"
                                src="https://tailwindui.com/img/logos/laravel-logo-white.svg"
                                alt="Laravel"
                                width={136}
                                height={48}
                            />
                            <img
                                className="max-h-12 w-full object-contain object-left"
                                src="https://tailwindui.com/img/logos/transistor-logo-white.svg"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <img
                                className="max-h-12 w-full object-contain object-left"
                                src="https://tailwindui.com/img/logos/statamic-logo-white.svg"
                                alt="Statamic"
                                width={147}
                                height={48}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                  <circle cx="1" cy="1" r=".7"/>
                </pattern>
              </defs>
              <rect
                  fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                  width="52"
                  height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
                        quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    <div
                        className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
                            <p className="text-sm text-gray-900">
                                Sportacus andrew weatherall goose Refined gentlemen super mario
                                des lynam alpha trion zap rowsdower.
                            </p>
                        </div>
                    </div>
                    <div
                        className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
                            <p className="text-sm text-gray-900">
                                Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div
                        className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">
                                Baseball ipsum dolor
                            </h6>
                            <p className="text-sm text-gray-900">
                                Bro ipsum dolor sit amet gaper backside single track, manny Bike
                                epic clipless. Schraeder drop gondy.
                            </p>
                        </div>
                    </div>
                    <div
                        className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                            <p className="text-sm text-gray-900">
                                A flower in my garden, a mystery in my panties. Heart attack never
                                stopped old Big Bear.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Learn more
                    </a>
                </div>
            </div>
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <p className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better
                            workflow</h1>
                        <div
                            className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                                    mauris semper sed amet
                                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
                                    tellus varius sit neque
                                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                                    Mattis mauris
                                    semper sed amet vitae sed turpis id.
                                </p>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                                    blandit molestie auctor
                                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                                    et ultrices hac
                                    adipiscing egestas.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus
                                    felis id dignissim
                                    eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt
                                    doloremque nesciunt
                                    voluptate.
                                </p>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                                    blandit molestie auctor
                                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                                    et ultrices hac
                                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                </p>
                            </div>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            {stats.map((stat, statIdx) => (
                                <div key={statIdx}
                                     className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                    <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                                    <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked
                            questions</h2>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({open}) => (
                                        <>
                                            <dt>
                                                <DisclosureButton
                                                    className="flex w-full items-start justify-between text-left text-gray-900">
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
                                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                className="md:max-w-lg sm:rounded-lg" alt=""/>
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            <h3 className="text-indigo-600 font-semibold">
                                Professional services
                            </h3>
                            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Build your SaaS solution with help from our experts
                            </p>
                            <p className="mt-3 text-gray-600">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus
                                error sit voluptatem accusantium doloremque laudantium
                            </p>
                            <a href="javascript:void(0)"
                               className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="w-5 h-5">
                                    <path fillRule="evenodd"
                                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Marcom>
    );
}
