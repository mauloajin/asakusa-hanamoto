const links = {
  official: 'https://hanamoto1964.base.shop/p/00001',
  reserve: 'https://tabelog.com/tokyo/A1311/A131102/13092435/',
  menu: 'https://tabelog.com/tokyo/A1311/A131102/13092435/dtlmenu/',
  map: 'https://www.google.com/maps/search/?api=1&query=%E6%B5%85%E8%8D%89%E8%8A%B1%E6%9C%AC%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%B5%85%E8%8D%892-7-14',
  instagram: 'https://www.instagram.com/asakusa.hanamoto/',
  yahooMap: 'https://map.yahoo.co.jp/v3/place/KXd0eSoGYAU',
};

const siteUrl = 'https://asakusa-hanamoto.vercel.app/';
const officialName = '浅草 花本';
const address = '〒111-0032 東京都台東区浅草2-7-14';
const phone = '03-5811-1726';

const facts = [
  ['正式店名', officialName],
  ['業態', '居酒屋・もつ鍋・海鮮'],
  ['住所', address],
  ['電話番号', phone],
  ['営業時間', '月・水・木・金 17:00～23:00／土 15:00～23:00／日・祝日 14:00～23:00'],
  ['定休日', '火曜日（祝日の場合は翌平日）'],
  ['アクセス', 'つくばエクスプレス 浅草駅 A1-1出口から徒歩約3分'],
  ['予約', '電話または食べログから予約可'],
  ['席数', '38席（カウンター、座敷、個室、テラス）'],
  ['個室', '4名・6名で利用可能'],
  ['貸切', '20～50名で相談可能'],
  ['駐車場', '専用駐車場なし（近隣にコインパーキングあり）'],
  ['支払い', 'クレジットカード、電子マネー、QRコード決済に対応'],
];

const menuCards = [
  {
    number: '壱',
    title: 'もつ鍋',
    lead: '自家製の出汁で味わう、花本を代表する鍋料理。',
    details: '醤油もつ鍋・辛味噌もつ鍋 各1,800円。2人前から。ちゃんぽん麺、ご飯などの〆や追加具材も用意されています。',
  },
  {
    number: '弐',
    title: '三崎直送まぐろ',
    lead: '刺身から揚げ物まで、部位と食感を生かした一品料理。',
    details: 'まぐろぶつ、刺身2種盛り、まぐろカツ、まぐろカマの煮付け・ステーキ、ピーマンのまぐろつくね焼きなど。',
  },
  {
    number: '参',
    title: '湘南しらす',
    lead: '酒肴にも食事にも合わせやすい、湘南しらすの料理。',
    details: 'しらすおろし、しらすと大葉のごま和え、しらすと大葉のピッツァなどが案内されています。',
  },
];

const faqs = [
  ['浅草 花本はどこにありますか？', '東京都台東区浅草2-7-14、浅草寺と花やしきに近い初音小路飲食店街にあります。'],
  ['最寄り駅からどのくらいですか？', 'つくばエクスプレス浅草駅のA1-1出口から徒歩約3分です。'],
  ['営業時間と定休日は？', '月・水・木・金は17:00～23:00、土曜は15:00～23:00、日曜・祝日は14:00～23:00です。火曜定休で、火曜が祝日の場合は翌平日が休みです。臨時変更は公式Instagramでご確認ください。'],
  ['予約はできますか？', `電話（${phone}）または食べログから予約できます。混雑時は2時間制と案内されています。`],
  ['どのような料理がありますか？', 'もつ鍋、三崎直送まぐろ、湘南しらすを使った料理を中心に、居酒屋の一品料理や酒類が案内されています。'],
  ['もつ鍋は何人前から注文できますか？', '醤油もつ鍋と辛味噌もつ鍋があり、いずれも2人前から注文できます。'],
  ['個室はありますか？', '4名または6名で利用できる個室が案内されています。予約時に空席をご確認ください。'],
  ['支払い方法は？', 'VISA、Master、JCB、AMEX、Dinersのカード、各種電子マネー、PayPayなどのQRコード決済が案内されています。'],
  ['駐車場はありますか？', '専用駐車場はありません。近隣のコインパーキングをご利用ください。'],
  ['Where is Asakusa Hanamoto?', 'It is at 2-7-14 Asakusa, Taito City, Tokyo, in Hatsune Koji near Senso-ji Temple and Asakusa Hanayashiki.'],
  ['How do I get there from Asakusa Station?', 'From Tsukuba Express Asakusa Station, use Exit A1-1. The restaurant is about a three-minute walk away.'],
  ['How can I make a reservation?', `Reserve through Tabelog or call ${phone}.`],
  ['What kind of food does Hanamoto serve?', 'Hanamoto is an izakaya serving motsunabe hot pot, tuna delivered from Misaki, Shonan shirasu dishes, and Japanese pub dishes.'],
];

