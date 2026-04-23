// detail.js
const params = new URLSearchParams(window.location.search);
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
}