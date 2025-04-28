// import Logo from '../01-atoms/Logo';
import NavLinks from '../02-molecules/NavLinks';
import Link from 'next/link';
export default function Menu() {
    return (
        <header className="flex justify-between items-center p-4 border-b">
            {/* <Logo /> */}
            <Link href="/" className="text-2xl font-bold">CIOTTO</Link>
            <NavLinks />
        </header>
    );
}