if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/To-Do-List/sw.js', { scope: '/To-Do-List/' })})}