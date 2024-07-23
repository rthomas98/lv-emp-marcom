import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    ChartPieIcon,
    CodeBracketIcon,
    InboxIcon,
    MinusSmallIcon,
    PlusSmallIcon,
    TrashIcon,
    UsersIcon
} from '@heroicons/react/24/outline'
import {ArrowPathIcon, CheckCircleIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import ClientLogos from "@/Components/ClientLogos.jsx";

const features = [
    {
        name: 'Custom Integrations',
        description:
            'We develop custom integrations to connect HubSpot with your existing tools and systems, enhancing functionality and efficiency.',
        icon: CodeBracketIcon,
    },
    {
        name: 'Workflow Automation',
        description:
            'Our solutions include automating workflows to streamline your marketing and sales processes, saving you time and effort.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced Analytics',
        description:
            'We implement advanced analytics to provide you with actionable insights, helping you make data-driven decisions.',
        icon: ChartPieIcon,
    },
]

const faqs = [
    {
        question: "What is HubSpot development?",
        answer:
            "HubSpot development involves customizing and integrating HubSpot to meet your specific business needs.",
    },
    {
        question: "How long does it take to develop a custom HubSpot solution?",
        answer:
            "The timeline varies based on the project’s complexity, but we aim to deliver within agreed-upon deadlines.",
    },
    {
        question: "Can you integrate HubSpot with my existing tools?",
        answer:
            "Yes, we can develop custom integrations to connect HubSpot with your existing tools and systems.",
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer:
            "Absolutely, we provide continuous support and maintenance to keep your HubSpot implementation up-to-date and running smoothly.",
    },
    {
        question: "Is training included in your HubSpot development services?",
        answer:
            "Yes, we offer training sessions to ensure your team is proficient in using the new HubSpot features.",
    },
    {
        question: "Can you automate our marketing workflows in HubSpot?",
        answer:
            "Yes, we can automate workflows to streamline your marketing and sales processes, saving you time and effort.",
    },
]

const benefits = [
    'Tailor HubSpot to fit your existing systems.',
    'Streamline processes and save time.',
    'Gain actionable insights and improve decision-making.',
    'Ensure your team is proficient in using HubSpot.',
    'Maintain peak performance and functionality.',
    'Enhance speed and user experience.',
]

export default function HubSpotDevelopment() {
    return (
        <Marcom>
            <div className="bg-white relative isolate overflow-hidden">
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
                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1
                            className="col-start-1 row-start-1 h-7 text-base text-center font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Enhance Your Marketing Automation
                        </h1>
                        <div
                            className="mt-4 text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
                            HubSpot Development Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                            Empuls3 offers specialized HubSpot development solutions designed to optimize your marketing, sales, and customer service processes. Our expert team crafts custom integrations and functionalities to maximize your HubSpot investment.
                        </p>
                    </div>

                    <div className="flex justify-center mt-10">
                        <img className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                             src="/images/hb-hero.png"/>
                    </div>
                </div>
            </div>
            <div className="bg-em-purple py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Customized for Your Success
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            About Our HubSpot Development Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            At Empuls3, we specialize in creating custom HubSpot solutions tailored to your business needs. Our development process focuses on enhancing your marketing automation, CRM, and customer service capabilities. We work closely with you to understand your goals and design a HubSpot solution that drives growth and efficiency.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="text-base font-semibold leading-7 text-white">
                                        <div
                                            className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-em-yellow">
                                            <feature.icon className="h-6 w-6 text-em-purple" aria-hidden="true"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p className="flex-auto">{feature.description}</p>

                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <ClientLogos/>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
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
                        <rect width="100%" height="100%" strokeWidth={0}
                              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
                    </svg>
                </div>
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <h2
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                    aria-hidden="true">Innovating for a Better Future
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Why Choose Our HubSpot Development Solutions
                                </div>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Choosing Empuls3 for your HubSpot development needs means partnering with a team that understands the intricacies of HubSpot and how to leverage its full potential. Our developers have extensive experience in customizing HubSpot to meet the unique needs of our clients, ensuring that you get the most out of your investment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="/images/hb-img-1.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Our approach to HubSpot development is centered around understanding your business goals and translating them into a powerful automation platform. We take the time to learn about your brand, your target audience, and your specific needs, ensuring that the final product aligns perfectly with your vision. From custom integrations to advanced analytics, we have the expertise to bring your ideas to life.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                          aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Tailored Solutions.</strong> We offer personalized HubSpot solutions that cater to your unique business requirements and goals.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                        aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">User-Friendly Interfaces.</strong> Our designs prioritize ease of use, ensuring that your team can easily navigate and utilize HubSpot’s features.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                    aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Performance Optimization.</strong> We focus on optimizing your HubSpot implementation for speed and performance, enhancing user experience and engagement.
                  </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    At Empuls3, we believe in building long-term relationships with our clients. Our commitment to excellence extends beyond the initial development phase, as we provide ongoing support and maintenance to ensure your HubSpot implementation continues to perform at its best. Choose Empuls3 for a HubSpot development experience that drives growth and success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-em-pink relative isolate overflow-hidden">
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
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow mb-4"
                            aria-hidden="true">Our Methodology
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            HubSpot Development Process
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Our structured process ensures that every aspect of your HubSpot development is meticulously planned and executed, resulting in a solution that aligns with your business goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                        <div className="grid grid-cols-1 gap-4 rounded-xl bg-[#720D31] p-8">
                            <div
                                className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-em-yellow">
                                <p className="text-xl font-bold text-purple">1</p>
                            </div>
                            <p className="text-xl font-semibold text-white">Requirement Analysis</p>
                            <p className="text-sm text-[#ffffff]">We begin by understanding your business needs and
                                technical requirements to design a HubSpot solution that fits perfectly.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 rounded-xl bg-[#720D31] p-8">
                            <div
                                className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-em-yellow">
                                <p className="text-xl font-bold text-purple">2</p>
                            </div>
                            <p className="text-xl font-semibold text-white">Development and Integration</p>
                            <p className="text-sm text-[#ffffff]">Our team develops and integrates custom features and
                                functionalities, ensuring seamless operation within your HubSpot environment.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 rounded-xl bg-[#720D31] p-8">
                            <div
                                className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-em-yellow">
                                <p className="text-xl font-bold text-purple">3</p>
                            </div>
                            <p className="text-xl font-semibold text-white">Testing and Quality Assurance</p>
                            <p className="text-sm text-[#ffffff]">Rigorous testing is conducted to identify and fix any
                                issues, ensuring the HubSpot solution meets our high-quality standards.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
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
            <div className="relative isolate overflow-hidden bg-em-purple py-24 sm:py-32">
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
                    <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%"
                          strokeWidth={0}/>
                </svg>
                <div className="">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div
                            className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                            <img
                                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                                src="/images/hb-img-2.png"
                                alt=""
                            />
                            <div className="w-full flex-auto">
                                <h2
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow mb-4"
                                    aria-hidden="true">Innovating for a Better Future
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                                    Our Commitment to Excellence
                                </div>
                                <p className="mt-6 text-lg leading-8 text-white">
                                    At Empuls3, we believe in the power of technology to transform businesses. Our
                                    dedicated team works tirelessly to deliver solutions that not only meet but exceed
                                    client expectations. We are committed to innovation, quality, and client
                                    satisfaction.
                                </p>
                                <ul
                                    role="list"
                                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                                >
                                    {benefits.map((benefit) => (
                                        <li key={benefit} className="flex gap-x-3">
                                            <CheckCircleIcon className="h-7 w-5 flex-none text-em-yellow"
                                                             aria-hidden="true"/>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
