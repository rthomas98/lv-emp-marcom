import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon, CogIcon,
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

const transferFeatures = [
    {
        id: 1,
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        id: 3,
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
    },
]
const communicationFeatures = [
    {
        id: 1,
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        id: 2,
        name: 'Reminder emails',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
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
            <div className="bg-gray-900">
                <div className="relative isolate overflow-hidden pt-14">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
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
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                                Announcing our next round of funding.{' '}
                                <a href="#" className="font-semibold text-white">
                                    <span className="absolute inset-0" aria-hidden="true"/>
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Data to enrich your online business
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                commodo. Elit sunt amet
                                fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
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
                        <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            A better way to send money
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum
                            cupiditate veritatis in,
                            accusamus quisquam.
                        </p>
                    </div>

                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div className="relative">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Transfer funds
                                world-wide</h3>
                            <p className="mt-3 text-lg text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi
                                recusandae, porro maiores
                                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste
                                blanditiis facere.
                                Totam, velit.
                            </p>

                            <dl className="mt-10 space-y-10">
                                {transferFeatures.map((item) => (
                                    <div key={item.id} className="relative">
                                        <dt>
                                            <div
                                                className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                                                <item.icon className="h-8 w-8" aria-hidden="true"/>
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
                                className="relative mx-auto"
                                width={490}
                                src="https://tailwindui.com/img/features/feature-example-1.png"
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
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Always in
                                    the loop</h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus
                                    eligendi delectus,
                                    cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
                                </p>

                                <dl className="mt-10 space-y-10">
                                    {communicationFeatures.map((item) => (
                                        <div key={item.id} className="relative">
                                            <dt>
                                                <div
                                                    className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                                                    <item.icon className="h-8 w-8" aria-hidden="true"/>
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
                                    className="relative mx-auto"
                                    width={490}
                                    src="https://tailwindui.com/img/features/feature-example-2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg font-semibold text-indigo-600">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to deploy your app
                    </p>
                    <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc,
                        ullamcorper
                        malesuada. Eleifend condimentum id viverra nulla.
                    </p>
                    <div className="mt-20">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="pt-6">
                                    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                        <feature.icon className="h-8 w-8 text-white" aria-hidden="true"/>
                      </span>
                                            </div>
                                            <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                                {feature.name}
                                            </h3>
                                            <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white">
                <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block"/>
                    <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                        <div>
                            <h2 className="text-lg font-semibold text-indigo-600">Case Study</h2>
                            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Meet
                                Whitney</h3>
                        </div>
                    </div>
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:col-start-2 lg:row-start-1">
                            <svg
                                className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
                            </svg>
                            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                                <figure>
                                    <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                                        <img
                                            className="rounded-lg object-cover object-center shadow-lg"
                                            src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                                            alt="Whitney leaning against a railing on a downtown street"
                                            width={1184}
                                            height={1376}
                                        />
                                    </div>
                                    <figcaption className="mt-3 flex text-sm text-gray-500">
                                        <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                                        <span className="ml-2">Photograph by Marcus O’Leary</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="mx-auto max-w-prose text-base lg:max-w-none">
                                <p className="text-lg text-gray-500">
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                                    consectetur neque tristique
                                    pellentesque. Blandit amet, sed aenean erat arcu morbi.
                                </p>
                            </div>
                            <div
                                className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                                <p>
                                    Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem
                                    nibh vel, eget
                                    pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
                                </p>
                                <p>
                                    Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem
                                    pulvinar. Urna, laoreet
                                    fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim
                                    imperdiet a.
                                </p>
                                <p>
                                    Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus,
                                    egestas netus cursus. In.
                                </p>
                                <ul role="list">
                                    <li>Quis elit egestas venenatis mattis dignissim.</li>
                                    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                                    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                                </ul>
                                <p>
                                    Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies.
                                    Vulputate aliquet
                                    velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In
                                    id ut tempus
                                    egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                                </p>
                                <h3>How we helped</h3>
                                <p>
                                    Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in
                                    volutpat, diam.
                                    Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est
                                    phasellus eu proin massa,
                                    lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                                </p>
                                <p>
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                                    consectetur neque tristique
                                    pellentesque. Blandit amet, sed aenean erat arcu morbi.
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
                            {features.map((solutions) => (
                                <div key={solutions.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                        <solutions.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true"/>
                                        {solutions.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p className="flex-auto">{solutions.description}</p>
                                        <p className="mt-6">
                                            <a href={solutions.href}
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
            <Testimonials/>
            <ClientLogos/>
        </Marcom>
    );
}
