function customRender(reactElement, conatiner){
    const domElement = documetn.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href', reactEl.Element.props)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)