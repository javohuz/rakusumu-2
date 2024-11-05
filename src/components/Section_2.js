import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Section2 = () => {
  const data = useStaticQuery(graphql`
    query {
      sectionImage: file(relativePath: { eq: "section2-img.png" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="section2-main-box">
      <div className="section2-main container">
        <div className="s2-text-box">
          <div className="title">
            <h1>一度はこんなふうに <br /> 考えたことはないですか？</h1>
            <span></span>
          </div>

          <div className="s2-ul-box">
            {[
              "はじめての転職で<span>何をすればいいのかわからない…</span>",
              "経歴やスキルに自信がなく<span>内定が取れるか不安…</span>",
              "今の仕事が忙しすぎて、<span>なかなか時間が取れない…</span>",
              "<span>マンツーマンで</span>転職をサポートしてほしい…"
            ].map((text, index) => (
              <div className="s2-ul-item" key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <circle cx="6" cy="6.18359" r="6" fill="#50B498" />
                </svg>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        </div>

        <img src={data.sectionImage.publicURL} alt="section2-img" />
      </div>
    </div>
  );
};

export default Section2;
