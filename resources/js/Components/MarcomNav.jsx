import { useState } from 'react'
import React from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    DocumentChartBarIcon,
    UsersIcon,
    LightBulbIcon,
    HandRaisedIcon,
    HandThumbUpIcon,
    ArrowTrendingUpIcon,
    BellIcon,
    ChartBarIcon,
    CogIcon,
    ChatBubbleBottomCenterTextIcon, WrenchIcon, CodeBracketSquareIcon

} from '@heroicons/react/24/outline'
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon
} from '@heroicons/react/20/solid'
import {ClipboardDocumentCheckIcon} from "@heroicons/react/24/outline/index.js";

const solutions = [
    { name: 'Solutions Overview',
        description: 'Get a better understanding of your traffic',
        href: '/solutions/solutions-overview/',
        icon: ChartPieIcon
    },
    {
        name: 'Back-End Development',
        description: 'Connect with third-party tools and find out expectations',
        href: '/solutions/back-end-development/',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Custom Software Development',
        description: 'Speak directly to your customers with our engagement tool',
        href: '/solutions/custom-software-development/',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Custom WordPress Development',
        description: 'Build strategic funnels that will convert',
        href: '/solutions/custom-wordpress-development',
        icon: ArrowPathIcon
    },
    {
        name: 'E-Commerce Development',
        description: "Your customers' data will be safe and secure",
        href: '/solutions/ecommerce-development/',
        icon: FingerPrintIcon
    },
    {
        name: 'Front-End Development',
        description: 'Edit, manage and create newly informed decisions',
        href: '/solutions/front-end-development/',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'HubSpot Development',
        description: 'Edit, manage and create newly informed decisions',
        href: '/solutions/hubspot-development/',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'MVP Development',
        description: 'Edit, manage and create newly informed decisions',
        href: '/solutions/mvp-development/',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Progressive Web Development',
        description: 'Edit, manage and create newly informed decisions',
        href: '/solutions/progressive-web-development/',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'React Native Development',
        description: 'Edit, manage and create newly informed decisions',
        href: '/solutions/react-native-development/',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Software Development and Design',
        description: 'Edit, manage and create newly informed decisions',
        href: '/solutions/software-development-and-design/',
        icon: DocumentChartBarIcon,
    },
]
const services = [
    {
        name: 'Services Overview',
        description: 'Get a better understanding of your traffic',
        href: '/services/services-overview',
        icon: BellIcon
    },
    {
        name: 'Application Services',
        description: 'Connect with third-party tools and find out expectations',
        href: '/services/application-services/',
        icon: ChartBarIcon,
    },
    {
        name: 'DevOps Services',
        description: 'Speak directly to your customers with our engagement tool',
        href: '/services/devops/',
        icon: CogIcon,
    },
    {
        name: 'IT Consulting Services',
        description: 'Build strategic funnels that will convert',
        href: '/services/it-consulting/',
        icon: ChatBubbleBottomCenterTextIcon
    },
    {
        name: 'Maintenance and Support',
        description: "Your customers' data will be safe and secure",
        href: '/services/maintenance-and-support/',
        icon: WrenchIcon },
    {
        name: 'Smart Teams',
        description: 'Edit, manage and create newly informed decisions',
        href: '/services/smart-teams/',
        icon: UsersIcon,
    },
    {
        name: 'Software Engineering Services',
        description: 'Edit, manage and create newly informed decisions',
        href: '/services/software-engineering/',
        icon: CodeBracketSquareIcon,
    },
]

const company = [
    { name: 'About Us', description: 'Get a better understanding of your traffic', href: '/company/about/', icon: UsersIcon },
    { name: 'Approach', description: 'Speak directly to your customers', href: '/company/approach/', icon: LightBulbIcon },
    { name: 'Partnership', description: 'Your customers’ data will be safe and secure', href: '/company/partnership/', icon: HandRaisedIcon },
    { name: 'Why Us', description: 'Connect with third-party tools', href: '/company/why-us/', icon: HandThumbUpIcon },
]
const companyCallsToAction = [
    { name: 'Explore Our Solutions', href: '#', icon: ArrowTrendingUpIcon },
    { name: 'Discover Our Services', href: '#', icon: ClipboardDocumentCheckIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MarcomNav({active = false, className = '', children}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-9 w-auto"
                             src="/images/emp-logo.svg" alt=""/>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">


                    <Popover className="relative">
                        <PopoverButton
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Company
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {company.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div
                                            className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                       aria-hidden="true"/>
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0"/>
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-em-purple">
                                {companyCallsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-em-pink"
                                    >
                                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Popover className="relative">
                        <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            <span>Solutions</span>
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                                    {solutions.map((item) => (
                                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <a href={item.href} className="font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-em-purple px-8 py-6">
                                    <div className="flex items-center gap-x-3">
                                        <h3 className="text-sm font-semibold leading-4 text-white">Innovative Technology Solutions</h3>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-white">
                                        Empuls3 offers tailored technology solutions, from custom software development to advanced security, designed to drive your business success.
                                    </p>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Popover className="relative">
                        <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            <span>Services</span>
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                                    {services.map((item) => (
                                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <a href={item.href} className="font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-50 px-8 py-6">
                                    <div className="flex items-center gap-x-3">
                                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Enterprise</h3>
                                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">New</p>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        Empower your entire team with even more advanced tools.
                                    </p>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="/industries" className="text-sm font-semibold leading-6 text-gray-900">
                        Industries
                    </a>

                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                       Contact Us <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Empuls3</span>
                            <img
                                className="h-9 w-auto"
                                src="/images/mobile-logo.svg"
                                alt="Empuls3 Mobile Logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                            <DisclosureButton
                                                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Company
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...company, ...companyCallsToAction].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                            <DisclosureButton
                                                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Solutions
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...solutions, ...companyCallsToAction].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                            <DisclosureButton
                                                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Services
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...services, ...companyCallsToAction].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/industries"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Industries
                                </a>

                            </div>
                            <div className="py-6">
                                <a
                                    href="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
