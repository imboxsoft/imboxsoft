export default function initIntersectionObserver(
    actionDo: (entry: IntersectionObserverEntry) => void,
    actionUndo: ((entry: IntersectionObserverEntry) => void) | null,
    extendedObject = {}
): IntersectionObserver {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || !actionUndo) {
                actionDo(entry);
            } else {
                actionUndo(entry);
            }
        });
    }, extendedObject);
}
