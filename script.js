/* * Portfolio Logic
 * 1. Dynamic Year & IST Clock
 * 2. Right-click protection (except for profile links)
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Date & IST Clock ---
    function updateFooter() {
        const now = new Date();

        // Update Year
        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = now.getFullYear();
        }

        // Update Clock to IST (Indian Standard Time)
        const clockSpan = document.getElementById('clock');
        if (clockSpan) {
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            const timeString = now.toLocaleTimeString('en-US', options);
            clockSpan.textContent = `IST: ${timeString}`;
        }
    }

    // Run immediately, then update every second
    updateFooter();
    setInterval(updateFooter, 1000);


    // --- 2. Right Click Protection ---
    document.addEventListener('contextmenu', (event) => {
        // Check if the clicked element (or its parent) is a profile link
        // We added the class 'profile-link' to the sidebar anchors in HTML
        const isProfileLink = event.target.closest('.profile-link');

        if (isProfileLink) {
            // Allow right-click (default browser behavior)
            return;
        }

        // Otherwise, block right-click
        event.preventDefault();
    });

});