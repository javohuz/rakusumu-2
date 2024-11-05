// src/components/TopSection.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const TopSection = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "top-background.png" }) {
        publicURL
      }
      img2: file(relativePath: { eq: "top-left.png" }) {
        publicURL
      }
      img3: file(relativePath: { eq: "top-right.png" }) {
        publicURL
      }
      img4: file(relativePath: { eq: "top-right-2.png" }) {
        publicURL
      }
    }
  `);

  return (
    <section>
    <div className="top-side-backround">
      <img src={data.img1.publicURL} alt="top-background" />
    </div>
      <div className="top-sede-main-box container">
        <div className="top-section-main">
          <h1>
            未経験でも <span>年収UP転職</span>
          </h1>
          <p className="top-text">あなたにあった求人をLINEで紹介</p>
          <img className="top-image" src={data.img2.publicURL} alt="" />

          <a
            href="https://liff-gateway.lineml.jp/landing?follow=%40702ficiu&lp=MNJXlX&liff_id=2000515070-gr8Ne6Kv"
            target="_blank"
            rel="noopener noreferrer"
            className="top-section-link top-section-link-1"
          >
            <div className="line-app-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                <path
                  d="M39.4423 5.92704C35.1717 2.30373 29.5097 0.308594 23.4997 0.308594C17.4897 0.308594 11.8276 2.30373 7.55713 5.92704C3.20526 9.61838 0.808594 14.5525 0.808594 19.8199C0.808594 24.7768 2.9667 29.4988 6.88543 33.116C10.425 36.3835 15.1249 38.493 20.2281 39.1263V44.3011C20.2281 45.0687 20.8233 45.6908 21.5576 45.6908C23.8574 45.6908 30.0827 42.741 35.3386 38.5082C38.4783 35.9797 40.9944 33.2643 42.8167 30.4368C45.0555 26.9637 46.1908 23.3914 46.1908 19.8199C46.1908 14.5525 43.7941 9.61838 39.4423 5.92704ZM15.3942 25.6775H10.8796C10.1782 25.6775 9.66884 25.2458 9.66884 24.6505V14.9748C9.66884 14.369 10.2014 13.9622 10.9936 13.9622C11.7857 13.9622 12.3179 14.369 12.3179 14.9748V23.1472H15.3942C15.9558 23.1472 16.3485 23.6672 16.3485 24.4124C16.3485 25.1456 15.9472 25.6775 15.3942 25.6775ZM19.6537 24.6505C19.6537 25.2458 19.0966 25.6775 18.3293 25.6775C17.5492 25.6775 17.0049 25.2552 17.0049 24.6505V14.9748C17.0049 14.369 17.5371 13.9622 18.3293 13.9622C19.1215 13.9622 19.6537 14.369 19.6537 14.9748V24.6505ZM28.713 24.6505C28.713 25.2458 28.1559 25.6775 27.3883 25.6775C26.7356 25.6775 26.2585 25.3996 25.9708 24.851L23.6572 20.3298V24.6505C23.6572 25.2458 23.1001 25.6775 22.3329 25.6775C21.5528 25.6775 21.0082 25.2552 21.0082 24.6505V14.9897C21.0082 14.3752 21.5407 13.9622 22.3329 13.9622C23.1908 13.9622 23.5797 14.2423 24.0672 15.2122L26.0639 19.2456V14.9748C26.0639 14.369 26.5961 13.9622 27.3883 13.9622C28.1805 13.9622 28.713 14.369 28.713 14.9748V24.6505ZM34.482 18.6365C35.0422 18.6365 35.4647 19.1486 35.4647 19.8275C35.4647 20.3902 35.1205 20.9885 34.482 20.9885H32.7162V23.1468H36.3476C36.9175 23.1468 37.3305 23.6853 37.3305 24.4268C37.3305 25.1517 36.9175 25.6775 36.3476 25.6775H31.2776C30.5761 25.6775 30.0671 25.2454 30.0671 24.6505V14.9897C30.0671 14.3943 30.5761 13.9622 31.2776 13.9622H36.3476C36.9175 13.9622 37.3305 14.4881 37.3305 15.2129C37.3305 15.9548 36.9175 16.493 36.3476 16.493H32.7162V18.6365H34.482Z"
                  fill="white" />
              </svg>
            </div>
            <p>自分にあった求人を見る</p>
            <div className="icon-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.520015 1.72868L2.10643 0.29654C2.54447 -0.0988483 3.2548 -0.0988483 3.69284 0.29654L15.8632 11.2828C16.0826 11.4807 16.1918 11.7404 16.1914 12.0002C16.1918 12.2597 16.0826 12.5194 15.8632 12.7174L3.69284 23.7036C3.2548 24.0988 2.54447 24.0988 2.10643 23.7036L0.520015 22.2715C0.0818699 21.8761 0.0818699 21.2349 0.520015 20.8393L10.3121 12.0002L0.520015 3.16082C0.0818699 2.76525 0.0818699 2.12412 0.520015 1.72868Z"
                  fill="white" />
              </svg>
            </div>
          </a>
        </div>

        <div className="top-image-section">
          <img src={data.img3.publicURL} alt="top-sede-img" />
          <img src={data.img4.publicURL} alt="top-sede-img" />
          <a
            href="https://liff-gateway.lineml.jp/landing?follow=%40702ficiu&lp=MNJXlX&liff_id=2000515070-gr8Ne6Kv"
            target="_blank"
            rel="noopener noreferrer"
            className="top-section-link top-section-link-2"
          >
            <div className="line-app-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                <path
                  d="M39.4423 5.92704C35.1717 2.30373 29.5097 0.308594 23.4997 0.308594C17.4897 0.308594 11.8276 2.30373 7.55713 5.92704C3.20526 9.61838 0.808594 14.5525 0.808594 19.8199C0.808594 24.7768 2.9667 29.4988 6.88543 33.116C10.425 36.3835 15.1249 38.493 20.2281 39.1263V44.3011C20.2281 45.0687 20.8233 45.6908 21.5576 45.6908C23.8574 45.6908 30.0827 42.741 35.3386 38.5082C38.4783 35.9797 40.9944 33.2643 42.8167 30.4368C45.0555 26.9637 46.1908 23.3914 46.1908 19.8199C46.1908 14.5525 43.7941 9.61838 39.4423 5.92704ZM15.3942 25.6775H10.8796C10.1782 25.6775 9.66884 25.2458 9.66884 24.6505V14.9748C9.66884 14.369 10.2014 13.9622 10.9936 13.9622C11.7857 13.9622 12.3179 14.369 12.3179 14.9748V23.1472H15.3942C15.9558 23.1472 16.3485 23.6672 16.3485 24.4124C16.3485 25.1456 15.9472 25.6775 15.3942 25.6775ZM19.6537 24.6505C19.6537 25.2458 19.0966 25.6775 18.3293 25.6775C17.5492 25.6775 17.0049 25.2552 17.0049 24.6505V14.9748C17.0049 14.369 17.5371 13.9622 18.3293 13.9622C19.1215 13.9622 19.6537 14.369 19.6537 14.9748V24.6505ZM28.713 24.6505C28.713 25.2458 28.1559 25.6775 27.3883 25.6775C26.7356 25.6775 26.2585 25.3996 25.9708 24.851L23.6572 20.3298V24.6505C23.6572 25.2458 23.1001 25.6775 22.3329 25.6775C21.5528 25.6775 21.0082 25.2552 21.0082 24.6505V14.9897C21.0082 14.3752 21.5407 13.9622 22.3329 13.9622C23.1908 13.9622 23.5797 14.2423 24.0672 15.2122L26.0639 19.2456V14.9748C26.0639 14.369 26.5961 13.9622 27.3883 13.9622C28.1805 13.9622 28.713 14.369 28.713 14.9748V24.6505ZM34.482 18.6365C35.0422 18.6365 35.4647 19.1486 35.4647 19.8275C35.4647 20.3902 35.1205 20.9885 34.482 20.9885H32.7162V23.1468H36.3476C36.9175 23.1468 37.3305 23.6853 37.3305 24.4268C37.3305 25.1517 36.9175 25.6775 36.3476 25.6775H31.2776C30.5761 25.6775 30.0671 25.2454 30.0671 24.6505V14.9897C30.0671 14.3943 30.5761 13.9622 31.2776 13.9622H36.3476C36.9175 13.9622 37.3305 14.4881 37.3305 15.2129C37.3305 15.9548 36.9175 16.493 36.3476 16.493H32.7162V18.6365H34.482Z"
                  fill="white" />
              </svg>
            </div>
            <p>自分にあった求人を見る</p>
            <div className="icon-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.520015 1.72868L2.10643 0.29654C2.54447 -0.0988483 3.2548 -0.0988483 3.69284 0.29654L15.8632 11.2828C16.0826 11.4807 16.1918 11.7404 16.1914 12.0002C16.1918 12.2597 16.0826 12.5194 15.8632 12.7174L3.69284 23.7036C3.2548 24.0988 2.54447 24.0988 2.10643 23.7036L0.520015 22.2715C0.0818699 21.8761 0.0818699 21.2349 0.520015 20.8393L10.3121 12.0002L0.520015 3.16082C0.0818699 2.76525 0.0818699 2.12412 0.520015 1.72868Z"
                  fill="white" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
