// 4つの軸の要素
const axis1 = ['L', 'F']; // Lead / Follow
const axis2 = ['C', 'S']; // Constant / Spurt
const axis3 = ['O', 'H']; // Outcome / Harmony
const axis4 = ['E', 'I']; // External / Internal

// 全16タイプを生成
const allTypes = [];
for (let a of axis1) {
    for (let b of axis2) {
        for (let c of axis3) {
            for (let d of axis4) {
                allTypes.push(a + b + c + d);
            }
        }
    }
}

//各タイプのキャッチコピーを定義
const typeNames = {
    "LCOE": "不屈の統治者",
    "LCOI": "信念の設計者",
    "LSOE": "勝利の戦略家",
    "LSOI": "独創の開拓者",
    "LCHE": "慈愛の指導者",
    "LCHI": "共感の教育者",
    "LSHE": "熱狂の演出家",
    "LSHI": "救世の変革者",
    "FCOE": "鉄壁の守護者",
    "FCOI": "深淵の探求者",
    "FSOE": "俊敏な請負人",
    "FSOI": "技巧の解決師",
    "FCHE": "献身の調停者",
    "FCHI": "至高の職人",
    "FSHE": "共感の表現者",
    "FSHI": "内なる開花者",
    
};

// 画面にカードを表示する処理
const grid = document.getElementById('type-grid');

allTypes.forEach(type => {
    const card = document.createElement('div');
    card.className = 'type-card';
    
    // キャッチコピーを取得（もし未定義ならデフォルト値を出す）
    const nickname = typeNames[type] || "分析中のジョブタイプ";
    
    card.innerHTML = `
        <h3 class="type-id">${type}</h3>
        <p class="type-nickname">${nickname}</p>
    `;
    
    card.onclick = () => {
        // detail.htmlに「どのタイプか」という情報を付けて飛ばす
        window.location.href = `detail.html?type=${type}`;
    };
    
    grid.appendChild(card);
});