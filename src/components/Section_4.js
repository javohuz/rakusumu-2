// src/components/Section4.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Section4 = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "sec4-back-elips.png" }) {
        publicURL
      }
      img2: file(relativePath: { eq: "sect-back-elips-2.png" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="section4-main-box">
      <div className="elips-right-s4">
        <img src={data.img1.publicURL} alt="Background ellipse" />
      </div>

      <div className="elips-left-s4">
        <img src={data.img2.publicURL} alt="Background ellipse" />
      </div>

      <div className="section4-table-main container">
        <div className="title">
          <h1>転職サイトとの違い</h1>
          <span></span>
        </div>

        <div className="grid-container">
          <div className="grid-header">
            <h1></h1>
          </div>
          <div className="grid-header large-header">転職エージェントサービス</div>
          <div className="grid-header">
            <h1>転職サイト</h1>
          </div>

          <div className="grid-item">
            <p>企業の探し方</p>
          </div>
          <div className="grid-item large">
            <p><span>要望に合わせて</span><br />マッチする企業をご紹介</p>
          </div>
          <div className="grid-item">
            <p>自分で検索</p>
          </div>

          <div className="grid-item">
            <p>選考</p>
          </div>
          <div className="grid-item large">
            <p>日程調整や交渉などを <span>代行、<br />選考をサポート！</span></p>
          </div>
          <div className="grid-item">
            <p>自分で日程調整や <br />対策を行う</p>
          </div>

          <div className="grid-item">
            <p>求人情報</p>
          </div>
          <div className="grid-item large">
            <p><span>非公開求人や <br />当社だけが知っている</span>情報あり</p>
          </div>
          <div className="grid-item">
            <p>一般公開 <br />されている情報のみ</p>
          </div>

          <div className="grid-item">
            <p>専門知識</p>
          </div>
          <div className="grid-item large">
            <p><span>当社だからこそ伝えられる情報を共有</span></p>
          </div>
          <div className="grid-item">
            <p>サイトから <br />得られる情報のみ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
