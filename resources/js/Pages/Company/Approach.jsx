import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
import {Link} from "@inertiajs/react";
import { PresentationChartBarIcon, RectangleGroupIcon } from "@heroicons/react/24/outline/index.js";
import { UserPlusIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const features = [
    {
        name: 'Push to deploy',
        description:
            'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
        href: '#',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
        href: '#',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
        href: '#',
        icon: ArrowPathIcon,
    },
]

const why = [
    {
        name: 'Initial Consultation',
        description:
            'We begin with a detailed consultation to understand your business goals, challenges, and project requirements, setting a strong foundation for success.',
        icon: UserPlusIcon,
    },
    {
        name: 'In-Depth Research',
        description:
            'Our team conducts thorough market and industry research, gathering insights and data to inform our strategic planning and solution design.',
        icon: AdjustmentsHorizontalIcon,
    },
    {
        name: 'Needs Analysis',
        description:
            'We perform a comprehensive analysis of your specific needs, identifying key areas for improvement and potential opportunities for growth.',
        icon: PresentationChartBarIcon,
    },
    {
        name: 'Strategic Planning',
        description:
            'Based on our research and analysis, we develop a tailored strategy that aligns with your business objectives and sets the stage for successful project execution.',
        icon: RectangleGroupIcon,
    },
]
export default function Approach() {
    return (
        <Marcom>
            <div className="relative isolate overflow-hidden bg-em-pink">
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
                <div
                    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#ffffff] to-[#231B53] opacity-20"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">

                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <div
                                className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-yellow"
                                aria-hidden="true">Strategic and Effective
                            </div>
                        </div>
                        <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-white sm:text-7xl xl:max-w-[43.5rem]">
                            Our Approach to Success
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                            At Empuls3, we combine innovation with strategy to deliver technology solutions that drive business success. Our proven methodologies ensure that every project is executed with precision and excellence. Learn how our approach can transform your business.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="/company/about"
                                  className="relative h-12 overflow-hidden rounded bg-em-purple px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-yellow hover:ring-2 hover:ring-em-yellow hover:text-em-purple hover:ring-offset-2">
                                <span className="relative">Discover Our Process</span>
                            </Link>
                            <Link href="/contact"
                                  className="font-semibold leading-6 text-white hover:text-em-purple">
                                Contact Us <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <img
                                src="/images/appoach-img-3.png"
                                alt="App screenshot"
                                width={2432}
                                height={1442}
                                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative isolate bg-white py-24 sm:py-32">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <div
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Comprehensive Discovery and Analysis
                        </div>
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
                            Efficient and Results-Driven Approach to Projects
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                            In the initial phase of our approach, we prioritize discovery and research. By thoroughly
                            understanding our clients' needs and conducting in-depth analysis, we gather valuable
                            insights that inform our strategy and ensure successful project outcomes.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {why.map((why) => (
                                <div key={why.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div
                                            className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-em-yellow">
                                            <why.icon className="h-6 w-6 text-em-purple" aria-hidden="true"/>
                                        </div>
                                        {why.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{why.description}</dd>
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
                                    className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-pink"
                                    aria-hidden="true">Strategic Insight and Planning
                                </div>
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Research-Driven Approach for Project Success</h2>
                                <p className="mb-4">
                                    Our research-driven approach guides our strategic planning, ensuring project success. By leveraging thorough research and analysis, we create data-informed strategies tailored to your business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="/images/about-hero-img-2.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                          aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Deploy Faster:</strong> Our research-driven insights enable rapid and efficient deployment, ensuring your solutions are up and running quickly to meet your business demands.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                        aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">A Better Workflow:</strong> By understanding your workflow and operational needs, we design processes that enhance efficiency, reduce bottlenecks, and improve overall productivity.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                    aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Analysis:</strong> We conduct in-depth research and analysis, gathering valuable data to inform strategic decisions and ensure alignment with your business goals.
                  </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    We are committed to providing continuous support and optimization, ensuring that your solutions remain effective and up-to-date. Our research-driven approach is designed to adapt to your evolving needs, delivering long-term success.


                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Need Help with Your Project?</h2>
                                <p className="mt-6">
                                    Whether you have a server or not, our solutions are designed to fit your infrastructure needs seamlessly. Our cloud-based options ensure scalability and reliability. Connect with us today to get started on your project and experience the Empuls3 advantage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div
                            className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Discover Our Journey
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Transforming Ideas into Tangible Products and Services
                        </h2>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            At Empuls3, we believe the workplace should enhance our lives and contribute value to the
                            world. Our innovative approach ensures that every project we undertake transforms ideas into
                            tangible, impactful products and services.
                        </p>
                    </div>
                    <div
                        className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                        <div
                            className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-em-yellow p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">250k</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-gray-900">Empowering Businesses</p>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    We empower businesses with customized technology solutions that drive innovation and growth, making a real difference in their operations.
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-em-purple p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">
                                    Driving Innovation
                                </p>
                                <p className="mt-2 text-base leading-7 text-gray-400">
                                    Our commitment to driving innovation has resulted in cutting-edge solutions that meet the evolving needs of our clients.
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-em-pink p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">401,093</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">Enhancing Efficiency</p>
                                <p className="mt-2 text-base leading-7 text-indigo-200">
                                    We focus on enhancing efficiency and productivity, enabling businesses to achieve their goals more effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Everything you need to deploy your app
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
                            elementum
                            pulvinar et feugiat blandit at. In mi viverra elit nunc.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                        <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true"/>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p className="flex-auto">{feature.description}</p>
                                        <p className="mt-6">
                                            <a href={feature.href}
                                               className="text-sm font-semibold leading-6 text-indigo-400">
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
            <div className="bg-white">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Boost your productivity.
                            <br/>
                            Start using our app today.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
                            proident excepteur
                            commodo do ea.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
