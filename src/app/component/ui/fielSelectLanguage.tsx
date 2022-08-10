interface IFieldSelectLanguage {
  onClick?: any;
  title?: string;
  addClass?: string | any;
  dataSet?: string;
}

const FieldSelectLanguage: React.FC<IFieldSelectLanguage> = ({
  onClick,
  title,
  addClass,
  dataSet,
}) => {
  return (
    <p onClick={onClick} data-lang={dataSet} className={addClass}>
      {title}
    </p>
  );
};

export default FieldSelectLanguage;
