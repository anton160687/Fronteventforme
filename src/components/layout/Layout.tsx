import Head from 'next/head';
import Header from "../header/Header";
import Footer from "../footer/Footer";

type LayoutProps = {
    children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}