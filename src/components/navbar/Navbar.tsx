import Link from "next/link";
import { useRouter } from "next/router"

export default function Navbar() {
    const { pathname } = useRouter();

    const navigation = [
        {
            id: 1,
            path: '/',
            text: 'Главная'
        },
        {
            id: 2,
            path: '/catalog',
            text: 'Каталог'
        }
    ]

    function renderNavigation() {
        return navigation.map(({ id, path, text }) => (
            <Link key={id} href={path}>
                {/* <span className={pathname === path ? styles.active : null}> */}
                    {text}
                {/* </span> */}
            </Link>
        ))
    }

    return <>
        {renderNavigation()}
    </>
}