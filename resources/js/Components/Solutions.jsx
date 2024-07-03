import {Link} from "@inertiajs/react";
import {
    BriefcaseIcon,
    CircleStackIcon,
    CodeBracketSquareIcon, DevicePhoneMobileIcon,
    ShoppingCartIcon,
    WindowIcon
} from "@heroicons/react/24/outline/index.js";


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

export default function SolutionsComponent() {


    return (
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
                        src="/images/solutions-main-img.png"
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

    );
}
