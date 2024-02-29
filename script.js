function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var today = new Date();

    var years = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && today.getData() < dob.getDate())) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        var tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
        days += tempDate.getDate();
    }
    document.getElementById('result').textContent = 'Your age is ' + years + ' years, ' + months + ' months, and ' + days + ' days ';
}