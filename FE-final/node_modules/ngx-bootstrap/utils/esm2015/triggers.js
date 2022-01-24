import { Trigger } from './trigger.class';
const DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    const trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    const parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map((trigger) => trigger.split(':'))
        .map((triggerPair) => {
        const alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.isManual());
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
export function listenToTriggers(renderer, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
target, triggers, showFn, hideFn, toggleFn) {
    const parsedTriggers = parseTriggers(triggers);
    const listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach((trigger) => {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn));
        if (trigger.close) {
            listeners.push(renderer.listen(target, trigger.close, hideFn));
        }
    });
    return () => {
        listeners.forEach((unsubscribeFn) => unsubscribeFn());
    };
}
export function listenToTriggersV2(renderer, options) {
    const parsedTriggers = parseTriggers(options.triggers);
    const target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    const listeners = [];
    // lazy listeners registration
    const _registerHide = [];
    const registerHide = () => {
        // add hide listeners to unregister array
        _registerHide.forEach((fn) => listeners.push(fn()));
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach((trigger) => {
        const useToggle = trigger.open === trigger.close;
        const showFn = useToggle ? options.toggle : options.show;
        if (!useToggle && trigger.close && options.hide) {
            const _hide = renderer.listen(target, trigger.close, options.hide);
            _registerHide.push(() => _hide);
        }
        if (showFn) {
            listeners.push(renderer.listen(target, trigger.open, () => showFn(registerHide)));
        }
    });
    return () => {
        listeners.forEach((unsubscribeFn) => unsubscribeFn());
    };
}
export function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return renderer.listen('document', 'click', (event) => {
        if (options.target && options.target.contains(event.target)) {
            return;
        }
        if (options.targets &&
            options.targets.some(target => target.contains(event.target))) {
            return;
        }
        if (options.hide) {
            options.hide();
        }
    });
}
export function registerEscClick(renderer, options) {
    if (!options.outsideEsc) {
        return Function.prototype;
    }
    return renderer.listen('document', 'keyup.esc', (event) => {
        if (options.target && options.target.contains(event.target)) {
            return;
        }
        if (options.targets &&
            options.targets.some(target => target.contains(event.target))) {
            return;
        }
        if (options.hide) {
            options.hide();
        }
    });
}
//# sourceMappingURL=triggers.js.map