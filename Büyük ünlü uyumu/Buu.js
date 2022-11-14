const kalinharfsayisi = 0;
        const inceharfsayisi = 0;
        function myFunction(){
          const kelime = String;
            const harfler = Array.from(kelime);
            harfler.forEach(function(x){
                const kalın = ["a","ı","o","u"];
                const ince = ["e","i","ö","ü"];
                kalın.forEach(function(a){
                    if( x == a){
                        kalinharfsayisi += 1;
                    }

                },
                ince.forEach(function(a){
                    if( x == a ){
                       inceharfsayisi += 1; 
                    }
                })
                )
            }
            )
            if( inceharfsayisi > 0 && kalinharfsayisi > 0){
                alert("büyük ünlü uyumuna uyulmamıştır")
            }
            else if( inceharfsayisi > 0 && kalinharfsayisi == 0){
                alert("büyük ünlü uyumuna uyulmuştur")
            }
            else if( inceharfsayisi== 0 && kalinharfsayisi> 0){
                alert("büyük ünlü uyumuna uyulmuştur")
            }
        }
        