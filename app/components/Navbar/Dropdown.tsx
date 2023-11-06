'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { UserIcon, HomeIcon, PhoneIcon, ChartBarIcon } from "@heroicons/react/24/outline";

interface Props {
    dashboard: string
    action: string
    url: any
  }
  
const Dropdown: React.FC<Props> = ({dashboard, action, url}) => {
    return (
        <div className="z-50 text-right btn-circle">
        <Menu as="div" className="relative inline-block text-left">
            <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-full bg-black/20 px-3 py-3 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/100">
            <UserIcon className="h-6 w-6 text-gray-500" />
            </Menu.Button>
            </div>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                <Menu.Item>
                    {({ active }) => (
                    <a href="/"><button
                        className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        <HomeIcon className="h-6 w-6 text-gray-500 mr-1" />Homepage
                    </button></a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a href="wa.me/081382958004?&text=Woe+pesen+website"><button
                        className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        <PhoneIcon className="h-6 w-6 text-gray-500 mr-1" />Contact
                    </button></a>
                    )}
                </Menu.Item>
                </div>
                <div className="px-1 py-1">
                <Menu.Item>
                    {({ active }) => (
                    <a href={url}><button
                        className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out mr-1"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> {action}
                    </button></a>
                    )}
                </Menu.Item>
                </div>
                <div className="px-1 py-1">
                <Menu.Item>
                    {({ active }) => (
                    <a href={dashboard}><button
                        className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        <ChartBarIcon className="h-6 w-6 text-gray-500 mr-1" />Dashboard
                    </button></a>
                    )}
                </Menu.Item>
                </div>
            </Menu.Items>
            </Transition>
        </Menu>
        </div>
    )
}

export default Dropdown