import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const CustomerReviews = () => {
  const data = useStaticQuery(graphql`
    query {
      customer1: file(relativePath: { eq: "castumer-1.png" }) {
        publicURL
      }
      customer2: file(relativePath: { eq: "castumer-2.png" }) {
        publicURL
      }
      customer3: file(relativePath: { eq: "castumer-3.png" }) {
        publicURL
      }
    }
  `);

  return (
    <section className="customer-reviews">
      <div className="cr-contents">
        <div className="title">
          <h1>転職者の声</h1>
          <span></span>
        </div>

        <div className="reviews-container">

          {/* Review 1 */}
          <div className="review-card">
            <img src={data.customer1.publicURL} alt="H.Tさま" />
            <div className="rc-contents">
              <div className="review-header">
                <h4>
                  <p>H.Tさま</p>
                  <span></span>
                  <p>20代 男性</p>
                </h4>
                <div className="tags">
                  <p>不動産業界</p><span>></span>
                  <p>IT業界</p>
                </div>
                <h2>はじめての転職でも、専任担当のサポートで安心できました</h2>
              </div>
              <p>
                初めての転職を決意したとき、不安でいっぱいでした。しかし、専任の担当者が最初から最後まで親身にサポートしてくれたおかげで、職務経歴書の作成や面接もスムーズに進めることができました。担当者は私の強みや経験を深く理解してくれ、それを活かしたアドバイスをしてくれたため、自信を持って転職活動に臨むことができました。特に、面接前の練習やフィードバックは非常に役立ち、実際の面接でも堂々と自分をアピールできました。結果として、自分にぴったりの新しい職場に巡り会うことができ、本当に感謝しています。
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="review-card">
            <img src={data.customer2.publicURL} alt="J.Fさま" />
            <div className="rc-contents">
              <div className="review-header">
                <h4>
                  <p>J.Fさま</p>
                  <span></span>
                  <p>40代 女性</p>
                </h4>
                <div className="tags">
                  <p>主婦</p><span>></span>
                  <p>電機メーカー営業職</p>
                </div>
                <h2>出産後の再就職も親身になり相談に乗ってもらえました</h2>
              </div>
              <p>
                30代で出産し、しばらく仕事から離れていたため、再就職に対して大きな不安を抱いていました。専任の担当者が私のブランク期間を理解してくださり、柔軟な対応をしてくれました。職務経歴書の作成や面接対策だけでなく、復職後のキャリアプランについても親身にアドバイスをしてくれたので、安心して再スタートを切ることができました。特に、子育てと仕事の両立についてのアドバイスは非常に参考になりました。その結果、自分のスキルを活かしながら、家族との時間も大切にできる職場に就くことができました。ラクスムさんの支えがあったからこそ、再就職への一歩を踏み出す勇気を持てました。本当に感謝しています。
              </p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="review-card">
            <img src={data.customer3.publicURL} alt="K.Tさま" />
            <div className="rc-contents">
              <div className="review-header">
                <h4>
                  <p>K.Tさま</p>
                  <span></span>
                  <p>30代 男性</p>
                </h4>
                <div className="tags">
                  <p>大手ITエンジニア</p><span>></span>
                  <p>メガベンチャーITエンジニア</p>
                </div>
                <h2>じっくりと転職活動をサポートしてくれました</h2>
              </div>
              <p>次のキャリアアップとして転職活動を始めました。<br />
                現職で満足はしていたので、じっくりと時間をかけて転職活動をしたいという希望がありましたが、他のエージェントでは急かされることが多く、なかなか納得のいくサポートを受けられませんでした。しかし、ラクスムさんでは私の意見をしっかり聞いてくれ、長い目で一緒に転職活動を進めてくれました。担当者は私のペースに合わせてサポートしてくれ、安心して転職活動に取り組むことができました。その結果、本当に自分が入りたいと思った企業に転職することができ、大変満足しています。ラクスムさんのおかげで、自分にとって最適な転職先を見つけることができました。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
