// ==================== FOOTER ICON BUTTONS ====================
function footerButtons(){
    function footerButtonFacebook(){ window.open("https://www.facebook.com/", '_blank') }
    function footerButtonTwitter(){ window.open("https://www.twitter.com/", '_blank') }
    function footerButtonInstagram(){ window.open("https://www.instagram.com/", '_blank') }

    document.querySelector(".footer_button_facebook").onclick = function () { footerButtonFacebook() };
    document.querySelector(".footer_button_twitter").onclick = function () { footerButtonTwitter() };
    document.querySelector(".footer_button_instagram").onclick = function () { footerButtonInstagram() };
}

footerButtons()

// ==================== SCROLL UP ====================
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 280) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ==================== CLEAR INPUT FIELDS ON CONTACT US PAGE ====================
function clearInput(){
    document.getElementById("contactus_form").reset();
}

/*==================== FAQ ACCORDION ====================*/
let li = document.querySelectorAll(".faq_text li");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question_arrow")){
            clickedLi = e.target.parentElement;
        }
        else{
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}