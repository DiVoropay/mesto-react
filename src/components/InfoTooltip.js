import unionV from '../images/popup-info/union-v.svg';
import unionX from '../images/popup-info/union-x.svg';

function InfoTooltip({ isSuccessful, isOpen, onClose }) {

  return (
    <div className={`popup` + (isOpen ? " popup_opened" : "")}>
      <div className="popup__container">
        <button className="popup__close page-hover" onClick={onClose} type="reset"></button>
        <img className="popup__info-image" src={ isSuccessful ? unionV : unionX } alt="Изображение статуса сообщения"/>
        <p className="popup__info-message">
          {isSuccessful
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."
          }
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;