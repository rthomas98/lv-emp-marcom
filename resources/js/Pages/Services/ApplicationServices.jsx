import Marcom from "@/Layouts/MarcomLayout.jsx";
import {InboxIcon, MinusSmallIcon, PlusSmallIcon, TrashIcon, UsersIcon} from '@heroicons/react/24/outline'
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";

const features = [
    {
        name: 'Unlimited inboxes',
        description:
            'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Manage team members',
        description:
            'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'Spam report',
        description:
            'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
        href: '#',
        icon: TrashIcon,
    },
]

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]


export default function ApplicationServices() {
    return (
        <Marcom>
            <div className="">
                <section className="relative pt-12 overflow-hidden bg-black sm:pt-16">
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-sm font-normal tracking-widest uppercase">
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Your startup needs a kick </span>
                            </p>
                            <h1 className="mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Connect
                                & grow with
                                your targeted customers</h1>

                            <div
                                className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                                <div
                                    className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                                    <div
                                        className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                    <a href="#" title=""
                                       className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto"
                                       role="button"> Start 14 Days Free Trial </a>
                                </div>

                                <a href="#" title=""
                                   className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white"
                                   role="button"> Talk to Sales </a>
                            </div>
                        </div>

                        <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
                            <div className="absolute top-0 transform -translate-x-1/2 left-1/2">

                            </div>

                            <div className="absolute inset-0">
                                <img className="object-cover w-full h-full opacity-50"
                                     src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                                     alt=""/>
                            </div>

                            <img className="relative w-full max-w-5xl mx-auto"
                                 src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/4/dashboard-mockup.png"
                                 alt=""/>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Stay on top of customer support
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
                            veritatis in
                            accusamus quisquam.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div
                                            className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{feature.description}</p>
                                        <p className="mt-6">
                                            <a href={feature.href}
                                               className="text-sm font-semibold leading-6 text-indigo-600">
                                                Learn more <span aria-hidden="true">→</span>
                                            </a>
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                        className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                                1 team.<br/>
                                6+ years.<br/>
                                300+ projects.<br/>
                            </h2>
                            <p className="mt-6 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.</p>
                        </div>

                        <div className="lg:col-span-3 xl:col-span-4">
                            <div
                                className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                                <div>
                                    <img className="object-contain w-full h-6 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
                                         alt=""/>
                                </div>

                                <div>
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                                         alt=""/>
                                </div>

                                <div>
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                                         alt=""/>
                                </div>

                                <div>
                                    <img className="object-contain w-full mx-auto h-7"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                                         alt=""/>
                                </div>

                                <div className="hidden lg:block">
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
                                         alt=""/>
                                </div>

                                <div className="hidden lg:block">
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
                                         alt=""/>
                                </div>

                                <div className="hidden lg:block">
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
                                         alt=""/>
                                </div>

                                <div className="hidden lg:block">
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
                                         alt=""/>
                                </div>

                                <div className="hidden lg:block">
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
                                         alt=""/>
                                </div>

                                <div className="hidden lg:block">
                                    <img className="object-contain w-full mx-auto h-7"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
                                         alt=""/>
                                </div>

                                <div className="hidden lg:block">
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
                                         alt=""/>
                                </div>

                                <div className="hidden lg:block">
                                    <img className="object-contain w-full h-8 mx-auto"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
                                         alt=""/>
                                </div>
                            </div>

                            <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="sm:flex sm:items-center sm:justify-between sm:space-x-8">
                        <h2 className="text-3xl font-bold text-gray-900">Learn how to improve your Photography
                            skills</h2>

                        <div className="mt-6 sm:mt-0 sm:shrink-0">
                            <a href="#" title=""
                               className="inline-flex items-center text-base font-medium text-gray-900 group">
                                See all articles
                                <svg
                                    className="w-5 h-5 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
                            <a href="#" title="" className="block">
                                <img className="object-cover w-full h-full"
                                     src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-1.png"
                                     alt=""/>
                            </a>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[2px] transition-all duration-200 via-gray-900/20 to-transparent"></div>
                            <div
                                className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="17" y1="7" x2="7" y2="17"></line>
                                    <polyline points="8 7 17 7 17 16"></polyline>
                                </svg>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <div
                                    className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                                    <p className="text-lg font-bold leading-tight text-white">
                                        <a href="#" title="" className="">
                                            How to write content about your photographs
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </p>
                                    <p className="mt-4 text-sm font-medium text-white/70">April 09, 2022</p>
                                    <p className="mt-5 text-sm font-normal leading-6 text-white">Lorem ipsum dolor sit
                                        amet, consec tetur adip iscing elit quis auctor...</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
                            <a href="#" title="" className="block">
                                <img className="object-cover w-full h-full"
                                     src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-2.png"
                                     alt=""/>
                            </a>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[2px] transition-all duration-200 via-gray-900/20 to-transparent"></div>
                            <div
                                className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="17" y1="7" x2="7" y2="17"></line>
                                    <polyline points="8 7 17 7 17 16"></polyline>
                                </svg>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <div
                                    className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                                    <p className="text-lg font-bold leading-tight text-white">
                                        <a href="#" title="" className="">
                                            How to write content about your photographs
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </p>
                                    <p className="mt-4 text-sm font-medium text-white/70">April 09, 2022</p>
                                    <p className="mt-5 text-sm font-normal leading-6 text-white">Lorem ipsum dolor sit
                                        amet, consec tetur adip iscing elit quis auctor...</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
                            <a href="#" title="" className="block">
                                <img className="object-cover w-full h-full"
                                     src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-3.png"
                                     alt=""/>
                            </a>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[2px] transition-all duration-200 via-gray-900/20 to-transparent"></div>
                            <div
                                className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="17" y1="7" x2="7" y2="17"></line>
                                    <polyline points="8 7 17 7 17 16"></polyline>
                                </svg>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <div
                                    className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                                    <p className="text-lg font-bold leading-tight text-white">
                                        <a href="#" title="" className="">
                                            How to write content about your photographs
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </p>
                                    <p className="mt-4 text-sm font-medium text-white/70">April 09, 2022</p>
                                    <p className="mt-5 text-sm font-normal leading-6 text-white">Lorem ipsum dolor sit
                                        amet, consec tetur adip iscing elit quis auctor...</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
                            <a href="#" title="" className="block">
                                <img className="object-cover w-full h-full"
                                     src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-4.png"
                                     alt=""/>
                            </a>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[2px] transition-all duration-200 via-gray-900/20 to-transparent"></div>
                            <div
                                className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="17" y1="7" x2="7" y2="17"></line>
                                    <polyline points="8 7 17 7 17 16"></polyline>
                                </svg>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <div
                                    className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                                    <p className="text-lg font-bold leading-tight text-white">
                                        <a href="#" title="" className="">
                                            How to write content about your photographs
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </p>
                                    <p className="mt-4 text-sm font-medium text-white/70">April 09, 2022</p>
                                    <p className="mt-5 text-sm font-normal leading-6 text-white">Lorem ipsum dolor sit
                                        amet, consec tetur adip iscing elit quis auctor...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
