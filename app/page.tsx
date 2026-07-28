const curriculum = [
  ["01", "五大線上課程", "一年內不限次數複習，把觀念與流程真正練熟。"],
  ["02", "兩天一夜線下特訓", "台中實體密集練習，外縣市只需要安排一次行程。"],
  ["03", "一對一線上驗收", "拍攝實作影片交作業，由老師逐項回饋調整。"],
  ["04", "接客話術逐字稿", "從介紹、報價到界線管理，照著說就能開始。"],
  ["05", "定價與療程模板", "單次怎麼收、療程怎麼組，直接套用到現有服務。"],
  ["06", "完整認證證書", "完成課程與驗收，取得專業學習證明。"],
  ["07", "90 天課後問答", "實際接客遇到問題，還有人陪你一起拆解。"],
];

const bonuses = [
  ["第一位客人啟動包", "解決「學完卻不知道怎麼開始找第一位客人」"],
  ["女師傅安全 SOP", "把接待、界線與安全流程先做好，接男客更安心"],
  ["給家人看的說明頁", "讓家人知道你學的是一套專業、正規的服務"],
];

const testimonials = [
  {
    label: "學員見證 01",
    image: "testimonial-xiaoqin.png",
    imageAlt: "學員小芹正在練習按摩操作",
    prompt: "",
    quote: "成為三寶媽後，我一度覺得自己只剩下媽媽與妻子的身分。從零基礎開始，第六堂課已經學會運用身體發力，能完成 90 分鐘油壓流程。現在能替家人、老公和公公按摩，不只找回自己的價值，也讓我和老公的感情變得更甜蜜、笑容更多了。",
    meta: "小芹・三寶媽／零基礎學員",
  },
  {
    label: "學員見證 02",
    image: "",
    imageAlt: "",
    prompt: "放 LINE 對話／回饋截圖",
    quote: "建議選一則能證明「安全感與接客信心」的真實回饋，讓準學員看到課程不只有技術，也處理實務問題。",
    meta: "學員姓名・上課梯次",
  },
  {
    label: "學員見證 03",
    image: "",
    imageAlt: "",
    prompt: "放完課證書／服務現場照",
    quote: "建議放一則具體轉變：上課前卡在哪裡、上課後做到了什麼。內容越具體，見證越有說服力。",
    meta: "學員姓名・所在城市",
  },
];

