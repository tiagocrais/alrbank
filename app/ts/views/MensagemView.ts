class MensagemView {

    private _element: Element

    constructor(seletor: string) {
        this._element = document.querySelector(seletor);
    }

    update(model: string) {
        this._element.innerHTML = this.template(model);
    }

    template(model: string) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}