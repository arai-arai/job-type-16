// 基本設定とデータ管理
const questionsPerPage = 10;
let currentStep = 0;

// 各指標の累計スコア
let totalScores = { 
    L: 0, F: 0, // 役割：Lead / Follow
    C: 0, S: 0, // リズム：Constant / Spurt
    O: 0, H: 0, // 基準：Outcome / Harmony
    E: 0, I: 0  // 動機：External / Internal
};

// ユーザーの全回答を保存する配列
let userAnswers = new Array(questions.length).fill(null);

// HTML要素の取得
const questionPage  = document.getElementById('questions-page');
const progress  = document.getElementById('progress-bar');
const progressTxt  = document.getElementById('progress-txt');
const prevBtn       = document.getElementById('prev-btn');
const nextBtn       = document.getElementById('next-btn');
const resultArea    = document.getElementById('result-area');


//ページ（10問セット）を表示する関数
function showPage() {
    //画面の書き換え
    questionPage.innerHTML = '';
    const start = currentStep * questionsPerPage;
    const end   = Math.min(start + questionsPerPage, questions.length);
    const pageQuestions = questions.slice(start, end);
    const questionOrder = [24, 44, 6, 47, 30, 50, 36, 41, 52, 7, 
        17, 48, 35, 40, 54, 55, 31, 21, 11, 43, 
        51, 8, 28, 14, 29, 22, 23, 5, 42, 38, 
        53, 37, 18, 39, 1, 26, 25, 33, 10, 12, 
        13, 15, 9, 45, 27, 34, 49, 19, 4, 56, 
        16, 46, 3, 2, 20, 32, ];

    // 進捗表示の更新
    progressTxt.textContent = `進捗: ${start} / ${questions.length}`;
    progress.value = start;
    progress.max = questions.length;


    // 質問とボタンの生成
    pageQuestions.forEach((q, index) => {
        const globalIndex = start + index;
        const block = document.createElement('div');
        block.className = 'question-block';
        
        block.innerHTML = `
            <p class="question-text">${globalIndex + 1}. ${q.text}</p>
            <div class="label-container">
                <span class="label agree">同意する</span>
                <span class="label disagree">同意しない</span>
            </div>
            <div class="button-group" data-qindex="${globalIndex}">
                <button class="btn size-xl color-green"  data-score="3"></button>
                <button class="btn size-l  color-green"  data-score="2"></button>
                <button class="btn size-m  color-green"  data-score="1"></button>
                <button class="btn size-s  color-gray"   data-score="0"></button>
                <button class="btn size-m  color-purple" data-score="-1"></button>
                <button class="btn size-l  color-purple" data-score="-2"></button>
                <button class="btn size-xl color-purple" data-score="-3"></button>
            </div>
        `;

        // 戻ってきた時に以前の回答を復元
        if (userAnswers[globalIndex] !== null) {
            const score = userAnswers[globalIndex];
            const btn = block.querySelector(`[data-score="${score}"]`);
            if (btn) btn.classList.add('active');
        }

        questionPage.appendChild(block);
    });

    // 戻るボタンの制御
    if (currentStep === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }

    // 次へボタンの制御
    nextBtn.style.display = 'inline-block';
    
    if (end >= questions.length) {
        nextBtn.textContent = '結果を見る';
    } else {
        nextBtn.textContent = '次のページへ';
    }

}//showPage



//ボタンクリック時の処理（回答の記録）
questionPage.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        const group = e.target.parentElement;
        const qIndex = parseInt(group.getAttribute('data-qindex'));
        const score = parseInt(e.target.getAttribute('data-score'));

        // 回答を配列に保存
        userAnswers[qIndex] = score;

        // 見た目の更新
        group.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
    }
});

//次へボタン
nextBtn.addEventListener('click', () => {
    // 現在のページに表示されている「質問グループ」をすべて取得
    const questionGroups = document.querySelectorAll('.button-group');
    let firstUnansweredGroup = null;

    // 各グループに「active」クラスを持つボタンがあるかチェック
    questionGroups.forEach(group => {
        const hasActive = group.querySelector('.btn.active');
        
        if (!hasActive) {
            // まだ未回答の場所が見つかっていない場合、ここを「最初の未回答」とする
            if (!firstUnansweredGroup) {
                firstUnansweredGroup = group;
            }
            // 未回答のグループを強調（任意）
            group.style.background = "rgba(255, 241, 118, 0.2)"; 
            group.style.borderRadius = "10px";
        } else {
            group.style.background = "none";
        }
    });

    // 未回答があればそこまでスクロール
    if (firstUnansweredGroup) {
        // 最初の未回答要素までスムーズにスクロール
        // 固定ヘッダーの高さ
        const headerHeight = 80; 
        const elementPosition = firstUnansweredGroup.getBoundingClientRect().top + window.pageYOffset;
        //200pxの余裕
        const scrollPosition = elementPosition - headerHeight - 200; 

        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth" 
        });

        return; // 次のページへ進ませない
    }

    // 全回答済みの場合
    const start = currentStep * questionsPerPage;
    if (start + questionsPerPage < questions.length) {
        currentStep++;
        showPage();
        window.scrollTo(0, 0);
    } else {
        goToDetailPage();
    }
});

//戻った時の処理
prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        showPage();
        window.scrollTo(0, 0);
    }
});



// script.js 内のタイプ判定後の処理
function goToDetailPage() {
    // 診断スコアからタイプを算出する
    totalScores = { L: 0, F: 0, C: 0, S: 0, O: 0, H: 0, E: 0, I: 0 };
    userAnswers.forEach((score, index) => {
        if (score === null) return;
        const q = questions[index];
        if (score > 0) totalScores[q.leftLabel] += Math.abs(score);
        else if (score < 0) totalScores[q.rightLabel] += Math.abs(score);
    });
    // タイプの判定
    const type = [
        totalScores.L >= totalScores.F ? "L" : "F",
        totalScores.C >= totalScores.S ? "C" : "S",
        totalScores.O >= totalScores.H ? "O" : "H",
        totalScores.E >= totalScores.I ? "E" : "I"
    ].join('');

    console.table(totalScores);

    localStorage.setItem('testScores', JSON.stringify(totalScores));

    //  detail.html にパラメータを付けて移動する
    window.location.href = `detail.html?type=${type}`;
    
}//goToDetailPage


// 初期実行
showPage();