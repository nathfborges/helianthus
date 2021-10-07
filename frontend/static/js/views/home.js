import AbstractView from "./abstractview.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Helianthus");
    }

    async getHtml() {
        return `
            <div id="content">
                <div id="logo">
                    <img class="logo-helianthus" src="static/assets/img/logo.png">
                </div>

                <div id="text-container">
                    <div id="container-text-left">
                        <div id="title-content-left">
                            <h1>Um dispositivo IoT com sensores de corrente e de tensão</h1>
                        </div>
                        <div class="text" id="text-content-left">
                            <p>que verificam o consumo em tempo real de uma residência ou estabelecimento. Através do
                                processamento e envio de dados para um servidor, o proprietário do aparelho consegue
                                acompanhar todo o consumo de energia elétrica.</p>
                        </div>
                    </div>

                    <div id="vertical-line">
                        <hr>
                    </div>
       
                    <div id="container-text-right">
                        <div id="text-content-right">
                            <h2>Possui um dispositivo?</h2>
                            <p class="text">Para conferir a estimativa de consumo, clique no botão abaixo. Se ainda não
                                possui, contate a EDP.</p>
                        </div>

                        <div id="container-continue-button">
                            <a id="continue-button" href="/device-id">
                                <div id="continue-button-text">
                                    <span>Continuar</span>
                                </div>
                                <img id="continue-button-arrow" src="static/assets/img/arrow.svg" width="11" height="11" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}