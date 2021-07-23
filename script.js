const list = document.querySelector('.list');
const placeholder = document.querySelector('.input label');
const placeholder_nav = document.querySelector('.input-nav label');
const input = document.querySelector('#input');
const input_nav = document.querySelector('#input-nav');
const input_deg = document.getElementById('input-deg');
const nav = document.querySelectorAll('.nav');
const nav_open_btn = document.querySelector('.nav-button.open');
const nav_close_btn = document.querySelector('.nav-button.close');
const show_detail_btn = document.getElementById('check-show-detail');
const loading = document.querySelector('.loading');

var show_next = more();
var dragging = true;
var default_rotation = 147;

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
    ['ffafbd', 'ffc3a0'],
    ['2193b0', '6dd5ed'],
    ['cc2b5e', '753a88'],
    ['ee9ca7', 'ffdde1'],
    ['42275a', '734b6d'],
    ['bdc3c7', '2c3e50'],
    ['de6262', 'ffb88c'],
    ['06beb6', '48b1bf'],
    ['eb3349', 'f45c43'],
    ['dd5e89', 'f7bb97'],
    ['56ab2f', 'a8e063'],
    ['614385', '516395'],
    ['eecda3', 'ef629f'],
    ['eacda3', 'd6ae7b'],
    ['02aab0', '00cdac'],
    ['d66d75', 'e29587'],
    ['000428', '004e92'],
    ['ddd6f3', 'faaca8'],
    ['7b4397', 'dc2430'],
    ['43cea2', '185a9d'],
    ['ba5370', 'f4e2d8'],
    ['ff512f', 'dd2476'],
    ['4568dc', 'b06ab3'],
    ['ec6f66', 'f3a183'],
    ['ffd89b', '19547b'],
    ['3a1c71', 'd76d77'],
    ['4ca1af', 'c4e0e5'],
    ['ff5f6d', 'ffc371'],
    ['36d1dc', '5b86e5'],
    ['c33764', '1d2671'],
    ['141e30', '243b55'],
    ['ff7e5f', 'feb47b'],
    ['ed4264', 'ffedbc'],
    ['2b5876', '4e4376'],
    ['ff9966', 'ff5e62'],
    ['aa076b', '61045f'],
    ['ff9a9e', 'fad0c4'],
    ['ffecd2', 'fcb69f'],
    ['ff9a9e', 'fecfef'],
    ['a1c4fd', 'c2e9fb'],
    ['cfd9df', 'e2ebf0'],
    ['fdfbfb', 'ebedee'],
    ['f5f7fa', 'c3cfe2'],
    ['667eea', '764ba2'],
    ['fdfcfb', 'e2d1c3'],
    ['89f7fe', '66a6ff'],
    ['48c6ef', '6f86d6'],
    ['feada6', 'f5efef'],
    ['a3bded', '6991c7'],
    ['13547a', '80d0c7'],
    ['93a5cf', 'e4efe9'],
    ['434343', '000000'],
    ['93a5cf', 'e4efe9'],
    ['ff758c', 'ff7eb3'],
    ['868f96', '596164'],
    ['c79081', 'dfa579'],
    ['09203f', '537895'],
    ['96deda', '50c9c3'],
    ['29323c', '485563'],
    ['ee9ca7', 'ffdde1'],
    ['1e3c72', '2a5298'],
    ['ffc3a0', 'ffafbd'],
    ['B7F8DB', '50A7C2'],
    ['d7816a', 'bd4f6c'],
    ['ffa69e', '861657'],
    ['5f0a87', 'a4508b'],
    ['20bf55', '01baef'],
    ['74f2ce', '7cffcb'],
    ['a40606', 'd98324'],
    ['380036', '0cbaba'],
    ['e58c8a', 'eec0c6'],
    ['80ff72', '7ee8fa'],
    ['7ee8fa', 'eec0c6'],
    ['ec9f05', 'ff4e00'],
    ['9fa4c4', 'b3cdd1'],
    ['9e768f', '9fa4c4'],
    ['8693ab', 'bdd4e7'],
    ['b279a7', 'd387ab'],
    ['d387ab', 'e899dc'],
    ['0d324d', '7f5a83'],
    ['b91372', '6b0f1a'],
    ['f2a65a', '772f1a'],
    ['a7acd9', '9e8fb2'],
    ['e7a977', 'ebbe9b'],
    ['ff928b', 'ffac81'],
    ['233329', '63d471'],
    ['29524a', 'e9bcb7'],
    ['a71d31', '3f0d12'],
    ['009ffd', '2a2a72'],
    ['5aff15', '00b712'],
    ['fc575e', 'f7b42c'],
    ['fc575e', '90d5ec'],
    ['fb8085', 'f9c1b1'],
    ['3eadcf', 'abe9cd'],
    ['a88beb', 'f8ceec'],
    ['f1a7f1', 'fad0c4'],
    ['ffd8cb', 'f9d29d'],
    ['ff8489', 'd5adc8'],
    ['f9d976', 'f39f86'],
    ['fb7ba2', 'fce043'],
    ['37d5d6', '36096d'],
    ['b0f3f1', 'ffcfdf'],
    ['b58ecc', '5de6de'],
    ['d99ec9', 'f6f0c4'],
    ['f5f7fa', 'b8c6db'],
    ['647dee', '7f53ac'],
    ['f6f0ea', 'f1dfd1'],
    ['83eaf1', '63a4ff'],
    ['f6d285', 'bbf0f3'],
    ['9f98e8', 'aff6cf'],
    ['e5bdf6', 'd8dede'],
    ['e8dbfc', 'f8f9d2'],
    ['bbdbbe', 'deebdd'],
    ['0bab64', '3bb78f'],
    ['09c6f9', '045de9'],
    ['77eed8', '9eabe4'],
    ['6782b4', 'b1bfd8'],
    ['a4bfef', '6a93cb'],
    ['9795ef', 'f9c5d1'],
    ['a5a4cb', '8989bb'],
    ['f53844', '42378f'],
    ['0652c5', 'd4418e'],
    ['89d4cf', '734ae8'],
    ['f53803', 'f5d020'],
    ['b621fe', '1fd1f9'],
    ['6e45e1', '89d4cf'],
    ['d65bca', '21d190'],
    ['aff1da', 'f9ea8f'],
    ['5f72be', '9921e8'],
    ['ffdd00', 'fbb034'],
    ['09203f', '537895'],
    ['dad2f3', 'fba8a4'],
    ['fe5f75', 'fc9842'],
    ['daacec', '94c997'],
    ['f5e3e6', 'd9e4f5'],
    ['c81f70', 'd19592'],
    ['96e4df', '4dccc6'],
    ['f67062', 'fc5296'],
    ['a5c7b7', '5d4257'],
    ['28313b', '485461'],
    ['19a186', 'f2cf43'],
    ['fe5858', 'ee9617'],
    ['2a5470', '4c4177'],
    ['03c8a8', '89d8d3'],
    ['4884ee', '06bcfb'],
    ['d5d0e5', 'f3e6e8'],
    ['864ba2', 'bf3a30'],
    ['2c69d1', '0abcf9'],
    ['e61d8c', 'c7e9fb'],
    ['d7e1ec', 'ffffff'],
    ['05d6d9', 'f907fc'],
    ['fbd72b', 'f9484a'],
    ['55d284', 'f2cf07'],
    ['08c8f6', '4d5dfb'],
    ['5e5c5c', '9dc5c3'],
    ['e186b4', 'bdd8fe'],
    ['eb6b9d', 'ee8c68'],
    ['d2ccc4', '2f4353'],
    ['de4daa', 'f6d327'],
    ['ad1deb', '6e72fc'],
    ['c8c85e', 'd8d8ac'],
    ['e975a8', '726cf8'],
    ['087ee1', '05e8ba'],
    ['20ded3', 'f6fba2'],
    ['a1bafe', '8d5185'],
    ['b9d1eb', 'f876de'],
    ['fffcff', 'd5fefd'],
    ['dcf8ef', 'fee2f8'],
    ['7ddff8', 'b1ade2'],
    ['d1bad2', '2884b8'],
    ['b3f6d8', '52a7c1'],
    ['9dfbc8', 'f5f186'],
    ['26f596', '0499f2'],
    ['c797eb', 'f0ecfc'],
    ['6d17cb', '2876f9'],
    ['39e5b6', '70b2d9'],
    ['ebbba7', 'cfc7f8'],
    ['f6ebe6', 'aee1f9'],
    ['c373f2', 'f977ce'],
    ['48c3eb', '718edd'],
    ['f9aba4', 'efecec'],
    ['cfd6e6', 'e7eff9'],
    ['aacaef', 'fde7f9'],    
    ['f894a4', 'f9d1b7'],
    ['66b5f6', 'bfe299'],
    ['0fd64f', 'f8ef42'],
    ['e99ba6', 'ffd9de'],
    ['1e9afe', '60dfcd'],
    ['e1d4e6', 'e2d5e6'],
    ['e8bc85', 'e8c99b'],
    ['1e3b70', '29539b'],
    ['98de5b', '08e1ae'],
    ['ef6da0', 'ee8e6b'],
    ['cb218e', '6617cb'],
    ['b0f9a9', '17f9f2'],
    ['f39fdc', '9ab5e1'],
    ['b8d3fe', 'aecad6'],
    ['cef576', '84fb95'],
    ['98fcbd', '9cdaf8'],
    ['b9abcf', 'b9abcf'],
    ['c9d9ff', 'f89b9e'],
    ['ffc988', 'e288f9'],
    ['ddbdfc', '96c8fb'],
    ['f08efc', 'ee5166'],
    ['f6f2f2', 'd9d9d9'],
    ['48a9fe', '0beef9'],
    ['42fcdb', '3ee577'],
    ['d6aed6', '98d9e1'],
    ['722ae6', 'e4b5cb'],
    ['14557b', '7fcec5'],
    ['fe0944', 'feae96'],
    ['93a5ce', 'e4eee9'],
    ['414141', '000000'],
    ['96a7cf', 'e3efe8'],
    ['93fb9d', '09c7fb'],
    ['ff748b', 'fe7bb0'],
    ['8b939a', '5b6467'],
    ['c58e7f', 'dfa375'],
    ['037ade', '03e5b7'],
    ['8cacac', 'af8c9d'],
    ['aa4465', '861657'],
    ['5d4954', 'ffa69e'],
    ['028090', '00bfb2'],
    ['80ced7', '007ea7'],
    ['b02e0c', 'eb4511'],
    ['7c98b3', '637081'],
    ['97cc04', '2d7dd2'],
    ['d1b1cb', 'ddcad9'],
    ['7b0d1e', 'db7f8e'],
    ['ff6b6c', 'adb2d3'],
    ['b02e0c', 'eb4511'],
    ['fff200', '003b64'],
    ['788cb6', 'fdb813'],
    ['ffcc2f', 'ef5734'],
    ['ed008c', 'fff000'],
    ['ffc719', 'bf033b'],
    ['ffc907', 'b5c327'],
    ['fcd000', '76daff'],
    ['766a65', 'edd812'],
    ['ffed00', 'ff0000'],
    ['005238', 'ffcd00'],
    ['f07654', 'f5df2e'],
    ['f6fc9c', 'eaf818'],
    ['d425b5', 'ebf928'],
    ['f0e703', 'b3dfa1'],
    ['bddcf1', 'fdf86d'],
    ['2575ac', 'c9d706'],
    ['f5f7f6', '5ca0f2'],
    ['ffffff', 'e96196'],
    ['473146', 'fefdfc'],
    ['ffd166', 'fffcf9'],
    ['ebebeb', '4062bb'],
    ['beb7a4', 'fffffc'],
    ['00a4e4', 'fefefe'],
    ['fffbfc', '29e7cd'],    
    ['caccd1', 'f3f4f7'],
    ['02a388', 'f9f9f9'],
    ['82bc23', 'ffffff'],
    ['ff4081', 'f5f4f2'],
    ['f3f3f5', '352384'],
    ['f9886c', 'fbfbfb'],
    ['9b4dca', 'f4f5f6'],
    ['ec4534', 'eeeeee'],
    ['f47b7b', 'ffffff'],
    ['e9e9e9', 'f6f6f6'],
    ['ebebeb', '813867'],
    ['d8896b', 'ffffff'],
    ['e50914', 'f5f5f1'],
    ['ececec', '44355b'],
    ['efefef', '27a770'],
    ['434343', '000000'],
    ['000000', '166d3b'],
    ['04619f', '000000'],
    ['000000', '923cb5'],
    ['2c3e50', '000000'],
    ['000000', 'a55c1b'],
    ['b82e1f', '000000'],
    ['000000', '756213'],
    ['7f8c8d', '000000'],
    ['000000', '2d3436'],
    ['000000', 'ffeaa7'],
    ['000000', 'e84393'],
    ['000000', '55efc4'],
    ['a29bfe', '000000'],
    ['958e69', '000000'],
    ['000000', 'd2a813'],
    ['000000', '130f40'],
    ['0c0c0c', '4834d4'],
    ['000000', 'e056fd'],
    ['000000', '7ed6df'],
    ['5e5368', '000000'],
    ['ffffff', '000000'],
    ['dff9fb', '000000'],
    ['ff9ff3', 'd3d3d3'],
    ['d3d3d3', 'feca57'],
    ['d3d3d3', 'ff6b6b'],
    ['d3d3d3', '48dbfb'],
    ['d3d3d3', '1dd1a1'],
    ['d3d3d3', 'f368e0'],
    ['d3d3d3', 'ff9f43'],
    ['ee5253', 'd3d3d3'],
    ['7f8c8d', 'd3d3d3'],
    ['d3d3d3', '2d3436'],
    ['d3d3d3', 'd3d3d3'],
    ['576574', 'c2b6b6'],
    ['4a0404', 'c8c1c1'],
    ['c8d6e5', '8ae9b3'],
    ['c9c6c6', 'f1f2f6'],
    ['eccc68', 'd3d3d3'],
    ['57606f', 'd3d3d3'],
    ['c2c0c0', '70a1ff'],
    ['e1dada', 'bdcad9'],
    ['e2e1e1', 'c177b2'],
    ['af8231', 'c1bfbf'],
    ['7bed9f', 'd3d3d3'],
    ['2bc96d', 'd3d3d3'],
    ['e0d4ae', 'a38560'],
    ['e0d4ae', '461220'],
    ['cea177', 'ffffff'],
    ['fbf7e9', 'e2c9be'],
    ['96705b', 'ba9a8e'],
    ['dce8e0', 'd2d8d6'],
    ['b82e1f', 'f2c17d'],
    ['f2c17d', 'a44200'],
    ['d58936', '69140e'],
    ['c08552', 'f5d3c8'],
    ['7d6d61', '5e574d'],
    ['ba8f95', 'cab6cd'],
    ['d3b88c', '230903'],
    ['422419', '000000'],
    ['ad5d4e', '826754'],
    ['ee6c4d', '61210f'],
    ['4c131a', 'b2505c'],
    ['0c0c0c', 'ca7968'],
    ['f8de7e', 'd99058'],
    ['b86d29', 'fc89ac'],
    ['b86d29', 'fc89ac'],
    ['ad6f69', '43302e'],
    ['874000', 'bc6f03'],
    ['746cc0', '58427c'],
    ['2e4057', 'dbcbd8'],
    ['994ecc', '3e187a'],
    ['8241b8', '6c33a3'],
    ['5200ae', '4062bb'],
    ['ee696b', '523a78'],
    ['3e2f5b', 'ffc857'],
    ['e5d9f2', 'cdc1ff'],
    ['a594f9', '6247aa'],
    ['5f0f40', '310e68'],
    ['923993', '50d8d7'],
    ['7e4e60', 'b287a3'],
    ['f79ad3', 'c86fc9'],
    ['e0e5e5', '6b2d5c'],
    ['e2ac6b', 'e0d2b4'],
    ['cba36d', 'e2ac6b'],
    ['ffef77', 'f9ff60'],
    ['ffe884', 'fff293'],
    ['d6a3a3', 'e6c79c'],
    ['feb9a3', 'fea684'],
    ['f8dba4', 'e09082'],
    ['ffdea8', 'fec84e'],
    ['fabc3c', 'facc6b'],
    ['c6920d', 'd09d1f'],
    ['f1c56c', 'dab097'],
    ['cc9934', '1e1d1b'],
    ['cd5334', 'edb88b'],
    ['ffbe3d', 'f06543'],
    ['ffb4a2', 'ffcdb2'],
    ['d93965', 'e3e3e3'],
    ['ff0000', '990000'],
    ['99201c', 'ad2f26'],
    ['a00000', 'c62128'],
    ['59090c', 'da898c'],
    ['c59169', 'd82020'],
    ['e8c547', 'c20114'],
    ['ff1053', 'f7accf'],
    ['db3445', 'f71735'],
    ['44000b', 'e0455f'],
    ['274060', '1b2845'],
    ['12100e', '2b4162'],
    ['5a585a', '090947'],
    ['191714', '2234ae'],
    ['313131', '6daddb'],
    ['170e13', '7a7adb'],
    ['009fc2', '0d0a0b'],
    ['20a4f3', '182b3a'],
    ['dbe7fc', '1d2951'],
    ['247ba0', 'ffffb5'],
    ['5899e2', 'ffffff'],
    ['1b2845', 'ffffff'],
    ['335c81', 'ffffff'],
    ['274060', 'ffffff'],
    ['91a6ff', 'ffffff'],
    ['efe9f4', '5078f2'],
    ['e36463', 'e1bc29'],
    ['ff9933', 'd14545'],
    ['f56545', '99201c'],
    ['ff7d14', 'f94327'],
    ['e8c547', 'c20114'],    
    ['ffbe0b', 'f42b03'],
    ['fa9e8c', 'ffe190'],
    ['591002', '5d4604'],
    ['f7d4d4', 'f6ecc4'],
    ['e8807f', 'e6c84f'],
    ['d14545', 'ffd045'],
    ['993333', 'ba9833'],
    ['ffff00', 'ff1a1a'],
    ['ba1313', 'baba00'],
    ['ff5858', 'ffff45'],
    ['fcd181', 'e79087'],
    ['ffc857', 'c11d38'],
    ['edf1f4', 'c3cbdc'],
    ['dee4ea', 'f9fcff'],
    ['4d4855', 'a399b2'],
    ['000000', '4d4855'],
    ['898196', '655d72'],
    ['353535', 'd7d7d7'],
    ['ff0000', 'ff7878'],
    ['ff7878', 'ffffff'],
    ['74d680', 'ff7878'],
    ['74d680', '378b29'],
    ['ffffff', '378b29'],
    ['e01c34', 'acabb0'],
    ['e0d2c7', '44b09e'],
    ['db6885', '972239'],
    ['b78e51', 'de4256'],
    ['ee5a24', 'ea2027'],
    ['2c4c3b', '306844'],
    ['182c25', '1e453e'],
    ['000e21', '51713a'],
    ['727242', '3e5e04'],
    ['1a512e', '63a91f'],
    ['04bf00', '015d00'],
    ['95b54c', '607123'],
    ['a2d240', '1b8b00'],
    ['3e0000', '7c0000'],
    ['da2d2d', '272822'],
    ['000c14', 'f8002f'],
    ['ce203c', '000000'],
    ['91221e', '030202'],
    ['210d10', '802201'],
    ['fddac5', 'fffdf6'],
    ['fddac5', 'fef9e7'],
    ['fddac5', 'fbbc95'],
    ['f79b73', 'feeacf'],
    ['f8bc9c', 'f18960'],
    ['eeb68c', 'e27d4e'],
    ['cd8a66', 'a44a2a'],
    ['b46f47', '7f2f19'],
    ['a65b31', '6b2210'],
    ['fbc6b6', 'f79b83'],
    ['f9b098', 'f08256'],
    ['953b20', '570f0a'],
    ['2e3192', '1bffff'],
    ['d4145a', 'fbb03b'],
    ['009245', 'fcee21'],
    ['662d8c', 'ed1e79'],
    ['ee9ca7', 'ffdde1'],
    ['614385', '516395'],
    ['02aabd', '00cdac'],
    ['ff512f', 'dd2476'],
    ['ff5f6d', 'ffc371'],
    ['11998e', '38ef7d'],
    ['c6ea8d', 'fe90af'],
    ['ea8d8d', 'a890fe'],
    ['d8b5ff', '1eae98'],
    ['ff61d2', 'fe9090'],
    ['bff098', '6fd6ff'],
    ['4e65ff', '92effd'],
    ['a9f1df', 'ffbbbb'],
    ['c33764', '1d2671'],
    ['93a5cf', 'e4efe9'],
    ['868f96', '596164'],
    ['09203f', '537895'],
    ['ffecd2', 'fcb69f'],
    ['a1c4fd', 'c2e9fb'],
    ['764ba2', '667eea'],
    ['fdfcfb', 'e2d1c3'],   
    ['abcdef', 'c0ffee'],
    ['c0ffee', 'fedcba'],
    ['021118', '020305']
];

