
$('button').click(
    function(){
        let name = $('#name').val()
        let email = $('#email').val()
        let message = $('#message').val()
        let myForm = $("#contact-fm")[0]
        console.log(myForm);

        if (!name || !email || !message){
            alert("Fill all the fields")
            return false;
        }
        else{
            myForm.method = 'post';
            myForm.action = 'action="https://gmail.us20.list-manage.com/subscribe/post?u=fc57d1e00241c0ce659e935a8&amp;id=76fecc8708" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>'
            alert("Form submitted succesfully")
            return true;
        }
    });
    
    $( "#develop" ).hover(  
      function() {  
        $( this ).append( $( "<span><br>All engineers are fluent enterprise,mobile<br>and web development technologies.<br><br>They collaborate with your team  to write ,and improve<br>code on a daily basis, using proven practice such as<br>test-driven development and pair programming.</span>" ) );  
      }, function() {  
        $( this ).find( "span:last" ).remove();  
      }  
    );  
    $( "#develop.fade" ).hover(function() {  
      $( this ).fadeOut( 1000 );  
      $( this ).fadeIn( 5000 );  
    });  



    $( "#design" ).hover(  
        function() {  
          $( this ).append( $( "<span><br>Our design practice offers a full range of services<br>including brand strategy, interaction and visual design<br>and user experience testing.<br><br>Throughout your project,our designers create and<br>implement visual design and workflows,solit user<br>feedback and work with you to make sure what gets built<br>is what is needed</span>" ) );  
        }, function() {  
          $( this ).find( "span:last" ).remove();  
        }  
      );  
      $( "#design.fade" ).hover(function() {  
        $( this ).fadeOut( 1000 );  
        $( this ).fadeIn( 5000 );  
      });  
  

      $( "#product" ).hover(  
        function() {  
          $( this ).append( $( "<span><br>Planning and development is iterative.Because we are<br>constantly coding and testing,the products we build are<br>always ready to go live.<br><br>This iterative process allows for changes as business<br>requirements evolve  </span>" ));  
        }, function() {  
          $( this ).find( "span:last" ).remove();  
        }  
      );  
      $( "#product.fade" ).hover(function() {  
        $( this ).fadeOut( 1000 );  
        $( this ).fadeIn( 5000 );  
      });  
  
      $( "#delani" ).hover(  
        function() {  
          $( this ).append( $( "<span><br>Quote::<br>TECHNOLOGY IS OUR PASSSION</span>" ) );  
        }, function() {  
          $( this ).find( "span:last" ).remove();  
        }  
      );  
      $( "#delani.fade" ).hover(function() {  
        $( this ).fadeOut( 1000 );  
        $( this ).fadeIn( 5000 );  
      });  
      