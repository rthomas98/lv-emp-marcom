import { Link, Head } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,

} from '@heroicons/react/20/solid'
import RecentPost from "@/Components/ReentBlog.jsx";
import GlobalCta from "@/Components/GlobalCta.jsx";
import ClientLogos from "@/Components/ClientLogos.jsx";
import {
    BeakerIcon,
    BriefcaseIcon, ChartBarSquareIcon, ChatBubbleBottomCenterTextIcon,
    CircleStackIcon,
    CodeBracketSquareIcon, CogIcon, DevicePhoneMobileIcon, KeyIcon,
    ShoppingCartIcon,
    WindowIcon, WrenchIcon
} from "@heroicons/react/24/outline";

const solutions = [
    {
        name: 'Custom Software Development:',
        description: 'Develop bespoke software solutions tailored to your specific business needs, enhancing efficiency, innovation, and competitive advantage.',
        icon: CodeBracketSquareIcon,
    },
    {
        name: 'Back-End Development: ',
        description: 'Create robust server-side solutions with efficient database management and seamless API integration to ensure smooth data handling and operations.',
        icon: CircleStackIcon,
    },
    {
        name: 'Front-End Development:',
        description: 'Design engaging and responsive user interfaces that provide an exceptional user experience across all devices, enhancing user satisfaction and interaction.',
        icon: WindowIcon,
    },
    {
        name: 'Full-Stack Development:',
        description: 'Offer comprehensive development services covering both front-end and back-end to deliver cohesive, fully integrated solutions that meet your business objectives.',
        icon: BriefcaseIcon,
    },
    {
        name: 'Ecommerce Development:',
        description: 'Build custom ecommerce platforms, integrating secure payment gateways and optimizing performance to boost online sales and enhance customer experience.',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Progressive Web Applications:',
        description: 'Develop scalable and engaging PWAs that offer a native app-like experience, complete with offline functionality and push notifications to engage users effectively.',
        icon: DevicePhoneMobileIcon,
    },
]

