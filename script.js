const oylar = [31,28,31,30,31,30,31,31,30,31,30,31];

function yoshHisoblagich() {
    let bugun = new Date(),
        inputDate = new Date(document.getElementById("date-input").value),
        birthMonth,
        birthDate,
        birtYear,
        birthDetails = {
            date: inputDate.getDate(),
            month: inputDate.getMonth()+1,
            year: inputDate.getFullYear()
        };

    let hozirgiYil = bugun.getFullYear(),
        hozirgiOy = bugun.getMonth()+1,
        hozirgiSana = bugun.getDate();

        kabisaYil(hozirgiYil);

        const { date, month, year } = birthDetails; // destructing qilib oldik, (birthDetails) so'zni takrorlamaslik uchun
        if(
            year > hozirgiYil ||
            (month > hozirgiOy && year == hozirgiYil) ||
            (date > hozirgiSana && month == hozirgiOy && year == hozirgiYil)
            ) {
                alert(`Siz hali tug'ilmagansiz`);
            document.getElementById("nameOutput").style.opacity = '0';
            document.getElementById("nameOutput").innerHtml = '';
                return;
            }

        birtYear = hozirgiYil - year;

        if(hozirgiOy >= month){
            birthMonth = hozirgiOy - month;
        }
        else {
            birtYear--;
            birthMonth = 12 + hozirgiOy - month;
        }


        if(hozirgiSana >= date){
            birthDate = hozirgiSana - date;
        }
        else {
            birthMonth--;
            let kunlar = oylar[hozirgiOy - 2];
            birthDate = kunlar + hozirgiSana - date;
            if(birthMonth < 0){
                birthMonth = 11;
                birtYear--;
            }
        }
        displayResult(birthDate,birthMonth,birtYear); // natijani shu funksiya orqali chiqaramiz
}

// natijani shu funksiya orqali chiqaramiz
function displayResult(bDate, bMonth, bYear){

    let inputName = document.querySelector(".js").value;
    let inputDate = new Date(document.getElementById("date-input").value);
    if(inputName.length == 0){
        alert(`Ismingizni kiritmadingiz`);
        return;
    }
    console.log(inputDate);
    if(inputDate == 'Invalid Date'){
        alert(`Tug'ilgan sanangizni kiritmadingiz`);
        return;
    }
    if(inputName.toLowerCase().includes('jobir' || 'jo1' || `Жобир`)){
        inputName = 'Kampotshi yoshingizni qarang';
    }
    if(inputName.toLowerCase().includes('bobur')){
        inputName = 'Boburshi';
    }
    if(inputName.toLowerCase().includes('rafiq')){
        inputName = 'BoyOta';
    }
    if(inputName.toLowerCase().includes('abdulmajid')){
        inputName = 'Abdulmajidshi';
    }
    if(inputName.toLowerCase().includes('abdulhamid' || 'abdulkhamid')){
        inputName = 'Kiyop';
    }
    if(inputName.toLowerCase().includes('azamjon' || `a'zamjon` || `azam` || `a'zam`)){
        inputName = 'Azamjon Kiyop';
    }
    if(inputName.toLowerCase().includes('bekzod' || 'behzod' || 'bekhzod' || `bexzod`)){
        inputName = 'Boja';
    }
    if(inputName.toLowerCase().includes('zokir')){
        inputName = `bu dasturni Zokirkhon yozdi:), hafa bo'lish yo'q.`;
    }
    if(inputName.toLowerCase().includes('ibrat')){
        inputName = `Ibrat og'a`;
    }
    if(inputName.toLowerCase().includes('muhriddin' || 'mukhriddin' || 'muxriddin')){
        inputName = `Mukhrdinshi`;
    }
    if(inputName.toLowerCase().includes('khasan' || 'hasan' || 'xasan')){
        inputName = `XasanShi`;
    }
    if(inputName.toLowerCase().includes('nurmuhammad' || 'nurmukhammad' || 'umarov')){
        inputName = `Qori Aka`;
    }


    document.getElementById("yil").textContent = bYear;
    document.getElementById("oy").textContent = bMonth;
    document.getElementById("kun").textContent = bDate;
    document.getElementById("nameOutput").style.opacity = '1';
    document.getElementById("nameOutput").textContent = inputName.trim();
}

// 4-yilda fevral 29 bo'ladi, shuni to'g'irlab oldik.
function kabisaYil(yil){
    if(yil % 4 == 0 || (yil % 100 == 0 && yil % 400 == 0)) {
        oylar[1] = 29;
    }
    else {
        oylar[1] = 28;
    }
}