const faqs = [
  ["完全沒做過按摩，也可以報名嗎？", "這門課專為已經在服務客人的按摩師傅設計；若你尚未有按摩基礎，這期不建議報名。"],
  ["外縣市需要常常跑台中嗎？", "不用。線下特訓集中在兩天一夜完成，外縣市學員只需要安排一次行程，其餘在線上學習與驗收。"],
  ["學完一定能賺多少錢嗎？", "課程不承諾收入數字。我們保證的是依進度練習、完成驗收後，能安全且完整地做出服務流程。"],
  ["如果跟不上或還做不完整呢？", "符合練習與交件條件，90 天內仍無法完成流程，可免費再參加一次線下課，問答時間也會延長。"],
  ["可以分期嗎？", "完整認證課程最高可分 36 期，讓你不必一次付清全部學費。"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="回到頁首">
          <span className="brand-mark">悠</span>
          <span>悠妮瓏｜泰式男仕核心保養</span>
        </a>
        <a className="nav-cta" href="#apply">立即報名</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">專為已有按摩經驗的師傅設計</p>
          <h1>多一個客人願意付<br /><em>2,500 元以上</em>的新項目</h1>
          <p className="hero-lead">
            兩個月內，把泰式男仕核心保養學成一套能介紹、能定價、能安全服務的完整流程。
            不是只多學一個手法，而是多一個可以真正落地的新收入項目。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#apply">看看是否適合我 <span>↗</span></a>
            <a className="text-link" href="#program">先看完整課程</a>
          </div>
          <div className="hero-proof">
            <span>小班 4 人</span><i />
            <span>台中實體特訓</span><i />
            <span>最高可分 36 期</span>
          </div>
        </div>

        <aside className="hero-card" aria-label="課程成果摘要">
          <div className="card-top">
            <span>完整認證課程</span>
            <span className="live-dot">現正招生</span>
          </div>
          <div className="outcome-visual">
            <div className="ring ring-one" />
            <div className="ring ring-two" />
            <div className="outcome-center">
              <small>單次服務定價</small>
              <strong>NT$ 2,500<sup>+</sup></strong>
              <span>從技術到接客，一次學完整</span>
            </div>
          </div>
          <div className="card-bottom">
            <div><strong>2 個月</strong><span>建立完整流程</span></div>
            <div><strong>7＋3</strong><span>課程與加碼工具</span></div>
          </div>
        </aside>
      </section>

      <section className="statement">
        <p className="section-index">01 — 你真正買到的結果</p>
        <h2>不是「再學一個手法」<br />而是讓技術變成一項<em>能被購買的服務</em></h2>
        <div className="statement-grid">
          <div className="statement-item"><span>01</span><h3>客人聽得懂</h3><p>知道這項服務能帶來什麼，不再需要講一大串艱深名詞。</p></div>
          <div className="statement-item"><span>02</span><h3>家人說得出口</h3><p>專業、正規、有界線，讓你能放心跟身邊的人說明。</p></div>
          <div className="statement-item"><span>03</span><h3>自己做得安全</h3><p>從接待到操作都有清楚 SOP，女師傅接男客也更安心。</p></div>
        </div>
      </section>

      <section className="fit">
        <div>
          <p className="section-index light">02 — 這門課只為一種人設計</p>
          <h2>你已經有技術，<br />現在缺的是一套<em>能落地的做法</em></h2>
        </div>
        <div className="fit-list">
          <div><span>✓</span><p>你已經在幫客人按摩，有實際服務經驗</p></div>
          <div><span>✓</span><p>你想增加泰式男仕核心保養項目，拉高客單價</p></div>
          <div><span>✓</span><p>你希望有人把安全、話術、定價一次教清楚</p></div>
          <div className="not-fit"><span>×</span><p>如果你完全沒有按摩基礎，這門課暫時不適合你</p></div>
        </div>
      </section>

      <section className="program" id="program">
        <div className="section-head">
          <div><p className="section-index">03 — 完整學習系統</p><h2>七個環節，<br />把新項目真正做出來</h2></div>
          <p>每一項都在解決師傅真正會遇到的困難。沒有為了看起來豐富而堆內容，只有從學會到接客所需要的完整路徑。</p>
        </div>
        <div className="curriculum">
          {curriculum.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b>＋</b>
            </article>
          ))}
        </div>
      </section>

      <section className="bonus">
        <div className="bonus-intro">
          <p className="section-index light">04 — 三個加碼工具</p>
          <h2>不是湊贈品，<br />是幫你跨過<em>最難的第一步</em></h2>
          <p>你真正擔心的不是課夠不夠多，而是學完能不能開始、會不會危險、家人能不能理解。</p>
        </div>
        <div className="bonus-list">
          {bonuses.map(([title, copy], index) => (
            <div key={title}><small>加碼 0{index + 1}</small><h3>{title}</h3><p>{copy}</p></div>
          ))}
        </div>
      </section>

      <section className="guarantee">
        <div className="guarantee-seal">學會<br />保證</div>
        <div>
          <p className="section-index">05 — 我們只保證能負責的事</p>
          <h2>照進度練習、完成驗收，<br />還是做不出完整流程？</h2>
          <p>符合條件並於 90 天內提出，可免費再參加一次線下課，課後問答時間同步延長。</p>
          <small>＊本課程保證學習成果，不承諾個人收入；實際成果依練習、執行與市場狀況而異。</small>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonial-head">
          <div>
            <p className="section-index">06 — 真實學員怎麼說</p>
            <h2>成果不用我們說，<br />讓走過的人告訴你</h2>
          </div>
          <p>從零基礎開始，也能一步一步練出完整服務流程。更多學員照片與真實回饋將持續補上。</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(({ label, image, imageAlt, prompt, quote, meta }) => (
            <article className="testimonial-card" key={label}>
              {image ? (
                <div className="testimonial-media testimonial-photo">
                  <img src={image} alt={imageAlt} />
                </div>
              ) : (
                <div className="testimonial-media">
                  <span>＋</span>
                  <p>{prompt}</p>
                  <small>建議圖片比例 4:3</small>
                </div>
              )}
              <div className="testimonial-copy">
                <small>{label}</small>
                <blockquote>「{quote}」</blockquote>
                <p>{meta}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="testimonial-note">＊學員見證 02、03 目前為版位示意文字，取得照片與評語後即可替換。</p>
      </section>

      <section className="pricing" id="apply">
        <div className="price-copy">
          <p className="section-index light">07 — 小班完整認證方案</p>
          <h2>一個班只收 4 位，<br />因為每個動作都要<em>親自看、親自調</em></h2>
          <p>名額不是行銷話術。老師需要逐一矯正、逐一確認，收多了就無法維持教學品質。</p>
          <ul>
            <li>完整認證課程一次學會</li>
            <li>刷卡、轉帳皆可</li>
            <li>最高可分 36 期</li>
            <li>小班 4 人逐一指導</li>
          </ul>
        </div>
        <div className="price-card">
          <div className="price-tag">悠妮瓏｜泰式男仕核心保養</div>
          <p>腹部養護・泰式拉筋・核心循環・卡賽進階</p>
          <div className="price"><small>完整方案</small><strong><sup>NT$</sup>58,800</strong></div>
          <div className="included"><span>7 大課程系統</span><span>3 個加碼工具</span><span>完課認證</span><span>90 天問答</span></div>
          <a className="button inverse" href="#contact">立即報名完整課程 <span>↗</span></a>
          <small className="note">本頁僅販售完整認證課程；可刷卡、轉帳，最高可分 36 期。</small>
        </div>
      </section>

      <section className="faq">
        <p className="section-index">08 — 報名前常見問題</p>
        <h2>你可能也在想這些</h2>
        <div className="faq-list">
          {faqs.map(([q, a], index) => (
            <details key={q} open={index === 0}>
              <summary><span>{q}</span><b>＋</b></summary><p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div>
          <p className="section-index light">準備好增加下一個服務項目了嗎？</p>
          <h2>直接加入完整認證課程，<br />把新項目真正做起來。</h2>
        </div>
        <div>
          <a className="button white" href="#top">聯絡課程顧問報名 <span>↗</span></a>
          <p>每班 4 位・台中實體特訓・可分期</p>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">悠</span><span>悠妮瓏｜泰式男仕核心保養</span></div>
        <p>悠妮瓏｜泰式男仕核心保養</p>
        <p>© 2026 All rights reserved.</p>
      </footer>
    </main>
  );
}
