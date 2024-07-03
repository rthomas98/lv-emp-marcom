import Marcom from "@/Layouts/MarcomLayout.jsx";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import ClientLogos from "@/Components/ClientLogos.jsx";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
import Testimonials from "@/Components/Testimonials.jsx";
import {Link} from "@inertiajs/react";

const features = [
    {
        name: 'Comprehensive Support:',
        description: 'We provide ongoing support to ensure the success of our partners, from initial onboarding to continuous optimization.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Access to Cutting-Edge Technology:',
        description: 'Gain access to the latest technological advancements and integrate them seamlessly into your operations to stay ahead of the competition.',
        icon: LockClosedIcon,
    },
    {
        name: 'Dedicated Account Management:',
        description: 'Each partner is assigned a dedicated account manager to ensure personalized service and effective communication.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Marketing and Co-Branding Opportunities:',
        description: 'Benefit from joint marketing efforts and co-branding opportunities that enhance visibility and reputation in the market.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Training and Resources:',
        description: 'Receive extensive training and resources to empower your team with the knowledge and skills needed to maximize the benefits of our partnership.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Revenue Sharing and Incentives:',
        description: 'Participate in our revenue-sharing program and earn incentives based on performance and collaboration levels.\n',
        icon: ServerIcon,
    },
]
export default function Partnership() {
    return (
        <Marcom>
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
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">

                        <div className="mt-24 sm:mt-32 lg:mt-16">

                        </div>
                        <div
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Building Strong Partnerships
                        </div>
                        <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                            Partnering for Success
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                            At Empuls3, we believe in the power of collaboration. Our partnership program is designed to
                            create mutual value and drive innovation. By joining forces, we can enhance our services and
                            achieve greater success together.
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
                        className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div
                                className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    src="/images/partner-hero.png"
                                    alt="App screenshot"
                                    width={2432}
                                    height={1142}
                                    className="w-[46rem] rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientLogos/>
            <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
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
                        className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                            <div
                                className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src="/images/partner-img-2.png"
                                    alt=""
                                />


                            </div>
                            <div
                                className="relative mt-4 overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src="/images/partner-img-3.png"
                                    alt=""
                                />


                            </div>
                        </div>
                        <div>
                            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                                <h2
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                    aria-hidden="true">Unlock New Opportunities
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Why Partner with Empuls3?
                                </div>
                                <p className="mt-6">
                                    Discover the numerous benefits of partnering with Empuls3. Our partnership program
                                    offers unparalleled access to cutting-edge technology, expert support, and a vast
                                    network of industry leaders. We are dedicated to fostering collaborative
                                    relationships that drive mutual success and innovation.
                                </p>
                                <div className="max-w-xl">
                                    <p className="mt-6">
                                        By partnering with Empuls3, you gain access to our state-of-the-art technology
                                        solutions tailored to meet the unique needs of your business. Our team of
                                        experts will work closely with you to integrate these technologies seamlessly
                                        into your operations, enhancing efficiency and driving growth. We stay ahead of
                                        industry trends, ensuring that our partners benefit from the latest advancements
                                        and innovations.
                                    </p>

                                    <p className="mt-6">
                                        Additionally, our partners receive comprehensive support from our dedicated
                                        team. We provide continuous assistance, from initial implementation to ongoing
                                        maintenance and optimization. Our goal is to ensure that your business remains
                                        at the forefront of technological innovation, equipped with the tools and
                                        expertise needed to succeed in a competitive market. Join our network of
                                        industry leaders and unlock new opportunities for growth and success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative isolate bg-em-purple py-24 sm:py-32">
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
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <div
                            className="col-start-1 row-start-1 mb-4 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Discover Our Journey
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">About
                            Empuls3</h2>
                        <p className="mb-4 text-white">At Empuls3, we are dedicated to transforming businesses with
                            innovative
                            technology solutions. Our team of experts combines technical excellence with a
                            client-focused approach to deliver customized solutions that drive success. Learn more about
                            our mission, values, and the people who make it all possible.</p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            src="/images/partner-img-4.png"
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
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
                                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-em-yellow"
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
            <Testimonials/>

            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div
                        className="relative isolate overflow-hidden bg-em-pink px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Join Our Partnership Program
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
                            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
                            proident excepteur
                            commodo do ea.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/company/about"
                                  className="relative h-12 overflow-hidden rounded bg-em-purple px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-yellow hover:ring-2 hover:ring-em-yellow hover:text-em-purple hover:ring-offset-2">
                                <span className="relative">Learn More About Us</span>
                            </Link>
                            <Link href="/solutions/solutions-overview"
                                  className="font-semibold leading-6 text-white hover:text-em-yellow">
                                View Our Solutions <span aria-hidden="true">→</span>
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
