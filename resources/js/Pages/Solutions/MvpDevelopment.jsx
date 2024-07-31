import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    BanknotesIcon,
    GlobeAmericasIcon, LightBulbIcon,
    PaintBrushIcon,
    RocketLaunchIcon, ShieldExclamationIcon, UsersIcon
} from '@heroicons/react/24/outline'
import ClientLogos from "@/Components/ClientLogos.jsx";
import {Link} from "@inertiajs/react";

const features = [
    {
        name: 'Speed to Market',
        description:
            'Our streamlined process ensures your MVP is developed quickly, allowing you to enter the market and start gathering feedback sooner.',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Cost-Effective Solutions',
        description:
            'We focus on essential features to keep development costs low while delivering a high-quality, functional product.',
        icon: BanknotesIcon,
    },
    {
        name: 'Scalable Architecture',
        description:
            'Our MVPs are built with scalability in mind, ensuring they can grow with your business as you expand and evolve.',
        icon: GlobeAmericasIcon,
    },
    {
        name: 'User-Centered Design',
        description:
            'We prioritize user experience and design interfaces that are intuitive and engaging for your target audience.',
        icon: PaintBrushIcon,
    },
]

const process = [
    {
        name: 'Expert Team',
        description:
            'Our team has extensive experience in developing MVPs across various industries, ensuring a robust and functional product.',
        icon: UsersIcon,
    },
    {
        name: 'Iterative Approach',
        description:
            'We use an iterative development approach, allowing for continuous feedback and improvements throughout the process',
        icon: LightBulbIcon,
    },
    {
        name: 'Validation Focus',
        description:
            'Our MVPs are designed to validate your business idea, helping you make informed decisions for future development.',
        icon: ShieldExclamationIcon,
    },
]

const faqs = [
    {
        question: 'What is MVP development?',
        answer:
            'MVP development involves creating a minimum viable product with essential features to validate a business idea.',
    },
    {
        question: 'How long does it take to develop an MVP?',
        answer:
            'The timeline varies based on the project\'s complexity, but we aim to deliver within a few weeks to a couple of months.',
    },
    {
        question: 'Can you help refine my business idea?',
        answer:
            'Yes, we can assist in refining your idea and identifying key features for the MVP.',
    },
    {
        question: 'Do you offer ongoing support after MVP launch?',
        answer:
            'Absolutely, we provide continuous support and maintenance to help your MVP evolve and succeed.',
    },
    {
        question: 'Is user feedback incorporated during development?',
        answer:
            'Yes, we use an iterative approach that incorporates user feedback to refine and improve the MVP.',
    },
    {
        question: 'Can my MVP be scaled in the future?',
        answer:
            'Yes, we design MVPs with scalability in mind, allowing for future growth and feature expansion.',
    },

]

