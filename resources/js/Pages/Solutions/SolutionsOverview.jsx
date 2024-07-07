import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    Battery100Icon, BriefcaseIcon,
    ChartBarIcon, CircleStackIcon,
    CodeBracketSquareIcon,
    CursorArrowRaysIcon, DevicePhoneMobileIcon,
    InboxIcon, PaintBrushIcon, RocketLaunchIcon, ShoppingBagIcon,
    TrashIcon,
    UsersIcon, WindowIcon
} from '@heroicons/react/24/outline'
import {Link} from "@inertiajs/react";
import {ServerIcon} from "@heroicons/react/20/solid";
import Testimonials from "@/Components/Testimonials.jsx";

const features = [
    {
        name: 'Software Development & Design',
        description:
            'Our software development and design services focus on creating user-friendly and efficient software solutions.',
        href: '/solutions/software-development-and-design',
        icon: ChartBarIcon,
    },
    {
        name: 'Custom Software Development',
        description:
            'We create custom software solutions that address your specific business needs, ensuring functionality and efficiency.',
        href: '/solutions/custom-software-development',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Front-End Development',
        description:
            'Our front-end development services enhance user experience with intuitive and engaging interfaces.',
        href: '/solutions/front-end-development',
        icon: CodeBracketSquareIcon,
    },
    {
        name: 'Back-End Development',
        description:
            'Our front-end development services enhance user experience with intuitive and engaging interfaces.',
        href: '/solutions/back-end-development',
        icon: ServerIcon,
    },
    {
        name: 'Full-Stack Development',
        description:
            'Our full-stack development services cover both front-end and back-end, delivering comprehensive and seamless solutions.',
        href: '/solutions/full-stack-development',
        icon: CircleStackIcon,
    },
    {
        name: 'React Native Development',
        description:
            'We develop cross-platform mobile apps using React Native, ensuring high performance and a native-like experience.',
        href: '/solutions/react-native-development',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'MVP Development',
        description:
            'We assist startups in building minimum viable products to validate their ideas and accelerate market entry.',
        href: '/solutions/mvp-development',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Progressive Web Applications (PWAs)',
        description:
            'Our progressive web applications offer fast, reliable, and engaging user experiences across all devices.',
        href: '/solutions/progressive-web-development',
        icon: Battery100Icon,
    },
    {
        name: 'Ecommerce Development',
        description:
            'Our ecommerce development solutions help you create robust online stores that drive sales and enhance user experience.',
        href: '/solutions/ecommerce-development',
        icon: ShoppingBagIcon,
    },
    {
        name: 'HubSpot Development',
        description:
            'We provide HubSpot development services to optimize your marketing, sales, and customer service processes.',
        href: '/solutions/hubspot-development',
        icon: BriefcaseIcon,
    },
    {
        name: 'Custom WordPress Development',
        description:
            'We build custom WordPress websites that are tailored to your business needs, ensuring functionality and user engagement.',
        href: '/solutions/custom-wordpress-development',
        icon: CircleStackIcon,
    },
]

const faqs = [
    {
        id: 1,
        question: "What industries do you serve?",
        answer:
            "We serve a wide range of industries, including healthcare, technology startups, transportation, and logistics.",
    },
    {
        id: 2,
        question: "How do you ensure the quality of your solutions?",
        answer:
            "We have rigorous quality assurance processes in place, including thorough testing and continuous improvement practices.",
    },
    {
        id: 3,
        question: "Can your solutions be customized to fit our specific needs?",
        answer:
            "es, all our solutions are tailored to meet the unique needs and goals of each client.",
    },
    {
        id: 4,
        question: "What kind of support do you offer after deployment?",
        answer:
            "We offer comprehensive support, including ongoing maintenance, updates, and troubleshooting.",
    },
    {
        id: 5,
        question: "How do you handle data security?",
        answer:
            "We implement robust cybersecurity measures to protect your data and ensure its integrity.",
    },
    {
        id: 6,
        question: "Do you provide training for your solutions?",
        answer:
            "Yes, we provide training sessions to ensure your team can effectively use and manage our solutions.",
    },
    {
        id: 7,
        question: "What is the typical timeline for a project?",
        answer:
            "Project timelines vary based on scope and complexity, but we work efficiently to meet agreed-upon deadlines.",
    },
    {
        id: 8,
        question: "How do we get started with a project?",
        answer:
            "Contact us through our website, and we'll schedule an initial consultation to discuss your needs and goals.",
    },
    {
        id: 9,
        question: "What technologies do you specialize in?",
        answer:
            "We specialize in a variety of technologies, including JavaScript, Python, React, Node.js, and more.",
    },
    {
        id: 10,
        question: "Can you help with existing systems and integrations?",
        answer:
            "es, we can assess and improve existing systems, as well as integrate new solutions seamlessly.",
    },

]

