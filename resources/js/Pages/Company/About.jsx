import MarcomLayout from '@/Layouts/MarcomLayout';
import {Head} from "@inertiajs/react";
import ClientLogos from "@/Components/ClientLogos.jsx";
import {
    BeakerIcon,
    HandThumbUpIcon,
    PaintBrushIcon,
    PuzzlePieceIcon,
    UserIcon,
    UsersIcon, WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";


const features = [
    {
        name: 'Innovative Solutions',
        description:
            'We leverage the latest technologies to create solutions that drive innovation and efficiency.',
        icon: PuzzlePieceIcon,
    },
    {
        name: 'Client-Centric Approach',
        description: 'We place our clients at the heart of everything we do, ensuring that their needs are met with precision and care.',
        icon: HandThumbUpIcon,
    },
    {
        name: 'Expert Team',
        description: 'Our team of experts brings a wealth of experience and knowledge to every project, ensuring the highest standards of quality and performance.',
        icon: UsersIcon,
    },
]

const people = [
    {
        name: 'Robert Thomas',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        location: 'Dallas, Texas',
    },
    {
        name: 'Cole Bush',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        location: 'Dallas, Texas',
    },
    {
        name: 'Adrian Hebert-Thomas Esq.',
        role: 'Legal/Project Manager',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        location: 'Dallas, Texas',
    },
    {
        name: 'Denise Gray',
        role: 'Sales and Marketing Manager',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        location: 'Dallas, Texas',
    },
]

const solutionscta = [
    {
        name: 'Consultation & Analysis',
        description:
            'We start by understanding your business goals and challenges, conducting a thorough analysis to develop a tailored solution that meets your specific needs.',
        icon: UserIcon,
    },
    {
        name: 'Design & Prototyping',
        description:
            'Our team creates detailed designs and prototypes, allowing you to visualize the solution and provide feedback before development begins.',
        icon: PaintBrushIcon,
    },
    {
        name: 'Development & Testing',
        description:
            'Using industry best practices, we develop robust solutions and conduct rigorous testing to ensure they meet the highest standards of quality and performance.',
        icon: BeakerIcon,
    },
    {
        name: 'Deployment & Support',
        description:
            'We seamlessly deploy your solution and provide ongoing support to ensure its continued success and optimization, adapting to any new challenges that arise.',
        icon: WrenchScrewdriverIcon,
    },
]


export default function About() {
    return (
        <MarcomLayout>
            <Head title="About Us"/>

            <div className="relative isolate overflow-hidden">
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
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
                </svg>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="max-w-3xl text-center mx-auto">
                        <h1
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">About Empuls3
                        </h1>
                        <div
                            className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                            Our Partner in Innovation and Success
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">At Empuls3, we are
                            dedicated to
                            transforming businesses with innovative technology solutions. Our team of experts combines
                            technical excellence with a client-focused approach to deliver customized solutions that
                            drive success. Learn more about our mission, values, and the people who make it all
                            possible.</p>
                    </div>

                    <div className="mt-10 relative max-w-5xl mx-auto text-center">
                        <img
                            src="/images/about-hero-main.png"
                            alt="Product screenshot"
                            className="rounded-xl w-full mx-auto shadow-xl ring-1 ring-gray-400/10"
                            width={2432}
                            height={1442}
                        />
                        <div className="absolute inset-0 size-full">

                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                    aria-hidden="true">Innovating for a Better Future
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Our Commitment to Excellence
                                </div>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    At Empuls3, we believe in the power of technology to transform businesses. Our dedicated team works tirelessly to deliver solutions that not only meet but exceed client expectations. We are committed to innovation, quality, and client satisfaction.
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
                        <img
                            src="/images/about-hero-img-3.png"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="relative isolate overflow-hidden bg-em-purple py-24 sm:py-32">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
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
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"/>
                </svg>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow mb-4"
                            aria-hidden="true">Meet the Experts
                        </div>
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            Our Dedicated Team
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-white">
                            At Empuls3, our success is driven by a team of talented and passionate professionals. Each member brings unique expertise and a commitment to excellence, working collaboratively to deliver innovative solutions that help our clients thrive. Get to know the people behind our success.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl}
                                     alt=""/>
                                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                                <p className="text-base leading-7 text-gray-300">{person.role}</p>
                                <p className="text-sm leading-6 text-em-yellow">{person.location}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"/>
                </svg>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Driving Success with Custom Technologies
                        </h2>
                        <p className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">About
                            Empuls3</p>
                    </div>
                    <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    </div>
                </div>
            </div>

            <div className="relative isolate bg-white py-24 sm:py-32">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-purple mb-4">How We Deliver Excellence</span><br/>
                            Our Proven Process
                        </h2>
                        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                            {solutionscta.map((solutionscta) => (
                                <div key={solutionscta.name}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div
                                            className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-em-pink">
                                            <solutionscta.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        {solutionscta.name}
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-gray-600">{solutionscta.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <ClientLogos/>
        </MarcomLayout>
    );
}
