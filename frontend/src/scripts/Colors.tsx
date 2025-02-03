export default function getCssVariableValue(value: string): string {
    let variableName = value;
    if (value.startsWith("var(")) {
        variableName = value.slice(4, -1).trim();
    }
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variableName).trim();
}
