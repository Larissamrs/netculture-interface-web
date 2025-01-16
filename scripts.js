const menuProfileButton = document.getElementById('menuProfile');
const menuEditButton = document.getElementById('menuEdit');
const menuLogoutButton = document.getElementById('menuLogout');
const userInfo = document.getElementById('userInfo');
const editForm = document.getElementById('editForm');
const saveChangesButton = document.getElementById('saveChanges');
const cancelEditButton = document.getElementById('cancelEdit');
const menuCreateStoreButton = document.getElementById('menuCreateStore');
const createStoreForm = document.getElementById('createStoreForm');
const cancelCreateButton = document.getElementById('cancelCreate');

// Evento de clique para redirecionar para perfil.html
menuProfileButton.addEventListener('click', () => {
    window.location.href = 'perfil.html';
});

// Evento de clique para redirecionar para a criação de uma nova loja
menuCreateStoreButton.addEventListener('click', () => {
    window.location.href = 'create-store.html';
});

// Evento de clique para cancelar a criação da loja e voltar para a página inicial
cancelCreateButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Evento de submissão do formulário de criação de loja
createStoreForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const storeTitle = document.getElementById('storeTitle').value;
    const storeDescription = document.getElementById('storeDescription').value;
    const storeImage = document.getElementById('storeImage').value;
    const storeWhatsapp = document.getElementById('storeWhatsapp').value;
    const storeItems = document.getElementById('storeItems').value.split(',');

    // Aqui você pode adicionar o código para salvar a loja criada
    // Por exemplo, salvar em um banco de dados ou localStorage

    alert('Loja criada com sucesso!');
    window.location.href = 'index.html';
});

// Eventos de clique para a página de perfil (perfil.html)
if (menuEditButton && menuLogoutButton && userInfo && editForm && saveChangesButton && cancelEditButton) {
    menuEditButton.addEventListener('click', () => {
        editForm.classList.toggle('hidden');
        userInfo.classList.add('hidden');
    });

    menuLogoutButton.addEventListener('click', () => {
        alert('Você foi deslogado!');
        window.location.href = 'login.html';
    });

    saveChangesButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        alert(`DADOS ALTERADOS COM SUCESSO`);
        editForm.classList.add('hidden');
    });

    cancelEditButton.addEventListener('click', () => {
        editForm.classList.add('hidden');
    });
}