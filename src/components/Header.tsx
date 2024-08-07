import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation('common');
    return (
        <header className="p-4 bg-blue-500 text-white">
            <nav className="container mx-auto">
                <ul className="flex space-x-4">
                    <li><Link href="/"><a>{t('home')}</a></Link></li>
                    <li><Link href="/about"><a>{t('about')}</a></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
