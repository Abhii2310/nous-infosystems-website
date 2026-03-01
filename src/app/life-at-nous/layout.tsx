import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Life at Nous | Nous Infosystems',
    description: 'Discover the culture, people, perks, and growth opportunities at Nous Infosystems — where 3,200+ engineers build the future.',
};

export default function LifeAtNousLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            <main style={{ paddingTop: '72px' }}>
                {children}
            </main>
            <Footer />
        </>
    );
}
