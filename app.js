function openModal(id){document.getElementById(id).classList.add('show')}
function closeModal(id){document.getElementById(id).classList.remove('show')}
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show')}))
function selectNetwork(btn){document.querySelectorAll('.network-grid button').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected')}