const services = [
    {
        name: 'Application Services',
        description:
            'Deliver custom application development, maintenance, and support to keep your business running smoothly and efficiently.',
        href: 'services/application-services',
        icon: ChartBarSquareIcon,
    },
    {
        name: 'DevOps',
        description:
            'Implement DevOps practices to streamline development and operations, enhancing collaboration, automation, and continuous delivery.',
        href: 'services/devops',
        icon: CogIcon,
    },
    {
        name: 'IT Consulting',
        description:
            'Provide expert IT consulting services to help you strategize, plan, and implement technology solutions that align with your business goals.',
        href: 'services/it-consulting',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Maintenance and Support',
        description:
            'Manage your IT infrastructure, providing comprehensive solutions to maintain efficiency, security, and reliability across your organization.',
        href: 'services/maintenance-and-support',
        icon: WrenchIcon,
    },
    {
        name: 'Smart Teams Services',
        description:
            'Augment your existing teams with specialized skills and expertise, ensuring your projects are completed efficiently and effectively.',
        href: 'services/smart-teams',
        icon: KeyIcon,
    },
    {
        name: 'Quality Assurance and Testing',
        description:
            'Conduct rigorous quality assurance and testing to ensure your software and systems meet the highest standards of performance and reliability.',
        href: 'services/quality-assurance-and-testing',
        icon: BeakerIcon,
    },
]
export default function Welcome() {

    return (
        <MarcomLayout>
            <Head title="Welcome"/>
            <div className="bg-white">
                <main>
                    <div className="relative isolate">
                        <svg
                            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y={-1}
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
                            <rect width="100%" height="100%" strokeWidth={0}
                                  fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"/>
                        </svg>
                        <div
                            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                                style={{
                                    clipPath:
                                        'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                                }}
                            />
                        </div>
                        <div className="overflow-hidden">
                            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                                <div
                                    className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                        <div
                                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                            aria-hidden="true">Driving Success with Custom Technologies
                                        </div>
                                        <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                            Empowering Your Business with Innovative Technology Solutions
                                        </h1>
                                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                            At Empuls3, we deliver cutting-edge technology solutions tailored to your
                                            business needs. From custom software to comprehensive IT services, we help
                                            you achieve your goals.
                                        </p>
                                        <div className="mt-10 flex items-center gap-x-6">
                                            <Link href="/company/about"
                                                  className="relative h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                                <span className="relative">Learn More About Us</span>
                                            </Link>
                                            <Link href="/solutions/solutions-overview"
                                                  className="font-semibold leading-6 text-em-purple hover:text-em-pink">
                                                View Our Solutions <span aria-hidden="true">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                        <div
                                            className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                            <div className="relative">
                                                <img
                                                    src="/images/em-home-img-1.png"
                                                    alt="Empuls3 Team Collaboration"
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                        </div>
                                        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                            <div className="relative">
                                                <img
                                                    src="/images/em-home-img-2.png"
                                                    alt="Software Development"
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                            <div className="relative">
                                                <img
                                                    src="/images/em-home-img-3.png"
                                                    alt="Team Meeting"
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                        </div>
                                        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                            <div className="relative">
                                                <img
                                                    src="/images/em-home-img-4.png"
                                                    alt="Project Planning"
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                            <div className="relative">
                                                <img
                                                    src="/images/em-home-img-5.png"
                                                    alt="Client Presentation"
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <ClientLogos/>

            <div className="relative isolate overflow-hidden bg-white">
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
                <div
                    className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <div
                            className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Discover Our Journey
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">About
                            Empuls3</h2>
                        <p className="mb-4">At Empuls3, we are dedicated to transforming businesses with innovative
                            technology solutions. Our team of experts combines technical excellence with a
                            client-focused approach to deliver customized solutions that drive success. Learn more about
                            our mission, values, and the people who make it all possible.</p>

                        <div className="mt-16">
                            <Link href="/company/about"
                                  className="relativ h-12 overflow-hidden rounded bg-em-pink px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-purple hover:ring-2 hover:ring-em-pink hover:ring-offset-2">
                                <span className="relative">Get To Know Us More</span>
                            </Link>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                             src="/images/em-home-img-6.png"
                             alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                             src="/images/em-home-img-7.png"
                             alt="office content 2"/>
                    </div>

                </div>
            </div>

            <div className="bg-em-purple relative isolate overflow-hidden py-24 sm:py-32">
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
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <div
                            className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Discover Our Journey
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Our Solutions</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Empuls3 offers a wide range of technology solutions designed to meet your unique business
                            requirements. From custom software development to comprehensive IT consulting, our solutions
                            are crafted to enhance efficiency, drive growth, and ensure success.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            src="/images/home-solutions-img.png"
                            alt="App screenshot"
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                            width={2432}
                            height={1442}
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-em-purple pt-[7%]"/>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {solutions.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
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
                <div className="mt-16 text-center">
                    <Link href="/solutions/solutions-overview"
                          className="relative mt-4 h-12 overflow-hidden rounded bg-em-yellow px-5 py-2.5 font-semibold text-em-purple transition-all duration-300 hover:bg-em-pink hover:ring-2 hover:ring-em-yellow hover:text-white hover:ring-offset-2">
                        <span className="relative">Discover More of Our Solutions</span>
                    </Link>
                </div>
            </div>

            <div className="bg-white relative isolate overflow-hidden py-24 sm:py-32">
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
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <div
                            className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Comprehensive and Reliable
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-600">Our Services</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-900">
                            At Empuls3, we provide a wide range of services to meet the diverse needs of our clients.
                            Our team of experts is dedicated to delivering top-notch services that drive success and
                            ensure operational efficiency.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {services.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                        <feature.icon className="h-5 w-5 flex-none text-em-pink" aria-hidden="true"/>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{feature.description}</p>
                                        <p className="mt-6">
                                            <Link href={feature.href}
                                                  className="text-sm font-semibold leading-6 text-em-purple hover:text-em-pink">
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
                                <div
                                    className="col-start-1 row-start-1 h-7 mb-4 text-base font-semibold leading-7 text-em-pink"
                                    aria-hidden="true">Discover the Empuls3
                                    Advantage
                                </div>
                                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Why
                                    Choose Empuls3
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                    At Empuls3, we are committed to transforming your business with innovative
                                    technology solutions. Our dedicated team of experts, proven methodologies, and
                                    client-centric approach ensure that we deliver tailored solutions that drive
                                    measurable success. Partner with Empuls3 to experience the difference and achieve
                                    your business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="/images/home-why-img.png"
                            alt="Diverse Multiethnic Team are Having a Conversation in a Meeting Room Behind Glass Walls in an Office. Black Creative Director Talks to Project Managers About the Work and Shows Brief on Laptop."
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Our approach combines technical expertise with a deep understanding of your business
                                    needs. We work collaboratively with you to develop tailored solutions that align
                                    with your goals and deliver measurable results.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                          aria-hidden="true"/>
                                        <span>
                                <strong className="font-semibold text-gray-900">Efficient Deployment.</strong> Seamlessly deploy your solutions with our efficient deployment processes.
                            </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                        aria-hidden="true"/>
                                        <span>
                                <strong className="font-semibold text-gray-900">Robust Security.</strong> Ensure security with our robust SSL certificate integration for all solutions.
                            </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                    aria-hidden="true"/>
                                        <span>
                                <strong className="font-semibold text-gray-900">Reliable Data Protection.</strong> Protect your data with our reliable and regular database backup services.
                            </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    We are committed to your success, providing continuous support and optimization to
                                    ensure your solutions remain effective and up-to-date.
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Ready to Start Your Project?</h2>
                                <p className="mt-6">
                                    Whether you have a server or not, our solutions are designed to fit your infrastructure needs seamlessly. Our cloud-based options ensure scalability and reliability. Connect with us today to start your project and take your business to the next level.


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative isolate overflow-hidden bg-em-pink py-24 sm:py-32">
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
                    <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                            <img className="h-12 self-start" src="/images/monkeyTag.png"
                                 alt="MonkeyTag Logo"/>
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <blockquote className="text-lg leading-8 text-white">
                                    <p>
                                        “When Rob joined our company, he jumped right into a fast-moving project for a
                                        large client (Samsung). This challenge required him to learn everything quickly
                                        and apply his front-end/back-end development skills, knowledge, and
                                        understanding to execute efficiently. His personality and team player approach
                                        made challenges like this a continued success. ”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-800"
                                        src="/images/anthony-bearden.jpeg"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">Anthony Bearden</div>
                                        <div className="mt-1 text-white">Founder | Marketer | Consultant | Investor |
                                            Creator
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                            <img className="h-12 self-start"
                                 src="/images/washmetrix-logo.webp" alt="Washmetrix Logo"/>
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <blockquote className="text-lg leading-8 text-white">
                                    <p>
                                        “Rob has been instrumental in helping align our business offering with a
                                        terrific website and all the work that comes with that. Would absolutely
                                        recommend to anyone looking for a top notch design agency to work with! Easy,
                                        fun, and talented. ”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-800"
                                        src="/images/palmer-dean.jpeg"
                                        alt="Palmer Dean"
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">Palmer Dean</div>
                                        <div className="mt-1 text-white">Co-Founder at WashMetrix</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <RecentPost/>
            <GlobalCta/>
        </MarcomLayout>
    );
}
