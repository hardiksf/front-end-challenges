const createAppendElement = (className, moduleName, parentElement) => {
    const element = document.createElement('div');
    element.className = className;
    parentElement.append(element);

    moduleName(element);
};

export default createAppendElement;