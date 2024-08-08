import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    CodeBracketSquareIcon, ComputerDesktopIcon,
    MinusSmallIcon,
    PlusSmallIcon,
    WrenchIcon
} from '@heroicons/react/24/outline'
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";

const features = [
    {
        name: 'Custom Application Development',
        description:
            'We build custom applications tailored to your business requirements, ensuring they are scalable, secure, and user-friendly.',
        icon: CodeBracketSquareIcon,
    },
    {
        name: 'Application Maintenance and Support',
        description:
            'Our maintenance and support services ensure your applications remain up-to-date, secure, and running smoothly, minimizing disruptions.',
        icon: WrenchIcon,
    },
    {
        name: 'Application Modernization',
        description:
            'We help you modernize legacy applications to improve performance, enhance user experience, and extend their lifespan.',
        icon: ComputerDesktopIcon,
    },
]

const faqs = [
    {
        question: "What types of applications do you develop?",
        answer:
            "We develop a wide range of applications, including web, mobile, and enterprise applications, tailored to meet your specific needs.",
    },
    {
        question: "Can you support and maintain existing applications?",
        answer:
            "Yes, we offer comprehensive maintenance and support services for both new and existing applications.",
    },
    {
        question: "How long does it take to develop a custom application?",
        answer:
            "The timeline varies depending on the complexity of the project, but we work to deliver within agreed-upon deadlines.",
    },
    {
        question: "Do you offer application modernization services?",
        answer:
            "Yes, we specialize in modernizing legacy applications to improve their performance and extend their lifespan.",
    },
    {
        question: "What is your development process?",
        answer:
            "Our process includes requirement gathering, design, development, testing, and deployment, followed by ongoing support and maintenance.",
    },
    {
        question: "How do I get started with your application services?",
        answer:
            "You can get started by contacting us directly or exploring our services on the website. We’ll guide you through the next steps.",
    },

]


export default function ApplicationServices() {
    return (
        <Marcom>
            <div className="">
                <div className="relative pt-12 isolate overflow-hidden bg-em-purple sm:pt-16">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%"
                              strokeWidth={0}/>
                    </svg>
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <div
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow"
                                aria-hidden="true">End-to-End Application Solutions
                            </div>
                            <h1
                                className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-7xl">
                                Application Services
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white lg:max-w-none">
                                Empuls3 offers comprehensive application services designed to cover every stage of the application lifecycle. From initial concept to deployment and maintenance, our expert team delivers high-performance applications that drive business growth and efficiency.
                            </p>

                        </div>

                        <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
                            <div className="absolute top-0 transform -translate-x-1/2 left-1/2">

                            </div>

                            <div className="absolute inset-0">
                                <img className="object-cover w-full h-full opacity-50"
                                     src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                                     alt=""/>
                            </div>

                            <img className="relative w-full max-w-5xl mx-auto rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                 src="/images/application-services-hero.png"
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32 relative overflow-hidden isolate">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none"/>
                        </pattern>
                    </defs>
                    <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0}/>
                </svg>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div
                            className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Comprehensive and Customized
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">About Our Application Services</h2>
                        <p className="mb-4">
                            At Empuls3, we provide end-to-end application services that cater to the specific needs of your business. Our approach ensures that every aspect of your application is meticulously planned, developed, and maintained to achieve optimal performance and reliability. Whether you need a custom-built solution or support for an existing application, our team is here to help you succeed.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div
                                            className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-em-purple">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="py-10 bg-em-pink sm:py-16 lg:py-24 relative overflow-hidden isolate">

                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                        className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
                        <div className="lg:col-span-2">
                            <div
                                className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-white"
                                aria-hidden="true">The Empuls3 Advantage
                            </div>
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                                Why Choose Our Application Services
                            </h2>
                            <p className="mb-4 text-white">
                                Choosing Empuls3 for your application services means partnering with a team that is committed to your success. We bring extensive experience and technical expertise to every project, ensuring that your applications are not only functional but also aligned with your business goals. Our comprehensive approach covers everything from development to maintenance, providing you with a reliable and scalable solution that grows with your business.
                            </p>
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
            </div>
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
            <div className="bg-em-purple relative isolate overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    />
                </div>
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
                        className="relative isolate overflow-hidden bg-em-pink px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fillOpacity="0.7"/>
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#231B53"/>
                                    <stop offset={1} stopColor="#1F1946"/>
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <div
                                className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-pink"
                                aria-hidden="true">Ready to Elevate Your Applications?
                            </div>
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                                Partner with Empuls3 Today
                            </h2>
                            <p className="mb-4 text-white">
                                Whether you're starting from scratch or looking to modernize an existing application, Empuls3 is here to help. Our comprehensive application services are designed to meet your business needs and drive growth. Contact us today to learn more or get started.
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
                                src="/images/app-ser-img-1.png"
                                alt=""
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
