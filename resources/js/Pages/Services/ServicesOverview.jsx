import Marcom from "@/Layouts/MarcomLayout.jsx";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {
    CodeBracketIcon,
    ComputerDesktopIcon,
    MinusSmallIcon,
    PlusSmallIcon,
    ServerStackIcon,
    UserCircleIcon, UsersIcon, WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";
import {Link} from "@inertiajs/react";

const features = [
    {
        name: 'Application Services',
        description:
            'We provide end-to-end application services, from design and development to deployment and maintenance, ensuring your applications are robust and scalable.',
        href: '/services/application-services',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'DevOps Services',
        description:
            'Our DevOps services streamline your software development and operations, enhancing efficiency, reducing time-to-market, and improving collaboration across teams.',
        href: '/services/devops',
        icon: ServerStackIcon,
    },
    {
        name: 'IT Consulting Services',
        description:
            'We offer expert IT consulting services to help you navigate technology challenges, optimize your IT infrastructure, and implement strategic solutions.',
        href: '/services/it-consulting',
        icon: UserCircleIcon,
    },
    {
        name: 'Maintenance and Support',
        description:
            'Our maintenance and support services ensure that your systems remain secure, up-to-date, and functioning optimally, minimizing downtime and disruptions.',
        href: '/services/maintenance-and-support',
        icon: WrenchScrewdriverIcon,
    },
    {
        name: 'Smart Teams',
        description:
            'Our Smart Teams service provides you with highly skilled professionals who work as an extension of your in-house team, delivering expertise where you need it most.',
        href: '/services/smart-teams',
        icon: UsersIcon,
    },
    {
        name: 'Software Engineering Services',
        description:
            'We offer comprehensive software engineering services, covering the full software development lifecycle from concept to delivery, ensuring high-quality, reliable solutions.',
        href: '/services/software-engineering',
        icon: CodeBracketIcon,
    },
]

const faqs = [
    {
        question: "What types of services do you offer?",
        answer:
            "We offer a wide range of services, including custom software development, front-end and back-end development, IT consulting, and managed IT services.",
    },
    {
        question: "How do you determine the best service for my business?",
        answer:
            "We work closely with you to understand your business needs and goals, and then recommend services that align with your objectives.",
    },
    {
        question: "Can I combine multiple services for my project?",
        answer:
            "Yes, our services are flexible, and we often combine multiple services to create a comprehensive solution tailored to your needs.",
    },
    {
        question: "Do you provide ongoing support after service delivery?",
        answer:
            "Absolutely, we offer continuous support and maintenance to ensure your systems remain up-to-date and perform optimally.",
    },
    {
        question: "What is your approach to ensuring project success?",
        answer:
            "We follow a structured process that includes thorough planning, regular communication, and iterative development to ensure project success.",
    },
    {
        question: "How do I get started with your services?",
        answer:
            "You can get started by contacting us directly or exploring our services on the website. We’ll guide you through the next steps.",
    },
]

export default function ServicesOverview() {
    return (
        <Marcom>
            <div className="bg-white overflow-hidden">
                <div className="relative isolate pt-14">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="py-24 sm:py-32 lg:pb-40">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <div
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                    aria-hidden="true">Comprehensive and Tailored
                                </div>
                                <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                    Our Services Overview
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                    Explore Empuls3's wide range of services designed to meet the diverse needs of your business. From custom software development to advanced IT consulting, our expert team delivers solutions that drive growth and efficiency.
                                </p>
                                <div className="mt-10 space-x-8">
                                    <Link href="/company/about"
                                          className="relative h-12 overflow-hidden rounded bg-em-purple px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-pink hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                        <span className="relative">Learn More About Us</span>
                                    </Link>
                                    <Link href="/contact"
                                          className="font-semibold leading-6 text-em-purple hover:text-em-pink">
                                        Lets Get Started <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-16 flow-root sm:mt-24">
                                <div
                                    className="">
                                    <img
                                        src="/images/services-overview-img.png"
                                        alt=""
                                        width={2432}
                                        height={1442}
                                        className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-em-purple relative isolate overflow-hidden py-24 sm:py-32">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="text-base font-semibold leading-7 text-em-pink">Expertise Across the Board</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Discover Our Full Range of Services
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-white">
                            At Empuls3, we offer a comprehensive suite of services tailored to address the unique challenges and opportunities your business faces. Our expertise spans across various domains, ensuring that we can provide the solutions you need to succeed.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                        <feature.icon className="h-5 w-5 flex-none text-em-pink" aria-hidden="true"/>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p className="flex-auto">{feature.description}</p>
                                        <p className="mt-6">
                                            <a href={feature.href}
                                               className="text-sm font-semibold leading-6 text-white hover:text-em-yellow">
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
            <div className="bg-white relative overflow-hidden isolate">
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
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Innovating for a Better Future
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Our Commitment to Excellence
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At Empuls3, we believe in the power of technology to transform businesses. Our dedicated
                            team works tirelessly to deliver solutions that not only meet but exceed client
                            expectations. We are committed to innovation, quality, and client satisfaction.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/company/about"
                                  className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                <span className="relative">Why Empuls3?</span>
                            </Link>
                            <Link href="/contact"
                                  className="font-semibold leading-6 text-em-purple hover:text-em-pink">
                                Ready To Get Started? <span aria-hidden="true">→</span>
                            </Link>
                        </div>
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
        </Marcom>
    );
}
