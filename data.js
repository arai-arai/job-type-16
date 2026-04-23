const questions = [
  {
    id: 1,
    text: "仕事をする時は、正確性よりもとにかくスピードを重視している。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 2,
    text: "情に流されて、不公平な判断を下してしまうことがある。",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 3,
    text: "誰かのミスを指摘する際、感情的な配慮よりも「何が間違いか」を優先して伝える。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 4,
    text: "誰かの指示を待つ時間は、自分にとってもどかしく感じる。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 5,
    text: "「責任ある立場」を任されると、プレッシャーよりもモチベーションが上がる。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 6,
    text: "集中力が切れることなく、長時間の作業を一定の質で維持できる。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 7,
    text: "仕事を選ぶ際は、自分の興味よりも、世間体や企業のネームバリューを重視する傾向がある。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 8,
    text: "「あなたに任せれば安心だ」という言葉より「あなたがいてくれて助かった」と言われたい。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 9,
    text: "チームメンバーが困っていたら、自分のタスクを止めてでも助ける。",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 10,
    text: "指示されたからやるのではなく、その仕事が自分にとって「意味がある」と納得できてから動きたい。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 11,
    text: "徹夜や短期決戦よりも、こまめに休息を取りながら長期的に取り組むほうが性に合う。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 12,
    text: "締め切りが迫ると、普段の何倍ものパフォーマンスを発揮できる。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 13,
    text: "物事が停滞しているとき、自分から積極的に動く。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 14,
    text: "需要があるかどうかに関わらず、自分が純粋に面白いと感じるテーマや技術を突き詰めたい。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 15,
    text: "自分の名前が世に出ることよりも、自分が納得のいくものを世に残すこと自体に価値を感じる。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 16,
    text: "自分が表に立つよりも、優れたリーダーの右腕として動くほうが力を発揮できる。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 17,
    text: "毎日同じペースで作業を続けることが、自分にとって最も効率が良い。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 18,
    text: "チームがバラバラな時、自分が中心となって一つにまとめることが得意だ。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 19,
    text: "一人で成功するより、みんなで協力して一つのことを成し遂げた瞬間に、最もやりがいを感じる",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 20,
    text: "たとえ周囲の評価が低くても、自分が「これは正しい」と信じるやり方を最後まで貫きたい。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 21,
    text: "組織の目標を達成することよりも、その過程で自分の美学やポリシーを守ることの方が大切だ。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 22,
    text: "人から勧められた道を進むより、たとえ困難であっても自分の内側から湧き出る目的意識に従いたい。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 23,
    text: "安定した環境で長く働き続けることに、何よりの価値を感じる",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 24,
    text: "組織の中で「求められている役割」を完璧にこなすことに、強い達成感を感じる。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 25,
    text: "自分の価値観に合わない仕事であれば、どんなに高い報酬を提示されても魅力を感じない。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 26,
    text: "リーダーが正しい判断を下せるよう、情報や成果物を提供することによってリーダーをサポートしたい。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 27,
    text: "チームを引っ張っていくよりも、自分の専門性を高め実務に活かすことこそが、チームへの最大の貢献だと思う。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 28,
    text: "飲み会や雑談も、チームの連携を深めるための重要な仕事だと思う。",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 29,
    text: "自分のやりたいことよりも、今社会や市場で「価値がある」とされるスキルを優先的に身につけたい。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 30,
    text: "仕事の内容が毎日変わる環境は、自分にとってストレスになる。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 31,
    text: "計画通りの運用よりも、予測できないトラブルへの対応に自信がある。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 32,
    text: "締め切り直前に焦ってやるタイプだ。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 33,
    text: "チームの関係を良好にすることは結果的に目標を達成することにつながるため、重要だ。",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 34,
    text: "チームの雰囲気が悪くても、アウトプットの質が高ければ許容できる。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 35,
    text: "「自分にしかわからない価値」よりも、多くの人が「すごい」と認める仕事に関わりたい。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 36,
    text: "自分が順調なキャリアを歩んでいるか気になり、友人や同僚と比較してしまう。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 37,
    text: "何年も同じスキルを磨き続けることは退屈だ。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 38,
    text: "仕事を一度始めたら、途中で投げ出さず最後までやり遂げる持続力がある。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 39,
    text: "何をすべきか自分でゼロから決めるより、明確な目標や期待を与えられる方が迷いなく動ける。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 40,
    text: "仕事の指示を出すときは、論理的な裏付けを必ずセットにする。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 41,
    text: "毎日決まったルーティンワークをこなすことに苦痛を感じる。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 42,
    text: "誰かに褒められることよりも、昨日の自分より成長したと自分で確信できることの方が重要だ。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 43,
    text: "正論であっても、相手の感情を逆なでするような言い方は避ける",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 44,
    text: "自分の成果を、年収、役職、資格といった「目に見える形」で証明し、評価されたい。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 45,
    text: "目標に向かってチームを引っ張っていくよりも、実務という形で目標達成に貢献したい。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 46,
    text: "自分の成果を「積み上げグラフ」のように視覚化されるとモチベーションが上がる。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 47,
    text: "「コツコツ」積み上げるよりも、「短期集中」で一気に片付けるほうが得意だ",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 48,
    text: "たとえ合理的なメリットがあったとしても、組織のルールや慣習を守ることが第一だ。",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 49,
    text: "周囲の期待に応えるためなら、自分のこだわりを柔軟に変えることができる。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 50,
    text: "データに基づく客観的な結論を信じるよりも、チーム全員が納得できるまで議論したい。",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 51,
    text: "重要なことを決める際、最終的な判断は自分にまかせてほしい",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 52,
    text: "一発逆転の成果を狙うより、ミスなく安定した成果を出し続けたい。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 53,
    text: "結局のところ、仕事は「何を成し遂げたか」がすべてである。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 54,
    text: "周囲から「仕事ができる人」と思われるより「相談しやすい人」と思われたい。",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 55,
    text: "目に見える結果がすぐにでないと、モチベーションを維持するのが難しい。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 56,
    text: "流行の技術を追いかけるよりも、自分が本質的だと感じる技術を深く学びたい。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 57,
    text: "自分一人ですべての責任を背負うよりも、各分野のプロと協力しながら自分の持ち場を全うしたい。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 58,
    text: "プロジェクトの方向性を左右するような、重要な決断を下すことはなるべく避けたい。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 59,
    text: "自分の自由な裁量よりも、組織の一員としての役割を全うしたい。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 60,
    text: "変化の激しい現場より、手順が確立された現場で着実に力を出したい。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 61,
    text: "自分の意見がチームの決定に反映されていないと感じると、仕事への意欲がそがれるほうだ。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 62,
    text: "「自分がやらなければ」という当事者意識が人一倍強いほうだ。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 63,
    text: "戦略を立てるよりも、決まった方針を具体的なタスクや形に落とし込んでいくほうが得意だ。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 64,
    text: "チームで動く際、誰かの決断を待つよりも、自分が方針を提案して納得させた上で進めたい。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 65,
    text: "誰も見ていないところで努力するより、努力の結果を誰かに正当に評価してほしい。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 66,
    text: "仕事上の付き合いとプライベートの付き合いは明確に分けたい。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 67,
    text: "周囲が慌てていても、自分は自分のペースを崩さずにいたい。",
    leftLabel: "C",  
    rightLabel: "S"  
  },
  {
    id: 68,
    text: "多少の衝突があっても、より効率的なやり方を優先して主張する。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 69,
    text: "他者から褒められたり感謝されたりすることが、次の仕事への最大のエネルギーになる。",
    leftLabel: "E",  
    rightLabel: "I"  
  },
  {
    id: 70,
    text: "マニュアルを読み込み、手順通りに物事を進めるのは苦痛だ。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 71,
    text: "会議での決定事項は、全員の同意よりも「合理性」で決めるべきだと思う。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 72,
    text: "自分がトップに立って采配をふるよりも、信頼できるリーダーの計画を成功させるための「鍵」として動きたい。",
    leftLabel: "F",  
    rightLabel: "L"  
  },
  {
    id: 73,
    text: "メンバーの反対があったとしても、目標達成のために最も合理的で成果が出る方法を貫くべきだ。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 74,
    text: "夏休みの宿題は最終日近くになってから一気に終わらせていた。",
    leftLabel: "S",  
    rightLabel: "C"  
  },
  {
    id: 75,
    text: "実務的な作業よりも全体の戦略を練る方が得意だ。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
  {
    id: 76,
    text: "優れた技術や知識を持っている人なら、多少性格が合わなくても尊敬できる。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 77,
    text: "仕事のクオリティについて、他人の合格点ではなく、自分の中の「合格点」に達しているかが気になる。",
    leftLabel: "I",  
    rightLabel: "E"  
  },
  {
    id: 78,
    text: "仕事の評価は、その人の頑張りよりも数値や成果などの結果で判断すべきだ。",
    leftLabel: "O",  
    rightLabel: "H"  
  },
  {
    id: 79,
    text: "仕事において、進捗の遅れよりも人間関係の悩みのほうが気になる。",
    leftLabel: "H",  
    rightLabel: "O"  
  },
  {
    id: 80,
    text: "会議では聞き役に回るより、進行や司会を務めるほうが効率が良い。",
    leftLabel: "L",  
    rightLabel: "F"  
  },
]


// data.js
const typeData = {
    "LCOE": {
        name: "不屈の統治者",
        catchphrase: "計画通りに組織を成功へ導く、王道のリーダー。",
        image: "images/lcoe.png",
        strengths: ["高い完遂能力", "模範的な責任感", "数値目標への強さ"],
        weaknesses: ["変化への抵抗", "他者への厳しさ", "形式への固執"],
        workStyle: "5年、10年先のロードマップを描き、ルールを整備しながら着実に組織を拡大させる。"
    },
    "LCOI": {
        name: "信念の設計者",
        catchphrase: "自分の理想を実現するために、着実に仕組みを作る。",
        image: "images/fshi.png",
        strengths: ["独自のビジョン", "一貫した哲学", "自律的な推進力"],
        weaknesses: ["周囲の無理解", "融通の利かなさ", "孤立のしやすさ"],
        workStyle: "自分の「理想のプロダクト」や「理想のチーム」を形にするため、一歩ずつこだわり抜いて構築する"
    },
    "LCHE": {
        name: "慈愛の指導者",
        catchphrase: "内面から支える、誠実な職人力",
        image: "images/fshi.png",
        strengths: ["心理的安全性の構築", "調和のとれた意思決定", "育成能力"],
        weaknesses: ["非効率な対話", "厳しい決断の回避", "八方美人的な振る舞い"],
        workStyle: "全員の納得感を丁寧に醸成し、誰一人取り残さないスタイルでチームの士気を最大化させる。"
    },
    "LCHI": {
        name: "共感の教育者",
        catchphrase: "内面から支える、誠実な職人力",
        image: "images/fshi.png",
        strengths: ["深い洞察力", "価値観の共有", "長期的な信頼関係"],
        weaknesses: ["感情に左右される判断", "組織目標の軽視", "内向的な独善"],
        workStyle: "組織の数字よりも「働く人の意味」や「教育」に重きを置き、文化的な基盤をじっくり育てる"
    },
    "LSOE": {
        name: "勝利の戦略家",
        catchphrase: "変化を楽しみ、圧倒的スピードで成果を掴み取る。",
        image: "images/fshi.png",
        strengths: ["圧倒的な勝負勘", "効率の追求", "大胆なリスクテイク"],
        weaknesses: ["プロセスの軽視", "短期的な視点", "飽きっぽさ"],
        workStyle: "競合の多い市場や新規事業で、最短ルートでの勝利（No.1）を目指して周囲を猛烈に牽引する。"
    },
    "LSOI": {
        name: "独創の開拓者",
        catchphrase: "既存の枠に囚われず、自らの手で道を切り拓く。",
        image: "images/fshi.png",
        strengths: ["ゼロイチの創造力", "高い専門性", "現状打破のエネルギー"],
        weaknesses: ["協力者への配慮不足", "ルーチンの拒絶", "過度な自信"],
        workStyle: "誰もやったことがない技術領域や未踏の市場に、自らの技術と感性を武器に切り込んでいく。"
    },
    "LSHE": {
        name: "熱狂の演出家",
        catchphrase: "周囲を巻き込み、盛り上げながらゴールへ突き進む。",
        image: "images/fshi.png",
        strengths: ["高いカリスマ性", "周囲の巻き込み力", "ポジティブな影響力"],
        weaknesses: ["根拠の薄さ", "詳細な管理の欠如", "注目への過度な依存"],
        workStyle: "チームの「祭りの中心」として熱狂を生み出し、メンバーをワクワクさせながら一気にゴールへ導く。"
    },
    "LSHI": {
        name: "救世の変革者",
        catchphrase: "現場の危機に現れ、熱い意志で停滞を打破する",
        image: "images/fshi.png",
        strengths: ["逆境での強さ", "純粋な正義感", "直感的な問題解決"],
        weaknesses: ["組織秩序の破壊", "計画性の欠如", "周囲を振り回す衝動性"],
        workStyle: "停滞した現場やトラブルの渦中に飛び込み、熱い言葉と行動で「当たり前」をぶち壊して再生させる。"
    },
    "FCOE": {
        name: "鉄壁の守護者",
        catchphrase: "社会的な信頼を背負い、堅実にインフラを守り抜く。",
        image: "images/fshi.png",
        strengths: ["抜群の安定感", "精度の高い実務", "対外的な信頼性"],
        weaknesses: ["保守的すぎる思考", "前例主義", "自己主張の弱さ"],
        workStyle: "社会的なインフラや基盤を、決められた手順と高い技術で一寸の狂いもなく維持し続ける。"
    },
    "FCOI": {
        name: "深淵の探求者",
        catchphrase: "誰にも邪魔されず、技術や知識の深みを追求する。",
        image: "images/fshi.png",
        strengths: ["圧倒的な専門知識", "高い集中力", "誠実な仕事ぶり"],
        weaknesses: ["コミュニケーション不足", "視野の狭窄", "完璧主義による遅延"],
        workStyle: "自分の担当領域において、世界で誰よりも詳しい「職人」を目指し、静かな環境で質を極め続ける。"
    },
    "FCHE": {
        name: "献身の調停者",
        catchphrase: "潤滑油のように周囲を支え、組織を円滑に回す。",
        image: "images/fshi.png",
        strengths: ["優れた調整能力", "周囲への配慮", "円滑なサポート"],
        weaknesses: ["自己犠牲のしすぎ", "板挟みでの疲弊", "優柔不断"],
        workStyle: "組織の「潤滑油」として各所の意見を調整し、全員が気持ちよく働ける環境を影から支え続ける。"
    },
    "FCHI": {
        name: "至高の職人",
        catchphrase: "自分の納得感を大切に、丁寧な手仕事で貢献する。",
        image: "images/fshi.png",
        strengths: ["丁寧な仕事", "独自の美学", "嘘のない誠実さ"],
        weaknesses: ["採算の度外視", "流行への無関心", "指示への強い反発"],
        workStyle: "自分の価値観に合う仕事に対し、時間や手間を惜しまず「納得のいく最高の一品」を追求し続ける。"
    },
    "FSOE": {
        name: "俊敏な請負人",
        catchphrase: "求められた課題に対し、最短ルートで解決策を出す。",
        image: "images/fshi.png",
        strengths: ["効率的な問題解決", "柔軟な適応力", "実利的な貢献"],
        weaknesses: ["本質的な改善の軽視", "安請け合い", "器用貧乏"],
        workStyle: "次々と発生する課題に対し、持てるスキルを総動員して「最短・最速」で片付けていく。"
    },
    "FSOI": {
        name: "技巧の解決師",
        catchphrase: "独自の感性と技術で、難解なトラブルを鮮やかに解く。",
        image: "images/fshi.png",
        strengths: ["直感的な閃き", "説明の不足", "ルーチンへの不誠実"],
        weaknesses: ["変化への抵抗", "他者への厳しさ", "他者への厳しさ"],
        workStyle: "誰にも解けない難解なバグやトラブルに遭遇した際、鮮やかなハック（工夫）で周囲を驚かせる。"
    },
    "FSHE": {
        name: "共感の表現者",
        catchphrase: "相手の想いを汲み取り、形にすることに喜びを感じる。",
        image: "images/fshi.png",
        strengths: ["ユーザーへの深い共感", "柔軟な発想", "親しみやすさ"],
        weaknesses: ["論理性の欠如", "周囲の目への敏感さ", "一貫性のなさ"],
        workStyle: "相手が「何を求めているか」を即座に察知し、デザインや気遣いを通じて、期待以上の満足感を提供する。"
    },
    "FSHI": {
        name: "内なる開花者",
        catchphrase: "自分の価値観を大切にしながら、そっと誰かを支える",
        image: "images/fshi.png",
        strengths: ["繊細な感性", "独自の貢献", "嘘のない支援"],
        weaknesses: ["極端な内向性", "ストレス耐性の低さ", "自己評価の低さ"],
        workStyle: "大人数の中では静かだが、信頼するパートナーの隣で、自分の感性を生かした細やかなサポートを行う。"
    }
};