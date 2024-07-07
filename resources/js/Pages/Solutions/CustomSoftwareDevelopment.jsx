import Marcom from "@/Layouts/MarcomLayout.jsx";
import {Link} from "@inertiajs/react";
import {BellAlertIcon, CircleStackIcon, ShieldCheckIcon} from "@heroicons/react/24/outline";
import ClientLogos from "@/Components/ClientLogos.jsx";

const features = [
    {
        name: 'Personalized Solutions:',
        description:
            'We design software that is uniquely tailored to your business needs, ensuring maximum efficiency and effectiveness.',
        icon: BellAlertIcon,
    },
    {
        name: 'Scalable Architecture: ',
        description: 'Our solutions are built with scalability in mind, allowing your software to grow with your business.',
        icon: CircleStackIcon,
    },
    {
        name: 'Robust Security',
        description: 'We implement advanced security measures to protect your data and ensure the integrity of your software.',
        icon: ShieldCheckIcon,
    },
]

const featurestwo = [
    {
        name: 'Initial Consultation',
        description:
            'We start by understanding your business requirements and goals to design a custom software solution.',
    },
    {
        name: 'Requirement Analysis',
        description:
            'Our team conducts a detailed analysis of your needs to define the scope and functionalities of the software.',
    },
    {
        name: 'Design and Prototyping',
        description:
            'We create detailed designs and prototypes to visualize the final product and gather feedback.',
    },
    {
        name: 'Development',
        description:
            'Our developers build the software using the latest technologies and best practices, ensuring high performance and reliability.',
    },
    {
        name: 'Testing and Quality Assurance',
        description:
            'Rigorous testing is conducted to identify and fix any issues, ensuring the software meets our high-quality standards.',
    },
    {
        name: 'Deployment and Support',
        description:
            'We deploy the software and provide ongoing support to ensure it operates smoothly and effectively.',
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


export default function CustomSoftwareDevelopment() {
    return (
        <Marcom>
            <div className="bg-white">
                <div className="relative isolate pt-14 overflow-hidden">
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
                        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
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
                              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
                    </svg>
                    <div
                        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">

                            <div
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                aria-hidden="true">Tailored to Your Needs
                            </div>
                            <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                Custom Software Development
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Empuls3 offers bespoke software development solutions designed to meet the unique needs of your business. Our expert team crafts custom software that enhances efficiency, drives innovation, and supports your business goals.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Link href="/company/about"
                                      className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                    <span className="relative">Learn More About Us</span>
                                </Link>
                                <Link href="/contact"
                                      className="font-semibold leading-6 text-em-purple hover:text-em-pink">
                                    Ready To Get Started? <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                            <svg viewBox="0 0 366 729" role="img"
                                 className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                                <title>App screenshot</title>
                                <defs>
                                    <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                        <rect width={316} height={684} rx={36}/>
                                    </clipPath>
                                </defs>
                                <path
                                    fill="#4B5563"
                                    d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                                />
                                <path
                                    fill="#343E4E"
                                    d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                                />
                                <foreignObject
                                    width={316}
                                    height={684}
                                    transform="translate(24 24)"
                                    clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                                >
                                    <img src="/images/csd-hero-img.png"
                                            className="w-full h-full object-cover"
                                         alt=""/>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                    aria-hidden="true">Engineered for Excellence
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    About Our Custom Software Development Solution
                                </div>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    At Empuls3, we specialize in creating custom software solutions tailored to the unique requirements of our clients. Our team of skilled developers works closely with you to understand your business processes and challenges, designing software that fits seamlessly into your operations. From initial consultation to final deployment, we ensure that your custom software is not only functional but also scalable and secure.
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
                                src="/images/csd-img-3.png"
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative isolate bg-white py-24 sm:py-32">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true"> From Concept to Completion
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Our Custom Software Development Process
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our comprehensive process ensures that every aspect of your custom software development is
                            meticulously planned and executed, resulting in a solution that perfectly aligns with your
                            business needs.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {featurestwo.map((featurestwo) => (
                            <div key={featurestwo.name}>
                                <dt className="font-semibold text-gray-900">{featurestwo.name}</dt>
                                <dd className="mt-1 text-gray-600">{featurestwo.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <ClientLogos/>

            <div className="relative bg-white">
                <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                    <div
                        className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                        <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                            <img
                                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                                src="/images/csd-img-4.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="px-6 lg:contents">
                        <div
                            className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true"> The Empuls3 Difference
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Why Choose Our Custom Software Development Solution
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Choosing Empuls3 for your custom software development means partnering with a team that prioritizes your business's unique needs and goals. Our approach is centered around understanding your specific challenges and designing solutions that address them effectively. We take the time to learn about your business processes, ensuring that the software we develop fits seamlessly into your operations and enhances productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-em-pink">
                <div
                    className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                        Ready to Build Your Custom Software?
                    </h2>
                    <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                        <Link href="/company/about"
                              className="relative h-12 overflow-hidden rounded bg-em-yellow px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                            <span className="relative">Learn More About Us</span>
                        </Link>
                        <Link href="/contact"
                              className="font-semibold leading-6 text-white hover:text-em-yellow">
                            Get Started <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
