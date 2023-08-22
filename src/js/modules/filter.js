const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          menuLists = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelectorAll('.portfolio-no');

    const typeFilrer = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated', 'fadeIn');
        });
        no.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated', 'fadeIn');
        });
        markType.forEach(mark => {
            mark.style.display = 'block';
            mark.classList.add('animated', 'fadeIn');
        });
    };

    const triggerBtn = (btnSelector, markType) => {
        btnSelector.addEventListener('click', () => {
            typeFilrer(markType);
        });
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            menuLists.forEach(li => li.classList.remove('active'));

            target.classList.add('active');
        }



    });
    triggerBtn(btnAll, markAll);
    triggerBtn(btnLovers, markLovers);
    triggerBtn(btnChef, markChef);
    triggerBtn(btnGirl, markGirl);
    triggerBtn(btnGuy, markGuy);
    triggerBtn(btnGrandmother, no);
    triggerBtn(btnGranddad, no);
          
          
};

export default filter;
