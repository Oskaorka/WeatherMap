interface IFieldInput {
  onChange?: any;
  title?: string;
  addClass?: string;
  addDataSet?: string;
  type?: "text";
}
const FieldInput: React.FC<IFieldInput> = ({ onChange, addClass, type }) => {
  return <input onChange={onChange} className={addClass} type={type} />;
};
export default FieldInput;
