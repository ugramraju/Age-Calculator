const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const display = document.getElementById("display");

    if (!date || !month || !year) {
        display.innerText = "Please Input Valid Data";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, date);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    display.innerText = `Your Age is ${years} Years ${months} Months ${days} Days`;
});
