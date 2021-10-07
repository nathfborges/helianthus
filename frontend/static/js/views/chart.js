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

                <div id="main-container">
                    <div id="center-container">
                        <div id="container-chart">
                        <canvas id="diary-chart" width="758" height="400"></canvas>
                        </div>
                    </div>
            </div>
        `;
    }
}