window.addEventListener('load', ()=>{
    
    for(let i = 0; i < 18; i++){
        show_next.next();
    }

    animatePlaceholder(placeholder);
    animatePlaceholder(placeholder_nav);

    document.body.addEventListener('click', showDetail);
    document.body.addEventListener('click', autoCloseNav);
    document.addEventListener('scroll', showLoading);
    dragElement(nav_open_btn);
    nav_open_btn.addEventListener('click', openNav);
    nav_open_btn.addEventListener('touchend', openNav);
    nav_close_btn.addEventListener('click', closeNav);
    nav_close_btn.addEventListener('touchstart', closeNav);
    show_detail_btn.addEventListener('change', showAllDetail);
    input.addEventListener('keyup', find);
    input_nav.addEventListener('keyup', find);
    input_deg.addEventListener('input', changeLabelRange);
    input_deg.addEventListener('change', changeRotation);
})

function changeLabelRange(){
    input_deg.parentNode.querySelector('label').textContent = `Rotation: ${input_deg.value}`;
}

function changeRotation(){
    default_rotation = input_deg.value;
    let color_1, color_2;
    list.childNodes.forEach(el => {
        [color_1, color_2] = [...el.querySelectorAll('.color span')].map(el => el.innerText);
        el.querySelector('.color-gradient').style.background = `linear-gradient(${default_rotation}deg, ${color_1}, ${color_2})`;
    })
}

