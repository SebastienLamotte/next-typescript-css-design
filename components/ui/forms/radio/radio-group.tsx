import Radio from './radio';
import { RadioType } from 'types/form';

const RadioGroup: React.FC<RadioType> = ({ name, radioList }) => {
  return (
    <>
      {radioList.map((radio) => (
        <Radio key={radio.id} label={radio.label} id={radio.id} name={name} />
      ))}
    </>
  );
};

export default RadioGroup;
