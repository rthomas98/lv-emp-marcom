import Marcom from "@/Layouts/MarcomLayout.jsx";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon, LifebuoyIcon,
    LockClosedIcon, NewspaperIcon, PhoneIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'

const cards = [
    {
        name: 'Sales',
        description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
        icon: PhoneIcon,
    },
    {
        name: 'Technical Support',
        description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
        icon: LifebuoyIcon,
    },
    {
        name: 'Media Inquiries',
        description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
        icon: NewspaperIcon,
    },
]

const features = [
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

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]
export default function CustomWordPressDevelopment() {
    return (
        <Marcom>
            <div className="py-28">
                <div
                    className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Over 200 successful deals
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            We help startups to grow and make money
                        </h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="javascript:void(0)"
                               className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Let's get started
                            </a>
                            <a href="javascript:void(0)"
                               className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Get access
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="w-5 h-5">
                                    <path fillRule="evenodd"
                                          d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">Trusted by the best companies</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="33" fill="none">
                            <g fill="#4B5563" clip-path="url(#a)">
                                <path
                                    d="M16.416 32.17v-6.175c6.554 0 11.596-6.49 9.106-13.36-.945-2.552-2.961-4.6-5.514-5.514-6.869-2.49-13.36 2.552-13.36 9.106H.473c0-10.43 10.083-18.559 21.016-15.156 4.79 1.481 8.57 5.294 10.052 10.052 3.403 10.965-4.695 21.048-15.125 21.048Z"/>
                                <path fill-rule="evenodd"
                                      d="M16.416 25.995h-6.144v-6.144h6.144v6.144ZM10.272 30.721H5.546v-4.726h4.726v4.726ZM5.546 25.995h-3.97v-3.939h3.97v3.939Z"
                                      clip-rule="evenodd"/>
                                <path
                                    d="M57.19 9.516c-1.828-1.26-4.097-1.922-6.744-1.922H44.68V25.9h5.766c2.647 0 4.916-.661 6.743-2.016 1.008-.693 1.796-1.702 2.332-2.93.535-1.23.819-2.679.819-4.317 0-1.607-.284-3.057-.82-4.286-.535-1.197-1.323-2.174-2.33-2.835Zm-9.139 1.197h1.828c2.017 0 3.687.41 4.947 1.166 1.386.85 2.111 2.458 2.111 4.758 0 2.394-.725 4.064-2.111 4.978-1.197.788-2.867 1.198-4.916 1.198h-1.827l-.032-12.1ZM64.373 7.373c-.567 0-1.04.19-1.418.567-.378.378-.599.851-.599 1.387 0 .567.19 1.04.6 1.418.377.378.85.598 1.417.598.567 0 1.04-.189 1.418-.598.378-.378.599-.883.599-1.418 0-.567-.19-1.04-.6-1.387a1.975 1.975 0 0 0-1.417-.567ZM65.949 13.013h-3.246v12.919h3.246V13.013ZM77.764 14.085c-.976-.883-2.08-1.387-3.245-1.387-1.796 0-3.277.63-4.443 1.828-1.166 1.197-1.733 2.773-1.733 4.631 0 1.828.567 3.372 1.733 4.632 1.166 1.198 2.647 1.828 4.443 1.828 1.26 0 2.332-.347 3.214-1.04v.315c0 1.072-.284 1.89-.85 2.49-.568.566-1.356.85-2.332.85-1.513 0-2.427-.599-3.593-2.142l-2.205 2.11.063.095c.472.662 1.197 1.323 2.174 1.954.977.63 2.174.945 3.624.945 1.922 0 3.497-.599 4.631-1.764 1.166-1.166 1.733-2.742 1.733-4.695V13.013h-3.182l-.032 1.072Zm-.85 7.625c-.567.63-1.292.945-2.237.945-.946 0-1.67-.315-2.206-.945-.567-.63-.85-1.481-.85-2.521 0-1.04.283-1.922.85-2.552.567-.63 1.292-.977 2.206-.977.945 0 1.67.315 2.237.977.567.63.85 1.512.85 2.552s-.315 1.89-.85 2.52ZM86.965 13.013H83.72v12.919h3.245V13.013ZM85.39 7.373c-.567 0-1.04.19-1.418.567-.378.378-.599.851-.599 1.387 0 .567.19 1.04.599 1.418.378.378.85.598 1.418.598.567 0 1.04-.189 1.418-.598.378-.378.598-.883.598-1.418 0-.567-.189-1.04-.599-1.387a1.975 1.975 0 0 0-1.417-.567ZM94.086 9.547h-3.182v3.498h-1.86v2.962h1.86v5.356c0 1.67.346 2.867 1.008 3.56.662.694 1.828 1.04 3.497 1.04.536 0 1.072-.031 1.576-.063h.157V22.94l-1.102.063c-.788 0-1.292-.126-1.544-.41s-.378-.85-.378-1.701v-4.916h3.025v-2.962h-3.025V9.547h-.032ZM115.576 7.594h-3.246V25.9h3.246V7.594ZM148.376 21.3c-.567.662-1.166 1.229-1.638 1.512-.441.284-1.008.442-1.67.442-.945 0-1.733-.347-2.363-1.072-.631-.724-.946-1.638-.946-2.74 0-1.104.315-2.018.914-2.71.63-.725 1.387-1.072 2.332-1.072 1.04 0 2.142.662 3.088 1.764l2.142-2.048c-1.386-1.827-3.182-2.678-5.325-2.678-1.796 0-3.34.662-4.6 1.922-1.26 1.26-1.891 2.899-1.891 4.821 0 1.922.631 3.53 1.891 4.821 1.26 1.292 2.804 1.922 4.6 1.922 2.363 0 4.254-1.008 5.514-2.867l-2.048-2.017ZM161.705 14.81a5.263 5.263 0 0 0-1.859-1.545c-.788-.378-1.67-.567-2.679-.567-1.827 0-3.308.662-4.411 1.985-1.071 1.324-1.638 2.93-1.638 4.853 0 1.953.598 3.56 1.796 4.82 1.166 1.23 2.773 1.86 4.695 1.86 2.174 0 4.001-.883 5.325-2.647l.063-.095-2.111-2.048c-.19.252-.473.504-.725.756-.315.316-.63.536-.945.694-.473.252-1.04.346-1.639.346-.914 0-1.638-.252-2.206-.788-.535-.472-.85-1.134-.913-1.953h8.602l.031-1.198a8.48 8.48 0 0 0-.346-2.394 7.177 7.177 0 0 0-1.04-2.08Zm-7.09 3.056c.158-.63.441-1.135.851-1.544.441-.441 1.008-.662 1.701-.662.788 0 1.387.22 1.796.662.379.41.599.913.662 1.512h-5.01v.032ZM174.183 13.99c-.977-.85-2.332-1.26-4.034-1.26a6.85 6.85 0 0 0-2.993.693c-.851.44-1.67 1.134-2.206 2.08l.032.03 2.079 1.986c.851-1.355 1.796-1.827 3.057-1.827.693 0 1.229.188 1.67.535.441.347.63.82.63 1.386v.63a8.067 8.067 0 0 0-2.395-.377c-1.607 0-2.93.378-3.907 1.134-.977.756-1.481 1.859-1.481 3.214 0 1.197.41 2.206 1.261 2.93.85.693 1.89 1.072 3.119 1.072 1.229 0 2.395-.505 3.435-1.355v1.07h3.182v-8.318c.063-1.543-.441-2.772-1.449-3.623Zm-5.767 6.995c.378-.252.883-.378 1.544-.378.788 0 1.607.157 2.458.473v1.26c-.693.662-1.638.977-2.804.977-.567 0-1.009-.126-1.292-.378-.284-.253-.441-.536-.441-.946 0-.41.189-.756.535-1.008ZM188.173 14.242c-.914-1.008-2.175-1.512-3.782-1.512-1.291 0-2.331.378-3.119 1.102v-.787h-3.182v12.918h3.245v-7.152c0-.977.221-1.765.693-2.3.473-.567 1.072-.82 1.922-.82.725 0 1.292.252 1.702.725.409.504.63 1.166.63 2.017V25.9h3.245v-7.467c0-1.765-.441-3.183-1.354-4.19ZM108.265 13.99c-.976-.85-2.331-1.26-4.033-1.26a6.85 6.85 0 0 0-2.993.693c-.851.44-1.67 1.134-2.206 2.08l.032.03 2.079 1.986c.851-1.355 1.796-1.827 3.057-1.827.693 0 1.228.188 1.67.535.441.347.63.82.63 1.386v.63a8.067 8.067 0 0 0-2.395-.377c-1.607 0-2.93.378-3.907 1.134-.977.756-1.481 1.859-1.481 3.214 0 1.197.41 2.206 1.26 2.93.851.693 1.891 1.072 3.12 1.072s2.394-.505 3.434-1.355v1.07h3.183v-8.318c.031-1.543-.473-2.772-1.45-3.623Zm-5.766 6.995c.378-.252.882-.378 1.544-.378.788 0 1.607.157 2.458.473v1.26c-.693.662-1.639.977-2.805.977-.567 0-1.008-.126-1.291-.378-.284-.253-.442-.536-.442-.946 0-.41.158-.756.536-1.008ZM127.36 26.184c-5.199 0-9.453-4.222-9.453-9.453a9.44 9.44 0 0 1 9.453-9.452c5.199 0 9.453 4.222 9.453 9.452 0 5.23-4.254 9.453-9.453 9.453Zm0-15.534a6.118 6.118 0 0 0-6.113 6.113 6.118 6.118 0 0 0 6.113 6.113 6.12 6.12 0 0 0 6.113-6.113 6.12 6.12 0 0 0-6.113-6.113Z"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h190v32.454H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" fill="none">
                            <g clip-path="url(#a)">
                                <path fill="#4B5563"
                                      d="M60.128 7.467c-4.664 0-8.027 3.042-8.027 7.605 0 4.563 3.781 7.605 8.45 7.605 2.818 0 5.302-1.116 6.84-2.996l-3.232-1.867c-.854.934-2.15 1.479-3.608 1.479-2.024 0-3.743-1.056-4.381-2.746h11.838c.093-.474.148-.964.148-1.48 0-4.558-3.359-7.6-8.028-7.6Zm-3.992 6.126c.528-1.685 1.973-2.746 3.992-2.746 2.024 0 3.469 1.06 3.993 2.746h-7.985ZM55.18 2.82 43.474 23.1 31.763 2.82h4.39l7.317 12.675L50.787 2.82h4.394ZM15.611.708l15.61 27.039H0L15.61.707ZM85.14 15.072c0 2.535 1.656 4.225 4.225 4.225 1.74 0 3.046-.79 3.717-2.079l3.245 1.872c-1.343 2.24-3.861 3.587-6.962 3.587-4.669 0-8.028-3.042-8.028-7.605 0-4.563 3.363-7.605 8.028-7.605 3.1 0 5.615 1.348 6.962 3.587l-3.245 1.872c-.671-1.289-1.977-2.079-3.717-2.079-2.565 0-4.225 1.69-4.225 4.225ZM119.986 2.82v19.434h-3.802V2.82h3.802Zm-14.364 4.647c-4.664 0-8.027 3.042-8.027 7.605 0 4.563 3.785 7.605 8.449 7.605 2.818 0 5.303-1.116 6.84-2.996l-3.232-1.867c-.853.934-2.15 1.479-3.608 1.479-2.023 0-3.743-1.056-4.381-2.746h11.838c.093-.474.148-.964.148-1.48 0-4.558-3.359-7.6-8.027-7.6Zm-3.993 6.126c.529-1.685 1.969-2.746 3.993-2.746 2.023 0 3.468 1.06 3.992 2.746h-7.985ZM80.069 7.89v4.094a4.816 4.816 0 0 0-1.351-.207c-2.455 0-4.225 1.69-4.225 4.225v6.252h-3.802V7.89h3.802v3.887c0-2.147 2.497-3.887 5.577-3.887Z"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 .708h120v27.039H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="27" fill="none">
                            <g fill="#4B5563" clip-path="url(#a)">
                                <path
                                    d="m39.535 25.951.296-1.025c.351-1.219.221-2.344-.37-3.173-.553-.762-1.454-1.21-2.557-1.263l-20.874-.265a.406.406 0 0 1-.373-.553.554.554 0 0 1 .483-.37l21.077-.276c2.487-.114 5.207-2.142 6.155-4.619l1.199-3.14a.74.74 0 0 0 .033-.425 13.727 13.727 0 0 0-26.39-1.42 6.177 6.177 0 0 0-9.674 6.472A8.77 8.77 0 0 0 .094 25.96a.406.406 0 0 0 .4.35h38.552a.506.506 0 0 0 .49-.358ZM46.492 11.505c-.184 0-.378.006-.58.017-.031 0-.061.007-.089.02a.323.323 0 0 0-.21.22l-.83 2.836c-.353 1.219-.223 2.344.371 3.173a3.22 3.22 0 0 0 2.554 1.263l4.452.276a.397.397 0 0 1 .385.355.414.414 0 0 1-.023.195.553.553 0 0 1-.483.37l-4.624.277c-2.512.116-5.218 2.142-6.166 4.615l-.334.874a.248.248 0 0 0 .218.337H57.06a.428.428 0 0 0 .426-.323 11.425 11.425 0 0 0-10.989-14.505h-.005ZM75.459 16.621h2.633v7.202H82.7v2.308h-7.242v-9.51ZM85.43 21.413v-.024c0-2.731 2.211-4.948 5.135-4.948s5.108 2.19 5.108 4.92v.027c0 2.731-2.211 4.945-5.135 4.945s-5.108-2.197-5.108-4.92Zm7.553 0v-.024c0-1.382-.992-2.568-2.445-2.568-1.454 0-2.405 1.166-2.405 2.54v.027c0 1.382.992 2.568 2.432 2.568s2.419-1.169 2.419-2.543M98.898 21.966v-5.345h2.678v5.284c0 1.382.691 2.026 1.752 2.026 1.062 0 1.752-.624 1.752-1.957v-5.353h2.676v5.27c0 3.071-1.752 4.423-4.455 4.423-2.703 0-4.403-1.382-4.403-4.348M111.791 16.621h3.667c3.397 0 5.367 1.957 5.367 4.699v.027c0 2.744-1.998 4.781-5.419 4.781h-3.615v-9.507Zm3.709 7.186c1.575 0 2.623-.87 2.623-2.407v-.025c0-1.523-1.048-2.407-2.623-2.407h-1.081v4.828l1.081.01ZM124.656 16.621h7.606v2.31h-4.969v1.617h4.496v2.187h-4.496v3.396h-2.637v-9.51ZM135.932 16.621h2.634v7.202h4.607v2.308h-7.241v-9.51ZM150.071 16.555h2.54l4.038 9.576h-2.824l-.694-1.697h-3.67l-.677 1.697h-2.764l4.051-9.576Zm2.308 5.826-1.058-2.703-1.084 2.703h2.142ZM160.043 16.621h4.497c1.456 0 2.459.382 3.098 1.034a2.937 2.937 0 0 1 .843 2.21v.028a3.013 3.013 0 0 1-1.957 2.922l2.269 3.316h-3.04l-1.918-2.88h-1.155v2.88h-2.637v-9.51Zm4.375 4.566c.898 0 1.415-.437 1.415-1.128v-.027c0-.75-.553-1.128-1.429-1.128h-1.724v2.283h1.738ZM172.284 16.621h7.65v2.242h-5.041v1.44h4.565v2.078h-4.565v1.509H180v2.241h-7.716v-9.51ZM69.688 22.519a2.333 2.333 0 0 1-2.178 1.426c-1.443 0-2.432-1.197-2.432-2.567v-.028c0-1.382.965-2.543 2.404-2.543a2.388 2.388 0 0 1 2.261 1.578h2.764c-.431-2.263-2.418-3.946-4.997-3.946-2.935 0-5.135 2.21-5.135 4.947v.027c0 2.731 2.172 4.92 5.107 4.92 2.51 0 4.472-1.625 4.989-3.803l-2.783-.011Z"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 .133h180v26.189H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="123" height="27" fill="none">
                            <path fill="#4B5563"
                                  d="M46.72 6.111h-3.102v13.951h8.927v-2.053H46.72V6.111ZM63.495 12.03c-.396-.465-.957-.83-1.686-1.096a6.372 6.372 0 0 0-2.198-.398c-.953 0-1.825.13-2.616.388-.791.26-1.47.615-2.036 1.067a5 5 0 0 0-1.322 1.564 3.91 3.91 0 0 0-.472 1.863c0 .665.157 1.29.472 1.874a5.033 5.033 0 0 0 1.322 1.554c.566.452 1.244.808 2.036 1.067.79.259 1.663.388 2.616.388.737 0 1.47-.133 2.198-.398.729-.266 1.29-.631 1.686-1.096v1.255h2.94v-9.287h-2.94v1.255Zm-.27 4.524c-.18.36-.431.671-.755.937a3.79 3.79 0 0 1-1.173.638c-.459.16-.967.239-1.524.239-.558 0-1.061-.08-1.51-.24a3.818 3.818 0 0 1-1.16-.637 2.708 2.708 0 0 1-.742-.937 2.604 2.604 0 0 1-.256-1.136c0-.398.085-.777.256-1.136.17-.358.418-.67.742-.936a3.82 3.82 0 0 1 1.16-.638c.449-.16.952-.24 1.51-.24.557 0 1.065.08 1.524.24.458.16.85.372 1.173.638.324.266.575.578.755.936.18.36.27.738.27 1.136 0 .399-.09.778-.27 1.136ZM87.39 12.03c-.395-.465-.957-.83-1.685-1.096a6.372 6.372 0 0 0-2.198-.398c-.953 0-1.825.13-2.616.388-.791.26-1.47.615-2.036 1.067a5 5 0 0 0-1.322 1.564 3.91 3.91 0 0 0-.472 1.863c0 .665.157 1.29.472 1.874a5.033 5.033 0 0 0 1.322 1.554c.566.452 1.245.808 2.036 1.067.79.259 1.663.388 2.616.388.737 0 1.47-.133 2.198-.398.728-.266 1.29-.631 1.686-1.096v1.255h2.94v-9.287h-2.94v1.255Zm-.269 4.524c-.18.36-.431.671-.755.937a3.79 3.79 0 0 1-1.173.638c-.459.16-.967.239-1.524.239-.558 0-1.061-.08-1.51-.24a3.818 3.818 0 0 1-1.16-.637 2.708 2.708 0 0 1-.742-.937A2.604 2.604 0 0 1 80 15.418c0-.398.085-.777.256-1.136.17-.358.418-.67.742-.936a3.82 3.82 0 0 1 1.16-.638c.449-.16.952-.24 1.51-.24.557 0 1.065.08 1.524.24.458.16.85.372 1.173.638.324.266.575.578.755.936.18.36.27.738.27 1.136 0 .399-.09.778-.27 1.136ZM122.58 6.111h-2.939v13.951h2.939V6.112ZM68.754 20.062h2.94v-7.15h5.043v-2.137h-7.983v9.287ZM102.116 10.775l-3.695 7.112-3.694-7.112h-2.978l4.825 9.287h3.695l4.825-9.287h-2.978ZM111.506 10.536c-3.6 0-6.449 2.186-6.449 4.883 0 2.98 2.758 4.882 6.826 4.882 2.277 0 3.731-.643 5.507-2.044l-1.986-1.136c-.002.001-1.499 1.455-3.736 1.455-2.6 0-3.694-1.55-3.694-2.35h9.753c.512-3.068-2.218-5.69-6.221-5.69Zm-3.524 4.075c.022-.178.361-2.35 3.501-2.35 3.14 0 3.522 2.171 3.544 2.35h-7.045ZM34.671 6.002c-.004-.012-.014-.023-.02-.035-.01-.021-.02-.044-.035-.064-.01-.013-.026-.024-.039-.036-.016-.017-.03-.034-.05-.049-.016-.011-.036-.02-.054-.03-.02-.012-.039-.026-.062-.036l-6.715-2.857a.734.734 0 0 0-.559 0l-6.714 2.857c-.023.01-.042.023-.062.035-.018.01-.039.02-.055.031-.02.015-.034.032-.05.048-.012.013-.027.024-.038.037-.016.02-.025.042-.036.064-.006.012-.015.023-.02.035a.315.315 0 0 0-.02.108v5.425l-5.595 2.38V3.303a.317.317 0 0 0-.019-.108c-.004-.012-.014-.023-.02-.035-.01-.022-.02-.044-.035-.064-.011-.013-.026-.024-.039-.037-.016-.016-.03-.033-.05-.048-.016-.012-.036-.02-.054-.03-.02-.012-.04-.026-.062-.036L7.552.087a.734.734 0 0 0-.558 0L.28 2.944c-.023.01-.042.024-.062.035C.2 2.99.179 3 .163 3.01c-.02.015-.033.032-.05.048-.012.013-.027.024-.038.037-.016.02-.025.043-.036.064-.006.012-.015.023-.02.035A.315.315 0 0 0 0 3.302v16.993c0 .148.107.285.28.359l13.43 5.713c.029.012.06.02.092.028.014.004.028.01.043.013a.748.748 0 0 0 .287 0c.013-.003.025-.008.038-.012.033-.008.066-.016.097-.03l13.43-5.712c.173-.074.28-.21.28-.359V14.87l6.434-2.737c.173-.074.28-.21.28-.359V6.11a.326.326 0 0 0-.02-.108ZM13.987 19.82l-5.585-2.335 5.865-2.495 6.435-2.738 5.59 2.377-4.101 1.73-8.204 3.46Zm12.87-10.614v4.71l-2.35-1-3.245-1.38v-4.71l2.35.999 3.245 1.38Zm.56-5.475 5.593 2.38-5.593 2.379-5.593-2.38 5.593-2.38ZM10.183 15.773l-2.35 1V6.397l3.246-1.381 2.35-1v10.375l-3.246 1.38ZM7.273.923l5.593 2.38-5.593 2.379-5.593-2.38L7.273.922ZM1.118 4.017l2.35 1 3.246 1.38V17.49c0 .016.006.03.008.046.004.02.004.041.012.06v.002c.006.016.018.03.026.046.01.018.017.036.03.052v.001c.012.015.028.027.042.04.015.015.028.03.046.044l.002.001c.016.012.035.02.053.03.02.012.038.025.06.035h.003l.002.002 6.43 2.689v4.756l-12.31-5.236V4.017Zm25.74 16.04-12.31 5.236v-4.757l9.116-3.846 3.193-1.347v4.713Zm6.714-8.521-5.596 2.38v-4.71l3.246-1.381 2.35-1v4.71Z"/>
                        </svg>
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
                        {features.map((feature) => (
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
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
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
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support center</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                    </div>
                    <div
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                        {cards.map((card) => (
                            <div key={card.name}
                                 className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                                <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true"/>
                                <div className="text-base leading-7">
                                    <h3 className="font-semibold text-white">{card.name}</h3>
                                    <p className="mt-2 text-gray-300">{card.description}</p>
                                </div>
                            </div>
                        ))}
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
