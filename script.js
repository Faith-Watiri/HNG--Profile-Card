function updateTime() {
    const timeEl = document.getElementById("user-time");
  
    timeEl.textContent = Date.now();
}


updateTime();
setInterval(updateTime, 1000);



document.getElementById("avatar-upload").addEventListener("change", (event) =>{
 const file = event.target.files[0];
 if (!file) return;
    {
        const reader = new FileReader();
        reader.onload =  (e) => {
            document.getElementById("avatar").src = e.target.result;
        };

        reader.readAsDataURL(file);
    }   
});