class Components {
    createElement(elementType) {
        if (!elementType) {
            throw new Error('Must pass valid HTML Element')
        }

        const createdElement = document.createElement(elementType)
        return createdElement
    }
    
module.exports = Components

