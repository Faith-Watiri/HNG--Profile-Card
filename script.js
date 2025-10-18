function updateTime() {
    const timespan = document.getElementById("user-time");
    timespan.textContent = Date.now();
}

setInterval(updateTime, 1000);
updateTime();


doucument.getElementById("avatar-upload").addEventListener("change", (event) =>{
 const file = event.target.files[0];
 if (file)
    {
        const reader = new FileReader();
        reader.onload = function (e) {
            doucument.getElementById("avatar").src = e.target.result;
        };

        reader.readAsDataURL(file);
    }   
});