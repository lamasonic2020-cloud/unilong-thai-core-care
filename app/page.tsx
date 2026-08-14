"use client";

import { Fragment, useEffect } from "react";

const registrationUrl = "https://lin.ee/yP0iR03";

const navLinks = [
  ["#program", "課程系統"],
  ["#stories", "學員見證"],
  ["#apply", "費用方案"],
  ["#faq", "常見問題"],
];

const heroProof = ["小班 4 人", "台中實體特訓", "最高可分 36 期", "一年課後問答"];

const heroSpecs = [
  ["2 個月", "建立完整流程"],
  ["7＋3", "課程與加碼工具"],
  ["4 人", "單班人數上限"],
  ["36 期", "最高可分期數"],
];

const factBar: [string, string, string?][] = [
  ["完整方案", "NT$58,800"],
  ["學習週期", "2", "個月"],
  ["實體特訓", "台中", "兩天一夜"],
  ["單班名額", "4", "位"],
];

const results = [
  ["01", "客人聽得懂", "知道這項服務能帶來什麼，不再需要講一大串艱深名詞。"],
  ["02", "家人說得出口", "專業、正規、有界線，讓你能放心跟身邊的人說明。"],
  ["03", "自己做得安全", "從接待到操作都有清楚 SOP，女師傅接男客也更安心。"],
];

const fitList: [boolean, string][] = [
  [true, "你已經在幫客人按摩，有實際服務經驗"],
  [true, "你想增加泰式男仕核心保養項目，拉高客單價"],
  [true, "你希望有人把安全、話術、定價一次教清楚"],
  [false, "如果你完全沒有按摩基礎，這門課暫時不適合你"],
];

const curriculum = [
  ["01", "五大線上課程", "一年內不限次數複習，把觀念與流程真正練熟。"],
  ["02", "兩天一夜線下特訓", "台中實體密集練習，外縣市只需要安排一次行程。"],
  ["03", "一對一線上驗收", "拍攝實作影片交作業，由老師逐項回饋調整。"],
  ["04", "接客話術逐字稿", "從介紹、報價到界線管理，照著說就能開始。"],
  ["05", "定價與服務方案模板", "單次怎麼收、服務方案怎麼組，直接套用到現有項目。"],
  ["06", "完整認證證書", "完成課程與驗收，取得專業學習證明。"],
  ["07", "一年課後問答", "實際接客遇到問題，一年內都有人陪你一起拆解。"],
];

const bonuses = [
  ["第一位客人啟動包", "解決「學完卻不知道怎麼開始找第一位客人」"],
  ["女師傅安全 SOP", "把接待、界線與安全流程先做好，接男客更安心"],
  ["給家人看的說明頁", "讓家人知道你學的是一套專業、正規的服務"],
];

const testimonials = [
  {
    label: "店內師傅見證 01",
    image: "testimonial-xiaoqin.png",
    imageAlt: "學員小芹正在練習按摩操作",
    imagePosition: "52% 29%",
    pull: "第二堂課便掌握身體發力",
    quote:
      "成為三寶媽後，小芹多年把生活重心放在家庭，也曾覺得自己只剩下媽媽與妻子的角色。進入店內從零開始培訓，透過老師拆解動作、反覆帶練，第二堂課便掌握身體發力，能完成 90 分鐘油壓流程。如今她已是店內師傅，不只找回自己的專業價值，也能用所學照顧老公與公公，讓家人的關係更親近、生活多了更多笑容。",
    meta: "小芹・悠妮瓏店內師傅／三寶媽",
  },
  {
    label: "學員見證 02",
    image: "testimonial-beginner.jpg",
    imageAlt: "零基礎學員正在練習按摩操作",
    imagePosition: "55% 50%",
    pull: "現在不必只靠手硬撐",
    quote:
      "原本做行政工作，手部幾乎沒有力量，連用拳頭按摩都覺得使不上力。一天服務兩位客人便累到不行，做完一位還得休息一小時，也曾懷疑自己不適合這一行。從零學習完整流程、調整身體發力與操作位置後，現在不必只靠手硬撐，也能輕鬆、準確地放鬆客人，並獨立接案完成服務。",
    meta: "店內師傅・行政轉職／零基礎",
  },
  {
    label: "學員見證 03",
    image: "testimonial-experienced.jpg",
    imageAlt: "擁有四年經驗的按摩師正在進行服務",
    imagePosition: "58% 50%",
    pull: "不再依賴護腕",
    quote:
      "已有四年按摩經驗，卻因店內缺乏進一步培訓，長期只靠手部出力，手腕反覆發炎、工作時必須戴護腕。雖然客人覺得按得不錯，放鬆感卻不夠持久，回訪黏著度也難提升。老師保留她原有的技術，再逐步調整位置與身體發力；熬過重新適應後，她現在能用更省力的方式深入放鬆客人，不再依賴護腕，也讓客人回訪更加穩定。",
    meta: "資深按摩師・四年實務經驗",
  },
  {
    label: "深度學員見證 04",
    image: "https://subtlespace.work/about.jpg",
    imageAlt: "從工程師轉向按摩工作的學員",
    imagePosition: "50% 42%",
    pull: "運用重心轉換，讓力量從身體流動到手上",
    quote:
      "原本是工程師，已有三年的身體覺察與練習經驗，希望離開朝九晚五，發展一份能自主安排時間、也更貼近興趣的工作。過去雖接觸過筋膜理論，但跟方寊老師學習後，才真正建立起完整的按摩流程，也理解按摩不只是手怎麼做，更要運用重心轉換，讓力量從身體流動到手上。老師會依每個人的身體和習慣調整手法；如今實際服務客人時，也能依不同的身體狀況靈活調整，不再只能照著固定流程操作。",
    meta: "課程學員・工程師轉職／三年身體練習經驗",
  },
];

