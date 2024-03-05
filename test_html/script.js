document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.statusSelect');

  selects.forEach(select => {
    select.addEventListener('change', (event) => {
      const status = event.target.value;
      const area = event.target.closest('.improvementArea');
      area.style.borderColor = getStatusColor(status);
    });
  });
});

function getStatusColor(status) {
  switch (status) {
    case 'start':
      return '#ffcccc'; // Light red for start
    case 'inProgress':
      return '#ffff99'; // Light yellow for in progress
    case 'end':
      return '#ccffcc'; // Light green for end
    default:
      return '#ccc'; // Default border color
  }
}

