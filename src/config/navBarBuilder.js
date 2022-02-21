const config = {
    navs: {
        algos: [
            {
                children: [
                    { name: 'Test', to: 'test' },
                    { name: 'Test2', to: 'test2' },
                    {
                        name: 'Layout',
                        to: '#',
                        children: [
                            { name: 'Flexbox grid', to: '#' },
                            { name: 'Responsive', to: '#' },
                            { name: 'Navbar', to: '#' },
                        ],
                    },
                    { name: 'Empty states', to: '#' },
                ],
            },
        ],
    },
};

const renderSideNavMenu = (elementMap) => {
    const rootUl = document.createElement('ul');
    rootUl.setAttribute('className', 'nav');
    let html = [];

    function createLiElement(el) {
        const li = document.createElement('li');
        li.setAttribute('className', 'nav-item');
        li.innerHTML = `<Link to=${el.to}>${el.name}</Link>`;
        return li;
    }

    function createUlElementWithList(el) {
        const ul = document.createElement('ul');
        ul.setAttribute('className', 'nav');
        el.children.map((child) => {
            if (child.childen) {
                return ul.appendChild(createUlElementWithList(child));
            }
            return ul.appendChild(createLiElement(child));
        });
        return [ul];
    }

    function createNavMenu(elMap) {
        console.log('passed in', elMap);
        html.concat(
            elMap.map((m, i) => {
                console.log(m, i);
                if (m.children) {
                    return rootUl.appendChild(
                        createNavMenu(createUlElementWithList(m))
                    );
                }

                return rootUl.appendChild(createLiElement(m));
            })
        );

        return html[0];
    }

    return {
        createNavMenu,
    };
};