const priceTags = ["7 大課程系統完整學習", "刷卡、轉帳皆可", "最高可分 36 期", "小班 4 人逐一指導"];
const priceIncluded = ["7 大課程系統", "3 個加碼工具", "完課認證", "一年課後問答"];

/** 課程規格一覽；<b> 用來標出決策關鍵字 */
const specSheet: [string, React.ReactNode][] = [
  ["課程名稱", "悠妮瓏｜泰式男仕核心保養（腹部養護・泰式拉筋・核心循環・卡賽進階）"],
  ["適合對象", <>已在服務客人的按摩師傅；<b>尚無按摩基礎者本期不建議報名</b></>],
  ["學習週期", <><b>2 個月</b>建立完整流程</>],
  ["上課方式", <>五大線上課程（一年不限次複習）＋ 台中<b>兩天一夜</b>實體特訓</>],
  ["外縣市安排", <>線下特訓集中於兩天一夜，<b>只需安排一次行程</b></>],
  ["單班名額", <><b>4 位</b>，老師逐一矯正、逐一確認</>],
  ["驗收方式", <>拍攝實作影片交作業，<b>一對一線上驗收</b>逐項回饋</>],
  ["完課證明", <>完成課程與驗收後取得<b>完整認證證書</b></>],
  ["課後支援", <><b>一年課後問答</b>，實際接客遇到問題有人一起拆解</>],
  ["學習保障", <>完成並繳交作業、提交驗收後仍無法獨立完成流程，<b>90 天內可申請免費復訓一次</b></>],
  ["費用與付款", <><b>NT$58,800</b>（完整方案）・刷卡／轉帳皆可・<b>最高可分 36 期</b></>],
];

const faqs = [
  ["完全沒做過按摩，也可以報名嗎？", "這門課專為已經在服務客人的按摩師傅設計；若你尚未有按摩基礎，這期不建議報名。"],
  ["外縣市需要常常跑台中嗎？", "不用。線下特訓集中在兩天一夜完成，外縣市學員只需要安排一次行程，其餘在線上學習與驗收。"],
  ["學完一定能賺多少錢嗎？", "課程不承諾收入數字。我們保證的是依進度練習、完成驗收後，能安全且完整地做出服務流程。"],
  ["如果跟不上或還做不完整呢？", "完成並繳交作業、提交驗收後，若仍無法獨立完成流程，可於 90 天內申請免費復訓一次；課後問答提供一年。"],
  ["可以分期嗎？", "課程最高可分 36 期，讓你不必一次付清全部學費。"],
];

/** 捲動進度條、手機常駐 CTA、區塊進場動畫 */
function usePageChrome() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const cta = document.getElementById("sticky-cta");
    const hero = document.querySelector<HTMLElement>(".hero");
    let ticking = false;

    const paint = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
      const trigger = hero ? hero.offsetHeight * 0.75 : 500;
      cta?.classList.toggle("on", window.scrollY > trigger);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(paint);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    paint();

    const targets = Array.from(document.querySelectorAll(".reveal"));
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          }),
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((el) => io?.observe(el));
    } else {
      targets.forEach((el) => el.classList.add("in"));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);
}

function Cta({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a className={className} href={registrationUrl} target="_blank" rel="noopener noreferrer">
      {children} <span className="arw">↗</span>
    </a>
  );
}

