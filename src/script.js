var modeButton = document.getElementById('modeButton');
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark')
    document.body.classList.add('bg-gray-900');
    modeButton.innerHTML = 'Toggle Light Mode';
} else {
    document.body.classList.remove('dark')
    document.body.classList.remove('bg-gray-900');
    modeButton.innerHTML = 'Toggle Dark Mode';
}

function toggleMode(){
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
        document.body.classList.remove('bg-gray-900');
        modeButton.innerHTML = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light');
    }else{
        document.body.classList.add('dark');
        document.body.classList.add('bg-gray-900');
        modeButton.innerHTML = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark');
    }

}
function toggleMobileMenu(){
    var toggleMobileMenu = document.getElementById('mobile-menu-2');
    if(toggleMobileMenu.classList.contains('hidden')){
        toggleMobileMenu.classList.remove('hidden');
    }else{
        toggleMobileMenu.classList.add('hidden');

    }
}