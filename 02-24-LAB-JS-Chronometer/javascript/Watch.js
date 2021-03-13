class Watch extends Chronometer {
    constructor() {
        super();
        this.printTimeIntervalId = undefined;
        this.btnLeft = document.getElementById('btnLeft');
        this.btnRight = document.getElementById('btnRight');
        this.minDec = document.getElementById('minDec');
        this.minUni = document.getElementById('minUni');
        this.secDec = document.getElementById('secDec');
        this.secUni = document.getElementById('secUni');
        this.milDec = document.getElementById('milDec');
        this.milUni = document.getElementById('milUni');
        this.splits = document.getElementById('splits');

        // Start/Stop Button
        this.btnLeft.addEventListener('click', () => {
            if (this.btnLeft.classList.replace("start", "stop")) {
                this.startClick();
                this.printTimeIntervalId = setInterval(() => { this.printTime(), 10 });
                this.btnLeft.innerText = "STOP";
                this.btnRight.classList.replace("reset", "split");
                this.btnRight.innerText = "SPLIT";
            }
            else if (btnLeft.classList.replace("stop", "start")) {
                this.stopClick();
                clearInterval(this.printTimeIntervalId);
                this.btnLeft.innerText = "START";
                this.btnRight.classList.replace("split", "reset");
                this.btnRight.innerText = "RESET";
            }
        });

        // Reset/Split Button
        this.btnRight.addEventListener('click', () => {
            if (this.btnRight.classList.contains("reset")) {
                this.resetClick();
                this.printTime();
                this.clearSplits();
            }
            if (this.btnRight.classList.contains("split")) {
                this.splitClick();
                this.printSplit();
            }
        });

    }

    printTime() {
        this.printSubseconds();
        this.printSeconds();
        this.printMinutes();
    }

    printMinutes() {
        const mins = this.getMinutes();
        this.minUni.innerText = mins[1];
        this.minDec.innerText = mins[0];

    }

    printSeconds() {
        const secs = this.getSeconds();
        this.secUni.innerText = secs[1];
        this.secDec.innerText = secs[0];

    }

    printSubseconds() {
        const mills = this.getSubsecs();
        this.milUni.innerText = mills[1];
        this.milDec.innerText = mills[0];

    }

    printSplit() {
        if (!this.splitsList) return;
        const timeString = this.splitsList.pop()
        const node = document.createElement("LI");
        const textnode = document.createTextNode(timeString);
        node.appendChild(textnode);
        this.splits.appendChild(node)
    }

    clearSplits() {
        this.splits.innerHTML = "";
    }

    setStopBtn() {}

    setSplitBtn() {}

    setStartBtn() {}

    setResetBtn() {}

}