import Input from './input/input';
import RadioGroup from './radio/radio-group';
import Button from '../button/button';
import styles from './form.module.scss';
import { InputType, RadioListType } from 'types/form';

type Props = {
  title: string;
  inputs: (InputType | RadioListType)[];
};

const Form: React.FC<Props> = ({ title, inputs }) => {
  return (
    <form action="#" className={styles.form}>
      <div className="u-margin-bottom-medium">
        <h2 className="heading-secondary">{title}</h2>
      </div>
      {inputs.map((input) => {
        const { type } = input;
        if (['text', 'email'].includes(type)) {
          const { id, label } = input as InputType;
          return (
            <div key={id} className={styles.group}>
              <Input label={label} id={id} type={type} />
            </div>
          );
        } else if (type === 'radio') {
          const { name, radioList } = input as RadioListType;
          return (
            <div key={`radioList-${name}`} className={styles.group}>
              <RadioGroup name={name} radioList={radioList} />
            </div>
          );
          // return <RadioGroup name={name} radioList={radioList} />
        }
      })}
      <div className={`${styles.group} u-margin-top-medium`}>
        <Button color="green">Next step &rarr;</Button>
      </div>
    </form>
  );
};

export default Form;
