import AbstractView from "./AbstractView.js";

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

                <div id="main-container-w">
                    <div id="center-container-w">
                        <div class="loader">
                            <img src="static/assets/img/loading.gif" alt="loading"/>
                        </div>
                        <h2>Aguarde enquanto os dados são carregados…</h2>
                        <p>Estamos contatando os servidores Helianthus para obter as leituras do seu dispositivo.</p>
                    </div>
                </div>
            </div>
        `;
    }
}