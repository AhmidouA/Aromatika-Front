import Footer from '../components/Footer';
import Header from '../components/Header';
import TermsOfUse from '../components/TermsOfUse'
import useScrollTop from '../hooks/useScrollTop';

function TermsofUse() {
    useScrollTop();

    return (
        <>
            <Header />
            <TermsOfUse />
            <Footer />
        </>
    );
}

export default TermsofUse;
