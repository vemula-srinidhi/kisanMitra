document.addEventListener('DOMContentLoaded', () => {
    const userTypeSelection = document.getElementById('userTypeSelection');
    const landOwnerForm = document.getElementById('landOwnerForm');
    const farmerForm = document.getElementById('farmerForm');
    const landList = document.getElementById('landList');
    const landListUl = document.querySelector('#landList ul');

    const userTypeRadios = document.querySelectorAll('input[name="userType"]');
    userTypeRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.value === 'landOwner') {
                landOwnerForm.classList.remove('hidden');
                farmerForm.classList.add('hidden');
            } else {
                landOwnerForm.classList.add('hidden');
                farmerForm.classList.remove('hidden');
            }
        });
    });

    landOwnerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value;
        const acres = document.getElementById('acres').value;
        const expectedAmount = document.getElementById('expectedAmount').value;
        const ownerPhone = document.getElementById('ownerPhone').value;

        // Here, you would typically send this data to a server and store it in a database.

        // For this simplified example, we'll just display it in the list.
        const listItem = document.createElement('li');
        listItem.textContent = `Location: ${location}, Acres: ${acres}, Expected Amount: $${expectedAmount}, Phone: ${ownerPhone}`;
        landListUl.appendChild(listItem);
        landOwnerForm.reset();
        landList.classList.remove('hidden');
    });

    farmerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const farmerName = document.getElementById('farmerName').value;
        const farmerLocation = document.getElementById('farmerLocation').value;

        // Here, you would typically search for available land based on the farmer's location
        // and display relevant land information. For this simplified example, we won't do that.

        // Displaying a message indicating that the feature is not implemented.
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${farmerName}, Land Location: ${farmerLocation}`;
        landListUl.appendChild(listItem);
        landList.classList.remove('hidden');
    });
});
