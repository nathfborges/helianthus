import AbstractView from "./abstractview.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Helianthus");
    }

    async getHtml() {
        return `
            <div id="content">
                <div id="header">
                    <img id="logo-helianthus" src="static/assets/img/logo.png">
                </div>
                <div id="main-container-c">
                    <div id="center-container-c">
                        <img src="static/assets/img/locate-helianthus-id.png">
                        <h2>Para continuar, digite o identificador único do dispositivo.</h2>
                        <form>
                            <div class="flex justify-center" id="OTPInput">
                            </div>
                            <input hidden id="otp" name="otp" value="">
                        </form>
                        <div id="text-descriptive-container-center">
                            <p>O identificador é composto por 5 dígitos, e pode ser encontrado na etiqueta do produto.
                                Alternativamente, você pode utilizar o app e fotografar o QR Code.</p>
                        </div>

                    </div>
                    <div id="container-continue-button-c">
                        <a id="continue-button-c" href="/waiting">
                            <div id="continue-button-text-c">
                                <span>Continuar</span>
                            </div>
                            <img id="continue-button-arrow" src="static/assets/img/arrow.svg" width="11" height="11" />
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}