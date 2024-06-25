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

const solutions = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Powerful API.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
        icon: ServerIcon,
    },
]

const services = [
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
                                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                            We’re changing the way people connect.
                                        </h1>
                                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat
                                            mollit aute velit. Et
                                            labore commodo nulla aliqua proident mollit ullamco exercitation tempor.
                                            Sint aliqua anim nulla sunt
                                            mollit id pariatur in voluptate cillum.
                                        </p>
                                        <div className="mt-10 flex items-center gap-x-6">
                                            <a
                                                href="#"
                                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Get started
                                            </a>
                                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                                Live demo <span aria-hidden="true">→</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                        <div
                                            className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                            <div className="relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                    alt=""
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                        </div>
                                        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                            <div className="relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                    alt=""
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                            <div className="relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                                                    alt=""
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                        </div>
                                        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                            <div className="relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                                    alt=""
                                                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                            </div>
                                            <div className="relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                    alt=""
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
            <div className="bg-white dark:bg-gray-900">
                <div
                    className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We
                            didn't reinvent the wheel</h2>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem
                            solvers. Small enough to be simple and quick, but big enough to deliver the scope you want
                            at the pace you need. Small enough to be simple and quick, but big enough to deliver the
                            scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to
                            be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                             alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                             alt="office content 2"/>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No server? No
                            problem.</p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                            suscipit eaque, iste
                            dolor cupiditate blanditiis.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="App screenshot"
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                            width={2432}
                            height={1442}
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]"/>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {solutions.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
                                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
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
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to deploy your app
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
                            elementum
                            pulvinar et feugiat blandit at. In mi viverra elit nunc.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {services.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                        <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{feature.description}</p>
                                        <p className="mt-6">
                                            <a href={feature.href}
                                               className="text-sm font-semibold leading-6 text-indigo-600">
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
                                <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A
                                    better workflow</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui
                                    mi, nibh dui, diam
                                    eget aliquam. Quisque id at vitae feugiat egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                                    mauris semper sed amet
                                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
                                    tellus varius sit neque
                                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                                    Mattis mauris
                                    semper sed amet vitae sed turpis id.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                          aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                        aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                    aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                                    blandit molestie auctor
                                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                                    et ultrices hac
                                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No
                                    problem.</h2>
                                <p className="mt-6">
                                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
                                    arcu ipsum urna nibh.
                                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                                    pellentesque id sed
                                    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam
                                    sed nullam sed diam
                                    turpis ipsum eu a sed convallis diam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                            <img className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
                                 alt=""/>
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <blockquote className="text-lg leading-8 text-white">
                                    <p>
                                        “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu
                                        praesent at a. Ornare
                                        arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida
                                        sociis enim nullam
                                        ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque
                                        sagittis.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-800"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">Judith Black</div>
                                        <div className="mt-1 text-gray-400">CEO of Tuple</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                            <img className="h-12 self-start"
                                 src="https://tailwindui.com/img/logos/reform-logo-white.svg" alt=""/>
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <blockquote className="text-lg leading-8 text-white">
                                    <p>
                                        “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis
                                        dolore nulla veniam
                                        reprehenderit nisi officia voluptate incididunt exercitation exercitation elit.
                                        Nostrud veniam sint
                                        dolor nisi ullamco.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-800"
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">Joseph Rodriguez</div>
                                        <div className="mt-1 text-gray-400">CEO of Reform</div>
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
