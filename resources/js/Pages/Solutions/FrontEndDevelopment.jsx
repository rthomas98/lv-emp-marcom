import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon, ServerIcon
} from '@heroicons/react/20/solid'
import ClientLogos from "@/Components/ClientLogos.jsx";
import {
    ArrowLeftEndOnRectangleIcon,
    BeakerIcon, CircleStackIcon,
    ClipboardIcon, CodeBracketIcon,
    CodeBracketSquareIcon,
    ComputerDesktopIcon,
    DocumentMagnifyingGlassIcon,
    ListBulletIcon
} from "@heroicons/react/24/outline";
import {Link} from "@inertiajs/react";

const features = [
    {
        name: 'Responsive Design',
        description:
            'Our front-end solutions are fully responsive, ensuring a seamless user experience across all devices.',
        icon: CodeBracketSquareIcon,
    },
    {
        name: 'SEO Optimization',
        description:
            'We optimize your front-end for search engines, helping you achieve higher rankings and increased visibility.',
        icon: DocumentMagnifyingGlassIcon,
    },
    {
        name: 'Custom Themes',
        description:
            'We design custom themes that reflect your brand’s unique identity and enhance user engagement.',
        icon: ComputerDesktopIcon,
    },
]

const timeline = [
    {
        name: 'Tailored Solutions',
        description:
            'We offer personalized front-end solutions that cater to your unique business requirements and goals.',
        date: 'Reason One',
        dateTime: '2021-08',
    },
    {
        name: 'User-Friendly Interfaces',
        description:
            'Our designs prioritize ease of use, ensuring that your website visitors have a seamless and enjoyable experience.',
        date: 'Reason Two',
        dateTime: '2021-12',
    },
    {
        name: 'Performance Optimization',
        description:
            'We focus on optimizing your front-end for speed and performance, enhancing user experience and engagement.',
        date: 'Reason Three',
        dateTime: '2022-02',
    },
]

const security = [
    {
        name: 'Requirement Analysi:',
        description: 'We begin by understanding your business needs and technical requirements to design a front-end solution that fits perfectly.',
        icon: ListBulletIcon,
    },
    {
        name: 'Design and Prototyping:',
        description: 'Our team creates detailed designs and prototypes to visualize the final product and gather feedback.',
        icon: ClipboardIcon,
    },
    {
        name: 'Development:',
        description: 'We develop the front-end using the latest technologies and best practices, ensuring high performance and reliability.',
        icon: CodeBracketIcon,
    },
    {
        name: 'Testing and Quality Assurance:',
        description: 'Rigorous testing is conducted to identify and fix any issues, ensuring the front-end meets our high-quality standards.',
        icon: BeakerIcon,
    },
    {
        name: 'Integration:',
        description: 'We ensure seamless integration with your back-end systems and third-party services for a cohesive user experience.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Deployment and Support:',
        description: 'We deploy the front-end and provide ongoing support to ensure it operates smoothly and effectively.',
        icon: CircleStackIcon,
    },
]

