import Marcom from "@/Layouts/MarcomLayout.jsx";
import {Link} from "@inertiajs/react";
import ClientLogos from "@/Components/ClientLogos.jsx";
import {FaceSmileIcon} from "@heroicons/react/24/outline/index.js";
import {
    BeakerIcon,
    ChartBarIcon,
    PuzzlePieceIcon,
    QueueListIcon,
    ShareIcon,
    ShoppingBagIcon,
    TrophyIcon, UsersIcon,
    ViewColumnsIcon, WindowIcon
} from "@heroicons/react/24/outline";

const cards = [
    {
        name: 'Initial Consultation',
        description: 'We begin with a thorough consultation to understand your business needs, goals, and vision for the website.\n',
        icon: UsersIcon,
    },
    {
        name: 'Design and Development',
        description: 'Our team creates a custom design and develops your WordPress website, focusing on aesthetics, functionality, and user experience.',
        icon: UsersIcon,
    },
    {
        name: 'Testing and Launch',
        description: 'We conduct rigorous testing to ensure your website is fully functional and error-free before launching it to the public.',
        icon: BeakerIcon,
    },
]

const features = [
    {
        name: 'Responsive Design',
        description: 'Our WordPress websites are fully responsive, ensuring a seamless user experience across all devices.',
        icon: ViewColumnsIcon,
    },
    {
        name: 'SEO Optimization',
        description: 'We optimize your website for search engines, helping you achieve higher rankings and increased visibility.',
        icon: ShareIcon,
    },
    {
        name: 'Custom Themes',
        description: 'We design custom WordPress themes that reflect your brand’s unique identity and enhance user engagement.',
        icon: QueueListIcon,
    },
    {
        name: 'Plugin Development',
        description: 'Our team develops custom plugins to add unique functionalities to your website, tailored to your specific needs.',
        icon: PuzzlePieceIcon,
    },
    {
        name: 'E-commerce Integration',
        description: 'We integrate robust e-commerce solutions, enabling you to sell products and services directly from your website.',
        icon: ShoppingBagIcon,
    },
    {
        name: 'Ongoing Support',
        description: 'We provide continuous support and maintenance to ensure your website remains up-to-date and performs optimally.',
        icon: FaceSmileIcon,
    },
]

const faqs = [
    {
        id: 1,
        question: "What is custom WordPress development?",
        answer:
            "Custom WordPress development involves creating unique themes, plugins, and functionalities tailored to your specific business needs.",
    },
    {
        id: 2,
        question: "How long does it take to develop a custom WordPress website?",
        answer:
            "The timeline varies based on the project’s complexity, but we aim to deliver within agreed-upon deadlines.",
    },
    {
        id: 3,
        question: "Can you redesign my existing WordPress site?",
        answer:
            "Yes, we can revamp your existing WordPress site to improve its design, functionality, and performance..",
    },
    {
        id: 4,
        question: "Do you offer ongoing support and maintenance?",
        answer:
            "Absolutely, we provide continuous support and maintenance to keep your website up-to-date and running smoothly.",
    },
    {
        id: 5,
        question: "Is SEO included in your WordPress development services?",
        answer:
            "Yes, we optimize your website for search engines to enhance visibility and drive organic traffic.",
    },
    {
        id: 6,
        question: "Can you integrate e-commerce functionalities into my WordPress site?",
        answer:
            "Yes, we can integrate robust e-commerce solutions to enable you to sell products and services online.",
    },
]
export default function CustomWordPressDevelopment() {
    return (
        <Marcom>
            <div className="py-28 relative isolate">
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
                    className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <div
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink"
                            aria-hidden="true">Tailored for Your Business
                        </div>
                        <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                            Custom WordPress Development
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                            Empuls3 offers custom WordPress development services designed to create powerful, scalable,
                            and user-friendly websites. Our expert team crafts solutions that perfectly align with your
                            business goals, ensuring an engaging online presence.
                        </p>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="/images/wp-hero-img.png"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <ClientLogos/>
            <div className="bg-em-purple relative isolate py-24 sm:py-32">
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
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Designed for Success
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            About Our Custom WordPress Development Solution
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            At Empuls3, we specialize in creating custom WordPress websites that are tailored to meet
                            your specific business needs. Our development process focuses on delivering websites that
                            are not only visually appealing but also highly functional and easy to manage. We work
                            closely with you to understand your goals and design a website that reflects your brand and
                            engages your audience.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            src="/images/wp-img-4.png"
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
                                    aria-hidden="true">The Empuls3 Advantage
                                </h2>
                                <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                                    Why Choose Our Custom WordPress Development Solution
                                </div>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Choosing Empuls3 for your custom WordPress development means partnering with a team dedicated to your success. Our developers have extensive experience in WordPress and are adept at creating websites that are both visually stunning and highly functional. We understand the importance of a strong online presence and strive to deliver websites that not only meet but exceed your expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="/images/wp-img-2.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Our approach to WordPress development is centered around understanding your business goals and translating them into a powerful online platform. We take the time to learn about your brand, your target audience, and your specific needs, ensuring that the final product aligns perfectly with your vision. From custom themes to advanced functionalities, we have the expertise to bring your ideas to life.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <TrophyIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                          aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Tailored Solutions</strong> We offer personalized WordPress solutions that cater to your unique business requirements and goals.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <WindowIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                        aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">User-Friendly Interfaces</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ChartBarIcon className="mt-1 h-5 w-5 flex-none text-em-pink"
                                                    aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Performance Optimization</strong> We focus on optimizing your website for speed and performance, enhancing user experience and engagement.
                  </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    At Empuls3, we believe in building long-term relationships with our clients. Our commitment to excellence extends beyond the initial development phase, as we provide ongoing support and maintenance to ensure your website continues to perform at its best. Choose Empuls3 for a custom WordPress development experience that drives growth and success.
                                </p>
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
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#BD1550] to-[#BD1550] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Our Methodology
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                            Custom WordPress Development Process
                        </div>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Our structured process ensures that every aspect of your custom WordPress development is
                            meticulously planned and executed, resulting in a website that aligns with your business
                            goals.
                        </p>
                    </div>
                    <div
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                        {cards.map((card) => (
                            <div key={card.name}
                                 className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                                <card.icon className="h-7 w-5 flex-none text-em-yellow" aria-hidden="true"/>
                                <div className="text-base leading-7">
                                    <h3 className="font-semibold text-white">{card.name}</h3>
                                    <p className="mt-2 text-gray-300">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white relative isolate">

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
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                        Frequently Asked Questions Section
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Find answers to common questions about our custom WordPress development services. If you need
                        more information, feel free to contact us.
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
            <div className="bg-white relative isolate">
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
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div
                        className="relative isolate overflow-hidden bg-em-pink px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fillOpacity="0.7"/>
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#231B53"/>
                                    <stop offset={1} stopColor="#1F1946"/>
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Boost your productivity.
                                <br/>
                                Start using our app today.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                                sagittis vel nulla.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link href="/contact"
                                      className="relative h-12 overflow-hidden rounded bg-em-purple px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-em-yellow hover: text-em-purple hover:ring-2 hover:ring-em-yellow hover:ring-offset-2">
                                    <span className="relative">Ready To Get Started?</span>
                                </Link>
                                <Link href="/frequently-asked-questions"
                                      className="font-semibold leading-6 text-white hover:text-em-yellow">
                                    Have More Questions? <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src="/images/wp-img-6.png"
                                alt="App screenshot"
                                width={1824}
                                height={1080}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
