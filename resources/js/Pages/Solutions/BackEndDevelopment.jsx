import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    BeakerIcon,
    CheckIcon, MapIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import {Link} from "@inertiajs/react";
import ClientLogos from "@/Components/ClientLogos.jsx";

const features = [
    {
        name: 'Requirement Analysis',
        description:
            'We begin by understanding your business needs and technical requirements to design a back-end solution that fits perfectly.',
        icon: CheckIcon,
    },
    {
        name: 'Architecture Design',
        description:
            'Our team designs a robust architecture that ensures scalability, security, and high performance for your applications.',
        icon: MapIcon,
    },
    {
        name: 'Development and Integration',
        description:
            'We develop and integrate the back-end components, ensuring seamless communication and functionality with the front-end.',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Testing and Deployment',
        description:
            'Rigorous testing is conducted to ensure the back-end system is secure and performs optimally before deployment.',
        icon: BeakerIcon,
    },
]

const faqs = [
    {
        question: 'What technologies do you use for back-end development?',
        answer:
            'We use a variety of technologies including Node.js, Python, Java, and more, depending on the project requirements.',
    },
    {
        question: 'Can you integrate third-party services?',
        answer:
            'Yes, we can integrate various third-party services and APIs to enhance the functionality of your applications.',
    },
    {
        question: 'How do you ensure the security of the back-end systems?',
        answer:
            'We implement advanced security measures such as encryption, secure authentication, and regular security audits.',
    },
    {
        question: 'Do you offer ongoing maintenance and support?',
        answer:
            'Yes, we provide continuous maintenance and support to ensure your back-end systems remain up-to-date and perform optimally.',
    },
    {
        question: 'What is your approach to scalability?',
        answer:
            'We design back-end systems with scalability in mind, using architectures that can handle increased loads and traffic seamlessly.',
    },
    {
        question: 'How long does it typically take to develop a back-end solution?',
        answer:
            'The development timeline varies based on the project\'s complexity, but we work efficiently to meet agreed-upon deadlines.',
    },

]

export default function BackEndDevelopment() {
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

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40  transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                        <div className="text-center">
                            <div
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                aria-hidden="true">Driving Success with Custom Technologies
                            </div>
                            <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                Back-End Development Solutions
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Empuls3 offers comprehensive back-end development solutions that ensure your applications are secure, scalable, and reliable. Our expert team delivers robust back-end systems that support your business needs.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link href="/company/about"
                                      className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                    <span className="relative">Learn More About Us</span>
                                </Link>
                                <Link href="/services/services-overview"
                                      className="font-semibold leading-6 text-em-purple hover:text-em-pink">
                                    View Our Servicess <span aria-hidden="true">→</span>
                                </Link>
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
                                    aria-hidden="true">Engineered for Excellence
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    About Our Back-End Development Solutions
                                </div>
                                <p>
                                    At Empuls3, our back-end development services are designed to provide a solid foundation for your applications. We focus on creating secure, scalable, and high-performance back-end systems that can handle your business's growing demands. Our team of experienced developers uses the latest technologies and best practices to deliver solutions that meet your specific requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="/images/be-about-img.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Our approach to back-end development involves a thorough understanding of your business processes and goals. We work closely with you to identify the right technologies and architecture that will ensure the optimal performance of your applications. From database design to API development, our comprehensive services cover all aspects of back-end development.
                                </p>

                                <p className="mt-8">
                                    With a focus on security and scalability, we ensure that your back-end systems are built to last. Whether you need a simple API or a complex microservices architecture, Empuls3 has the expertise to deliver solutions that drive efficiency and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Back-End Development Process
                        </h2>
                        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div
                                            className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-em-pink">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <ClientLogos/>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">The Empuls3 Advantages
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Why Choose Our Back-End Development Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Choosing Empuls3 for your back-end development needs means partnering with a team that prioritizes your business success. Our developers are skilled in the latest technologies and follow industry best practices to deliver solutions that are not only robust but also future-proof. We understand that the back-end is the backbone of any application, and we ensure it is built to support your business operations seamlessly.
                        </p>
                        <div
                            className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    Our focus on security ensures that your data is protected against potential threats. We implement advanced security measures to safeguard your applications and data, giving you peace of mind. Scalability is another key aspect of our back-end solutions. We design systems that can grow with your business, accommodating increased traffic and data loads without compromising performance.
                                </p>
                                <p className="mt-8">
                                    In addition to our technical expertise, we emphasize clear and effective communication throughout the project lifecycle. Our collaborative approach ensures that you are kept informed at every stage, from initial planning to final deployment. This transparency builds trust and ensures that the final product aligns perfectly with your vision and requirements.
                                </p>
                            </div>
                            <div>

                                <p>
                                    With Empuls3, you get a partner who is dedicated to your success. We provide continuous support and maintenance to ensure your back-end systems remain up-to-date and perform optimally. Our commitment to excellence and client satisfaction sets us apart as a trusted provider of back-end development solutions.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex">
                            <Link href="/company/about"
                                  className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                <span className="relative">Learn More About Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16 lg:pt-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                            src="/images/be-why-img.png"
                            alt=""
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative isolate bg-white">
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
                <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-5">
                            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Find answers to common questions about our back-end development services. If you need more information, feel free to contact us.
                            </p>
                        </div>
                        <div className="mt-10 lg:col-span-7 lg:mt-0">
                            <dl className="space-y-10">
                                {faqs.map((faq) => (
                                    <div key={faq.question}>
                                        <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                                    </div>
                                ))}
                            </dl>
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
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div
                        className="relative isolate overflow-hidden bg-em-pink px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
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
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to Strengthen Your Back-End?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Partner with Empuls3 for robust and scalable back-end development solutions. Contact us to
                            discuss your project requirements and discover how we can help you achieve your business
                            goals.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/company/about"
                                  className="relative h-12 overflow-hidden rounded bg-em-purple px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-yellow hover:ring-2 hover:ring-em-yellow hover:text-em-purple hover:ring-offset-2">
                                <span className="relative">Learn More About Us</span>
                            </Link>
                            <Link href="/contact"
                                  className="font-semibold leading-6 text-white hover:text-em-yellow">
                                Ready To Get Started <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                                    fillOpacity="0.7"/>
                            <defs>
                                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                    <stop stopColor="#7775D6"/>
                                    <stop offset={1} stopColor="#E935C1"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
