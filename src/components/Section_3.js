import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Section3 = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "section3-1.png" }) {
        publicURL
      }
      img2: file(relativePath: { eq: "section3-2.png" }) {
        publicURL
      }
      img3: file(relativePath: { eq: "section3-3.png" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="section3-main container">
      <div className="title">
        <h1>ラクスム for 転職が</h1>
        <h1 className="new-line">選ばれる理由</h1>
        <span></span>
      </div>

      <div className="s3-content">
        <div className="card-s3">
          <span>01</span>
          <div className="s3-text-box">
            <h1>非公開求人 <span>も含め4万2千件から自分にあった求人を探せる</span></h1>
          </div>
          <img src={data.img2.publicURL} alt="非公開求人" />
          <div className="s3-text-box">
            <p>10万件の求人の中から、あなたの希望や適正にあった最適な求人をご紹介します。転職サイトに記載されていない「非公開求人」を多数保有しているので、ご自身では探せない求人もご紹介できます。</p>
          </div>
        </div>

        <div className="card-s3">
          <span>02</span>
          <div className="s3-text-box">
            <h1>専任のキャリアパートナーがあなたをサポート</h1>
          </div>
          <img src={data.img1.publicURL} alt="専任のキャリアパートナー" />
          <div className="s3-text-box">
            <p>転職サービスにお申し込みいただくと、転職の相談ができるあなた専任の担当者がつきます。書類選考や面接の対策まで、転職のノウハウを熟知したパートナーがサポートします。</p>
          </div>
        </div>

        <div className="card-s3">
          <span>03</span>
          <div className="s3-text-box">
            <h1>面倒な手続きは、<span>専任担当がすべて代行します。</span></h1>
          </div>
          <img src={data.img3.publicURL} alt="面倒な手続き" />
          <div className="s3-text-box">
            <p>いまのお仕事をしながら無理なく転職活動できるよう、手厚くサポートします。履歴書・職務経歴書の提出はもちろん、面接日程の調整や内定後の入社時期の調整など、面倒な手続きもすべて担当が代行します。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
