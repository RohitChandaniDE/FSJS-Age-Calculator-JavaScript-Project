let btn = document.querySelector(".desc");

btn.addEventListener('click', () => {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();
    let ageInMilliseconds = today - dob;
    // 1000 millisecs * 60 secs * 60 mins * 24 hrs * 365 days
    let ageInYears = Math.floor(ageInMilliseconds / 31536000000); 
    // 1000 millisecs * 60 secs * 60 mins * 24 hrs * 365 days / 12 months
    let ageInMonths = Math.floor((ageInMilliseconds % 31536000000) / 2628000000);
    // ((1000 millisecs * 60 secs * 60 mins * 24 hrs * 365 days) % 12 months ) / (1000 millisecs * 60 secs * 60 mins * 24 hrs )
    let ageInDays = Math.floor(((ageInMilliseconds % 31536000000) % 2628000000) / 86400000);
    document.getElementById("years").innerHTML = ageInYears;
    document.getElementById("months").innerHTML = ageInMonths;
    document.getElementById("days").innerHTML = ageInDays;
  });
  
