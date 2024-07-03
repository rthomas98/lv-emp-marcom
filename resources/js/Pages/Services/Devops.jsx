import Marcom from "@/Layouts/MarcomLayout.jsx";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

export default function Devops() {
    return (
        <Marcom>
            <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Real
                            humans are here to help you building your brand</h2>
                        <p className="mt-6 text-lg text-gray-900">Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint.</p>
                        <a href="#" title=""
                           className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                           role="button">
                            <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                            Contact our support
                        </a>
                    </div>
                </div>

                <div className="container mx-auto 2xl:px-12">
                    <img className="w-full mt-6"
                         src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png"
                         alt=""/>
                </div>
            </section>
            <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-lg font-medium text-gray-600 font-pj">Build any pages with 3 simple steps</p>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Meet
                            Rareblocks, the most rare & beautiful UI Kit</h2>
                    </div>

                    <div
                        className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-16 md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 font-pj">Track your customers <br
                                className="hidden xl:block"/>directly from website</h3>
                            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">Create landing pages with
                                Rareblocks that converts more.</p>

                            <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0"
                                 src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature.png"
                                 alt=""/>
                            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Consectetur adipis cing elit.
                                Mattis a, tincidunt pulvinar sodales. Quis tellus vel eget in nulla odio. Tellus
                                pharetra sit convallis vel, fermentum dignissim cras in.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 font-pj">Understand sales <br
                                className="hidden xl:block"/>performance better</h3>
                            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">Create landing pages with
                                Rareblocks that converts more.</p>

                            <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0"
                                 src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature2.png"
                                 alt=""/>
                            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Lorem ipsum dolor sit amet,
                                consectetur adipis cing elit. Mattis a, tincidunt pulvinar sodales. Quis tellus vel eget
                                in nulla odio.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 font-pj">Get feedbacks live & <br
                                className="hidden xl:block"/>make improvements</h3>
                            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">Create landing pages with
                                Rareblocks that converts more.</p>

                            <img className="object-cover w-full mx-auto mt-10 md:mx-0 rounded-xl"
                                 src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature3.png"
                                 alt=""/>
                            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Mattis a, tincidunt pulvinar
                                sodales. Quis tellus vel eget in nulla odio. Tellus pharetra sit convallis vel,
                                fermentum dignissim cras in.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better
                                    workflow</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                    perferendis suscipit eaque,
                                    iste dolor cupiditate blanditiis ratione.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
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
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gray-900 rounded-2xl">
                        <div className="p-8 sm:py-12 xl:p-16">
                            <h2 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">The
                                only platform that creates unique & rare UI Kits with TailwindCSS</h2>

                            <div className="flex mt-8 lg:mt-16 xl:mt-24">
                                <div className="w-full lg:w-1/3 xl:w-2/5 xl:py-8">
                                    <ul className="space-y-12">
                                        <li className="flex items-start">
                                            <div
                                                className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-base font-bold text-gray-900 bg-white rounded-xl font-pj">1
                                            </div>
                                            <div className="ml-6">
                                                <p className="text-lg font-bold text-white font-pj">Onboard Team
                                                    Members</p>
                                                <p className="mt-4 text-base font-normal text-gray-200 font-pj">Lorem
                                                    ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin
                                                    faucibus nibh.</p>
                                            </div>
                                        </li>

                                        <li className="flex items-start">
                                            <div
                                                className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-base font-bold text-gray-900 bg-white rounded-xl font-pj">2
                                            </div>
                                            <div className="ml-6">
                                                <p className="text-lg font-bold text-white font-pj">Let Them Create
                                                    Tasks</p>
                                                <p className="mt-4 text-base font-normal text-gray-200 font-pj">Lorem
                                                    ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin
                                                    faucibus nibh.</p>
                                            </div>
                                        </li>

                                        <li className="flex items-start">
                                            <div
                                                className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-base font-bold text-gray-900 bg-white rounded-xl font-pj">3
                                            </div>
                                            <div className="ml-6">
                                                <p className="text-lg font-bold text-white font-pj">Manage Team
                                                    Smartly</p>
                                                <p className="mt-4 text-base font-normal text-gray-200 font-pj">Lorem
                                                    ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin
                                                    faucibus nibh.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mt-4 mb-8 translate-x-8 lg:absolute lg:translate-x-44 lg:translate-y-8 lg:m-0 lg:bottom-0 lg:right-0 xl:translate-x-56">
                            <img className="w-full max-w-3xl mx-auto xl:max-w-4xl"
                                 src="https://cdn.rareblocks.xyz/collection/clarity/images/how-it-works/4/illustration.png"
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-20 xl:gap-x-40">
                        <div>
                            <img className="object-cover w-full rounded-2xl"
                                 src="https://landingfoliocom.imgix.net/store/collection/saasui/images/how-it-works/1/girl-with-laptop.png"
                                 alt=""/>
                        </div>

                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Ways
                                we can help</h2>

                            <div className="flow-root mt-12 xl:mt-20">
                                <ul className="-my-8 divide-y divide-gray-200 xl:-my-10">
                                    <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                                        <span className="text-4xl font-medium text-gray-300"> 01. </span>
                                        <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9"><span
                                            className="font-semibold">Clarity gives you the blocks</span> & components
                                            you need to create a website.</p>
                                    </li>

                                    <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                                        <span className="text-4xl font-medium text-gray-300"> 02. </span>
                                        <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9">Clarity
                                            gives you the <span className="font-semibold">blocks & components</span> you
                                            need to create a website.</p>
                                    </li>

                                    <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                                        <span className="text-4xl font-medium text-gray-300"> 03. </span>
                                        <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9">Clarity
                                            gives you the blocks & components you need to <span
                                                className="font-semibold">create a website</span>.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked
                        questions</h2>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
                        Have a different question and can’t find the answer you’re looking for? Reach out to our support
                        team by{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            sending us an email
                        </a>{' '}
                        and we’ll get back to you as soon as we can.
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
            <section className="bg-gray-900">
                <div className="grid grid-cols-1 lg:grid-cols-7">
                    <div className="hidden lg:col-span-3 lg:block">
                        <img className="object-cover w-full h-full"
                             src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cta/2/woman-colorful-bg.png"
                             alt=""/>
                    </div>

                    <div className="flex items-center justify-center text-center lg:text-left lg:col-span-4">
                        <div className="px-4 py-12 lg:px-16 lg:py-20 xl:py-0 xl:px-40">
                            <h2 className="max-w-lg px-4 mx-auto text-3xl font-bold text-white sm:px-0 lg:mx-0 sm:text-4xl lg:text-5xl xl:text-6xl">Get
                                weekly deals⚡directly on your inbox.</h2>
                            <p className="max-w-md mt-4 text-base font-normal text-gray-300 sm:mx-auto lg:mx-0 sm:mt-8">Lorem
                                ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et
                                sagittis arua.</p>

                            <form action="#" method="POST"
                                  className="mt-8 sm:flex sm:justify-center lg:justify-start sm:mt-10 sm:max-w-md sm:mx-auto lg:mx-0">
                                <div className="flex-1">
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email to get started"
                                        className="block w-full px-4 py-3 text-base leading-7 text-white bg-gray-900 border border-gray-500 rounded sm:rounded-r-none placeholder:gray-300 focus:border-gray-200 focus:ring-1 focus:ring-white focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="mt-4 sm:mt-0">
                                    <button
                                        type="submit"
                                        className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-8
                                py-3
                                text-base
                                font-bold
                                leading-7
                                text-gray-900
                                transition-all
                                duration-200
                                bg-white
                                border border-transparent
                                rounded
                                sm:rounded-l-none sm:w-auto
                                hover:bg-gray-100
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                            "
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>

                            <p className="mt-5 text-sm font-normal text-gray-300">We don’t spam, ever!</p>
                        </div>
                    </div>
                </div>
            </section>

        </Marcom>
    );
}