export default function SolutionsOverview() {
    return (
        <Marcom>
            <div className="mb-16">
                <div className="relative isolate bg-em-purple">
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
                    <div
                        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                            <h1
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow"
                                aria-hidden="true">Tailored to Your Needs
                            </h1>
                            <div
                                className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-white sm:text-7xl xl:max-w-[43.5rem]">
                                About Our Solutions
                            </div>
                            <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                                Our solutions are designed to address the specific challenges and requirements of your
                                business. We leverage the latest technologies and industry best practices to deliver
                                high-quality, scalable solutions that drive business success.
                            </p>

                        </div>
                        <div className="flex items-center sm:justify-center mt-10 gap-x-6">
                            <Link href="/company/about"
                                  className="relative h-12 overflow-hidden rounded bg-em-yellow px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-pink hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                <span className="relative">Learn More About Us</span>
                            </Link>
                            <Link href="/services/services-overview"
                                  className="font-semibold leading-6 text-white hover:text-em-pink">
                                View Our Services <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative px-4 sm:px-0">
                    <div className="absolute inset-0 bg-em-purple h-1/2"/>
                    <div
                        className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                        <div className="inline-block p-8 text-center bg-em-pink">
                            <div
                                className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor"
                                     className="w-10 h-10 text-deep-purple-accent-400">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"/>
                                </svg>

                            </div>
                            <p className="font-bold tracking-wide text-white">
                                Innovative Technology
                            </p>
                        </div>
                        <div className="inline-block p-8 text-center bg-em-pink">
                            <div
                                className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor"
                                     className="w-10 h-10 text-deep-purple-accent-400">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"/>
                                </svg>

                            </div>
                            <p className="font-bold tracking-wide text-white">
                                Scalable Solutions
                            </p>
                        </div>
                        <div className="inline-block p-8 text-center bg-em-pink">
                            <div
                                className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor"
                                     className="w-10 h-10 text-deep-purple-accent-400">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                                </svg>

                            </div>
                            <p className="font-bold tracking-wide text-white">
                                Expert Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="relative isolate max-w-screen-xl p-4 px-4 mx-auto bg-white sm:px-6 lg:px-8 py-24 sm:py-32 lg:mt-20">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
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
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">Diverse and Effective
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Our Comprehensive Solutionss
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Empuls3 offers a range of solutions tailored to meet the diverse needs of our clients.
                                From custom software development to advanced data analytics, our solutions are designed
                                to drive efficiency, innovation, and growth.
                            </p>
                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                            <span
                                className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-em-purple bg-em-yellow rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                                        <span
                                            className="ml-4 text-base font-medium leading-6 text-gray-500">
                                Why Choose Custom Software Development
                            </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                            <span
                                className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-em-purple bg-em-yellow rounded-full dark:text-green-500">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                                        <span
                                            className="ml-4 text-base font-medium leading-6 text-gray-500">
                                The Benefits of Full-Stack Development
                            </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                            <span
                                className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-em-purple bg-em-yellow rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                                        <span
                                            className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                                Advantages of Cloud Solutions
                            </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                            <span
                                className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-em-purple bg-em-yellow rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                                        <span
                                            className="ml-4 text-base font-medium leading-6 text-gray-500">
                                Enhancing Your Website with Custom WordPress Development
                            </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200"
                                         src="/images/solutions-img-1.png" alt="1"/>
                                    <img className="w-40 rounded-lg shadow-lg md:w-64" width="260"
                                         src="/images/solutions-img-2.png" alt="2"/>
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="w-24 rounded-lg shadow-lg md:w-40" width="170"
                                         src="/images/solutions-img-3.png" alt="3"/>
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200"
                                         src="/images/solutions-img-4.png" alt="4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative isolate bg-em-purple py-24 sm:py-32">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow mb-4"
                            aria-hidden="true">Diverse and Effective
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            Our Comprehensive Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Empuls3 offers a range of solutions tailored to meet the diverse needs of our clients. From
                            custom software development to advanced data analytics, our solutions are designed to drive
                            efficiency, innovation, and growth.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="text-base font-semibold leading-7 text-white">
                                        <div
                                            className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-em-pink">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p className="flex-auto">{feature.description}</p>
                                        <p className="mt-6">
                                            <Link href={feature.href}
                                                  className="text-sm font-semibold leading-6 text-em-yellow hover:text-em-pink">
                                                Learn more <span aria-hidden="true">→</span>
                                            </Link>
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            <Testimonials/>

            <div className="relative isolate bg-white">
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
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently Asked
                        Questions</h2>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
                        Find answers to common questions about our solutions and services. If you need more information,
                        feel free to contact us.
                    </p>
                    <div className="mt-20">
                        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                            {faqs.map((faq) => (
                                <div key={faq.id}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full"
                         src="/images/solutions-cta-img.png"
                         alt=""/>
                </div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-end max-w-6xl mx-auto">
                        <div
                            className="w-full text-center lg:text-left lg:w-1/2 rounded-xl bg-white/90 backdrop-blur-lg">
                            <div className="px-10 py-12 lg:px-12 lg:py-14">
                                <h2
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                    aria-hidden="true">Ready to Transform Your Business?
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Partner with Empuls3 Today
                                </div>
                                <p>
                                    Discover how Empuls3 can help you achieve your business goals with our comprehensive and innovative technology solutions. Get in touch with us to start your journey to success.
                                </p>

                                <div className="mt-9">
                                    <Link href="/contact"
                                        className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                    <span className="relative">Get Started</span>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Marcom>
    );
}
