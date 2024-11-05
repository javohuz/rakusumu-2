// src/components/VacancySteps.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const VacancySteps = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "step-1.png" }) {
        publicURL
      }
      img2: file(relativePath: { eq: "step-2.png" }) {
        publicURL
      }
      img3: file(relativePath: { eq: "step-3.png" }) {
        publicURL
      }
      img4: file(relativePath: { eq: "step-4.png" }) {
        publicURL
      }
      img5: file(relativePath: { eq: "step-5.png" }) {
        publicURL
      }
      img6: file(relativePath: { eq: "step-6.png" }) {
        publicURL
      }
      img7: file(relativePath: { eq: "step-7.png" }) {
        publicURL
      }
    }
  `);

  return (
    <section className="vacancy-steps-main">
      <div className="vacancy-steps">
        <div className="title">
          <h1>転職までの流れ</h1>
          <span></span>
        </div>

        <div className="step-container-desk">
          <div className="steps-container">
            {/** First three steps */}
            {[1, 2, 3].map((step) => (
              <div className="step" key={step}>
                <div className="step-title">
                  <h3>{step < 10 ? `0${step}` : step}</h3>
                  <h4>{getStepTitle(step)}</h4>
                </div>
                <div className="step-content">
                  <img src={data[`img${step}`].publicURL} alt={`Step ${step} Image`} />
                  <p>{getStepDescription(step)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="steps-container">
            {/** Last four steps */}
            {[4, 5, 6, 7].map((step) => (
              <div className="step" key={step}>
                <div className="step-title">
                  <h3>{step < 10 ? `0${step}` : step}</h3>
                  <h4>{getStepTitle(step)}</h4>
                </div>
                <div className="step-content">
                  <img src={data[`img${step}`].publicURL} alt={`Step ${step} Image`} />
                  <p>{getStepDescription(step)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="steps-container step-container-mobile">
          {[1, 2, 3, 4, 5, 6, 7].map((step) => (
            <div className="step" key={step}>
              <div className="step-title">
                <h3>{step < 10 ? `0${step}` : step}</h3>
                <h4>{getStepTitle(step)}</h4>
              </div>
              <div className="step-content">
                <img src={data[`img${step}`].publicURL} alt={`Step ${step} Image`} />
                <p>{getStepDescription(step)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Function to return step titles based on the step number
const getStepTitle = (step) => {
  const titles = {
    1: "LINEで友達登録",
    2: "面談予約・書類送付",
    3: "面談",
    4: "求人紹介",
    5: "書類選考",
    6: "面接",
    7: "内定、入社",
  };
  return titles[step];
};

// Function to return step descriptions based on the step number
const getStepDescription = (step) => {
  const descriptions = {
    1: "まずは弊社公式LINEに追加しましょう！費用は一切発生いたしません。",
    2: "LINE追加後、専任担当とのご面談のご予約をお願いいたします。すでに準備がございましたら職務経歴書等の書類をいただきます。（なくても一緒に作っていくので大丈夫です！）",
    3: "専任担当より、転職のご理由や今後のキャリアについてなどをお伺いさせていただきます。",
    4: "ご面談でお伺いした情報をもとに、希望条件に合う求人のご紹介をさせていただきます。また、条件に合っていなかったとしてもお話をしていく中でご提案させていただくこともあります。",
    5: "職務経歴書を求人企業様にご推薦させていただきます。推薦時には、書類を送るだけではなく、実際にお話しさせていただいた専任担当からお人柄やアピールできるポイントを添えてより通過がしやすいようにサポートします。",
    6: "書類選考が無事通過いたしましたら、次は面接です。不安な方は、専任担当より面接対策をしっかり行いますので初めての転職でも安心して臨むことができます！",
    7: "おめでとうございます！内定が出た後も実際に入社するまでしっかりサポートを行いますのでご安心ください！",
  };
  return descriptions[step];
};

export default VacancySteps;
