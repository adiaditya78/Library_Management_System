let currentRole = 'Admin';

function setRole(role) {
    currentRole = role;
    const btnAdmin = document.getElementById('btn-admin');
    const btnUser = document.getElementById('btn-user');

    if (role === 'Admin') {
        btnAdmin.className = "w-1/2 py-1 rounded bg-white shadow font-bold text-blue-600";
        btnUser.className = "w-1/2 py-1 rounded text-gray-500";
    } else {
        btnAdmin.className = "w-1/2 py-1 rounded text-gray-500";
        btnUser.className = "w-1/2 py-1 rounded bg-white shadow font-bold text-blue-600";
    }
}


function handleLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    
    if (username.trim() === "") {
        document.getElementById('error-msg').innerText = "Username is required";
        document.getElementById('error-msg').classList.remove('hidden');
        return;
    }
    if(currentRole === 'Admin'){
        window.location.href = 'admin_dashboard.html';
    }
    else{
        window.location.href = 'user_dashboard.html';
    }
}

function validateAddBook(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    let isValid = true;

    document.getElementById('err-title').classList.add('hidden');
    document.getElementById('err-author').classList.add('hidden');

    if (title.trim() === "") {
        document.getElementById('err-title').classList.remove('hidden');
        isValid = false;
    }

    if (author.trim() === "") {
        document.getElementById('err-author').classList.remove('hidden');
        isValid = false;
    }

    if (isValid) {
        alert("Success! Asset added. (This would send data to Database in a real app)");
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
    }
}