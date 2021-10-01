export interface InputType {
  type: string;
  label: string;
  id: string;
}


export interface RadioType {
  name: string;
  radioList: { id: string; label: string }[];
}

export interface RadioListType extends RadioType {
  type: string;
}
