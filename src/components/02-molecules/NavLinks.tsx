const links = [
    { name: 'Works', href: '/works' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Ciotto Bar', href: '/ciotto-bar' },
];

export default function NavLinks() {
    return (
        <ul className="flex space-x-4">
            {links.map((link) => (
                <li key={link.name}>
                    <a href={link.href} className="hover:underline">
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}