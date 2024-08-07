import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    CircleStackIcon,
    CodeBracketSquareIcon,
    MinusSmallIcon,
    PaintBrushIcon,
    PlusSmallIcon
} from "@heroicons/react/24/outline";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Link} from "@inertiajs/react";

const features = [
    {
        name: 'Custom Software Solutions.',
        description:
            'We develop custom software solutions that address your specific business needs and challenges, ensuring optimal performance and scalability.\n',
        icon: CodeBracketSquareIcon,
    },
    {
        name: 'User-Centered Design.',
        description: 'Our design process prioritizes the user experience, creating intuitive and engaging interfaces that enhance user satisfaction.',
        icon: PaintBrushIcon,
    },
    {
        name: 'Agile Development.',
        description: 'We follow agile development methodologies to deliver high-quality software quickly and efficiently, adapting to changes as needed.',
        icon: CircleStackIcon,
    },
]

const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
]

const faqs = [
    {
        question: "What is custom software development?",
        answer:
            "Custom software development involves creating software solutions tailored to the specific needs and requirements of a business.",
    },
    {
        question: "How long does it take to develop custom software?",
        answer:
            "The timeline varies based on the project’s complexity, but we aim to deliver within agreed-upon deadlines.",
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer:
            "Absolutely, we provide continuous support and maintenance to ensure your software remains up-to-date and running smoothly.",
    },
    {
        question: "Can you redesign my existing software?",
        answer:
            "Yes, we can revamp your existing software to improve its design, functionality, and performance.",
    },
    {
        question: "What technologies do you use for software development?",
        answer:
            "We use a variety of modern technologies and frameworks, tailored to meet the specific needs of each project.",
    },
    {
        question: "Is user experience considered in your software design process?",
        answer:
            "Yes, user experience is a key focus in our design process, ensuring intuitive and engaging interfaces.",
    },
]

export default function SoftwareDevDesign() {
    return (
        <Marcom>
            <div className="bg-white">

                <div className="relative isolate overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                            <svg
                                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <polygon points="0,0 90,0 50,100 0,100"/>
                            </svg>

                            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">

                                    <h1
                                        className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                        aria-hidden="true">Innovative and Comprehensive
                                    </h1>
                                    <div
                                        className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                        Software Development and Design Solutions
                                    </div>
                                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        Empuls3 offers expert software development and design solutions that cater to a wide range of business needs. Our team of skilled developers and designers creates innovative, scalable, and user-friendly applications to help your business thrive.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                            src="/images/swdd-hero-img.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white relative isolate py-24 sm:py-32">
                <svg
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none"/>
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0}/>
                </svg>
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        }}
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                    aria-hidden="true">Tailored for Success
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    About Our Software Development and Design Solutions
                                </div>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    At Empuls3, we specialize in delivering comprehensive software development and
                                    design solutions tailored to meet your unique business requirements. Our process
                                    focuses on creating robust and scalable software that not only performs well but
                                    also offers an exceptional user experience. We work closely with you to understand
                                    your goals and design software that aligns with your vision and objectives.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-em-pink"
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
                        <div className="flex items-start justify-end lg:order-first">
                            <img
                                src="/images/pwa-img-9.png"
                                alt=""
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h2
                        className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                        aria-hidden="true">Our Methodology
                    </h2>
                    <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                        Software Development and Design Process
                    </div>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At Empuls3, we follow a meticulous and structured approach to software development and design, ensuring that every project is executed efficiently and effectively. Our methodology combines industry best practices with innovative techniques to deliver solutions that meet your specific business needs.
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="space-y-3">
                <span
                    className="inline-block p-3 text-em-purple bg-em-yellow rounded-full">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
</svg>


                </span>

                            <h3 className="text-xl font-semibold text-gray-700 capitalize">Requirement Gathering</h3>

                            <p className="text-gray-500 dark:text-gray-300">
                                We start by thoroughly understanding your business needs and technical requirements to
                                design a solution that fits perfectly.
                            </p>
                        </div>

                        <div className="space-y-3">
                <span
                    className="inline-block p-3 text-em-purple bg-em-yellow rounded-full ">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                          stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
</svg>
                </span>

                            <h3 className="text-xl font-semibold text-gray-700 capitalize">
                                Planning and Strategy
                            </h3>

                            <p className="text-gray-500">
                                Our team develops a detailed project plan and strategy, ensuring all stakeholders are
                                aligned and informed about the project's direction.
                            </p>
                        </div>

                        <div className="space-y-3">
                <span
                    className="inline-block p-3 text-em-purple bg-em-yellow rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"/>
</svg>

                </span>

                            <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                                Design and Prototyping
                            </h3>

                            <p className="text-gray-500 dark:text-gray-300">
                                We create detailed designs and prototypes to visualize the final product, gather
                                feedback, and make necessary adjustments before development.
                            </p>
                        </div>

                        <div className="space-y-3">
                <span
                    className="inline-block p-3 text-em-purple bg-em-yellow rounded-full">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
</svg>

                </span>

                            <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                                Development
                            </h3>

                            <p className="text-gray-500 dark:text-gray-300">
                            Using the latest technologies and best practices, we develop robust and scalable software solutions that meet your business goals.
                            </p>

                        </div>

                        <div className="space-y-3">
                <span
                    className="inline-block p-3 text-em-purple bg-em-yellow rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
</svg>

                </span>

                            <h3 className="text-xl font-semibold text-gray-700 capitalize">
                                Testing and Quality Assurance
                            </h3>

                            <p className="text-gray-500">
                                Rigorous testing is conducted to identify and fix any issues, ensuring the software
                                meets our high-quality standards and performs optimally.
                            </p>


                        </div>

                        <div className="space-y-3">
                <span
                    className="inline-block p-3 text-em-purple bg-em-yellow rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                </span>

                            <h3 className="text-xl font-semibold text-gray-700 capitalize">
                                Deployment and Support
                            </h3>

                            <p className="text-gray-500">
                                We deploy the software and provide ongoing support to ensure it operates smoothly and effectively, with regular updates and maintenance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="/images/swdd-img-1.png"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                        <h2 className="text-base font-semibold leading-8 text-em-yellow">The Empuls3 Advantage</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Why Choose Our Software Development and Design Solutions
                        </p>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Choosing Empuls3 for your software development and design needs means partnering with a team that prioritizes your business success. Our extensive experience and expertise enable us to deliver innovative and high-quality software solutions tailored to your unique requirements. We focus on creating software that is not only functional and reliable but also offers an exceptional user experience. Our commitment to client satisfaction and continuous improvement sets us apart as a trusted provider of software development and design solutions.
                        </p>
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
            <div className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img
                                src="/images/pwa-img-11.png"
                                className="md:max-w-lg sm:rounded-lg" alt=""/>
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">Ready to Transform Your Business?
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Get Started with Empuls3
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Partner with Empuls3 for comprehensive software development and design solutions that
                                drive innovation and growth. Contact us to discuss your project requirements and get
                                started today.
                            </p>
                            <div className="mt-12 flex items-center gap-x-6">
                                <Link href="/contact"
                                      className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                    <span className="relative">Lets Get Started</span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
