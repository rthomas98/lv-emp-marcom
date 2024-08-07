import Marcom from "@/Layouts/MarcomLayout.jsx";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import ClientLogos from "@/Components/ClientLogos.jsx";
import {Link} from "@inertiajs/react";

const features = [
    {
        icon:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>


    ,
        title: "User-Friendly Design",
        desc: "Our PWAs are designed with a focus on user experience, ensuring easy navigation and engagement."
    },
    {
        icon:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
    </svg>

    ,
        title: "Scalable Architecture",
        desc: "We build PWAs with scalability in mind, allowing your app to grow with your business."
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor"
                 className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
            </svg>,
        title: "Secure Development",
        desc: "Our development process includes robust security measures to protect your app and user data."
    }
]

const faqs = [
    {
        question: "What is a Progressive Web App (PWA)?",
        answer:
            "A PWA is a type of application software delivered through the web, built using common web technologies including HTML, CSS, and JavaScript.",
    },
    {
        question: "How long does it take to develop a PWA?",
        answer:
            "The timeline varies based on the project’s complexity, but we aim to deliver within a few weeks to a couple of months.",
    },
    {
        question: "Can you convert my existing website into a PWA?",
        answer:
            "Yes, we can convert your existing website into a PWA, enhancing its performance and user experience.",
    },
    {
        question: "Do PWAs work offline?",
        answer:
            "Yes, PWAs can work offline or on low-quality networks, providing users with uninterrupted access.",
    },
    {
        question: "Is a PWA compatible with all devices?",
        answer:
            "PWAs are designed to be cross-platform, working seamlessly on various devices and operating systems.",
    },
    {
        question: "Do you offer ongoing support for PWAs?",
        answer:
            "Absolutely, we provide continuous support and maintenance to ensure your PWA remains up-to-date and running smoothly.",
    },
]