function showLoading(e){
    if(e.cancelable){
        e.preventDefault();
    }
    const {clientHeight, scrollTop, scrollHeight} = document.documentElement;
    
    if(clientHeight + scrollTop + 2 >= scrollHeight){
        loading.classList.add('show');
        setTimeout(()=>{
            for(let i = 0; i < 18; i++){
                show_next.next();
            }
            loading.classList.remove('show');
        }, 500);
    }
}

function* more(){
    for(let i = 0; i < color_list.length; i++){
        yield addNew(color_list[i][0], color_list[i][1]);
    }
} 

function addNew(color_1, color_2){
    const li = document.createElement('li');
    // ontouchstart="showDetail2(this)"
    li.classList.add('item');

    li.innerHTML = `
        <div class="color-gradient" style="background: linear-gradient(${default_rotation}deg, #${color_1}, #${color_2})"></div>
        <div class="color-details">
            <div class="color ${show_detail_btn.checked ? 'show' : ''}" style="background: #${color_1}"><span>#${color_1}</span></div>
            <div class="color ${show_detail_btn.checked ? 'show' : ''}" style="background: #${color_2}"><span>#${color_2}</span></div>
        </div>
    `;

    list.appendChild(li);
}

function animatePlaceholder(placeholder){
    placeholder.innerHTML = placeholder.innerText.split('')
    .map((el, i) => `<span style="transition-delay: ${i*50}ms">${el}</span>`).join('');
}

