// detail.js
const params = new URLSearchParams(window.location.search);
const fromParams = params.get('from');
const typeId = params.get('type');
const data = typeData[typeId];

// コンソールにトータルスコア
window.onload = function() {
    // 保存されたデータを取り出す
    const savedData = localStorage.getItem('testScores');

    if (savedData) {
        const scores = JSON.parse(savedData); 
        
        console.log("トータルスコア ");
        console.table(scores);
    }
};

if (fromParams === 'test') {
    // 診断から来たら、グラフのコンテナを表示する
    document.getElementById('graph-container').style.display = 'block';
    
    // ここでグラフを描画する関数を呼び出す
    renderChart();
}

if (data) {
    document.getElementById('type-id').textContent = typeId;
    document.getElementById('type-name').textContent = data.name;
    document.getElementById('type-catchphrase').textContent = data.catchphrase;
    //document.getElementById('type-image').src = data.image;
    document.getElementById('type-workstyle').textContent = data.workStyle;
    


    //長所
    const strengthList = document.getElementById('type-strengths');
    data.strengths.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        strengthList.appendChild(li);
    });
    
    // 短所
    const weaknessList = document.getElementById('type-weaknesses');
    data.weaknesses.forEach(w => {
        const li = document.createElement('li');
        li.textContent = w;
        weaknessList.appendChild(li);
    });

    const suitablejobList = document.getElementById('type-suitablejob');
    data.suitableJob.forEach(j => {
        const li = document.createElement('li');
        li.textContent = j;
        suitablejobList.appendChild(li);
    });
}


//グラフ
function renderChart() {


    const rawScores = {
        L: Number(params.get('L')) || 0,
        F: Number(params.get('F')) || 0,
        C: Number(params.get('C')) || 0,
        S: Number(params.get('S')) || 0,
        O: Number(params.get('O')) || 0,
        H: Number(params.get('H')) || 0,
        E: Number(params.get('E')) || 0,
        I: Number(params.get('I')) || 0
    };

    const commonOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true, min: 0, max: 100, display: false },
            y: { stacked: true, display: false }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) { return `${context.raw}%`; }
                }
            }
        }
    };


    function createSingleBar(canvasId, leftVal, rightVal,
         leftName, rightName, leftKey, rightKey) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const total = leftVal + rightVal || 1;
        const pctLeft = Math.round((leftVal / total) * 100);
        const pctRight = 100 - pctLeft;

        const leftLabelEl = document.getElementById(`label-${leftKey}`);
        const rightLabelEl = document.getElementById(`label-${rightKey}`);

        if (leftLabelEl && rightLabelEl) {
            if (pctLeft >= pctRight) {
                leftLabelEl.innerText = `${leftName}：${pctLeft}%`;
                rightLabelEl.innerText = rightName;
                
                leftLabelEl.style.color = '#00BCD4';
                rightLabelEl.style.color = '#aaaaaa';
                leftLabelEl.style.fontWeight = 'bold';
                rightLabelEl.style.fontWeight = 'normal';

            } else if (pctRight > pctLeft) {
                leftLabelEl.innerText = leftName;
                rightLabelEl.innerText = `${rightName}：${pctRight}%`;
                
                leftLabelEl.style.color = '#aaaaaa';
                rightLabelEl.style.color = '#FFC107';
                leftLabelEl.style.fontWeight = 'normal';
                rightLabelEl.style.fontWeight = 'bold';

            }
        }

        let leftRadius, rightRadius;
        const radiusValue = 20;

        if (pctLeft === 100) {
            leftRadius = radiusValue; 
            rightRadius = 0;
        } else if (pctRight === 100) {
            leftRadius = 0;
            rightRadius = radiusValue;
        } else {
            rightRadius = { topRight: radiusValue, bottomRight: radiusValue, topLeft: 0, bottomLeft: 0 };
            leftRadius = { topLeft: radiusValue, bottomLeft: radiusValue, topRight: 0, bottomRight: 0 };
        }

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [''],
                datasets: [
                    {
                        data: [pctLeft],
                        backgroundColor: '#00BCD4',
                        borderSkipped: false,
                        borderRadius: leftRadius,
                    },
                    {
                        data: [pctRight],
                        backgroundColor: '#FFC107',
                        borderSkipped: false,
                        borderRadius: rightRadius,
                    }
                ]
            },
            options: commonOptions
        });
    }

    // 4本のバーをそれぞれ作成
    createSingleBar('chartLF', rawScores.L, rawScores.F, '先導 (L)', '支援 (F)', 'L', 'F');
    createSingleBar('chartCS', rawScores.C, rawScores.S, '継続 (C)', '瞬発 (S)', 'C', 'S');
    createSingleBar('chartOH', rawScores.O, rawScores.H, '成果 (O)', '調和 (H)', 'O', 'H');
    createSingleBar('chartEI', rawScores.E, rawScores.I, '外的 (E)', '内的 (I)', 'E', 'I');
}



document.addEventListener('DOMContentLoaded', () => {
    const shareXBtn = document.getElementById('btn-share-x');
    const shareLineBtn = document.getElementById('btn-share-line');
    const copyLinkBtn = document.getElementById('btn-copy-link');

    // シェア時に載せるテキストとURLの準備
    let shareText = "#JobType16 #ジョブタイプ診断 \nみんなはどのジョブタイプ？";
    if (data) {
        shareText = `私のジョブタイプは【${typeId}: ${data.name}】！\n「${data.catchphrase}」\nみんなはどのジョブタイプ？`;
    }
    
    // 現在のページのURL
    const shareUrl = window.location.href;

    // 1. X (Twitter) シェア設定
    if (shareXBtn) {
        shareXBtn.addEventListener('click', () => {
            const xUrl = `https://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
            window.open(xUrl, '_blank', 'noreferrer,noopener');
        });
    }

    // 2. LINE シェア設定
    if (shareLineBtn) {
        shareLineBtn.addEventListener('click', () => {
            const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl + '\n' + shareText)}`;
            window.open(lineUrl, '_blank', 'noreferrer,noopener');
        });
    }

    // 3. リンクコピー機能
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(shareUrl).then(() => {
                // コピー成功時の演出
                const originalText = copyLinkBtn.textContent;
                copyLinkBtn.textContent = "URLをコピーしました！";
                copyLinkBtn.style.backgroundColor = "#28a745"; // 一時的に緑色にするなど
                
                // 2秒後に元の状態に戻す
                setTimeout(() => {
                    copyLinkBtn.textContent = originalText;
                    copyLinkBtn.style.backgroundColor = "#6c757d";
                }, 2000);
            }).catch(err => {
                console.error('URLのコピーに失敗しました: ', err);
                alert('URLのコピーに失敗しました。ブラウザのURL欄から直接コピーしてください。');
            });
        });
    }
});