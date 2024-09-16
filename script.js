// document.addEventListener('DOMContentLoaded', () => {
//     // Array to hold phone book entries
//     const phoneBook = [];
//     const phoneBookList = document.getElementById('phoneBookList');
//     const phoneBookForm = document.getElementById('phoneBookForm');
//     const sortOptions = document.getElementById('sortOptions');

//     function renderPhoneBook(entries) {
//         phoneBookList.innerHTML = '';
//         entries.forEach(entry => {
//             const li = document.createElement('li');
//             li.textContent = `${entry.name} - ${entry.phoneNumber} - ${entry.details || 'N/A'}`;
//             phoneBookList.appendChild(li);
//         });
//     }

//     function addEntry(event) {
//         event.preventDefault();
//         const name = document.getElementById('name').value;
//         const phoneNumber = document.getElementById('phoneNumber').value;
//         const details = document.getElementById('details').value;

//         if (name && phoneNumber) {
//             phoneBook.push({ name, phoneNumber, details });
//             document.getElementById('phoneBookForm').reset();
//             sortAndRender();
//         }
//     }

//     function sortAndRender() {
//         const sortBy = sortOptions.value;
//         const sortedPhoneBook = phoneBook.slice().sort((a, b) => {
//             if (a[sortBy] < b[sortBy]) return -1;
//             if (a[sortBy] > b[sortBy]) return 1;
//             return 0;
//         });
//         renderPhoneBook(sortedPhoneBook);
//     }

//     phoneBookForm.addEventListener('submit', addEntry);
//     sortOptions.addEventListener('change', sortAndRender);
// });




document.addEventListener('DOMContentLoaded', () => {
    // Array to hold phone book entries
    const phoneBook = [];

    // Get references to DOM elements
    const phoneBookList = document.getElementById('phoneBookList');
    const phoneBookForm = document.getElementById('phoneBookForm');
    const sortOptions = document.getElementById('sortOptions');

    // Function to render phone book entries to the DOM
    function renderPhoneBook(entries) {
        phoneBookList.innerHTML = ''; // Clear the existing list
        entries.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.name} - ${entry.phoneNumber} - ${entry.details || 'N/A'}`;
            phoneBookList.appendChild(li);
        });
    }

    // Function to add a new entry to the phone book
    function addEntry(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const name = document.getElementById('name').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const details = document.getElementById('details').value.trim();

        // Validate that name and phone number are provided
        if (name && phoneNumber) {
            phoneBook.push({ name, phoneNumber, details });
            document.getElementById('phoneBookForm').reset(); // Reset the form inputs
            sortAndRender(); // Update the phone book list
        } else {
            alert("Name and Phone Number are required!");
        }
    }

    // Function to sort the phone book entries and render them
    function sortAndRender() {
        const sortBy = sortOptions.value;
        const sortedPhoneBook = bubbleSort(phoneBook.slice(), sortBy); // Use the bubbleSort function
        renderPhoneBook(sortedPhoneBook); // Render the sorted phone book
    }

    // Bubble Sort function
    function bubbleSort(phoneBook, sortBy) {
        let len = phoneBook.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < len - 1; i++) {
                if (phoneBook[i][sortBy] > phoneBook[i + 1][sortBy]) {
                    [phoneBook[i], phoneBook[i + 1]] = [phoneBook[i + 1], phoneBook[i]];
                    swapped = true;
                }
            }
            len--;
        } while (swapped);
        return phoneBook;
    }

    // Add event listener for form submission
    phoneBookForm.addEventListener('submit', addEntry);

    // Add event listener for sort option changes
    sortOptions.addEventListener('change', sortAndRender);
});

