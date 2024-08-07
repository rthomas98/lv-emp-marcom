import Marcom from "@/Layouts/MarcomLayout.jsx";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import ClientLogos from "@/Components/ClientLogos.jsx";
import {Link} from "@inertiajs/react";

const faqs = [
    {
        question: "What is React Native?",
        answer:
            "React Native is a framework for building mobile applications using JavaScript and React, allowing for cross-platform compatibility.",
    },
    {
        question: "How long does it take to develop a React Native app?",
        answer:
            "The timeline varies based on the project’s complexity, but we aim to deliver within a few weeks to a couple of months.",
    },
    {
        question: "Can you convert my existing app to React Native?",
        answer:
            "Yes, we can convert your existing app to React Native, enhancing its performance and user experience.\n",
    },
    {
        question: "Do you offer ongoing support for React Native apps?",
        answer:
            "Absolutely, we provide continuous support and maintenance to ensure your app remains up-to-date and running smoothly.",
    },
    {
        question: "Is React Native suitable for large-scale apps?",
        answer:
            "Yes, React Native is scalable and suitable for developing large-scale applications with high performance.",
    },
    {
        question: "Can you integrate third-party services with React Native?",
        answer:
            "Yes, we can integrate various third-party services and APIs to enhance the functionality of your React Native app.",
    },
]

export default function ReactNativeDev() {
    return (
        <Marcom>
            <div className="bg-white">
                <div className="relative isolate pt-14">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%"
                              strokeWidth={0}/>
                    </svg>
                    <div
                        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">

                            <h1
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                aria-hidden="true">Seamless Cross-Platform Apps
                            </h1>
                            <div
                                className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                React Native Development Solutions
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Empuls3 offers expert React Native development solutions to create high-performance, cross-platform mobile apps. Our team leverages React Native to build applications that deliver native-like experiences on both iOS and Android.
                            </p>
                        </div>
                        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                                    <img
                                        className="mx-auto w-[22.875rem] max-w-full"
                                        alt=""
                                         src="../images/rn-hero-img.png"/>

                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 bg-em-purple sm:py-16 lg:py-24 relative isolate overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
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
                    <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0}/>
                </svg>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w mx-auto text-center">

                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Efficient and Robust
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            About Our React Native Development Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            At Empuls3, we specialize in React Native development to build versatile and robust mobile
                            applications. Our solutions ensure efficient performance and a seamless user experience
                            across multiple platforms. We focus on leveraging the capabilities of React Native to
                            deliver apps that are scalable, maintainable, and cost-effective.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                        <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
                            <div className="py-10 px-9">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-em-pink">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
                                </svg>

                                <h3 className="mt-8 text-lg font-semibold text-black">Cross-Platform Compatibility</h3>
                                <p className="mt-4 text-base text-gray-600">Our React Native apps run smoothly on both
                                    iOS and Android, providing a consistent user experience across devices.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
                            <div className="py-10 px-9">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-em-pink">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"/>
                                </svg>

                                <h3 className="mt-8 text-lg font-semibold text-black">Fast Development Cycle</h3>
                                <p className="mt-4 text-base text-gray-600">React Native allows for faster development
                                    cycles, reducing time-to-market without compromising on quality.
                                </p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
                            <div className="py-10 px-9">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-em-pink">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
                                </svg>

                                <h3 className="mt-8 text-lg font-semibold text-black">Native-Like Performance</h3>
                                <p className="mt-4 text-base text-gray-600">We deliver apps that offer native-like
                                    performance and functionality, ensuring high user satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientLogos/>
            <div className="py-10 bg-white sm:py-16 lg:py-24 relative isolate overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_left_center,white,transparent)]"
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
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                        <div className="pr-12 sm:pr-0">
                            <div className="relative max-w-xs mb-12">
                                <img className="object-bottom rounded-md"
                                     src="/images/pwm-long-img-6.png"
                                     alt=""/>

                                <img className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                                     src="/images/pwm-long-img-5.png"
                                     alt=""/>
                            </div>
                        </div>

                        <div>
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">The Empuls3 Advantage
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Why Choose Our React Native Development Solutions
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                At Empuls3, we believe in the power of technology to transform businesses. Our dedicated
                                team works tirelessly to deliver solutions that not only meet but exceed client
                                expectations. We are committed to innovation, quality, and client satisfaction.
                            </p>

                            <h3 className="my-4 text-2xl font-extrabold tracking-tight text-slate-900">
                                Expert Team
                            </h3>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our experienced developers have extensive knowledge in React Native, delivering
                                high-quality mobile applications tailored to your needs.
                            </p>
                            <h3 className="my-4 text-2xl font-extrabold tracking-tight text-slate-900">
                                Cost-Effective Solutions
                            </h3>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                React Native's code reuse reduces development costs while maintaining high standards of
                                quality and performance.
                            </p>

                            <h3 className="my-4 text-2xl font-extrabold tracking-tight text-slate-900">
                                Continuous Support
                            </h3>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We provide ongoing support and maintenance to ensure your app remains up-to-date and
                                performs optimally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
                    <div className="mb-5 lg:w-4/3 lg:mb-0 lg:mr-20">

                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Tailored to Your Needs
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            How Empuls3 Can Help
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At Empuls3, we believe in the power of technology to transform businesses. Our dedicated
                            team works tirelessly to deliver solutions that not only meet but exceed client
                            expectations. We are committed to innovation, quality, and client satisfaction.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our team of skilled developers and designers works collaboratively to create React Native
                            apps that are not only functional but also visually appealing and engaging. We prioritize
                            user experience and design interfaces that resonate with your target audience, ensuring that
                            your app makes a strong impression from the start.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            With Empuls3, you get a partner committed to your success. We provide continuous support and guidance throughout the development process and beyond, ensuring that your app evolves and grows with your business. Choose Empuls3 for a seamless and efficient React Native development experience.
                        </p>
                    </div>
                    <div className="flex-grow pt-1">
                        <div className="flex items-center mb-3">

                        </div>
                        <div className="grid grid-cols-2 row-gap-6 sm:grid-cols-4">
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="object-cover w-full h-56 sm:h-96"
                        src="/images/pwa-img-7.png"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50"/>
                </div>
            </div>
            <div className="bg-em-pink relative isolate overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl divide-y divide-white/10">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            Our Commitment to Excellence
                        </h2>
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
                        className="relative isolate overflow-hidden bg-em-purple px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fillOpacity="0.7"/>
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#BD1550"/>
                                    <stop offset={1} stopColor="#BD1550"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow mb-4"
                            aria-hidden="true">Innovating for a Better Future
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            Our Commitment to Excellence
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            At Empuls3, we believe in the power of technology to transform businesses. Our dedicated
                            team works tirelessly to deliver solutions that not only meet but exceed client
                            expectations. We are committed to innovation, quality, and client satisfaction.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="/contact"
                                  className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                <span className="relative">Ready To Get Started?</span>
                            </Link>
                            <Link href="/frequently-asked-questions"
                                  className="font-semibold leading-6 text-white hover:text-em-pink">
                                Have More Questions?<span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src="/images/pwa-img-8.png"
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