const areasJp = ['初音小路','浅草2丁目','浅草','奥浅草','浅草寺','花やしき','ホッピー通り','西浅草','田原町','雷門','仲見世','台東区','上野','隅田川','東京都'];
const intentsJp = ['居酒屋','もつ鍋','海鮮料理','まぐろ料理','しらす料理','夕食','飲み会','宴会','個室','テラス席','予約','電話予約','営業時間','アクセス','駅近'];
const jpKeywords = [
  '浅草 花本','浅草花本','花本 浅草','花本 初音小路','花本 居酒屋','花本 もつ鍋','花本 まぐろ','花本 海鮮','花本 予約','花本 電話番号','花本 営業時間','花本 定休日','花本 住所','花本 アクセス','花本 メニュー','花本 食べログ','花本 Instagram','花本 Googleマップ','浅草駅 花本','Hanamoto Asakusa',
  ...areasJp.flatMap((area) => intentsJp.map((intent) => `${area} ${intent}`)),
].slice(0, 220);

const areasEn = ['Hatsune Koji','Asakusa 2-chome','Asakusa','Sensoji Temple','Asakusa Hanayashiki','Hoppy Street','Nishi Asakusa','Tawaramachi','Kaminarimon','Nakamise','Taito City','Ueno','Sumida River','east Tokyo','Tokyo'];
const intentsEn = ['izakaya','motsunabe restaurant','Japanese hot pot','seafood restaurant','tuna dishes','shirasu dishes','Japanese dinner','local dining','group dining','private room','terrace seating','restaurant reservation','opening hours','directions','restaurant near station'];
const enKeywords = [
  'Asakusa Hanamoto','Hanamoto Asakusa','Hanamoto izakaya','Hanamoto Tokyo','Hanamoto reservation','Hanamoto phone number','Hanamoto opening hours','Hanamoto address','Hanamoto directions','Hanamoto menu','Hanamoto motsunabe','Hanamoto tuna','Hanamoto seafood','Hanamoto Instagram','Hanamoto Tabelog','Hanamoto Google Maps','Asakusa izakaya reservation','motsunabe near Asakusa Station','seafood near Sensoji Temple','Japanese pub in Hatsune Koji',
  ...areasEn.flatMap((area) => intentsEn.map((intent) => `${intent} ${area}`)),
].slice(0, 220);

const restaurantLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${siteUrl}#restaurant`,
  name: officialName,
  alternateName: ['浅草花本', '花本', 'Hanamoto Asakusa'],
  description: '東京都台東区浅草の初音小路飲食店街にある、もつ鍋、三崎直送まぐろ、湘南しらす料理を提供する居酒屋。',
  url: siteUrl,
  telephone: phone,
  priceRange: '¥¥',
  servesCuisine: ['居酒屋料理', 'もつ鍋', '海鮮', 'Japanese', 'Motsunabe', 'Seafood'],
  address: {
    '@type': 'PostalAddress',
    postalCode: '111-0032',
    addressRegion: '東京都',
    addressLocality: '台東区',
    streetAddress: '浅草2-7-14',
    addressCountry: 'JP',
  },
  hasMap: links.map,
  acceptsReservations: links.reserve,
  sameAs: [links.official, links.instagram, links.reserve, links.yahooMap],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday'], opens: '17:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '15:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '14:00', closes: '23:00' },
  ],
  paymentAccepted: 'Cash, VISA, Master, JCB, AMEX, Diners, electronic money, QR code payment',
  seatingCapacity: 38,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

