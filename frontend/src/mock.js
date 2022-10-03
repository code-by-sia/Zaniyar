export const MOCK = [{value: 'Welcome to Zaniyar, Open-Source Networked Thought!'}, {
    value: 'You can open and close blocks that have children.',
    blocks: [{value: '![](https://avatars.githubusercontent.com/u/9437465?v=4)'}]
}, {
    value: '**How to Use Zaniyar**', blocks: [{
        value: 'Outliner Features', blocks: [{
            value: 'You can click on a bullet • to zoom in on it.',
            blocks: [{value: 'You can navigate back to a higher context by clicking on navigation breadcrumbs (when zoomed in).'}]
        }, {value: 'Indent and unindent bullets with tab and shift-tab.'}, {value: 'Drag and drop bullets to re-order blocks.'}]
    }]
}, {
    value: '$$\\LaTeX$$ support',
    blocks: [
        {value: '$$c = \\pm\\sqrt{a^2 + b^2}$$'},
        {value: '$$E=mc^2$$'},
        {value: '$$\\int_{a}^{b} x^2 \\,dx$$'},
        {value: '$$\\sum_{n=1}^{\\infty} 2^{-n} = 1$$'},
        {value: '$$\\prod_{i=a}^{b} f(i)$$'},
        {value: '$$\\lim_{x\\to\\infty} f(x)$$'}

    ]
},
    {
        value: 'You can use tables:', blocks: [{
            value: `
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
`
        }]
    }
]