export default function Home() {
  usePageChrome();

  return (
    <>
      <div className="progress">
        <i id="progress-bar" />
      </div>

      <main>
        <nav className="nav">
          <a className="brand" href="#top" aria-label="回到頁首">
            <img className="brand-mark" src="fang-ge-mark.png" alt="方閣技能學苑" />
            <span>悠妮瓏｜泰式男仕核心保養</span>
          </a>
          <div className="nav-right">
            <div className="nav-links">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </div>
            <Cta className="nav-cta">立即報名</Cta>
          </div>
        </nav>

        {/* ===== HERO ===== */}
        <section className="hero" id="top">
          <div className="hero-inner">
            <div>
              <img className="school-logo" src="fang-ge-logo.png" alt="方閣技能學苑 Logo" />
              <p className="eyebrow">專為已有按摩經驗的師傅設計</p>
              <h1>
                多一個客人願意付
                <br />
                <span className="hl">2,500 元以上</span>的新項目
              </h1>
              <p className="hero-lead">
                兩個月內，把泰式男仕核心保養學成一套能介紹、能定價、能安全服務的完整流程。不是只多學一個手法，而是多一個可以真正落地的新收入項目。
              </p>
              <div className="hero-actions">
                <Cta className="btn btn-gold">看看是否適合我</Cta>
                <a className="textlink" href="#program">先看完整課程</a>
              </div>
              <div className="hero-proof">
                {heroProof.map((item, index) => (
                  <Fragment key={item}>
                    {index > 0 && <i />}
                    <span>{item}</span>
                  </Fragment>
                ))}
              </div>
            </div>

            <aside className="spec-card" aria-label="課程成果摘要">
              <div className="spec-top">
                <span>專業培訓課程</span>
                <span className="live">現正招生</span>
              </div>
              <div className="spec-hero">
                <small>單次服務定價</small>
                <strong className="spec-price">
                  <sup>NT$</sup>2,500<em>+</em>
                </strong>
                <span>從技術到接客，一次學完整</span>
              </div>
              <div className="spec-grid">
                {heroSpecs.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ===== 事實列 ===== */}
        <div className="factbar">
          <div className="factbar-inner">
            <dl>
              {factBar.map(([term, value, unit]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>
                    {value}
                    {unit && <span className="u">{unit}</span>}
                  </dd>
                </div>
              ))}
            </dl>
            <a className="go" href="#apply">查看完整方案內容 →</a>
          </div>
        </div>

        {/* ===== 01 你買到的結果 ===== */}
        <section className="band light reveal">
          <div className="wrap">
            <p className="eyebrow">01 — 你真正買到的結果</p>
            <h2 className="title">
              不是「再學一個手法」
              <br />
              而是讓技術變成一項<mark>能被購買的服務</mark>
            </h2>
            <div className="result-grid">
              {results.map(([number, title, copy]) => (
                <div className="result-item" key={number}>
                  <span className="n">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 02 適合誰 ===== */}
        <section className="band dark reveal">
          <div className="fit-inner">
            <div>
              <p className="eyebrow on-dark">02 — 這門課只為一種人設計</p>
              <h2 className="title">
                你已經有技術，
                <br />
                現在缺的是一套<mark>能落地的做法</mark>
              </h2>
            </div>
            <ul className="fit-list">
              {fitList.map(([isFit, copy]) => (
                <li key={copy} className={isFit ? undefined : "no"}>
                  <span className="mk">{isFit ? "✓" : "×"}</span>
                  <p>{copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== 03 課程系統 ===== */}
        <section className="band papered reveal" id="program">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">03 — 完整學習系統</p>
                <h2 className="title">
                  七個環節，
                  <br />
                  把新項目<mark>真正做出來</mark>
                </h2>
              </div>
              <p className="lede">
                每一項都在解決師傅真正會遇到的困難。沒有為了看起來豐富而堆內容，只有從學會到接客所需要的完整路徑。
              </p>
            </div>
            <div className="syllabus">
              {curriculum.map(([number, title, copy]) => (
                <article key={number}>
                  <span className="n">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 04 加碼工具 ===== */}
        <section className="band dark reveal">
          <div className="bonus-inner">
            <div>
              <p className="eyebrow on-dark">04 — 三個加碼工具</p>
              <h2 className="title">
                不是湊贈品，
                <br />
                是幫你跨過<mark>最難的第一步</mark>
              </h2>
              <p className="lede" style={{ marginTop: 26 }}>
                你真正擔心的不是課夠不夠多，而是學完能不能開始、會不會危險、家人能不能理解。
              </p>
            </div>
            <div className="bonus-list">
              {bonuses.map(([title, copy], index) => (
                <div className="bonus-card" key={title}>
                  <span className="ghost">0{index + 1}</span>
                  <small>加碼 0{index + 1}</small>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 05 保證 ===== */}
        <section className="band guarantee reveal">
          <div className="guarantee-inner">
            <div className="seal">
              學會
              <br />
              保證
            </div>
            <div>
              <p className="eyebrow">05 — 我們只保證能負責的事</p>
              <h2 className="title">
                完成作業、提交驗收，
                <br />
                還是做不出完整流程？
              </h2>
              <p className="body">
                完成並繳交作業、提交驗收後，若仍無法獨立完成流程，可於 90 天內申請免費復訓一次。
              </p>
              <small className="fine">
                ＊本課程保證學習成果，不承諾個人收入；實際成果依練習、執行與市場狀況而異。
              </small>
            </div>
          </div>
        </section>

        {/* ===== 06 見證 ===== */}
        <section className="band light reveal" id="stories">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">06 — 真實成長見證</p>
                <h2 className="title">
                  成果不用我們說，
                  <br />
                  讓<mark>走過的人</mark>告訴你
                </h2>
              </div>
              <p className="lede">
                從零基礎建立完整流程，到協助資深師傅調整發力、保護雙手，老師會依每個人的程度拆解問題、逐步帶練。
              </p>
            </div>

            <div className="tm-grid">
              {testimonials.map((item) => (
                <article className="tm-card" key={item.label}>
                  <div className="tm-photo">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      style={{ objectPosition: item.imagePosition }}
                    />
                  </div>
                  <div className="tm-body">
                    <span className="tm-label">{item.label}</span>
                    <p className="tm-pull">{item.pull}</p>
                    <p className="tm-quote">{item.quote}</p>
                    <p className="tm-meta">
                      <span className="dot" />
                      {item.meta}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="tm-note">
              ＊以上為不同學習背景的真實成長紀錄；實際成果仍依個人練習與執行情況而異。
            </p>
          </div>
        </section>

        {/* ===== 07 方案 ===== */}
        <section className="band ink reveal" id="apply">
          <div className="price-inner">
            <div>
              <p className="eyebrow on-dark">07 — 小班完整課程方案</p>
              <h2 className="title">
                一個班只收 4 位，
                <br />
                因為每個動作都要
                <br />
                <mark>親自看、親自調</mark>
              </h2>
              <p className="lede" style={{ marginTop: 26 }}>
                名額不是行銷話術。老師需要逐一矯正、逐一確認，收多了就無法維持教學品質。
              </p>
              <ul className="price-tags">
                {priceTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="price-card">
              <div className="kicker">悠妮瓏｜泰式男仕核心保養</div>
              <p className="sub">腹部養護・泰式拉筋・核心循環・卡賽進階</p>
              <div className="price-row">
                <small>完整方案</small>
                <strong>
                  <sup>NT$</sup>58,800
                </strong>
              </div>
              <div className="price-inc">
                {priceIncluded.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Cta className="btn btn-gold">立即報名完整課程</Cta>
              <small className="price-note">本頁僅販售完整課程；可刷卡、轉帳，最高可分 36 期。</small>
            </div>
          </div>
        </section>

        {/* ===== 08 課程一覽（決策用） ===== */}
        <section className="band papered reveal">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">08 — 一張表看完</p>
                <h2 className="title">
                  報名前，
                  <br />
                  先確認這些<mark>都對得上</mark>
                </h2>
              </div>
              <p className="lede">
                以下是這門課的完整規格。滑到這裡還在猶豫，通常是有一項還沒對上，直接看清楚比較快。
              </p>
            </div>
            <dl className="spec-table">
              {specSheet.map(([term, detail]) => (
                <div className="row" key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ===== 09 FAQ ===== */}
        <section className="band light reveal" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">09 — 報名前常見問題</p>
                <h2 className="title">你可能也在想這些</h2>
              </div>
              <p className="lede">
                還有其他想確認的，直接私訊課程顧問問清楚也可以，我們不會因為你多問而推銷。
              </p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>
                    <span>{question}</span>
                    <span className="pm" />
                  </summary>
                  <p className="ans">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 最終 CTA ===== */}
        <section className="final" id="contact">
          <div className="final-inner">
            <div>
              <p className="eyebrow">準備好增加下一個服務項目了嗎？</p>
              <h2 className="title">
                直接加入完整課程，
                <br />
                把新項目真正做起來。
              </h2>
            </div>
            <div>
              <Cta className="btn btn-paper">聯絡課程顧問報名</Cta>
              <p className="meta">每班 4 位・台中實體特訓・可分期</p>
            </div>
          </div>
        </section>

        <footer>
          <div className="foot-inner">
            <div className="brand">
              <img className="brand-mark" src="fang-ge-mark.png" alt="方閣技能學苑" />
              <span>悠妮瓏｜泰式男仕核心保養</span>
            </div>
            <div className="fnav">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </div>
            <p>© 2026 悠妮瓏. All rights reserved.</p>
          </div>
        </footer>
      </main>

      {/* 手機常駐 CTA */}
      <div className="sticky-cta" id="sticky-cta">
        <div className="info">
          <b>NT$58,800</b>
          <span>完整方案・最高可分 36 期</span>
        </div>
        <Cta className="btn btn-gold">立即報名</Cta>
      </div>
    </>
  );
}