export default function MvpDevelopment() {
    return (
        <Marcom>
            <div className="relative">
                <div className="bg-em-yellow isolate overflow-hidden">
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
                    <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                        <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                            <div
                                className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                                <h1
                                    className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                                    aria-hidden="true">From Concept to Reality
                                </h1>
                                <div
                                    className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                                    MVP Development Solutions
                                </div>
                                <p className="mt-6 text-lg leading-8 text-em-purple sm:max-w-md lg:max-w-none">
                                    Empuls3 offers specialized MVP development solutions designed to bring your innovative ideas to life quickly and efficiently. Our expert team crafts minimum viable products that validate your vision and set the stage for future growth.
                                </p>
                            </div>
                        </div>

                        <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                            <div className="absolute inset-0">
                                <img className="object-cover w-full h-full scale-150"
                                     src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/man-working-on-laptop.jpg"
                                     alt=""/>
                            </div>

                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            <div className="absolute bottom-0 left-0">
                                <div className="p-4 sm:p-6 lg:p-8">
                                    <div className="flex items-center">
                                        <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
                                    </div>
                                    <p className="max-w-xs mt-1.5 text-xl text-white">Professionals have organized their
                                        desk via PostCra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientLogos/>
            <div className="bg-white py-24 sm:py-32 relative isolate overflow-hidden">
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
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <div
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Rapid and Efficient
                        </div>
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            About Our MVP Development Solutions
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At Empuls3, we specialize in creating minimum viable products (MVPs) that help startups and
                            businesses test their ideas and gather valuable feedback from early adopters. Our
                            development process focuses on delivering a functional and scalable MVP that addresses your
                            core business needs and paves the way for future development.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div
                                            className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-em-pink">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-em-purple py-24 sm:py-32 relative isolate overflow-hidden">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl lg:text-center">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">The Empuls3 Advantage
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            Why Choose Our MVP Development Solutions
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Choosing Empuls3 for your MVP development means partnering with a team that brings extensive
                            experience and a focused approach to delivering robust, functional MVPs. Our iterative
                            process ensures continuous feedback and real-world insights, enabling your MVP to evolve
                            effectively. We emphasize core features to address key business needs within budget and
                            timeframe, and our commitment to quality and client satisfaction, along with ongoing
                            support, sets us apart as the ideal choice for your MVP development.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {process.map((process) => (
                                <div key={process.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                        <process.icon className="h-5 w-5 flex-none text-em-yellow" aria-hidden="true"/>
                                        {process.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p className="flex-auto">{process.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="py-10 bg-white sm:py-16 lg:py-24 relative isolate overflow-hidden">
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
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                                 alt=""/>
                            <div className="pl-12 pr-6">
                                <img className="relative"
                                     src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                                     alt=""/>
                            </div>
                        </div>

                        <div className="2xl:pl-16">
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">Our Methodology
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                MVP Development Process
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our process begins with a thorough understanding of your business idea and objectives.
                                We work closely with you to identify the core features that are essential for your MVP,
                                ensuring that the final product addresses your key business needs and provides value to
                                your target audience.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our structured process ensures that every aspect of your MVP development is meticulously
                                planned and executed, resulting in a product that aligns with your business goals.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Throughout the development process, we maintain open communication and collaboration, allowing for continuous feedback and adjustments. This iterative approach ensures that your MVP evolves based on real-world insights and remains aligned with your vision and goals.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative isolate overflow-hidden">
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
                    <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0}/>
                </svg>
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                        <div className="max-w-xl mb-6">
                            <h2
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                                aria-hidden="true">Tailored to Your Needs
                            </h2>
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                How Empuls3 Can Help
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                At Empuls3, we are committed to helping you turn your innovative ideas into reality. Our
                                MVP development solutions are designed to provide you with a functional and scalable
                                product that meets your specific business needs. We focus on delivering high-quality
                                MVPs that validate your concept and set the stage for future growth.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our team of experienced developers and designers works collaboratively to create MVPs
                                that are not only functional but also user-friendly and engaging. We prioritize user
                                experience and design interfaces that resonate with your target audience, ensuring that
                                your MVP makes a strong impression from the start.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                With Empuls3, you get a partner who is dedicated to your success. We provide continuous
                                support and guidance throughout the development process and beyond, ensuring that your
                                MVP evolves and grows with your business. Choose Empuls3 for a seamless and efficient
                                MVP development experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white relative isolate overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-5">
                            <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                Frequently Asked Questions Section
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Find answers to common questions about our MVP development services. If you need more
                                information, feel free to contact us.
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
            <div className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
                         src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
                         alt=""/>
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Ready to Bring Your Idea to Life?
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            Start Your MVP Journey with Empuls3
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Partner with Empuls3 for comprehensive MVP development solutions that turn your innovative
                            ideas into functional and scalable products. Contact us to discuss your project requirements
                            and get started today.
                        </p>

                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="/contact"
                                  className="relative h-12 overflow-hidden rounded bg-em-yellow px-5 py-2.5 font-semibold text-em-purple transition-all duration-300 hover:bg-em-pink hover:ring-2 hover:ring-em-pink hover:ring-offset-2 hover:text-white">
                                <span className="relative">Ready To Get Started</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Marcom>
    );
}
