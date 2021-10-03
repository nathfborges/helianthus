<template>
  <div>
    <div id="container">
            <div id="logo">
                <img class="logo-helianthus" src="../assets/img/logo.svg">
            </div>

            <div id="container-info">
                <img id="logo-helianthus-cinza" src="../assets/img/logoCinza.svg">
                <div id="container-center">
                    <img src="../assets/img/helianthusId.png">
                    <h2>Para continuar, digite o identificador único do dispositivo.</h2>
                    <form>
                        <div class="flex justify-center " id="OTPInput">
                        </div>
                        <input hidden id="otp" name="otp" value="">
                    </form>
                    <div id="text-descriptive-container-center">
                        <p>O identificador é composto por 5 dígitos, e pode ser encontrado na etiqueta do produto. Alternativamente, você pode utilizar o app e fotografar o QR Code.</p>
                    </div>

                </div>
                <div id="container-continue-button">
                    <a href="" id="continue-button">
                        <div id="continue-button-text">
                            <span>Continuar</span>
                        </div>
                        <img id="continue-button-arrow" src="../assets/img/arrow.svg" width="11" height="11" />
                    </a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
</script>

<style>
@import '../assets/css/reset.css';
@import '../assets/css/continue.css';
</style>