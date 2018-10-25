$(document).ready(function(){

	/* label formulario */
	$("label").inFieldLabels();

	/* validacion formulario */
	$('#enviar_form').click(
				   	function () {
					   		var formularioContacto = [
					   								$('#nombre').val(),
					   								$('#mail').val(),
					   								$('#asunto').val(),
					   								$('#comment').val()
					   								];
				   				   						
				        if($("#nombre").val().length < 1) {  
				            alert("Ingrese Nombre");  
				            return false;  
				        }  
				        else if($("#mail").val().length < 1) {  
				            alert("Ingrese una dirección e-mail");  
				            return false;  
				        }  				        
				       else if($("#mail").val().indexOf('@', 0) == -1 || $("#mail").val().indexOf('.', 0) == -1) {  
				            alert("La dirección e-mail parece incorrecta");  
				           return false;  
				        }				        
				        else if($("#asunto").val().length < 1) {  
				            alert("Ingrese el Asunto"); 
				            return false;  
				        }	
				        else if($("#comment").val().length < 1) {  
				            alert("Ingrese Comentario"); 
				            return false;  
				        }					        	          
					        //console.log(formularioContacto);
				       		$.ajax({
										      url: "mailme.php",
										      global: false,
										      type: "POST",
										      data: ({dataVar : formularioContacto}),
							      				dataType: "html",
							      				async: true,
							      				success: function(msg){
							         				if(msg === 'not'){
							         					alert(' Gracias por su preferencia.\n Nos pondremos en contacto a la brevedad'); 
							         					window.location.href = "index.html";
							         				}
							         				else{
							         					alert('Mail Obligatorio');		         					
							         				}	         				
							      				},
							      				error: function(msg){
							      					alert('Oops, Un error ha ocurrido.');
							      				}
							    });
					        return false;       
						   				   	
				   	
				   	
				   	}
				   );

});