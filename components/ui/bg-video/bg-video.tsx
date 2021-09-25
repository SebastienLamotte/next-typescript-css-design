import styles from './bg-video.module.scss';

type Props = {
  sources: string[];
};

const BgVideo: React.FC<Props> = ({ sources }) => {
  return (
    <div className={styles['bg-video']}>
      <video className={styles['bg-video-content']} autoPlay muted loop>
        {sources.map((src, id) => (
          <source
            key={`source-${src}-${id}`}
            src={src}
            type={`video/${src.split('.').pop()}`}
          />
        ))}
        Your browser is not supported!
      </video>
    </div>
  );
};

export default BgVideo;
