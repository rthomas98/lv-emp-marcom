import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon, CodeBracketSquareIcon, CogIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon,
} from '@heroicons/react/24/outline'
import {
    ArrowPathIcon,
    CameraIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon
} from "@heroicons/react/20/solid";
import Testimonials from "@/Components/Testimonials.jsx";
import ClientLogos from "@/Components/ClientLogos.jsx";
import SolutionsComponent from "@/Components/Solutions.jsx";

const transferFeatures = [
    {
        id: 1,
        name: 'Custom Software Development',
        description:
            'We specialize in creating custom software solutions that address the specific requirements of each client. Our team leverages cutting-edge technologies to build robust, scalable, and efficient software that drives business success.',
        icon: CodeBracketSquareIcon,
    },
    {
        id: 2,
        name: 'Full-Stack Development',
        description:
            'Our full-stack development services cover both front-end and back-end technologies. We ensure seamless integration and functionality, delivering comprehensive solutions that enhance user experience and operational efficiency.',
        icon: ScaleIcon,
    },
    {
        id: 3,
        name: 'Scalable and Reliable Cloud Services',
        description:
            'We provide a range of cloud services, including cloud migration, management, and optimization. Our expertise ensures that your cloud infrastructure is scalable, secure, and reliable, supporting your business growth.\n',
        icon: CloudArrowUpIcon,
    },
]
const communicationFeatures = [
    {
        id: 1,
        name: 'Harnessing the Power of Data',
        description:
            'Our data analytics and artificial intelligence services help you make informed decisions. We use advanced data analysis techniques and AI algorithms to uncover insights, predict trends, and drive strategic initiatives.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        id: 2,
        name: 'Protecting Your Digital Assets',
        description:
            'We offer comprehensive cybersecurity services to protect your digital assets. From risk assessments to implementing robust security measures, our team ensures your data and systems are secure from threats.',
        icon: EnvelopeIcon,
    },
    {
        id: 3,
        name: 'Efficient and Agile Development',
        description:
            'We implement DevOps practices and agile methodologies to enhance development efficiency and collaboration. Our approach ensures faster delivery, continuous improvement, and high-quality results for your projects.',
        icon: EnvelopeIcon,
    },
]

const features = [
    {
        name: 'Push to Deploy',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL Certificates',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple Queues',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced Security',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Powerful API',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CogIcon,
    },
    {
        name: 'Database Backups',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

const solutions = [
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


export default function Why() {
    return(
        <Marcom>
            <div className="relative bg-em-purple">
                <div className="absolute inset-0 bg-white opacity-0 rounded-md"></div>
                <div className="relative isolate overflow-hidden pt-14">
                    <img
                        src="/images/why-hero-img.png"
                        alt=""
                        className="absolute inset-0 opacity-45 -z-10 h-full w-full object-cover"
                    />
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
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                        <div className="text-center">
                            <div
                                className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-yellow"
                                aria-hidden="true">Discover the Empuls3 Advantage
                            </div>
                            <h1 className="mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-white sm:text-7xl xl:max-w-[43.5rem]">
                                Why Choose Empuls3
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                                An overview of Empuls3’s unique value proposition, emphasizing the company’s commitment to innovation, quality, and client success.
                            </p>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
                <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                    <svg
                        className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"/>
                    </svg>

                    <div className="relative">
                        <h2
                            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-em-pink mb-4"
                            aria-hidden="true">Excellence in Technology
                        </h2>
                        <div className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                            Our Expertise
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            A detailed look at Empuls3’s technical expertise and industry experience, showcasing the skills and knowledge that set the company apart.
                        </p>
                    </div>

                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div className="relative">
                            <h3 className="my-8 text-2xl font-bold tracking-tight text-gray-900">
                                Key Areas of Expertise
                            </h3>
                            <p>
                                At Empuls3, our expertise spans a wide range of technologies and industry domains. We pride ourselves on our ability to deliver tailored solutions that meet the unique needs of our clients. Our team of skilled professionals leverages the latest advancements to provide innovative, reliable, and efficient solutions. Explore our key areas of expertise and discover how we can help your business thrive.
                            </p>

                            <dl className="mt-10 space-y-10">
                                {transferFeatures.map((item) => (
                                    <div key={item.id} className="relative">
                                        <dt>
                                            <div
                                                className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-em-pink text-white">
                                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                                            </div>

                                            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                                        </dt>
                                        <dd className="ml-16 mt-2 text-base text-gray-500">{item.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                        <svg
                                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                                width={784}
                                height={404}
                                fill="none"
                                viewBox="0 0 784 404"
                            >
                                <defs>
                                    <pattern
                                        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"/>
                            </svg>
                            <img
                                className="relative mx-auto rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                width={490}
                                src="/images/why-ben-img-1.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <svg
                        className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
                    </svg>

                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                            <div className="lg:col-start-2">
                                <dl className="mt-10 space-y-10">
                                    {communicationFeatures.map((item) => (
                                        <div key={item.id} className="relative">
                                            <dt>
                                                <div
                                                    className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-em-pink text-white">
                                                    <item.icon className="h-6 w-6" aria-hidden="true"/>
                                                </div>
                                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                                            </dt>
                                            <dd className="ml-16 mt-2 text-base text-gray-500">{item.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                                <svg
                                    className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                                    width={784}
                                    height={404}
                                    fill="none"
                                    viewBox="0 0 784 404"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                                  fill="currentColor"/>
                                        </pattern>
                                    </defs>
                                    <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"/>
                                </svg>
                                <img
                                    className="mx-auto rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    width={490}
                                    src="/images/why-ben-img-2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SolutionsComponent />
            <Testimonials/>
            <ClientLogos/>
        </Marcom>
    );
}
