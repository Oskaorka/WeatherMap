import Button from "../../ui/button";
import { useTranslation } from "react-i18next";
import FieldInput from "./FieldInput";

interface IFieldForm {
  onClick?: any;
  onChange?: any;
  title?: string;
  addClass?: string;
  addDataSet?: string;
  type?: "submit" | "button" | "text";
}

const FieldForm: React.FC<IFieldForm> = ({ onClick, onChange }) => {
  const { t } = useTranslation();
  return (
    <form className="header__form" action="submit">
      <FieldInput
        onChange={onChange}
        addClass="header__form-search"
        type="text"
      />
      <Button
        addClass="header__form-button"
        type="submit"
        onClick={onClick}
        title={t("add-card")}
      />
    </form>
  );
};

export default FieldForm;
