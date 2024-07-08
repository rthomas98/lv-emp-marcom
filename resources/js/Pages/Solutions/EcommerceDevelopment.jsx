import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    FingerPrintIcon,
} from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {
    BellAlertIcon,
    ChartPieIcon,
    MinusSmallIcon,
    PlusSmallIcon,
    ViewColumnsIcon,
    ViewfinderCircleIcon,
    WrenchIcon
} from '@heroicons/react/24/outline'
import ClientLogos from "@/Components/ClientLogos.jsx";
import {Link} from "@inertiajs/react";

const faqs = [
    {
        question: "What is e-commerce development?",
        answer:
            "E-commerce development involves creating online stores with features tailored to your specific business needs.",
    },
    {
        question: "How long does it take to develop an e-commerce website?",
        answer:
            "The timeline varies based on the project’s complexity, but we aim to deliver within agreed-upon deadlines.",
    },
    {
        question: "Can you redesign my existing e-commerce site?",
        answer:
            "Yes, we can revamp your existing e-commerce site to improve its design, functionality, and performance.\n",
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer:
            "Absolutely, we provide continuous support and maintenance to keep your online store up-to-date and running smoothly.",
    },
    {
        question: "Is SEO included in your e-commerce development services?",
        answer:
            "Yes, we optimize your online store for search engines to enhance visibility and drive organic traffic.",
    },
    {
        question: "Can you integrate secure payment gateways?",
        answer:
            "Yes, we integrate secure payment gateways to ensure safe and smooth transactions for your customers.",
    },
]

const services = [
    {
        name: 'Responsive Design',
        description: 'Our e-commerce websites are fully responsive, ensuring a seamless user experience across all devices.',
        icon: ViewColumnsIcon,
    },
    {
        name: 'SEO Optimization',
        description: 'We optimize your online store for search engines, helping you achieve higher rankings and increased visibility.',
        icon: ViewfinderCircleIcon,
    },
    {
        name: 'Custom Themes',
        description: 'We design custom e-commerce themes that reflect your brand’s unique identity and enhance user engagement.',
        icon: WrenchIcon,
    },
    {
        name: 'Secure Payment Integration',
        description: 'We integrate secure payment gateways to ensure safe and smooth transactions for your customers.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Advanced Analytics',
        description: 'Our solutions include advanced analytics tools to help you track performance and make data-driven decisions.',
        icon: ChartPieIcon,
    },
    {
        name: 'Ongoing Support',
        description: 'We provide continuous support and maintenance to ensure your online store remains up-to-date and performs optimally.',
        icon: BellAlertIcon,
    },
]

const stats = [
    { label: 'Successful Consultations', value: '150+' },
    { label: 'Revenue Generated', value: '$10M+' },
    { label: 'Transactions Processed', value: '500K+' },
    { label: 'Ongoing Support and Maintenance', value: '200+' },
]

export default function EcommerceDevelopment() {
    return (
        <Marcom>
            <div className="relative overflow-hidden isolate bg-white">
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
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <div
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                aria-hidden="true">Empowering Your Online Businesss
                            </div>
                            <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                E-commerce Development Solutions
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Empuls3 offers comprehensive e-commerce development solutions designed to create
                                powerful, scalable, and user-friendly online stores. Our expert team crafts solutions
                                that drive sales and enhance customer engagement.
                            </p>
                        </div>
                    </div>
                    <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                        <img
                            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                            src="/images/ecom-hero.png"
                            alt="Web developers using a computer together in a creative office. Two business people working on a new software developing project in an office."
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white relative isolate py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Designed for Success
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            About Our E-commerce Development Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At Empuls3, we specialize in creating robust e-commerce platforms that cater to the unique needs of your business. Our development process focuses on delivering websites that are not only visually appealing but also highly functional and easy to manage. We work closely with you to understand your goals and design an online store that reflects your brand and engages your audience.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            src="/images/ecom-img-1.png"
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
                                    <services.icon className="absolute left-1 top-1 h-5 w-5 text-em-pink"
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
            <ClientLogos/>
            <div className="relative isolate bg-em-purple py-24 sm:py-32">
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
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Our Methodology
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            E-commerce Development Process
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Our structured process ensures that every aspect of your e-commerce development is meticulously planned and executed, resulting in an online store that aligns with your business goals.
                        </p>
                        <div
                            className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    Our process begins with a thorough consultation to understand your business requirements and goals. We take the time to learn about your brand, your target audience, and your specific needs, ensuring that the final product aligns perfectly with your vision.
                                </p>
                                <p className="mt-8">
                                    We then move on to the design and development phase, where our team creates a custom design and develops your e-commerce website, focusing on aesthetics, functionality, and user experience. We ensure that your online store is visually appealing and easy to navigate.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Next, we conduct rigorous testing to ensure your website is fully functional and error-free before launching it to the public. Our testing process includes checking for compatibility across different devices and browsers, as well as ensuring that all features and functionalities are working as intended.
                                </p>
                                <p className="mt-8">
                                    Finally, we deploy your online store and provide ongoing support to ensure it operates smoothly and effectively. Our commitment to excellence extends beyond the initial development phase, as we provide continuous maintenance and updates to keep your online store performing at its best.
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
            <div className="bg-white relative isolate">
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
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Have Questions?
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Frequently Asked Questions Section
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Find answers to common questions about our e-commerce development services. If you need more
                            information, feel free to contact us.
                        </p>
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
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img
                                src="/images/ecom-img-2.png"
                                className="md:max-w-lg rounded-xl bg-gray-900/5 object-cover shadow-lg" alt="Young African American programmer working at office."/>
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">Innovating for a Better Future
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Ready to Launch Your Online Store?
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Partner with Empuls3 for comprehensive e-commerce development solutions that drive sales and enhance customer engagement. Contact us to discuss your project requirements and get starte    d today.
                            </p>
                           <div className="pt-8">
                            <Link href="/contact"
                                  className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                <span className="relative">Ready To Get Started?</span>
                            </Link>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </Marcom>
    );
}
