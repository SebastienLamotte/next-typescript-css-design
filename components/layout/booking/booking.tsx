import Image from 'next/image';
import Form from 'components/ui/forms/form';
import styles from './booking.module.scss';

const Booking: React.FC<{}> = () => {
  return (
    <section className={styles.booking}>
      <div className='row'>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/nat-10.jpg"
            alt="Background nature image"
            quality={30}
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.book}>
            <div className={styles.form}>
              <Form
                title="Start booking now"
                inputs={[
                  { type: 'text', id: 'name', label: 'Full name' },
                  { type: 'email', id: 'email', label: 'Email address' },
                  {
                    type: 'radio',
                    name: 'size',
                    radioList: [
                      {
                        id: 'small',
                        label: 'Small tour group',
                      },
                      {
                        id: 'large',
                        label: 'Large tour group',
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
