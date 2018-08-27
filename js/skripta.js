$.ajax({
    type:'GET',
    url:'js/navigacija.json',
    success:function(podaci){
     var lista="<ul>";
     $.each(podaci,function(index,podatak){
         lista+='<a class="link" href='+podatak.Link+'><li class="navigacija">'+podatak.Naziv+'</li></a>';
     });
     lista+="</ul>";
     $("#navigacija").append(lista);
    }
});

slideShow();
function slideShow(){
    var trenutni=$('#banner .aktivna');
    var sledeci=trenutni.next().length ? trenutni.next() : trenutni.parent().children(':first');
    trenutni.addClass('neaktivna');
    trenutni.removeClass('aktivna');
    sledeci.removeClass('neaktivna');
    sledeci.addClass('aktivna');
    setTimeout(slideShow,3000);
}
$.ajax({
   type:'GET',
   url:'js/telefoni.json',
   success:function(telefoni){
       var niz="";
       $.each(telefoni,function(index,telefon){
           niz+='<div class="telefon"><img src='+telefon.Putanja+'><h4 class="naziv">'+telefon.Naziv+'</h4><h3 class="cena">'+telefon.Cena+'</h3></div>';
       });
       $('#telefoni').append(niz);

       $('.telefon').hover(
           function(){
               console.log('aaaa');
               $(this).addClass('uokviri');
           },
           function(){
               $(this).removeClass('uokviri');
           }
       );
   }
});

$('#pretrazi').keyup(function(){
    var keyword = document.getElementById('pretrazi').value.toLowerCase();
    $.ajax({
        type:'GET',
        url:'js/telefoni.json',
        success:function(telefoni){
            var niz="";
            $.each(telefoni,function(index,telefon){
                if(telefon.Naziv.toLowerCase().indexOf(keyword)!== -1) {
                    niz += '<div class="telefon"><img src=' + telefon.Putanja + '><h4 class="naziv">' + telefon.Naziv + '</h4><h3 class="cena">' + telefon.Cena + '</h3></div>';
                }
            });
            $('#telefoni').html(niz);

            $('.telefon').hover(
                function(){
                    console.log('aaaa');
                    $(this).addClass('uokviri');
                },
                function(){
                    $(this).removeClass('uokviri');
                }
            );
        }
    });


});

$("#sortiraj").change(function(){
    var marka=$(this).val().toLowerCase();
    $.ajax({
        type:'GET',
        url:'js/telefoni.json',
        success:function(telefoni){
            var niz="";
            $.each(telefoni,function(index,telefon){
                if(telefon.Marka.toLowerCase().indexOf(marka)!== -1) {
                    niz += '<div class="telefon"><img src=' + telefon.Putanja + '><h4 class="naziv">' + telefon.Naziv + '</h4><h3 class="cena">' + telefon.Cena + '</h3></div>';
                }
            });
            $('#telefoni').html(niz);

            $('.telefon').hover(
                function(){
                    console.log('aaaa');
                    $(this).addClass('uokviri');
                },
                function(){
                    $(this).removeClass('uokviri');
                }
            );
        }
    });

});
$('#posalji').click(function(){
    var podaci=[];
    var greske=[];
   var ime=document.getElementById('ime').value;
    var prezime=document.getElementById('prezime').value;
    var email=document.getElementById('email').value;
    var regemail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var komentar=document.getElementById('komentar').value;
    var regime=/[\w]{3,15}/;
    var regprezime=/[\w]{5,20}/;
    if(!regime.test(ime)){
        greske.push('Ime nije u dobrom formatu');
    }
    else{
        podaci.push(ime);
    }
    if(!regprezime.test(prezime)){
        greske.push('Prezime nije u dobrom formatu');
    }
    else{
        podaci.push(prezime);
    }
    if(!regemail.test(email)){
        greske.push('Email nije u dobrom formatu');
    }
    else{
        podaci.push(email);
    }
    if(komentar != ""){
        podaci.push(komentar);
    }
    else{
        greske.push('morate ostaviti neki komentar');
    }
    if(greske.length==0){
       alert("vas komentar je uspesno poslat");
    }
    else{
        alert(greske);

    }

});
$('#login').click(function(){
var username=$('#username').val();
var password=$('#password').val();
$.ajax({
   type:'GET',
   url:'js/korisnici.json',
    success:function(korisnici){
        var logovanje=0;
       $.each(korisnici,function(index,korisnik){
           if(korisnik.Username==username && korisnik.Password==password){
              logovanje+=1;
           }
       });
   if(logovanje==1){
       alert("Uspesno ste se ulogovali");
   }
   else{
       alert("Ne postoji takav korisnik");
   }
   }

});

});