import MarcomLayout from '@/Layouts/MarcomLayout';
import {Head} from "@inertiajs/react";
import {
    ChatBubbleOvalLeftEllipsisIcon,
    CloudArrowUpIcon, HeartIcon,
    LockClosedIcon,
    PencilSquareIcon,
    ServerIcon,
    TrashIcon
} from '@heroicons/react/20/solid'
import ClientLogos from "@/Components/ClientLogos.jsx";


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

const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        location: 'Toronto, Canada',
    },
]

const solutionscta = [
    {
        name: 'Spam report',
        description:
            'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum. Labore asperiores non corporis molestiae.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in markdown',
        description:
            'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus est.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Email commenting',
        description:
            'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis. Et accusantium sapiente.',
        icon: ChatBubbleOvalLeftEllipsisIcon,
    },
    {
        name: 'Customer connections',
        description:
            'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.',
        icon: HeartIcon,
    },
]

const testimonials = [
    {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
            name: 'Leslie Alexander',
            handle: 'lesliealexander',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More testimonials...
]

export default function About() {
    return (
        <MarcomLayout>
            <Head title="About Us"/>

            <div className="relative overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="max-w-2xl text-center mx-auto">
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Designed
                            for you to get more <span className="text-blue-600">simple</span></h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Build your business here. Take
                            it anywhere.</p>
                    </div>

                    <div className="mt-10 relative max-w-5xl mx-auto">
                        <div
                            className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

                        <div className="absolute inset-0 size-full">
                            <div className="flex flex-col justify-center items-center size-full">
                                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                   href="#">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                         height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="5 3 19 12 5 21 5 3"/>
                                    </svg>
                                    Play the overview
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We’re a dynamic group of individuals who are passionate about what we do and dedicated to
                            delivering the
                            best results for our clients.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl}
                                     alt=""/>
                                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                                <p className="text-base leading-7 text-gray-300">{person.role}</p>
                                <p className="text-sm leading-6 text-gray-500">{person.location}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            We have worked with thousands of amazing people
                        </p>
                    </div>
                    <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                        <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                        <blockquote className="text-gray-900">
                                            <p>{`“${testimonial.body}”`}</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            <img className="h-10 w-10 rounded-full bg-gray-50"
                                                 src={testimonial.author.imageUrl} alt=""/>
                                            <div>
                                                <div
                                                    className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                                <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Stay on top of customer support
                        </h2>
                        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                            {features.map((solutionscta) => (
                                <div key={solutionscta.name}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div
                                            className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <solutionscta.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        {solutionscta.name}
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-gray-600">{solutionscta.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <ClientLogos/>
        </MarcomLayout>
    );
}
