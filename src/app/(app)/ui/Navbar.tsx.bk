'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faHome, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Navbar() {
    const nav = [
        {
            name: 'Home',
            icon: faHome,
            link: '/portal',
        },
        {
            name: 'Client',
            icon: faHome,
            childrenNav: [
                {
                    name: 'Client page Test',
                    link: '/portal/client',
                },
                {
                    name: 'Invoices',
                    link: '/dashboard/invoices',
                },
                {
                    name: 'Invoices',
                    link: '/dashboard/invoices',
                },
            ],
        },
    ];

    return (
        <header className="navbar-expand-md">
            <div className="collapse navbar-collapse" id="navbar-menu">
                <div className="navbar">
                    <div className="container-xl">

                        <ul className="navbar-nav">
                            {nav.map((item, key) => (
                                <NavItem name={item.name} icon={item.icon} link={item.link} key={item.name + '-' + key}
                                         childrenNav={item.childrenNav}/>
                            ))}
                        </ul>

                        <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                            <form action="" method="get" autoComplete="off" noValidate>
                                <div className="input-icon">
                                <span className="input-icon-addon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" width="24" height="24"
                                                     strokeWidth="2" stroke="currentColor" fill="none"
                                                     strokeLinecap="round" strokeLinejoin="round"/>
                                </span>
                                <input type="text" className="form-control" placeholder="Search…"
                                           aria-label="Search in website"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

function NavItem({name, icon, link, childrenNav}: {
    name: string,
    icon: IconDefinition,
    link?: string,
    childrenNav?: { name: string, link: string }[]
}) {
    const pathname = usePathname();
    return (
        <>
            {childrenNav ? (
                <NavItemMultiple name={name} icon={icon} childrenNav={childrenNav}/>
            ) : (
                <NavItemSingle name={name} icon={icon} link={link||''}/>
            )}
        </>
    );
}

function NavItemSingle({name, icon, link}: {
    name: string,
    icon: IconDefinition,
    link: string,
}) {
    const pathname = usePathname();
    return (
        <li className={clsx('nav-item', {'active': link === pathname})}>
            <Link className='nav-link' href={link}>
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <FontAwesomeIcon icon={icon} className="icon" width="24" height="24"
                                     strokeWidth="2" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round" />
                </span>
                <span className="nav-link-title">
                    {name}
                </span>
            </Link>
        </li>
    );
}

function NavItemMultiple({name, icon, childrenNav}: {
    name: string,
    icon: IconDefinition,
    childrenNav: { name: string, link: string }[]
}) {
    const pathname = usePathname();
    return (
        <li className={clsx('nav-item dropdown', {'active': childrenNav.some(child => child.link === pathname)})}>
            <a className='nav-link dropdown-toggle'
               data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" href="">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <FontAwesomeIcon icon={icon} className="icon" width="24" height="24"
                                     strokeWidth="2" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round"/>
                </span>
                <span className="nav-link-title">
                    {name}
                </span>
            </a>

            {childrenNav && (
                <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                        <div className="dropdown-menu-column">
                            {childrenNav?.map((child, key) => (
                                <Link className={clsx("dropdown-item", {'active': child.link === pathname})}
                                      href={child.link} key={name + '-' + child.name + '-' + key}>
                                    {child.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>)}
        </li>
    );
}