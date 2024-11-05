// src/components/Footer.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "footert-img.png" }) {
        publicURL
      }
      img2: file(relativePath: { eq: "footer-mob.png" }) {
        publicURL
      }
      img3: file(relativePath: { eq: "section3-1.png" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="footert-top-box">
      <div className="f-elips-1"></div>
      <div className="f-elips-2"></div>
      <div className="f-elips-3"></div>
      <div className="f-elips-4"></div>
      <h2>いまよりいい会社、<span>一緒に探しませんか？</span></h2>
      <div className="footer-top container">
        <div className="tect-section-f">
          <div className="tect-section-title">
            <p>サービス利用</p>
            <div className="image-text">
              <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.466797" width="71.9512" height="71.9512" rx="35.9756" fill="#00A6C3" />
                <path
                  d="M24.2079 28.3482H48.0183V33.0538H24.2079V28.3482ZM15.6747 36.1621H56.781V40.9972H15.6747V36.1621ZM26.7771 40.0474H32.7411C32.527 42.0333 32.1753 43.8896 31.686 45.6165C31.1966 47.3145 30.4167 48.8687 29.3462 50.2789C28.3063 51.6604 26.8382 52.8979 24.942 53.9916C23.0457 55.0852 20.5989 56.0062 17.6016 56.7545C17.4181 56.294 17.1428 55.776 16.7758 55.2004C16.4393 54.6248 16.057 54.0492 15.6288 53.4735C15.2006 52.9267 14.7877 52.4806 14.3901 52.1352C17.0204 51.5884 19.1155 50.9265 20.6754 50.1494C22.2658 49.3723 23.4586 48.4945 24.2538 47.516C25.0796 46.5087 25.6607 45.3862 25.9971 44.1487C26.3642 42.8823 26.6241 41.5152 26.7771 40.0474ZM38.6135 39.184H44.1646V49.7177C44.1646 50.4084 44.2717 50.8545 44.4858 51.056C44.7305 51.2287 45.2657 51.315 46.0915 51.315C46.275 51.315 46.5656 51.315 46.9632 51.315C47.3608 51.315 47.8043 51.315 48.2936 51.315C48.783 51.315 49.2417 51.315 49.6699 51.315C50.0981 51.315 50.4346 51.315 50.6792 51.315C51.1686 51.315 51.5356 51.1999 51.7803 50.9696C52.0556 50.7394 52.2391 50.2501 52.3308 49.5018C52.4532 48.7248 52.5449 47.5879 52.6061 46.0913C53.0037 46.3504 53.4931 46.6094 54.0742 46.8684C54.6553 47.1274 55.2517 47.3577 55.8634 47.5592C56.5057 47.7606 57.0715 47.9333 57.5609 48.0772C57.3774 50.1494 57.0562 51.7611 56.5974 52.9123C56.1387 54.0923 55.4811 54.8982 54.6247 55.3299C53.7989 55.7904 52.652 56.0206 51.1839 56.0206C50.9086 56.0206 50.4957 56.0206 49.9452 56.0206C49.4253 56.0206 48.8441 56.0206 48.2019 56.0206C47.5902 56.0206 47.009 56.0206 46.4585 56.0206C45.9386 56.0206 45.541 56.0206 45.2657 56.0206C43.4918 56.0206 42.1154 55.8335 41.1367 55.4594C40.1886 55.0852 39.531 54.4377 39.164 53.5167C38.797 52.5957 38.6135 51.3582 38.6135 49.804V39.184ZM33.154 16.1309H39.0264V23.9879H33.154V16.1309ZM16.5005 20.2752H55.9093V30.5499H50.037V25.1967H22.0976V30.5499H16.5005V20.2752Z"
                  fill="white" />
              </svg>
              <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.466797" width="71.9512" height="71.9512" rx="35.9756" fill="#00A6C3" />
                <path
                  d="M24.2079 28.3482H48.0183V33.0538H24.2079V28.3482ZM15.6747 36.1621H56.781V40.9972H15.6747V36.1621ZM26.7771 40.0474H32.7411C32.527 42.0333 32.1753 43.8896 31.686 45.6165C31.1966 47.3145 30.4167 48.8687 29.3462 50.2789C28.3063 51.6604 26.8382 52.8979 24.942 53.9916C23.0457 55.0852 20.5989 56.0062 17.6016 56.7545C17.4181 56.294 17.1428 55.776 16.7758 55.2004C16.4393 54.6248 16.057 54.0492 15.6288 53.4735C15.2006 52.9267 14.7877 52.4806 14.3901 52.1352C17.0204 51.5884 19.1155 50.9265 20.6754 50.1494C22.2658 49.3723 23.4586 48.4945 24.2538 47.516C25.0796 46.5087 25.6607 45.3862 25.9971 44.1487C26.3642 42.8823 26.6241 41.5152 26.7771 40.0474ZM38.6135 39.184H44.1646V49.7177C44.1646 50.4084 44.2717 50.8545 44.4858 51.056C44.7305 51.2287 45.2657 51.315 46.0915 51.315C46.275 51.315 46.5656 51.315 46.9632 51.315C47.3608 51.315 47.8043 51.315 48.2936 51.315C48.783 51.315 49.2417 51.315 49.6699 51.315C50.0981 51.315 50.4346 51.315 50.6792 51.315C51.1686 51.315 51.5356 51.1999 51.7803 50.9696C52.0556 50.7394 52.2391 50.2501 52.3308 49.5018C52.4532 48.7248 52.5449 47.5879 52.6061 46.0913C53.0037 46.3504 53.4931 46.6094 54.0742 46.8684C54.6553 47.1274 55.2517 47.3577 55.8634 47.5592C56.5057 47.7606 57.0715 47.9333 57.5609 48.0772C57.3774 50.1494 57.0562 51.7611 56.5974 52.9123C56.1387 54.0923 55.4811 54.8982 54.6247 55.3299C53.7989 55.7904 52.652 56.0206 51.1839 56.0206C50.9086 56.0206 50.4957 56.0206 49.9452 56.0206C49.4253 56.0206 48.8441 56.0206 48.2019 56.0206C47.5902 56.0206 47.009 56.0206 46.4585 56.0206C45.9386 56.0206 45.541 56.0206 45.2657 56.0206C43.4918 56.0206 42.1154 55.8335 41.1367 55.4594C40.1886 55.0852 39.531 54.4377 39.164 53.5167C38.797 52.5957 38.6135 51.3582 38.6135 49.804V39.184ZM33.154 16.1309H39.0264V23.9879H33.154V16.1309ZM16.5005 20.2752H55.9093V30.5499H50.037V25.1967H22.0976V30.5499H16.5005V20.2752Z"
                  fill="white" />
              </svg>
              <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.699219" y="0.466797" width="71.9512" height="71.9512" rx="35.9756" fill="#00A6C3" />
                <path
                  d="M24.5915 16.1309L29.9821 17.6418C29.1598 19.2248 28.1852 20.7789 27.0584 22.3043C25.9315 23.8296 24.7133 25.2399 23.4037 26.535C22.1246 27.8301 20.8455 28.967 19.5663 29.9455C19.2618 29.6001 18.8354 29.2116 18.2872 28.7799C17.739 28.3482 17.1756 27.9309 16.5969 27.5279C16.0182 27.125 15.5157 26.794 15.0894 26.535C17.0385 25.3262 18.8658 23.8009 20.5714 21.9589C22.2769 20.117 23.6169 18.1743 24.5915 16.1309ZM24.226 20.707H55.7018V25.2399H22.9012L24.226 20.707ZM16.0944 30.7657H57.3921V35.385H16.0944V30.7657ZM16.8253 40.8677H56.7069V45.487H16.8253V40.8677ZM30.3933 22.3043H34.9616V43.2852H30.3933V22.3043ZM22.2616 22.3043H27.1498V43.3284H22.2616V22.3043ZM38.3422 22.3043H42.9105V43.3284H38.3422V22.3043ZM46.3824 22.3043H51.4076V43.3284H46.3824V22.3043ZM29.0228 47.9045L34.0936 47.3865C34.3982 48.6816 34.657 50.0918 34.8702 51.6172C35.1139 53.1426 35.2509 54.4377 35.2814 55.5026L29.8907 56.2365C29.8907 55.5457 29.8451 54.7255 29.7537 53.7757C29.6928 52.826 29.6014 51.833 29.4796 50.797C29.3578 49.7609 29.2055 48.7967 29.0228 47.9045ZM38.1137 48.034L43.2303 47.2138C43.6262 48.0484 44.0069 48.955 44.3724 49.9335C44.7378 50.9121 45.0576 51.8618 45.3317 52.7828C45.6058 53.7038 45.8038 54.5384 45.9256 55.2867L40.4436 56.2796C40.2913 55.2148 39.9868 53.9052 39.5299 52.3511C39.1036 50.797 38.6315 49.3579 38.1137 48.034ZM47.159 47.775L52.4126 46.2209C53.1436 47.1131 53.8745 48.0772 54.6054 49.1133C55.3364 50.1494 56.0368 51.1855 56.7069 52.2216C57.3769 53.2289 57.8946 54.1355 58.2601 54.9413L52.641 56.7113C52.306 55.9343 51.834 55.0277 51.2249 53.9916C50.6462 52.9555 49.9914 51.905 49.2605 50.8401C48.56 49.7465 47.8595 48.7248 47.159 47.775ZM20.7998 46.3935L26.099 47.6455C25.5813 49.286 24.8656 50.9265 23.9519 52.567C23.0383 54.2074 22.018 55.6033 20.8911 56.7545L15.6376 54.7255C16.673 53.8045 17.6628 52.5813 18.607 51.056C19.5511 49.5306 20.282 47.9765 20.7998 46.3935Z"
                  fill="white" />
              </svg>
              <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0488281" y="0.466797" width="71.9512" height="71.9512" rx="35.9756" fill="#00A6C3" />
                <path
                  d="M22.0997 16.3897H27.0567V56.6248H22.0997V16.3897ZM15.2501 30.5929H33.7261V35.428H15.2501V30.5929ZM21.1083 33.1399L24.1276 34.5646C23.737 36.0036 23.2864 37.5289 22.7757 39.1407C22.265 40.7236 21.6942 42.3065 21.0633 43.8894C20.4324 45.4724 19.7715 46.9689 19.0805 48.3792C18.3895 49.7607 17.6535 50.9694 16.8724 52.0055C16.7222 51.4587 16.4969 50.8687 16.1964 50.2355C15.9261 49.5736 15.6256 48.926 15.2952 48.2929C14.9947 47.6597 14.7093 47.1128 14.439 46.6524C15.3402 45.5875 16.2115 44.278 17.0526 42.7238C17.9239 41.1409 18.72 39.5148 19.441 37.8455C20.162 36.1475 20.7178 34.579 21.1083 33.1399ZM27.0117 35.6438C27.252 35.8741 27.5975 36.2338 28.0481 36.7231C28.5288 37.2124 29.0545 37.7736 29.6253 38.4068C30.1961 39.0111 30.7369 39.6299 31.2476 40.2631C31.7884 40.8675 32.269 41.4143 32.6896 41.9036C33.1403 42.3929 33.4557 42.767 33.636 43.026L30.3463 47.0841C30.0459 46.4509 29.6554 45.717 29.1747 44.8824C28.694 44.0189 28.1683 43.1411 27.5975 42.249C27.0267 41.328 26.4709 40.4646 25.9301 39.6587C25.3894 38.8528 24.9237 38.1909 24.5332 37.6729L27.0117 35.6438ZM15.205 19.7138L18.9904 18.7641C19.3809 19.8002 19.7264 20.9226 20.0268 22.1314C20.3573 23.3402 20.6277 24.5202 20.838 25.6714C21.0483 26.8226 21.1985 27.8587 21.2886 28.7797L17.2329 29.8158C17.2029 28.8948 17.0827 27.8587 16.8724 26.7075C16.6921 25.5275 16.4518 24.3331 16.1514 23.1243C15.881 21.8868 15.5655 20.7499 15.205 19.7138ZM30.0309 18.5482L34.5823 19.498C34.2218 20.678 33.8312 21.8868 33.4107 23.1243C32.9901 24.3619 32.5695 25.5563 32.1489 26.7075C31.7283 27.8299 31.3377 28.8229 30.9772 29.6863L27.5524 28.7365C27.8829 27.8155 28.1983 26.765 28.4987 25.585C28.8292 24.3763 29.1296 23.1531 29.4 21.9155C29.6704 20.678 29.8807 19.5555 30.0309 18.5482ZM47.1099 16.1738H52.157V56.7111H47.1099V16.1738ZM33.636 43.1987L56.7986 39.227L57.6097 44.0189L34.4471 48.0338L33.636 43.1987ZM36.1595 22.045L38.8183 18.5482C39.6594 19.0087 40.5307 19.5411 41.4319 20.1455C42.3633 20.7499 43.2345 21.3687 44.0456 22.0019C44.8868 22.635 45.5477 23.225 46.0284 23.7719L43.2345 27.6572C42.7838 27.0816 42.153 26.4629 41.3418 25.8009C40.5607 25.1389 39.7195 24.477 38.8183 23.815C37.917 23.1531 37.0308 22.5631 36.1595 22.045ZM34.1317 32.9241L36.6552 29.2114C37.5565 29.6431 38.4878 30.1611 39.4492 30.7655C40.4105 31.3411 41.3268 31.9311 42.198 32.5355C43.0692 33.1111 43.7752 33.6724 44.316 34.2192L41.5671 38.3636C41.0865 37.8168 40.4255 37.2268 39.5843 36.5936C38.7432 35.9316 37.8419 35.2841 36.8805 34.6509C35.9492 33.9889 35.0329 33.4133 34.1317 32.9241Z"
                  fill="white" />
              </svg>
            </div>
          </div>
          <p className="link-title">＼ 30秒ですぐ完了 ！／</p>
          <a href="https://liff-gateway.lineml.jp/landing?follow=%40702ficiu&lp=MNJXlX&liff_id=2000515070-gr8Ne6Kv"
            className="footer-section-link">
            <div className="line-app-svg-f">
              <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                <path
                  d="M39.4423 5.92704C35.1717 2.30373 29.5097 0.308594 23.4997 0.308594C17.4897 0.308594 11.8276 2.30373 7.55713 5.92704C3.20526 9.61838 0.808594 14.5525 0.808594 19.8199C0.808594 24.7768 2.9667 29.4988 6.88543 33.116C10.425 36.3835 15.1249 38.493 20.2281 39.1263V44.3011C20.2281 45.0687 20.8233 45.6908 21.5576 45.6908C23.8574 45.6908 30.0827 42.741 35.3386 38.5082C38.4783 35.9797 40.9944 33.2643 42.8167 30.4368C45.0555 26.9637 46.1908 23.3914 46.1908 19.8199C46.1908 14.5525 43.7941 9.61838 39.4423 5.92704ZM15.3942 25.6775H10.8796C10.1782 25.6775 9.66884 25.2458 9.66884 24.6505V14.9748C9.66884 14.369 10.2014 13.9622 10.9936 13.9622C11.7857 13.9622 12.3179 14.369 12.3179 14.9748V23.1472H15.3942C15.9558 23.1472 16.3485 23.6672 16.3485 24.4124C16.3485 25.1456 15.9472 25.6775 15.3942 25.6775ZM19.6537 24.6505C19.6537 25.2458 19.0966 25.6775 18.3293 25.6775C17.5492 25.6775 17.0049 25.2552 17.0049 24.6505V14.9748C17.0049 14.369 17.5371 13.9622 18.3293 13.9622C19.1215 13.9622 19.6537 14.369 19.6537 14.9748V24.6505ZM28.713 24.6505C28.713 25.2458 28.1559 25.6775 27.3883 25.6775C26.7356 25.6775 26.2585 25.3996 25.9708 24.851L23.6572 20.3298V24.6505C23.6572 25.2458 23.1001 25.6775 22.3329 25.6775C21.5528 25.6775 21.0082 25.2552 21.0082 24.6505V14.9897C21.0082 14.3752 21.5407 13.9622 22.3329 13.9622C23.1908 13.9622 23.5797 14.2423 24.0672 15.2122L26.0639 19.2456V14.9748C26.0639 14.369 26.5961 13.9622 27.3883 13.9622C28.1805 13.9622 28.713 14.369 28.713 14.9748V24.6505ZM34.482 18.6365C35.0422 18.6365 35.4647 19.1486 35.4647 19.8275C35.4647 20.3902 35.1205 20.9885 34.482 20.9885H32.7162V23.1468H36.3476C36.9175 23.1468 37.3305 23.6853 37.3305 24.4268C37.3305 25.1517 36.9175 25.6775 36.3476 25.6775H31.2776C30.5761 25.6775 30.0671 25.2454 30.0671 24.6505V14.9897C30.0671 14.3943 30.5761 13.9622 31.2776 13.9622H36.3476C36.9175 13.9622 37.3305 14.4881 37.3305 15.2129C37.3305 15.9548 36.9175 16.493 36.3476 16.493H32.7162V18.6365H34.482Z"
                  fill="white" />              </svg>
            </div>
            <p>今すぐ自分にあった<span>求人を見る</span></p>
            <div className="icon-next-f">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.520015 1.72868L2.10643 0.29654C2.54447 -0.0988483 3.2548 -0.0988483 3.69284 0.29654L15.8632 11.2828C16.0826 11.4807 16.1918 11.7404 16.1914 12.0002C16.1918 12.2597 16.0826 12.5194 15.8632 12.7174L3.69284 23.7036C3.2548 24.0988 2.54447 24.0988 2.10643 23.7036L0.520015 22.2715C0.0818699 21.8761 0.0818699 21.2349 0.520015 20.8393L10.3121 12.0002L0.520015 3.16082C0.0818699 2.76525 0.0818699 2.12412 0.520015 1.72868Z"
                  fill="white" />              </svg>
            </div>
          </a>
          <div className="checklist">
            <div className="checked-item">
              <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.0335 2.28613H1.2251C0.5485 2.28613 0 2.83463 0 3.51103V23.725C0 24.4018 0.5485 24.9501 1.2251 24.9501H21.4392C22.1158 24.9501 22.6643 24.4018 22.6643 23.725V12.932C22.6643 12.2562 22.1153 11.7069 21.4392 11.7069C20.763 11.7069 20.2141 12.2562 20.2141 12.932V22.4999H2.45019C2.45019 22.4999 2.45019 8.9372 2.45019 4.73612H19.0335C19.7096 4.73612 20.2586 4.18728 20.2586 3.51103C20.2586 2.83507 19.7096 2.28613 19.0335 2.28613Z"
                  fill="url(#paint0_linear_280_912)" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.71965 12.457L9.69812 19.0235C9.92653 19.2744 10.2488 19.4195 10.588 19.4239C10.9273 19.4283 11.2532 19.2916 11.4881 19.0466L27.4176 2.4402C27.8856 1.95213 27.8694 1.17596 27.3815 0.707925C26.8935 0.239891 26.1174 0.256015 25.6493 0.743993L10.6273 16.4048C8.96419 14.5779 5.53142 10.8076 5.53142 10.8076C5.07622 10.3077 4.30074 10.271 3.80075 10.7262C3.30076 11.1815 3.2644 11.9572 3.71965 12.457Z"
                  fill="url(#paint1_linear_280_912)" />
                <defs>
                  <linearGradient id="paint0_linear_280_912" x1="-8.2694" y1="33.22" x2="30.9335" y2="-5.98365"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#777777" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_280_912" x1="30.9329" y1="-5.98411" x2="-0.000663225" y2="24.9498"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#96E1AA" />
                    <stop offset="1" stop-color="#0095D9" />
                  </linearGradient>
                </defs>              </svg>
              <p>オンラインだから<span>全国どこでも面談OK</span></p>
            </div>
            <div className="checked-item">
              <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.0335 2.28613H1.2251C0.5485 2.28613 0 2.83463 0 3.51103V23.725C0 24.4018 0.5485 24.9501 1.2251 24.9501H21.4392C22.1158 24.9501 22.6643 24.4018 22.6643 23.725V12.932C22.6643 12.2562 22.1153 11.7069 21.4392 11.7069C20.763 11.7069 20.2141 12.2562 20.2141 12.932V22.4999H2.45019C2.45019 22.4999 2.45019 8.9372 2.45019 4.73612H19.0335C19.7096 4.73612 20.2586 4.18728 20.2586 3.51103C20.2586 2.83507 19.7096 2.28613 19.0335 2.28613Z"
                  fill="url(#paint0_linear_280_912)" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.71965 12.457L9.69812 19.0235C9.92653 19.2744 10.2488 19.4195 10.588 19.4239C10.9273 19.4283 11.2532 19.2916 11.4881 19.0466L27.4176 2.4402C27.8856 1.95213 27.8694 1.17596 27.3815 0.707925C26.8935 0.239891 26.1174 0.256015 25.6493 0.743993L10.6273 16.4048C8.96419 14.5779 5.53142 10.8076 5.53142 10.8076C5.07622 10.3077 4.30074 10.271 3.80075 10.7262C3.30076 11.1815 3.2644 11.9572 3.71965 12.457Z"
                  fill="url(#paint1_linear_280_912)" />
                <defs>
                  <linearGradient id="paint0_linear_280_912" x1="-8.2694" y1="33.22" x2="30.9335" y2="-5.98365"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#777777" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_280_912" x1="30.9329" y1="-5.98411" x2="-0.000663225" y2="24.9498"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#96E1AA" />
                    <stop offset="1" stop-color="#0095D9" />
                  </linearGradient>
                </defs>              </svg>
              <p>相談だけでもOK</p>
            </div>
            <div className="checked-item">
              <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.0335 2.28613H1.2251C0.5485 2.28613 0 2.83463 0 3.51103V23.725C0 24.4018 0.5485 24.9501 1.2251 24.9501H21.4392C22.1158 24.9501 22.6643 24.4018 22.6643 23.725V12.932C22.6643 12.2562 22.1153 11.7069 21.4392 11.7069C20.763 11.7069 20.2141 12.2562 20.2141 12.932V22.4999H2.45019C2.45019 22.4999 2.45019 8.9372 2.45019 4.73612H19.0335C19.7096 4.73612 20.2586 4.18728 20.2586 3.51103C20.2586 2.83507 19.7096 2.28613 19.0335 2.28613Z"
                  fill="url(#paint0_linear_280_912)" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.71965 12.457L9.69812 19.0235C9.92653 19.2744 10.2488 19.4195 10.588 19.4239C10.9273 19.4283 11.2532 19.2916 11.4881 19.0466L27.4176 2.4402C27.8856 1.95213 27.8694 1.17596 27.3815 0.707925C26.8935 0.239891 26.1174 0.256015 25.6493 0.743993L10.6273 16.4048C8.96419 14.5779 5.53142 10.8076 5.53142 10.8076C5.07622 10.3077 4.30074 10.271 3.80075 10.7262C3.30076 11.1815 3.2644 11.9572 3.71965 12.457Z"
                  fill="url(#paint1_linear_280_912)" />
                <defs>
                  <linearGradient id="paint0_linear_280_912" x1="-8.2694" y1="33.22" x2="30.9335" y2="-5.98365"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#777777" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_280_912" x1="30.9329" y1="-5.98411" x2="-0.000663225" y2="24.9498"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#96E1AA" />
                    <stop offset="1" stop-color="#0095D9" />
                  </linearGradient>
                </defs>              </svg>
              <p>職種・経験問わず<span>求人を探せます</span></p>
            </div>
          </div>
        </div>
        <img src={data.img1.publicURL} alt="footer img" className="footer-desk" />
      </div>
      <img src={data.img2.publicURL} alt="" className="footer-mob" />
    </div>
  );
};

export default Footer;