export default function ProgressiveWebDevelopment() {
    return (
        <Marcom>
            <div className="bg-gradient-to-b from-[#BD1550] relative to-[#720D31] relative isolate overflow-hidden">
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
                    <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0}/>
                </svg>
                <div className="relative lg:min-h-[600px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">

                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                        <div className="max-w-xl mx-auto text-center">
                            <h1
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow"
                                aria-hidden="true">Next-Generation Web Apps
                            </h1>
                            <div
                                className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-white sm:text-7xl xl:max-w-[43.5rem]">
                                Progressive Web Development Solutions
                            </div>
                            <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                                Empuls3 offers cutting-edge Progressive Web App (PWA) development solutions designed to
                                deliver fast, reliable, and engaging user experiences. Our expert team creates PWAs that
                                combine the best of web and mobile apps.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="py-14 relative isolate overflow-hidden">
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
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-xl space-y-3">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Advanced and Reliable
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            About Our Progressive Web Development Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At Empuls3, we specialize in developing Progressive Web Apps (PWAs) that provide a superior user experience. Our PWAs are designed to be fast, reliable, and engaging, combining the best features of web and mobile applications. We focus on creating solutions that are easy to install, use offline, and offer improved performance and user engagement.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                        <div
                                            className="w-12 h-12 border text-em-pink rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <ClientLogos/>
            <div className="py-10 bg-gray-50 sm:py-16 lg:py-24 relative isolate overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
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
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">The Empuls3 Advantage
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Why Choose Our Progressive Web Development Solutions
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
                        <div className="md:px-4 lg:px-10">
                            <img className="-rotate-1 rounded-xl w-full mx-auto shadow-xl ring-1 ring-gray-400/10"
                                 src="../images/pwm-long-img-1.png"
                                 alt=""/>
                            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Expertise in PWA
                                Development</h3>
                            <p className="mt-4 text-base text-gray-600">Our team has extensive experience in developing
                                high-performance PWAs tailored to your business needs.</p>
                        </div>

                        <div className="md:px-4 lg:px-10">
                            <img className="rotate-1 rounded-xl w-full mx-auto shadow-xl ring-1 ring-gray-400/10"
                                 src="../images/pwm-long-img-2.png"
                                 alt=""/>
                            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Innovative Features</h3>
                            <p className="mt-4 text-base text-gray-600">We incorporate the latest features and
                                technologies to enhance your PWA's functionality and user experience.</p>
                        </div>

                        <div className="md:px-4 lg:px-10">
                            <img className="-rotate-1 rounded-xl w-full mx-auto shadow-xl ring-1 ring-gray-400/10"
                                 src="../images/pwm-long-img-3.png"
                                 alt=""/>
                            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Client-Centric
                                Approach</h3>
                            <p className="mt-4 text-base text-gray-600">We work closely with you to ensure the final
                                product aligns with your goals and provides maximum value.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                    <div className="lg:py-6 lg:pr-16">
                        <div className="mb-4">
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">Our Methodology
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Progressive Web Development Process
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our structured process ensures that every aspect of your PWA development is meticulously planned and executed, resulting in an application that aligns with your business goals.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300"/>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">Requirement Analysis</p>
                                <p className="text-gray-700">
                                    We begin by understanding your business needs and technical requirements to design a PWA solution that fits perfectly.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300"/>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">Design and Prototyping</p>
                                <p className="text-gray-700">
                                    Our team creates detailed designs and prototypes to visualize the final product and gather feedback.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300"/>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">Development</p>
                                <p className="text-gray-700">
                                    We develop the PWA using the latest technologies and best practices, ensuring high performance and reliability.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300"/>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">Testing and Quality Assurance</p>
                                <p className="text-gray-700">
                                    Rigorous testing is conducted to identify and fix any issues, ensuring the PWA meets our high-quality standards.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 bg-em-pink border rounded-full">
                                        <svg
                                            className="w-6 text-em-yellow"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <polyline
                                                fill="none"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeMiterlimit="10"
                                                points="6,12 10,16 18,8"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                            src="../images/pwm-long-img-4.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="relative isolate py-10 overflow-hidden bg-em-purple sm:py-16 lg:py-24">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
                <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-end grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-20">
                        <div>
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">Tailored to Your Needs
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                                How Empuls3 Can Help
                            </div>
                            <p className="mt-6 text-lg leading-8 text-white">
                                At Empuls3, we are committed to helping you create Progressive Web Apps that provide a
                                seamless and engaging user experience. Our PWA development solutions are designed to be
                                fast, reliable, and easy to use, ensuring that your app stands out in a competitive
                                market.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-white">
                                Our team of experienced developers and designers works collaboratively to create PWAs
                                that are not only functional but also user-friendly and engaging. We prioritize user
                                experience and design interfaces that resonate with your target audience, ensuring that
                                your PWA makes a strong impression from the start.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-white">
                                With Empuls3, you get a partner who is dedicated to your success. We provide continuous
                                support and guidance throughout the development process and beyond, ensuring that your
                                PWA evolves and grows with your business. Choose Empuls3 for a seamless and efficient
                                PWA development experience.
                            </p>

                        </div>

                        <div className="lg:px-12">
                            <div className="overflow-hidden text-center bg-white rounded-md shadow-md">
                                <div className="px-12 py-10">
                                    <h3 className="text-xs font-semibold tracking-widest uppercase text-rose-400">Full
                                        Pack</h3>
                                    <p className="mt-4 text-6xl font-bold text-black">$79</p>

                                    <a href="#" title=""
                                       className="inline-flex items-center justify-center w-full px-4 py-4 mt-10 font-semibold text-white transition-all duration-200 rounded-full bg-rose-400 hover:bg-rose-500 focus:bg-rose-500"
                                       role="button">
                                        Get full access
                                        <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>

                                    <div className="flex items-center justify-center mt-5">
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                        </svg>
                                        <span
                                            className="ml-2 text-sm text-gray-500"> 14 Days Moneyback Guarantee </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white relative isolate overflow-hidden">
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
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">

                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Frequently Asked Questions Section
                        </h2>

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
            <div className="py-10 bg-white sm:py-16 lg:py-24 relative isolate overflow-hidden">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="flex items-center justify-center">
                            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                                <img className="object-cover w-full h-full"
                                     src="../images/pwa-img-1.png"
                                     alt=""/>
                            </div>

                            <div
                                className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                                <img className="object-cover w-full h-full"
                                     src="../images/pwa-img-2.png"
                                     alt=""/>
                            </div>

                            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                                <img className="object-cover w-full h-full"
                                     src="../images/pwa-img-3.png"
                                     alt=""/>
                            </div>
                        </div>

                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Ready to Transform Your Web Experience?
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Get Started with Progressive Web Apps
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Partner with Empuls3 for comprehensive PWA development solutions that deliver fast,
                            reliable, and engaging user experiences. Contact us to discuss your project requirements and
                            get started today.
                        </p>

                        <div className="mt-10 text-center gap-x-6">
                            <Link href="/contact"
                                  className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                <span className="relative">Lets Get Started</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>

        </Marcom>
    );
}
