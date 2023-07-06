import React from "react";
import "../css/feature.css";
import bathing from "../img/icon/bathing.png";
import bowl from "../img/icon/bowl.png";
import love from "../img/icon/love.png";
import medical from "../img/icon/medical.png";
import toy from "../img/icon/toy.png";
import { useTranslation } from "react-i18next";

export default function Feature() {
  const{t}=useTranslation(['entrypoint']);
  return (
    <div>
      <div className="featureIntro">
        <h3 className="borderSpacing pb-8">{t('Servizi')}</h3>
      </div>

      <div className="feature">
        <img src={medical} alt="" />
        <p>{t('Feature1')}
          {/* Innanzitutto, appena arrivati in struttura, ai cani viene eseguito un
          check-up completo al fine di controllare il loro stato di salute, e
          dove necessario intervenire tempestivamente. */}
        </p>
      </div>

      <div className="feature reverse">
        <img src={bowl} alt="" />
        <p>{t('Feature2')}
          {/* L'alimentazione dei nostri amici appena arrivati avviene gradualmente,
          poichè spesso e volentieri giungono in condizioni di forte
          disidratazione e malnutrizione. */}
        </p>
      </div>

      <div className="feature">
        <img src={bathing} alt="" />
        <p>{t('Feature3')}
          {/* Al fine di garantire un eccellente livello di pulizia dei cani, viene
          eseguito un bagno igienizzante, in tal maniera viene evitata la
          diffusione di parassiti. */}
        </p>
      </div>

      <div className="feature reverse">
        <img src={love} alt="" />
        <p>{t('Feature4')}
          {/* Dopo aver curato il corpo dei nostri amici, è ora di curare l'animo
          con una sana e pura dose di affetto. */}
        </p>
      </div>

      <div className="feature">
        <img src={toy} alt="" />
        <p>{t('Feature5')}
          {/* Ultimo ma non meno importante, un po' di divertimento per i nostri
          cuccioli e per i nostri volontari, con tante attività svolte nelle
          zone verdi. */}
        </p>
      </div>
    </div>
  );
}