function find(e){
    e.preventDefault();
    e.stopPropagation();
    const text = e.currentTarget.value.toString().trim().toUpperCase();
    const items = list.querySelectorAll('.item');
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

function showDetail(e){
    e.stopPropagation();
    if(e.target.classList.contains('color-gradient')){
        e.target.parentNode.querySelectorAll('.color-details .color').forEach(el => el.classList.toggle('show'));
    }
}

function openNav(e){
    nav.forEach(el => el.classList.add('visible'));
    nav_open_btn.classList.add('off');
}

function closeNav(){
    nav.forEach(el => el.classList.remove('visible'));
    nav_open_btn.classList.remove('off');
}

function autoCloseNav(e){
    e.stopPropagation();
    if(e.target !== nav_open_btn && !nav[2].contains(e.target) && nav[0].classList.contains('visible')){
        closeNav();
    }
}

function showAllDetail(){
    if(show_detail_btn.checked){
        list.childNodes.forEach(el => {
            el.querySelectorAll('.color-details .color').forEach(el => el.classList.add('show'));
        });
    } else {
        list.childNodes.forEach(el => {
            el.querySelectorAll('.color-details .color').forEach(el => el.classList.remove('show'));
        });
    }
}

function dragElement(element) {
    let posX = 0, posY = 0, top_px, left_px, x, y;

    element.onmousedown = dragMouseDown;
    element.ontouchstart = dragMouseDown;
  
    function dragMouseDown(e = window.event) {
        if(e.cancelable){
            e.preventDefault();
        }
        posX = e.clientX || e.touches[0].clientX;
        posY = e.clientY || e.touches[0].clientY;   

        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;

    }
  
    function elementDrag(e = window.event) {
        element.removeEventListener('touchend', openNav);
        element.removeEventListener('click', openNav);
   
        if(e.cancelable){
            e.preventDefault();
        }
    
        top_px = (e.clientY !== undefined ? e.clientY : e.touches[0].clientY) - posY;
        left_px = (e.clientX !== undefined ? e.clientX : e.touches[0].clientX) - posX;

        x = top_px + element.offsetTop;
        y = left_px + element.offsetLeft;

        element.style.top = (x > 0 && x < document.documentElement.clientHeight - 30 ? x : x - top_px) + "px";
        element.style.left = (y > 0 && y < document.body.clientWidth - 30 ? y : y - left_px) + "px";

        posX = e.clientX || e.touches[0].clientX;
        posY = e.clientY || e.touches[0].clientY;   
    }
  
    function closeDragElement() {
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
        setTimeout(()=>{
            element.addEventListener('click', openNav);
            element.addEventListener('touchend', openNav);
        }, 0);
    }
  }