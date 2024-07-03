
import Marcom from "@/Layouts/MarcomLayout.jsx";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const faqs = [
    {
        question: 'How do you make holy water?',
        answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    // More questions...
]

export default function SoftwareEngineering() {
    return (
        <Marcom>
            <div
                className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    <div className="flex justify-center">
                        <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-400"
                           href="#">
                            Explore the Capital Product
                            <span className="flex items-center gap-x-1">
          <span
              className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">Explore</span>
          <svg className="flex-shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
                        </a>
                    </div>

                    <div className="mt-5 max-w-xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                            Supercharged Preline Experience
                        </h1>
                    </div>

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600 dark:text-neutral-400">Preline is a large open-source
                            project, crafted with Tailwind CSS framework by Hmlstream.</p>
                    </div>

                    <div className="mt-8 gap-3 flex justify-center">
                        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4 dark:focus:ring-offset-gray-800"
                           href="#">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16"
                                 height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            Continue with Github
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="overflow-hidden bg-gray-100 rounded-3xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4">
                            <div
                                className="col-span-2 px-8 py-12 text-center xl:px-12 xl:pr-24 lg:text-left lg:order-1">
                                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Meet
                                    the brain</h2>
                                <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">Clarity
                                    gives you the blocks & components you need to create a truly professional website,
                                    landing page or admin panel for your SaaS.</p>
                            </div>

                            <div className="relative overflow-hidden lg:order-2 group">
                                <img
                                    className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-1.png"
                                    alt=""/>
                                <div
                                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                                    <div className="scale-90 sm:scale-100">
                                        <p className="text-base font-semibold text-white">Albert Flores</p>
                                        <p className="mt-1 text-sm font-normal text-gray-300">VP of Sales</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden lg:order-3 group">
                                <img
                                    className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-2.png"
                                    alt=""/>
                                <div
                                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                                    <div className="scale-90 sm:scale-100">
                                        <p className="text-base font-semibold text-white">Theresa Webb</p>
                                        <p className="mt-1 text-sm font-normal text-gray-300">Business Development
                                            Manager</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden lg:order-5 group">
                                <img
                                    className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-3.png"
                                    alt=""/>
                                <div
                                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                                    <div className="scale-90 sm:scale-100">
                                        <p className="text-base font-semibold text-white">Savannah Nguyen</p>
                                        <p className="mt-1 text-sm font-normal text-gray-300">Director of Product</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden lg:order-6 group">
                                <img
                                    className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-4.png"
                                    alt=""/>
                                <div
                                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                                    <div className="scale-90 sm:scale-100">
                                        <p className="text-base font-semibold text-white">Daniel Murphy</p>
                                        <p className="mt-1 text-sm font-normal text-gray-300">Business Analyst</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden lg:order-7 group">
                                <img
                                    className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-5.png"
                                    alt=""/>
                                <div
                                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                                    <div className="scale-90 sm:scale-100">
                                        <p className="text-base font-semibold text-white">Darrell Steward</p>
                                        <p className="mt-1 text-sm font-normal text-gray-300">Director of Sales</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-end justify-start px-8 py-8 xl:px-12 lg:order-4">
                                <a href="#" title=""
                                   className="inline-flex items-center text-sm font-semibold text-gray-900 transition-all duration-200 group hover:text-gray-700 hover:underline">
                                    See All Members
                                    <svg
                                        className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-lg mx-auto text-center lg:max-w-2xl">
                        <h2 className="text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">Stay
                            informed & inspired wherever you are</h2>
                        <p className="mt-6 text-lg font-normal text-gray-400">Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat.</p>
                    </div>

                    <div
                        className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 text-center lg:max-w-none lg:grid-cols-3 sm:mt-16 lg:mt-20">
                        <div className="relative overflow-hidden bg-base-900 rounded-2xl">
                            <div
                                className="px-6 pt-8 pb-56 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
                                <h3 className="text-sm font-normal tracking-widest uppercase">
                                    <span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Unlimited resources </span>
                                </h3>
                                <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">Design Things Fast</p>
                                <p className="mt-4 text-base font-normal text-gray-400">Amet minim mollit non deserunt
                                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                    mollit.</p>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
                                <img className="object-contain w-full"
                                     src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/1/feature-1.png"
                                     alt=""/>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-base-900 rounded-2xl">
                            <div
                                className="px-6 pt-8 pb-56 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
                                <h3 className="text-sm font-normal tracking-widest uppercase">
                                    <span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Connect Easily </span>
                                </h3>
                                <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">Grow Your Audience</p>
                                <p className="mt-4 text-base font-normal text-gray-400">Amet minim mollit non deserunt
                                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                    mollit.</p>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center px-8 pb-6">
                                <img className="object-contain w-full"
                                     src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/1/feature-2.png"
                                     alt=""/>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-base-900 rounded-2xl">
                            <div
                                className="px-6 pt-8 pb-56 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
                                <h3 className="text-sm font-normal tracking-widest uppercase">
                                    <span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Use Anywhere </span>
                                </h3>
                                <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">Support All Devices</p>
                                <p className="mt-4 text-base font-normal text-gray-400">Amet minim mollit non deserunt
                                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                    mollit.</p>
                            </div>

                            <div
                                className="absolute inset-x-0 bottom-0 flex items-center justify-center px-16 transform translate-y-24 sm:px-20 lg:translate-y-20 lg:px-12 xl:px-20">
                                <img className="object-contain w-full"
                                     src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/1/feature-3.png"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white">
                <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                    <div
                        className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                        <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                            <img
                                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="px-6 lg:contents">
                        <div
                            className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better
                                workflow</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
                                nibh dui, diam eget
                                aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                                scelerisque eget. Eleifend
                                egestas fringilla sapien.
                            </p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
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
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-5">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked
                                questions</h2>
                            <p className="mt-4 text-base leading-7 text-gray-600">
                                Can’t find the answer you’re looking for? Reach out to our{' '}
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    customer support
                                </a>{' '}
                                team.
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
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div
                        className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fillOpacity="0.7"/>
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6"/>
                                    <stop offset={1} stopColor="#E935C1"/>
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
                                <a
                                    href="#"
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
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
