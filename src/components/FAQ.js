import React from "react";

const FaqSection = () => {
  
  const faqData = [
    {
      question: "サービスを利用するのにお金はかかりますか？",
      answer: "いいえ。料金はかかりませんのでご安心ください。採用を希望する企業様から頂く紹介手数料によりサービスを運営しております。",
    },
    {
      question: "WEBでの面談は可能ですか？",
      answer: "はい、可能です。対面だけでなくオンライン面談や電話面談などにも対応しております。",
    },
    {
      question: "サービスを利用したら、絶対に転職しないといけませんか？",
      answer: "いいえ。無理に転職を勧めるようなことはございませんのでご安心ください。転職するかどうか迷っているけど話だけ聞いてみたい、というご相談も大歓迎です。",
    },
    {
      question: "1社の選考にどのくらいの時間がかかりますか？",
      answer: "書類選考から内定まで平均1ヵ月程度かかります。ご希望の企業にもよりますので、詳細は担当にご確認ください。",
    },
  ];

  const toggleFaqItem = (index) => {
    const items = document.querySelectorAll('.faq-item');
    items[index].classList.toggle('active');
  };

  return (
    <div className="faq-section-main container">
      <div className="title">
        <h1>よくあるご質問</h1>
        <span></span>
      </div>
      <div className="faq-section">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="question" onClick={() => toggleFaqItem(index)}>
              <div className="faq-texts-q">
                <span>Q</span>
                <p>{item.question}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                <path d="M5.17799 16.1708C5.17323 16.3873 5.23598 16.5998 5.35761 16.779C5.47924 16.9581 5.65374 17.0949 5.8567 17.1703C6.05966 17.2457 6.28104 17.256 6.49012 17.1997C6.6992 17.1435 6.88548 17.0235 7.02322 16.8564L12.4838 10.4823L17.9425 16.8564C18.0274 16.972 18.1353 17.0688 18.2593 17.1407C18.3834 17.2127 18.521 17.2582 18.6635 17.2745C18.806 17.2908 18.9503 17.2775 19.0874 17.2354C19.2245 17.1934 19.3515 17.1235 19.4603 17.0301C19.5692 16.9367 19.6575 16.8218 19.7199 16.6927C19.7822 16.5636 19.8173 16.423 19.8228 16.2796C19.8283 16.1363 19.8043 15.9934 19.7521 15.8599C19.6998 15.7263 19.6205 15.605 19.5192 15.5035L13.2752 8.20572C13.1774 8.09112 13.056 7.99909 12.9192 7.93599C12.7824 7.87289 12.6335 7.84021 12.4829 7.84021C12.3322 7.84021 12.1833 7.87289 12.0465 7.93599C11.9097 7.99909 11.7882 8.09112 11.6904 8.20572L5.44039 15.5035C5.27664 15.6878 5.18379 15.9243 5.17799 16.1708Z" fill="#222222" />
              </svg>
            </div>
            <div className="answer">
              <span>A</span>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
