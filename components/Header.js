import React from 'react'
import "tailwindcss/tailwind.css"
import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    ChevronDownIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";


function Header() {
    return (
        <div className='sticky top-0 z-50 bg-white flex
        items-center p-2 lg:px-5 shadow-md'>
        {/* LEFT */}
        <div className="flex items-center">
            <Image
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/277724461_105693745436530_3306490088018773818_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DoRrovHWgb0AX9lU4nx&tn=09RnlvWz1p3C3k6O&_nc_ht=scontent-sea1-1.xx&oh=00_AT9iZPAQAL2DMxphSK-FvuWj3BPYz9oB6nrmmDA-F5gJ2A&oe=62749E5E"
            width={40}
            height={40}
            layout="fixed"
            />
            {/* input searchbar */}
            <div className="flex ml-2 items-center rounded-full
            bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600"
                />
                <input
                    className='hidden md:inline-flex ml-2 items-center bg-transparent
                    outline-none placeholder-gray-500 flex-shrink'
                    type="text"
                    placeholder="Search Blazon"
                />
            </div>
        </div>

        {/* CENTER */}
        <div className="flex justify-center flex-grow">
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>
        </div>
        {/* RIGHT */}
        <div className="flex items-center sm:space-x-2 justify-end">
            {/* ProfilePic */}
            {/* will replace line 60 with Users ID */}
            <p className='whitespace-nowrap font-seibold pr-3'>Zach Cortez</p> 
            <ViewGridIcon className='icon' />
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <ChevronDownIcon className='icon' />
        </div>
        </div>
    )
}

export default Header