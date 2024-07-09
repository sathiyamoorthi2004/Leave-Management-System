document.addEventListener('DOMContentLoaded', function () {
    const leaveRequestForm = document.getElementById('leave-request-form');
    const availableDaysElement = document.getElementById('available-days');
    const leaveHistoryElement = document.getElementById('leaveHistory');
    const leaveRecordsTable = document.getElementById('leave-records');
    let availableDays = 20; 
    leaveRequestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const leaveType = document.getElementById('leave-type').value;
    const leaveDays = parseInt(document.getElementById('leave-days').value);
    function updateLeaveHistory(fromDate, toDate) {
    const historyItem = document.createElement('li');
    historyItem.textContent = `From: ${fromDate} - To: ${toDate}`;
    leaveHistoryElement.appendChild(historyItem);
    const leaveDays = (new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 
   60 * 24) + 1;
    leaveTaken += leaveDays;
    updateLeaveInfo();
    fromDateInput.value = '';
    toDateInput.value = '';
    }
    if (leaveDays <= availableDays) {
    availableDays -= leaveDays;
    availableDaysElement.textContent = availableDays;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${new Date().toLocaleDateString()}</td>
    <td>${leaveType}</td>
    <td>${leaveDays}</td>
    `;
    leaveRecordsTable.appendChild(newRow);
    leaveRequestForm.reset();
    } else {
    alert('Not enough available leave days.');
    }
    });
   });
   