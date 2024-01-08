import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CustomNav.css'

export default function CustomNav({ name, pages, icon }) {

    const btnLink = pages.slice(-1);

    pages = pages.slice(0,-1);
    
    return (
        <div className='CustomNav mb-5 '>
            <nav className='navbar navbar-light bg-light '>
                {/* logo */}
                <NavLogo name={name} icon={icon} />

                {/* a href */}
                <NavItem pages={pages} />

                {/* {a button} */}
                <NavButton btnLink={btnLink} />
            </nav>
        </div>
    )
}

function NavButton({btnLink}) {
    return <div className='NavButton'>
        <a href={'#'+btnLink} 
            className='btn btn-secondary'>
                Contact Me
        </a>
    </div>
}

function NavItem({ pages }) {

    return <ul className='nav justify-content-end'>
        {pages.map((item, key) =>
            <li className='nav-item'
                key={key}>
                <a className='nav-link'
                    href={"#" + item}>
                    {item}
                </a>
            </li>
        )}
    </ul>
}

function NavLogo({ name, icon }) {
    
    return <a href={"#"+name}>
        <h1 className="h4 py-3 text-center text-primary">
            <FontAwesomeIcon icon={icon} className='me-2' />
            <span className="Navlogo d-none d-lg-inline">Ghost</span>
        </h1>
    </a>
}