const faqs = [
    {
        id: 1,
        question: "What is front-end development?",
        answer:
            "Front-end development involves creating the user interface and user experience of a website or application.\n",
    },
    {
        id: 2,
        question: "How long does it take to develop a front-end solution?",
        answer:
            "The timeline varies based on the project’s complexity, but we aim to deliver within agreed-upon deadlines.",
    },
    {
        id: 3,
        question: "Can you redesign my existing front-end?",
        answer:
            "Yes, we can revamp your existing front-end to improve its design, functionality, and performance.",
    },
    {
        id: 4,
        question: "Do you offer ongoing support and maintenance?",
        answer:
            "Absolutely, we provide continuous support and maintenance to keep your front-end up-to-date and running smoothly.",
    },
    {
        id: 5,
        question: "Is SEO included in your front-end development services?",
        answer:
            "Yes, we optimize your front-end for search engines to enhance visibility and drive organic traffic.",
    },
    {
        id: 6,
        question: "Can you integrate the front-end with my existing back-end systems?",
        answer:
            "Yes, we ensure seamless integration with your back-end systems and third-party services.",
    },

]
export default function FrontEndDevelopment() {
    return (
        <Marcom>
            <div className="bg-white">
                <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
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
                        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%"
                              strokeWidth={0}/>
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
                    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                        <div
                            className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">

                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <h1
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                    aria-hidden="true">Engaging and Intuitive
                                </h1>
                                <div
                                    className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                    Front-End Development Solutions
                                </div>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">At
                                    Empuls3 offers top-tier front-end development solutions designed to create engaging, intuitive, and visually stunning user interfaces. Our expert team crafts front-end experiences that captivate users and enhance usability.
                                </p>
                            </div>
                            <img
                                src="/images/fe-hero.png"
                                alt=""
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
                </div>
            </div>
            <div className="bg-em-purple relative isolate overflow-hidden py-24 sm:py-32">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl lg:text-center">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Designed for User Experience
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            About Our Front-End Development Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            At Empuls3, we specialize in creating front-end solutions that are not only visually
                            appealing but also highly functional and user-friendly. Our development process focuses on
                            delivering interfaces that provide seamless interactions and a delightful user experience.
                            We work closely with you to understand your goals and design a front-end that reflects your
                            brand and engages your audience.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                        <feature.icon className="h-5 w-5 flex-none text-em-yellow" aria-hidden="true"/>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <ClientLogos/>
            <div className="bg-white relative isolate overflow-hidden pb-24 sm:pb-32">
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
                    <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0}/>
                </svg>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl lg:mx-0">
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">The Empuls3 Advantage
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Why Choose Our Front-End Development Solutions
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Choosing Empuls3 for your front-end development needs means partnering with a team dedicated to your success. Our developers have extensive experience in creating interfaces that are both visually stunning and highly functional. We understand the importance of a strong online presence and strive to deliver front-end solutions that not only meet but exceed your expectations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {timeline.map((item) => (
                            <div key={item.name}>
                                <time
                                    dateTime={item.dateTime}
                                    className="flex items-center text-sm font-semibold leading-6 text-em-pink"
                                >
                                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx={2} cy={2} r={2} fill="currentColor"/>
                                    </svg>
                                    {item.date}
                                    <div
                                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                        aria-hidden="true"
                                    />
                                </time>
                                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative isolate overflow-hidden bg-em-pink py-24 sm:py-32">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow mb-4"
                            aria-hidden="true">Our Methodology
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            Front-End Development Process
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Our structured process ensures that every aspect of your front-end development is meticulously planned and executed, resulting in an interface that aligns with your business goals.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            src="/images/fe-img-1.png"
                            alt=""
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                            width={2432}
                            height={1442}
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-em-pink pt-[7%]"/>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {security.map((security) => (
                            <div key={security.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
                                    <security.icon className="absolute left-1 top-1 h-5 w-5 text-em-yellow"
                                                   aria-hidden="true"/>
                                    {security.name}
                                </dt>
                                {' '}
                                <dd className="inline">{security.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                        Frequently Asked Questions Section
                    </div>

                    <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="relative bg-em-yellow">
                <div
                    className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/fe-cta.png"
                        alt=""
                    />
                    <svg
                        viewBox="0 0 926 676"
                        aria-hidden="true"
                        className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
                    >
                        <path
                            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                            fillOpacity=".4"
                            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                        />
                        <defs>
                            <linearGradient
                                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                                x1="926.392"
                                x2="-109.635"
                                y1=".176"
                                y2="321.024"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#776FFF"/>
                                <stop offset={1} stopColor="#FF4694"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">We want to hear from you
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Ready to Enhance Your User Interface?
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Partner with Empuls3 for comprehensive front-end development solutions that captivate and engage your audience. Contact us to discuss your project requirements and get started today.
                        </p>
                        <div className="mt-8">
                            <Link href="/contact/"
                                  className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                <span className="relative">Get Started</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
