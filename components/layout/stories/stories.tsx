import BgVideo from 'components/ui/bg-video/bg-video';
import Story from 'components/story/story';
import Button from 'components/ui/button/button';
import styles from './stories.module.scss';

const Stories: React.FC<{}> = () => {
  return (
    <section className={styles.stories}>
      <BgVideo sources={["/video.mp4", "/video.webm"]} />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <Story
          img={{
            src: '/nat-8.jpg',
            alt: 'Person on a tour',
            caption: 'Mary Smith',
          }}
          title="I had the best week ever with my family"
        />
      </div>
      <div className="row">
        <Story
          img={{
            src: '/nat-9.jpg',
            alt: 'Person on a tour',
            caption: 'Jack Wilson',
          }}
          title="Wow! My life is completely different now"
        />
      </div>
      <div className="u-center-text u-margin-top-big">
        <Button anchor={true} mode="text">Read all stories &rarr;</Button>
      </div>
    </section>
  );
};

export default Stories;
