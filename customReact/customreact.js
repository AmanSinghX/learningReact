function customRender(reactElement, container) {
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.
    href)
    domElement.setAttribute('target', reactElement.props.
        target)
    
    container.appendChild(domElement)
    */

    // basically we are injecting the reactElement in our container
    // another way of writing the above code

    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if(prop === 'children') continue; // in case someone gives children as a key in props
        domElement.setAttribute(prop, reactElement.props
        [prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

