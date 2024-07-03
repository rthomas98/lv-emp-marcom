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

export default function Contact() {
    return (
        <Marcom>
            <div className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">

                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full opacity-50"
                         src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt=""/>
                </div>

                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="">
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Need help?
                            Get in touch</h2>
                        <p className="mt-4 text-base font-normal text-gray-400 sm:text-lg">Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-20 lg:grid-cols-6 lg:gap-x-24 gap-y-12">
                        <div className="space-y-8 lg:space-y-12 lg:col-span-2 lg:order-last">
                            <div>
                                <h3 className="text-xl font-normal text-white sm:text-2xl">
                                    <a href="#" title="" className=""> +1 (483) 299 1400 </a>
                                </h3>
                                <p className="mt-4 text-base font-normal text-gray-400">Call us directly if you need any
                                    urgent help. Our agents will help you.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-normal text-white sm:text-2xl">
                                    <a href="#" title="" className=""> contact@example.com </a>
                                </h3>
                                <p className="mt-4 text-base font-normal text-gray-400">Email us directly if you need
                                    any help. Our agents will help you.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <form action="#" method="POST" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="" className="text-base font-normal text-white"> Your name </label>
                                    <div className="mt-2">
                                        <input type="text" name="" id="" placeholder="Enter your full name"
                                               className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1"/>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="text-base font-normal text-white"> Your email </label>
                                    <div className="mt-2">
                                        <input type="email" name="" id="" placeholder="Enter your email address"
                                               className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="" className="text-base font-normal text-white"> What kind of service
                                        are you looking for? </label>
                                    <div className="mt-2">
                                        <select name="" id=""
                                                className="block w-full py-4 pl-5 pr-10 text-base font-normal text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1">
                                            <option value="">Select a subject</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="" className="text-base font-normal text-white"> Message </label>
                                    <div className="mt-2">
                                        <textarea name="" id="" placeholder="Write your message" rows="4"
                                                  className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md resize-y focus:border-white focus:ring-white focus:ring-1"></textarea>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <button type="submit"
                                            className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150 filter">Send
                                        Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Trusted by world
                            class companies, design teams & popular designers</h2>
                    </div>

                    <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
                        <div className="md:px-4 lg:px-10">
                            <img className="-rotate-1"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
                                 alt=""/>
                            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Join as a team</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint.</p>
                        </div>

                        <div className="md:px-4 lg:px-10">
                            <img className="rotate-1"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
                                 alt=""/>
                            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Work from anywhere</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint.</p>
                        </div>

                        <div className="md:px-4 lg:px-10">
                            <img className="-rotate-1"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
                                 alt=""/>
                            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Get success</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint.</p>
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
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn how to grow your business with our expert advice.
                        </p>
                    </div>
                    <div
                        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
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
                                         className="h-10 w-10 rounded-full bg-gray-50"/>
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
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </Marcom>
    );
}
