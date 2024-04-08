// const nightModeButton = document.getElementById('night-mode-toggle');
const container = document.querySelector('.container');

nightModeButton.addEventListener('click', () => {
  container.classList.toggle('night-mode');
});

function date(){
  // Create a new Date object which represents the current date and time
  const today = new Date();

  // Extract the components of the date (year, month, and day)
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based, so we add 1
  const day = today.getDate();

  // Format the date as "mm-dd-yyyy"
  const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
  document.getElementById("date").innerHTML = formattedDate;
  console.log(formattedDate); // Output: "04-07-2024" (for April 7, 2024)
}
