async function delay(ms: number) {
    return await new Promise((resolve) => setTimeout(resolve, ms));
}

export class Typewriter {
    private elId: string;
    private domEl: HTMLElement | null = null;
    private arr: string[];
    private typeDelay: number;
    private deleteDelay: number;
    private pauseFor: number;
    private addEndOfSentence: string;
    private isRunning: boolean = false;

    constructor(
        elId: string,
        arr: string[],
        typeDelay: number = 50,
        deleteDelay: number = 25,
        pauseFor: number = 500,
        addEndOfSentence: string = ""
    ) {
        this.elId = elId;
        this.arr = arr;
        this.typeDelay = typeDelay;
        this.deleteDelay = deleteDelay;
        this.pauseFor = pauseFor;
        this.addEndOfSentence = addEndOfSentence;
        this.domEl = document.getElementById(this.elId);
    }

    private async typeText(str: string) {
        const domEl = this.domEl;
        if (!domEl || !domEl.children[0]) return;

        for (let i = 0; i < str.length; i++) {
            domEl.children[0].innerHTML += str.charAt(i);
            await delay(this.typeDelay);
        }
    }

    private async deleteText() {
        const domEl = this.domEl;
        if (!domEl || !domEl.children[0]) return;

        let text = domEl.children[0].innerHTML;
        while (text.length > 0) {
            text = text.slice(0, -1);
            domEl.children[0].innerHTML = text;
            await delay(this.deleteDelay);
        }
    }

    private async words() {
        if (this.domEl) {
            for (let word of this.arr) {
                word += this.addEndOfSentence;
                await this.typeText(word);

                this.domEl.children[1].classList.add("tw-caret--blink");
                await delay(this.pauseFor);
                this.domEl.children[1].classList.remove("tw-caret--blink");

                await delay(this.pauseFor);

                await this.deleteText();
            }
        }
    }

    async start() {
        if (!this.isRunning) {
            this.isRunning = true;
            do {
                if (this.domEl) {
                    await this.words();
                }
            } while (this.isRunning);
        }
    }

    public stop() {
        this.isRunning = false;
    }
}
