import Header from './Header';
import Footer from './Footer';
import FeaturedClassesBar from './FeaturedClassesBar';
import BodyClass from './BodyClass';

export default function PageLayout({
  children,
  bodyClass = 'wp-singular page-template-default page wp-custom-logo wp-theme-badm',
  showFeaturedBar = true,
}: {
  children: React.ReactNode;
  bodyClass?: string;
  showFeaturedBar?: boolean;
}) {
  return (
    <>
      <BodyClass className={bodyClass} />
      <div id="page" className="site">
        <a className="skip-link screen-reader-text" href="#primary">
          Skip to content
        </a>
        <Header />
        {showFeaturedBar ? <FeaturedClassesBar /> : null}
        <main id="primary" className="site-main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
