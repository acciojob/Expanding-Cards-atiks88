//your JS code here. If required.
  const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');

container.addEventListener('click', (event) => {
  const clickedPanel = event.target;
  
  // Check if the clicked element is a panel
  if (clickedPanel.classList.contains('panel')) {
    // Remove the "active" class from all panels
    panels.forEach(panel => {
      panel.classList.remove('active');
    });

    // Add the "active" class to the clicked panel
    clickedPanel.classList.add('active');
  }
});
