import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import type { GetStaticProps } from 'next';

const Home = () => {
    const { t } = useTranslation('common');
    return (
        <div>
            <Header />
            <main className="container mx-auto">
                <h1 className="text-3xl font-bold">{t('welcome')}</h1>
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common'])),
        },
    };
};

export default Home;