function External({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="浅草 花本 トップへ">
          <span>ASAKUSA</span>花本
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#story">花本について</a>
          <a href="#menu">料理</a>
          <a href="#info">店舗情報</a>
          <a href="#access">アクセス</a>
          <a href="#english">English</a>
        </nav>
        <External className="headerReserve" href={links.reserve}>予約する</External>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroLantern" aria-hidden="true">
            <span>浅草</span>
            <strong>花本</strong>
            <i>初音小路</i>
          </div>
          <div className="heroCopy">
            <p className="eyebrow">IZAKAYA · HATSUNE KOJI · ASAKUSA</p>
            <h1><small>浅草</small>花本</h1>
            <p className="roman">ASAKUSA HANAMOTO</p>
            <h2>路地の灯りと、<br />湯気の立つもつ鍋。</h2>
            <p>浅草寺と花やしきのほど近く、昭和の面影を残す初音小路飲食店街。浅草 花本は、もつ鍋と三崎直送まぐろ、湘南しらすを味わえる居酒屋です。</p>
            <div className="heroActions">
              <External className="button primary" href={links.reserve}>空席・予約</External>
              <a className="button secondary" href="tel:0358111726">03-5811-1726</a>
            </div>
          </div>
          <aside className="heroFacts" aria-label="営業案内">
            <div><span>月・水・木・金</span><strong>17:00–23:00</strong></div>
            <div><span>土</span><strong>15:00–23:00</strong></div>
            <div><span>日・祝日</span><strong>14:00–23:00</strong></div>
            <div><span>定休日</span><strong>火曜日</strong></div>
          </aside>
        </section>

        <section className="story" id="story">
          <div className="sectionIndex"><span>01</span>ABOUT HANAMOTO</div>
          <div className="storyHeading">
            <p className="vertical">浅草・初音小路</p>
            <h2>昭和の面影が残る<br />小路で、暖簾を守る。</h2>
          </div>
          <div className="storyText">
            <p>浅草 花本が店を構えるのは、ホッピー通りの先、浅草寺と花やしきから近い初音小路飲食店街。1964年から続く店として案内され、2020年10月から三代目が味を受け継いでいます。</p>
            <p>看板料理は、自家製の出汁で仕立てるもつ鍋。三崎直送のまぐろや湘南しらすの料理、居酒屋の酒肴とともに、浅草の路地ならではの時間を楽しめます。</p>
            <div className="tags"><span>もつ鍋</span><span>三崎直送まぐろ</span><span>湘南しらす</span><span>初音小路</span></div>
          </div>
        </section>

        <section className="menu" id="menu">
          <div className="sectionIndex light"><span>02</span>FOOD &amp; DRINK</div>
          <div className="menuIntro">
            <p>花本の料理</p>
            <h2>鍋を囲み、<br />海のものを肴に。</h2>
            <p>季節や仕入れにより内容・価格が変わる場合があります。最新メニューは予約ページでご確認ください。</p>
          </div>
          <div className="menuGrid">
            {menuCards.map((item) => (
              <article key={item.title}>
                <span className="menuNumber">{item.number}</span>
                <h3>{item.title}</h3>
                <p className="menuLead">{item.lead}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
          <div className="courseStrip">
            <div><span>予約限定</span><strong>もつ鍋＋飲み放題セット</strong><p>2名から25名。予約ページで最新料金と内容をご確認ください。</p></div>
            <div><span>酒</span><strong>日本酒・焼酎・ワイン</strong><p>料理に合わせた日本酒、焼酎、ワイン、カクテルなど。</p></div>
            <External href={links.menu}>現在のメニューを見る</External>
          </div>
        </section>

        <section className="info" id="info">
          <div className="sectionIndex"><span>03</span>INFORMATION</div>
          <div className="sectionTitle"><p>店舗基本情報</p><h2>浅草 花本</h2><span>ASAKUSA HANAMOTO</span></div>
          <dl className="facts">
            {facts.map(([key, value]) => (
              <div key={key}><dt>{key}</dt><dd>{key === '電話番号' ? <a href="tel:0358111726">{value}</a> : value}</dd></div>
            ))}
          </dl>
          <p className="notice">営業時間・営業日は臨時に変更される場合があります。来店前に公式Instagramまたは予約ページで最新情報をご確認ください。</p>
          <div className="sourceLinks">
            <External href={links.official}>公式案内</External>
            <External href={links.instagram}>Instagram</External>
            <External href={links.reserve}>食べログ・予約</External>
            <External href={links.yahooMap}>Yahoo!マップ</External>
          </div>
        </section>

        <section className="access" id="access">
          <div className="accessCopy">
            <div className="sectionIndex"><span>04</span>ACCESS</div>
            <h2>浅草駅から、<br />初音小路へ。</h2>
            <address>〒111-0032<br />東京都台東区浅草2-7-14</address>
            <p>つくばエクスプレス「浅草駅」A1-1出口から徒歩約3分。浅草寺・花やしき・ホッピー通りからも歩いてアクセスできます。</p>
            <External className="button dark" href={links.map}>Google Mapsで開く</External>
          </div>
          <div className="mapArt" aria-label="浅草 花本周辺の案内図">
            <span className="mapLabel temple">浅草寺</span>
            <span className="mapLabel park">花やしき</span>
            <span className="mapLabel street">ホッピー通り</span>
            <span className="mapLabel station">TX 浅草駅<br />A1-1出口</span>
            <div className="lane laneOne" />
            <div className="lane laneTwo" />
            <div className="mapPin"><small>初音小路</small><strong>花本</strong></div>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="sectionIndex"><span>05</span>FAQ</div>
          <h2>よくあるご質問</h2>
          <div className="faqList">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="english" id="english" lang="en">
          <div className="sectionIndex light"><span>06</span>ENGLISH GUIDE</div>
          <div className="englishGrid">
            <div>
              <p className="enKicker">ASAKUSA · TOKYO</p>
              <h2>Asakusa<br />Hanamoto</h2>
              <p className="enLead">Motsunabe, tuna and izakaya dishes in the historic lanes of Asakusa.</p>
              <p>Asakusa Hanamoto is an izakaya in Hatsune Koji, close to Senso-ji Temple, Asakusa Hanayashiki and Hoppy Street. The restaurant serves motsunabe hot pot, tuna delivered from Misaki, Shonan shirasu dishes and Japanese pub food.</p>
              <p>Reservations are available by phone or through Tabelog. No claim is made here about an English menu or English-speaking staff; please contact the restaurant directly if language assistance is needed.</p>
            </div>
            <dl>
              <div><dt>TYPE</dt><dd>Izakaya, motsunabe hot pot and seafood</dd></div>
              <div><dt>ADDRESS</dt><dd>2-7-14 Asakusa, Taito City,<br />Tokyo 111-0032, Japan</dd></div>
              <div><dt>HOURS</dt><dd>Mon, Wed–Fri 17:00–23:00<br />Sat 15:00–23:00<br />Sun &amp; public holidays 14:00–23:00</dd></div>
              <div><dt>CLOSED</dt><dd>Tuesday; if Tuesday is a public holiday, the following weekday</dd></div>
              <div><dt>ACCESS</dt><dd>About 3 minutes from Exit A1-1 of Tsukuba Express Asakusa Station</dd></div>
              <div><dt>RESERVATIONS</dt><dd><External href={links.reserve}>Book through Tabelog</External><br />Call <a href="tel:0358111726">{phone}</a></dd></div>
              <div><dt>MAP</dt><dd><External href={links.map}>Open Google Maps</External></dd></div>
            </dl>
          </div>
        </section>

        <section className="keywords">
          <div className="sectionIndex"><span>07</span>SEARCH GUIDE</div>
          <h2>店舗・料理・周辺エリアの検索案内</h2>
          <p>浅草 花本を店名、初音小路、浅草駅、もつ鍋、まぐろ、予約やアクセスから探す際の関連語です。</p>
          <details>
            <summary>日本語の関連検索語（{jpKeywords.length}語）</summary>
            <p>{jpKeywords.join(' ／ ')}</p>
          </details>
          <details>
            <summary>English search terms ({enKeywords.length} terms)</summary>
            <p lang="en">{enKeywords.join(' · ')}</p>
          </details>
        </section>

        <section className="closing">
          <p>RESERVATION</p>
          <h2>湯気の向こうに、<br />浅草の夜。</h2>
          <div className="heroActions centered">
            <External className="button primary" href={links.reserve}>空席・予約</External>
            <a className="button secondary lightBorder" href="tel:0358111726">03-5811-1726</a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footerBrand" href="#top"><span>ASAKUSA</span>花本</a>
        <p>〒111-0032 東京都台東区浅草2-7-14<br /><a href="tel:0358111726">03-5811-1726</a></p>
        <p>ASAKUSA HANAMOTO<br />HATSUNE KOJI · TOKYO</p>
      </footer>
    </>
  );
}
