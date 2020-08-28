import * as React from 'react';

import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { loadNextLevel } from 'store/root-redux';
import Logo from './Logo';

const ResultsModal = (): JSX.Element => {
  const dispatch = useDispatch();
  const { score, maxScore, finished } = useSelector<QuizState, QuizState>(
    (state) => state
  );

  const getHeaderText = React.useCallback((s, maxS) => {
    if (s === 0) {
      return 'Начинающий орнитолог';
    }
    if (s < maxS / 3) {
      return 'Орнитолог 1 категории';
    }
    if (s < maxS) {
      return 'Ведущий орнитолог';
    }
    return 'Заведущий птичьим базаром';
  }, []);

  return (
    <Modal show={finished}>
      {score === maxScore ? (
        <Modal.Body>
          <div className="p-0 d-flex flex-column text-center">
            <div
              className="p-2 d-flex flex-column justify-content-center w-100 text-center border rounded"
              style={{
                backgroundImage: 'url(assets/images/passed.svg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="text-uppercase">Удостоверение </h3>
              <h4>заведующего птичьим базаром</h4>
              <div className="mt-3">Настоящее удостоверение</div>
              <div>выдано за выдающиеся достижения в области определения</div>
              <h5 className="my-3">&rdquo;Кто сказал ЧЫК-ЧЫРЫК?&ldquo;</h5>
              <p>на всех континентах</p>
              <Logo />
            </div>

            <small className="mt-2">
              Для поддержания формы рекомендуем пройти еще раз, кнопочка чуть
              ниже.
            </small>
          </div>
        </Modal.Body>
      ) : (
        <Modal.Body>
          <div className="p-2 d-flex flex-column justify-content-center w-100 text-center">
            <h4>{`Вы - ${getHeaderText(score, maxScore)}`}</h4>
            <h5>{`(${score} из ${maxScore})`}</h5>
            <div className="my-3">
              Есть куда расти, стоит попробовать еще раз.
            </div>
            <small className="mt-2">
              Тут и кнопочку в уголочке окошечка сделали для этого.
            </small>
          </div>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button
          size="sm"
          color="success"
          onClick={() => loadNextLevel(dispatch, 0)}
        >
          Снова
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultsModal;
