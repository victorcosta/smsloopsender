document.addEventListener('deviceready', onDeviceReady, true);
document.addEventListener("offline", onOffLine, false);

function onDeviceReady() {
	$("#btn-enviar").click(function(event) {
		var phone 			= $('#phone').val();
		var qtd 			= parseInt($('#qtd').val());
		var mensagem 		= $('#mensagem').val();
		for (var i = 0; i <= qtd; i++) {
			smsplugin.send(phone,mensagem);
		};
		alert('OK');

	});
}
