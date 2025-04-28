export default function Footer() {
    return (
        <footer className="text-center p-4 border-t mt-10">
            <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
        </footer>
    );
}