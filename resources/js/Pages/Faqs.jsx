import Marcom from "@/Layouts/MarcomLayout.jsx";
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";


const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function Faqs() {
    return (
        <Marcom>
            <div>
                <div className="relative py-12 bg-white sm:py-16 lg:py-20">
                    <div className="absolute inset-0">
                        <img className="object-cover object-right w-full h-full lg:object-center"
                             src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png"
                             alt=""/>
                    </div>

                    <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">Find the best office
                                accessories in one tap</h1>
                            <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa
                                elementum odio eu viverra amet.</p>


                            <div
                                className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
                                <div>
                                    <p className="text-4xl font-bold text-white">38,942</p>
                                    <p className="mt-2 text-sm font-medium text-gray-300">Order Delivered</p>
                                </div>

                                <div>
                                    <p className="text-4xl font-bold text-white">14,344</p>
                                    <p className="mt-2 text-sm font-medium text-gray-300">Registered Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked
                            questions</h2>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({open}) => (
                                        <>
                                            <dt>
                                                <DisclosureButton
                                                    className="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span
                                                        className="text-base font-semibold leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                          ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                          )}
                        </span>
                                                </DisclosureButton>
                                            </dt>
                                            <DisclosurePanel as="dd" className="mt-2 pr-12">
                                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn how to grow your business with our expert advice.
                        </p>
                    </div>
                    <div
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time>
                                        <a
                                            href={post.category.href}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0"/>
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <img src={post.author.imageUrl} alt=""
                                             className="h-10 w-10 rounded-full bg-gray-100"/>
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href={post.author.href}>
                                                    <span className="absolute inset-0"/>
                                                    {post.author.name}
                                                </a>
                                            </p>
                                            <p className="text-gray-600">{post.author.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative bg-gray-900">
                <div
                    className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
                        alt=""
                    />
                    <svg
                        viewBox="0 0 926 676"
                        aria-hidden="true"
                        className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
                    >
                        <path
                            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                            fillOpacity=".4"
                            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                        />
                        <defs>
                            <linearGradient
                                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                                x1="926.392"
                                x2="-109.635"
                                y1=".176"
                                y2="321.024"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#776FFF"/>
                                <stop offset={1} stopColor="#FF4694"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">Award winning support</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to
                            help</p>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                            sed. Quam a
                            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut
                            interdum
                            tincidunt duis.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Visit the help center
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
