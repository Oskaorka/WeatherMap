interface IGetIMG {
  pathImg?: string;
  title?: string;
}

const GetImgBtn: React.FC<IGetIMG> = ({ pathImg, title }) => {
  return (
    <div className="header__language-wrapper">
      <img className="header__language-icon" src={pathImg} alt="Worldwide" />
      <p className="header__language-current">{title}</p>
    </div>
  );
};
export default GetImgBtn;
