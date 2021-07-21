const list = document.querySelector('.list');
const placeholder = document.querySelector('.input label');
const input = document.querySelector('#input');

input.addEventListener('keyup', find);

const color_list = [
    ['fd6e6a', 'ffc600'],
    ['fd6585', '0d25b9'],
    ['65fdf0', '1d6fa3'],
    ['6b73ff', '000dff'],
    ['ff7af5', '513162'],
    ['f0ff00', '58cffb'],
    ['ffe985', 'fa742b'],
    ['ffa6b7', 'b3315f'],
    ['72edf2', '5151e5'],
    ['ff9d6c', 'bb4e75'],
    ['f6d242', 'ff52e5'],
    ['69ff97', '00e4ff'],
    ['3b2667', 'bc78ec'],
    ['70f570', '49c628'],
    ['3c8ce7', '00eaff'],
    ['fab2ff', '1904e5'],
    ['81ffef', 'f067b4'],
    ['ffa8a8', 'fcff00'],
    ['18a5a7', 'bfffc7'],
    ['18a5a7', 'b6c0c5'],
    ['112d60', 'b6c0c5'],
    ['112d60', 'dd83e0'],
    ['fdabdd', '374a5a'],
    ['05999e', 'cbe7e3'],
    ['eecc51', '203c58'],
    ['ffe998', '57370d'],
    ['353a5f', '9ebaf3'],
    ['ff3e9d', '0e1f40'],
    ['ef88bb', '291850'],
    ['ffb330', 'fffcce'],
    ['d06814', 'ffcdb2'],
    ['e90000', 'faa6ff'],
    ['e21c34', '500b2b'],
    ['ccffaa', '1e5b53'],
    ['652410', 'fac697'],
    ['515719', '968b55'],
    ['af6480', 'c3cee5'],
    ['9fa5d5', 'e8f5c8'],
    ['eef3d2', 'fc8884'],
    ['eebd89', 'd13abd'],
    ['9600ff', 'aebaf8'],
    ['f6ea41', 'f048c6'],
    ['bb73e0', 'ff8ddb'],
    ['0ccda3', 'c1fcd3'],
    ['c973ff', 'aebaf8'],
    ['f9957f', 'f2f5d0'],
    ['b60f46', 'd592ff'],
    ['a3c9e2', '9618f7'],
    ['ff0078', 'f6efa7'],
    ['849b5c', 'efffc7'],
    ['e5aac3', '9a52c7'],
    ['e65758', '771d32'],
    ['ef33b1', 'f6e6bc'],
    ['c22ed0', '5ffae0'],
    ['9fa5d5', 'e8f5c8'],
    ['0c7bb3', 'f2bae8'],
    ['58126a', 'f6b2e1'],
    ['e3ff73', 'e27c39'],
    ['07a3b2', 'd9ecc7'],
    ['dafea4', 'f254a8'],
    ['ccfbff', 'ef96c5'],
    ['50d5b7', '067d68'],
    ['a96f44', 'f2ecb6'],
    ['af6480', 'c3cee5'],
    ['ed765e', 'e3bde5'],
    ['ead6ee', 'a0f1ea'],
    ['7dc387', 'dbe9ea'],
    ['f6a09a', '8a1f1d'],
    ['ae8ba1', 'f2ecb6'],
    ['af6480', 'f6b2e1'],
    ['4b086d', 'acc0fe'],
    ['7e2423', 'e3bde5'],
    ['eae5c9', '6cc6cb'],
    ['a96f44', 'f6b2e1'],
    ['ed765e', 'fea858'],
    ['b51f1a', 'f98ef6'],
    ['ff4b2b', 'ff416b'],
    ['abcdef', 'c0ffee'],
    ['c0ffee', 'fedcba'],
    ['021118', '020305']
];

for(let i = 0; i < color_list.length; i++){
    addNew(color_list[i][0], color_list[i][1]);
}

animatePlaceholder();

function addNew(color_1, color_2){
    const li = document.createElement('li');

    li.classList.add('item');

    li.innerHTML = `
        <div class="color-details">
            <div class="color" style="background: #${color_1}"><span>#${color_1}</span></div>
            <div class="color" style="background: #${color_2}"><span>#${color_2}</span></div>
        </div>
        <div class="color-gradient" style="background: linear-gradient(to right, #${color_1}, #${color_2})"></div>
    `;

    list.appendChild(li);
}

function animatePlaceholder(){
    placeholder.innerHTML = placeholder.innerText.split('')
    .map((el, i) => `<span style="transition-delay: ${i*50}ms">${el}</span>`).join('');
}

function find(e){
    const text = e.currentTarget.value.toString().trim();
    const items = document.querySelectorAll('.item');
    var spans;
    var check;
    items.forEach(item => {
        spans = [...item.querySelectorAll('.color span')];
        check = spans.filter(span => span.innerText.indexOf(text) > -1).length;
        if(check > 0)
            item.style.display = 'flex';
        else 
            item.style.display = 'none';
    });
}