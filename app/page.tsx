import AnnouncementBar from './components/AnnouncementBar';
import BodyClass from './components/BodyClass';
import Header from './components/Header';
import VerticalSlider from './components/VerticalSlider';

export default function Home() {
  return (
    <>
      <BodyClass className="home wp-singular page-template-default page page-id-3694 wp-custom-logo wp-theme-badm stick" />
      <div id="page" className="site">
        <a className="skip-link screen-reader-text" href="#primary">
          Skip to content
        </a>
        <Header />
        <AnnouncementBar />
        <main id="primary" className="site-main">
          <VerticalSlider />
        </main>
      </div>
    </>
  );
}
