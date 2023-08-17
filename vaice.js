globalThis.vaice = {
    state: {

    },
    set: function (key, value) {
        this.state[key] = value;
    },
    get: function (key) {
        return this.state[key];
    },
    dispatch: function (doc, component) {
        doc.innerHTML = component();
    }
}

globalThis.div = (...args) => {
    return `<div ${(() => {
        const arg = Object.entries(args[0]);
        return arg.map(([key, value]) => {
            return ` ${key}='${value}' `
        })
    })()}>
        ${(() => {
            return args.map((arg, i) => {
                if (i == 0) return;
                return arg;
            })
        })()}
    </div>`
}

globalThis.h1 = (...args) => {
    return `<h1 ${(() => {
        const arg = Object.entries(args[0]);
        return arg.map(([key, value]) => {
            return ` ${key}='${value}' `
        })
    })()}>
        ${(() => {
            return args.map((arg, i) => {
                if (i == 0) return;
                return arg;
            })
        })()}
    </h1>`
}

globalThis.a = (...args) => {
    return `<a ${(() => {
        const arg = Object.entries(args[0]);
        return arg.map(([key, value]) => {
            return ` ${key}='${value}' `
        })
    })()}>
        ${(() => {
            return args.map((arg, i) => {
                if (i == 0) return;
                return arg;
            })
        })()}
    </a>`
}

globalThis.button = (...args) => {
    return `<button ${(() => {
        const arg = Object.entries(args[0]);
        return arg.map(([key, value]) => {
            return ` ${key}='${value}' `
        })
    })()}>
        ${(() => {
            return args.map((arg, i) => {
                if (i == 0) return;
                return arg;
            })
        })()}
    </button>`
}

