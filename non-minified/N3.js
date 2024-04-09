const N3 = [
    { kanji: "明かり", hiragana: "あかり", english: "light; illumination; glow; gleam" },
    { kanji: "明ける", hiragana: "あける", english: "to dawn,to become daylight" },
    { kanji: "明らか", hiragana: "あきらか", english: "clear; obvious" },
    { kanji: "悪魔", hiragana: "あくま", english: "devil; demon; fiend; Satan" },
    { kanji: "暗記", hiragana: "あんき", english: "memorization; learning by heart" },
    { kanji: "新た", hiragana: "あらた", english: "new; fresh; novel" },
    { kanji: "有らゆる", hiragana: "あらゆる", english: "all; every​" },
    { kanji: "集まり", hiragana: "あつまり", english: "gathering; meeting; assembly; collection; attendance" },
    { kanji: "部分", hiragana: "ぶぶん", english: "portion; section; part" },
    { kanji: "分", hiragana: "ぶん", english: "part; segment; share; ration" },
    { kanji: "文明", hiragana: "ぶんめい", english: "civilization; culture" },
    { kanji: "分析", hiragana: "ぶんせき", english: "analysis" },
    { kanji: "分野", hiragana: "ぶんや", english: "field; sphere; realm; division; branch" },
    { kanji: "父親", hiragana: "ちちおや", english: "father" },
    { kanji: "地平線", hiragana: "ちへいせん", english: "horizon (related to land)​" },
    { kanji: "地位", hiragana: "ちい", english: "(social) position; status" },
    { kanji: "長期", hiragana: "ちょうき", english: "long-term" },
    { kanji: "中", hiragana: "ちゅう", english: "during; while; medium; middle" },
    { kanji: "中学", hiragana: "ちゅうがく", english: "junior high school; middle school" },
    { kanji: "昼食", hiragana: "ちゅうしょく", english: "lunch; midday meal" },
    { kanji: "大部分", hiragana: "だいぶぶん", english: "most part; greater part; majority" },
    { kanji: "駄目", hiragana: "だめ", english: "no good; cannot" },
    { kanji: "男子", hiragana: "だんし", english: "youth; young man" },
    { kanji: "出会い", hiragana: "であい", english: "meeting; rendezvous; encounter" },
    { kanji: "出会う", hiragana: "であう", english: "to meet (by chance); to come across; to run across; to encounter" },
    { kanji: "読書", hiragana: "どくしょ", english: "reading" },
    { kanji: "努力", hiragana: "どりょく", english: "effort; exertion; endeavor; hard work; striving" },
    { kanji: "同一", hiragana: "どういつ", english: "identical; same; one and the same; equal" },
    { kanji: "円", hiragana: "えん", english: "yen; Japanese monetary unit; circle" },
    { kanji: "不利", hiragana: "ふり", english: "disadvantage; handicap; unfavorable position" },
    { kanji: "不足", hiragana: "ふそく", english: "insufficiency; shortage; deficiency; lack; dearth" },
    { kanji: "再び", hiragana: "ふたたび", english: "again; once more; a second time" },
    { kanji: "外交", hiragana: "がいこう", english: "diplomacy" },
    { kanji: "外出", hiragana: "がいしゅつ", english: "going out; outing; leaving (one's home, office, etc.)" },
    { kanji: "学期", hiragana: "がっき", english: "school term; semester" },
    { kanji: "学", hiragana: "がく", english: "learning; education; study of" },
    { kanji: "学問", hiragana: "がくもん", english: "scholarship; study; learning" },
    { kanji: "学者", hiragana: "がくしゃ", english: "scholar" },
    { kanji: "学習", hiragana: "がくしゅう", english: "study; learning; tutorial" },
    { kanji: "議長", hiragana: "ぎちょう", english: "chairman; president; moderator" },
    { kanji: "議会", hiragana: "ぎかい", english: "congress; parliament; diet; legislative assembly" },
    { kanji: "語学", hiragana: "ごがく", english: "study of foreign languages; linguistics" },
    { kanji: "激しい", hiragana: "はげしい", english: "violent; extreme; intense" },
    { kanji: "母親", hiragana: "ははおや", english: "mother" },
    { kanji: "博物館", hiragana: "はくぶつかん", english: "museum" },
    { kanji: "販売", hiragana: "はんばい", english: "sales; selling; marketing" },
    { kanji: "発明", hiragana: "はつめい", english: "invention" },
    { kanji: "外す", hiragana: "はずす", english: "to remove; to undo; to drop; to miss" },
    { kanji: "品", hiragana: "ひん", english: "elegance, article" },
    { kanji: "一言", hiragana: "ひとこと", english: "single word; a few words; brief comment" },
    { kanji: "一人一人", hiragana: "ひとりひとり", english: "one by one; each; one at a time" },
    { kanji: "本物", hiragana: "ほんもの", english: "genuine article; real thing; real deal​" },
    { kanji: "本人", hiragana: "ほんにん", english: "the person in question; the person themselves; said person" },
    { kanji: "一致", hiragana: "いっち", english: "agreement; union; match​; coincidence" },
    { kanji: "一時", hiragana: "いちじ", english: "one o'clock" },
    { kanji: "意外", hiragana: "いがい", english: "unexpected; surprising" },
    { kanji: "一家", hiragana: "いっか", english: "a family; a household; a home; one's family; whole family" },
    { kanji: "今に", hiragana: "いまに", english: "before long; even now" },
    { kanji: "今にも", hiragana: "いまにも", english: "at any moment; at any minute; on the verge of" },
    { kanji: "一般", hiragana: "いっぱん", english: "general; universal; ordinary; average; common" },
    { kanji: "一方", hiragana: "いっぽう", english: "one (esp. of two); one way; the other direction; although" },
    { kanji: "一生", hiragana: "いっしょう", english: "whole life; a lifetime; a generation" },
    { kanji: "一種", hiragana: "いっしゅ", english: "species; kind; variety" },
    { kanji: "一瞬", hiragana: "いっしゅん", english: "instant; moment; for an instant" },
    { kanji: "一層", hiragana: "いっそう", english: "much more; still more; all the more; single layer; sooner; preferably​" },
    { kanji: "一体", hiragana: "いったい", english: "(what) the heck; (why) in the world" },
    { kanji: "所謂", hiragana: "いわゆる", english: "what is called; as it is called; the so-called; so to speak​" },
    { kanji: "邪魔", hiragana: "じゃま", english: "hindrance" },
    { kanji: "化学", hiragana: "かがく", english: "chemistry" },
    { kanji: "会", hiragana: "かい", english: "meeting; assembly; party; association; club" },
    { kanji: "会員", hiragana: "'かいいん", english: "member" },
    { kanji: "海外", hiragana: "かいがい", english: "foreign; abroad; overseas" },
    { kanji: "会合", hiragana: "かいごう", english: "meeting; assembly; gathering; association" },
    { kanji: "会計", hiragana: "かいけい", english: "finance; account; treasurer; bill" },
    { kanji: "開始", hiragana: "かいし", english: "start; commencement; beginning; initiation​" },
    { kanji: "科目", hiragana: "かもく", english: "(school) subject; curriculum; course" },
    { kanji: "権利", hiragana: "けんり", english: "right; privilege" },
    { kanji: "基本", hiragana: "きほん", english: "basics; fundamentals; basis; foundation" },
    { kanji: "記事", hiragana: "きじ", english: "article; news story; report; account" },
    { kanji: "気味", hiragana: "きみ", english: "sensation; feeling​; tendency" },
    { kanji: "記念", hiragana: "きねん", english: "commemoration; celebration; honoring the memory of something" },
    { kanji: "気に入る", hiragana: "きにいる", english: "to like; to take a liking to" },
    { kanji: "記入", hiragana: "きにゅう", english: "entry; filling in; filling out" },
    { kanji: "記憶", hiragana: "きおく", english: "memory; recollection; remembrance" },
    { kanji: "記者", hiragana: "きしゃ", english: "reporter; journalist" },
    { kanji: "期待", hiragana: "きたい", english: "expectation; anticipation; hope" },
    { kanji: "国家", hiragana: "こっか", english: "state; country; nation" },
    { kanji: "国会", hiragana: "こっかい", english: "National Diet; legislative assembly of Japan; parliament; congress" },
    { kanji: "国境", hiragana: "こっきょう", english: "national border" },
    { kanji: "国語", hiragana: "こくご", english: "national language" },
    { kanji: "国民", hiragana: "こくみん", english: "people (of a country); nation; citizen; national" },
    { kanji: "今後", hiragana: "こんご", english: "from now on; hereafter" },
    { kanji: "今回", hiragana: "こんかい", english: "now; this time; lately" },
    { kanji: "今日", hiragana: "こんにち", english: "today; this day" },
    { kanji: "転ぶ", hiragana: "ころぶ", english: "to fall down; to fall over" },
    { kanji: "高速", hiragana: "こうそく", english: "high-speed; rapid; express" },
    { kanji: "訓練", hiragana: "くんれん", english: "training; drill; practice; discipline" },
    { kanji: "教科書", hiragana: "きょうかしょ", english: "textbook; coursebook; schoolbook" },
    { kanji: "協力", hiragana: "きょうりょく", english: "cooperation; collaboration" },
    { kanji: "強力", hiragana: "きょうりょく", english: "powerful; strong" },
    { kanji: "急激", hiragana: "きゅうげき", english: "sudden; abrupt; rapid; sharp; drastic; radical" },
    { kanji: "急に", hiragana: "きゅうに", english: "swiftly; rapidly; quickly; immediately; hastily" },
    { kanji: "吸収", hiragana: "きゅうしゅう", english: "absorption; suction; attraction" },
    { kanji: "急速", hiragana: "きゅうそく", english: "rapid (e.g. progress)" },
    { kanji: "真面目", hiragana: "まじめ", english: "serious; earnest" },
    { kanji: "真っ赤", hiragana: "まっか", english: "bright red; deep red; flushed (of face)" },
    { kanji: "学ぶ", hiragana: "まなぶ", english: "to study (in depth); to learn; to take lessons in" },
    { kanji: "万一", hiragana: "まんいち", english: "emergency; unlikely event​; by some chance; by some possibility" },
    { kanji: "満足", hiragana: "まんぞく", english: "satisfaction; contentment;​ sufficient; enough" },
    { kanji: "明確", hiragana: "めいかく", english: "clear; precise; definite; distinct" },
    { kanji: "飯", hiragana: "めし", english: "cooked rice; meal" },
    { kanji: "味方", hiragana: "みかた", english: "friend; ally; supporter; taking sides with; supporting" },
    { kanji: "魅力", hiragana: "みりょく", english: "charm; fascination; glamour; attraction; appeal" },
    { kanji: "木曜", hiragana: "もくよう", english: "Thursday" },
    { kanji: "半ば", hiragana: "なかば", english: "middle; half; semi; halfway; partly" },
    { kanji: "熱心", hiragana: "ねっしん", english: "enthusiastic; eager" },
    { kanji: "日本", hiragana: "にほん", english: "Japan" },
    { kanji: "能力", hiragana: "のうりょく", english: "ability; faculty" },
    { kanji: "入場", hiragana: "にゅうじょう", english: "entrance; admission; entering" },
    { kanji: "お昼", hiragana: "おひる", english: "lunch; midday; daytime" },
    { kanji: "収める", hiragana: "おさめる", english: "to supply; to dedicate; to make an offering; to pay" },
    { kanji: "連続", hiragana: "れんぞく", english: "continuation; succession; series" },
    { kanji: "利益", hiragana: "りえき", english: "profit; gains; benefit" },
    { kanji: "利口", hiragana: "りこう", english: "clever; intelligent; wise; bright; sharp" },
    { kanji: "留学", hiragana: "りゅうがく", english: "studying abroad" },
    { kanji: "作品", hiragana: "さくひん", english: "work of art; performance" },
    { kanji: "左右", hiragana: "さゆう", english: "left and right" },
    { kanji: "成長", hiragana: "せいちょう", english: "growth; development; growing up; becoming an adult" },
    { kanji: "製品", hiragana: "せいひん", english: "manufactured goods; finished goods; product" },
    { kanji: "青年", hiragana: "せいねん", english: "youth; young man" },
    { kanji: "刺激", hiragana: "しげき", english: "stimulus; impetus; incentive; encouragement; motivation; provocation; excitement; thrill" },
    { kanji: "資本", hiragana: "しほん", english: "funds; capital" },
    { kanji: "品", hiragana: "しな", english: "article; item; thing; goods; stock; quality" },
    { kanji: "身長", hiragana: "しんちょう", english: "body height; stature" },
    { kanji: "進学", hiragana: "しんがく", english: "entering a higher-level school (often university)" },
    { kanji: "新鮮", hiragana: "しんせん", english: "fresh" },
    { kanji: "支店", hiragana: "してん", english: "branch office; branch store​" },
    { kanji: "使用", hiragana: "しよう", english: "use; application; employment; utilization." },
    { kanji: "食品", hiragana: "しょくひん", english: "food; food products" },
    { kanji: "書物", hiragana: "しょもつ", english: "book; volume" },
    { kanji: "書類", hiragana: "しょるい", english: "document; official papers" },
    { kanji: "書斎", hiragana: "しょさい", english: "study; library; den; home office; reading room" },
    { kanji: "商売", hiragana: "しょうばい", english: "trade; business; commerce; transaction; occupation" },
    { kanji: "奨学金", hiragana: "しょうがくきん", english: "scholarship; stipend; student loan" },
    { kanji: "正午", hiragana: "しょうご", english: "midday" },
    { kanji: "商品", hiragana: "しょうひん", english: "commodity; article of commerce; goods; stock; merchandise" },
    { kanji: "少女", hiragana: "しょうじょ", english: "little girl; maiden; young lady" },
    { kanji: "証明", hiragana: "しょうめい", english: "proof; verification; certification" },
    { kanji: "少年", hiragana: "しょうねん", english: "boy; juvenile; young boy; youth; lad" },
    { kanji: "少々", hiragana: "しょうしょう", english: "just a minute; small quantity" },
    { kanji: "招待", hiragana: "しょうたい", english: "invitation" },
    { kanji: "週", hiragana: "しゅう", english: "week" },
    { kanji: "集中", hiragana: "しゅうちゅう", english: "concentration; focusing; centralization; integration" },
    { kanji: "集団", hiragana: "しゅうだん", english: "group; mass" },
    { kanji: "収穫", hiragana: "しゅうかく", english: "harvest; crop; fruits (of one's labors)" },
    { kanji: "週間", hiragana: "しゅうかん", english: "week" },
    { kanji: "週刊", hiragana: "しゅうかん", english: "weekly publication" },
    { kanji: "収入", hiragana: "しゅうにゅう", english: "income; receipts; revenue; salary" },
    { kanji: "速度", hiragana: "そくど", english: "speed; velocity; pace; rate" },
    { kanji: "少しも", hiragana: "すこしも", english: "anything of; not one bit (with negative sentence)" },
    { kanji: "大半", hiragana: "たいはん", english: "majority; more than half; most; largely; mainly" },
    { kanji: "大会", hiragana: "たいかい", english: "convention; rally; conference; tournament;" },
    { kanji: "大した", hiragana: "たいした", english: "considerable; great; important; significant; a big deal" },
    { kanji: "単なる", hiragana: "たんなる", english: "mere; simple; sheer" },
    { kanji: "多少", hiragana: "たしょう", english: "more or less; somewhat; a little; a few; some" },
    { kanji: "手品", hiragana: "てじな", english: "magic trick; illusion" },
    { kanji: "哲学", hiragana: "てつがく", english: "philosophy" },
    { kanji: "徹夜", hiragana: "てつや", english: "staying up all night" },
    { kanji: "土地", hiragana: "とち", english: "plot of land; lot; soil" },
    { kanji: "都会", hiragana: "とかい", english: "(big) city" },
    { kanji: "取れる", hiragana: "とれる", english: "to come off; to be removed; to be obtainable" },
    { kanji: "取り上げる", hiragana: "とりあげる", english: "to pick up" },
    { kanji: "図書", hiragana: "としょ", english: "books" },
    { kanji: "通学", hiragana: "つうがく", english: "commuting to school; school commute" },
    { kanji: "受け取る", hiragana: "うけとる", english: "to receive; to understand" },
    { kanji: "上手い", hiragana: "うまい", english: "skillful; delicious" },
    { kanji: "運転", hiragana: "うんてん", english: "operation; driving" },
    { kanji: "売れる", hiragana: "うれる", english: "to sell (well)" },
    { kanji: "分ける", hiragana: "わける", english: "to divide; to split; to part; to separate" },
    { kanji: "悪口", hiragana: "わるぐち", english: "slander; bad-mouthing; abuse; insult; speaking ill (of)" },
    { kanji: "夜明け", hiragana: "よあけ", english: "dawn; daybreak" },
    { kanji: "余分", hiragana: "よぶん", english: "extra; excess; surplus" },
    { kanji: "読み", hiragana: "よみ", english: "reading (of a kanji, situation, etc)" },
    { kanji: "夜中", hiragana: "よなか", english: "middle of the night; dead of night" },
    { kanji: "宜しい", hiragana: "よろしい", english: "(respectful) OK; all right" },
    { kanji: "唯一", hiragana: "ゆいいつ", english: "only; sole; unique" },
    { kanji: "輸入", hiragana: "ゆにゅう", english: "import; importation; introduction" },
    { kanji: "輸出", hiragana: "ゆしゅつ", english: "export; exportation​" },
    { kanji: "夕べ", hiragana: "ゆうべ", english: "evening / last night; yesterday evening" },
    { kanji: "有利", hiragana: "ゆうり", english: "advantageous; favorable; profitable" },
    { kanji: "全国", hiragana: "ぜんこく", english: "the whole country" },
    { kanji: "随分", hiragana: "ずいぶん", english: "very; extremely; surprisingly; considerably; awfully" },
];