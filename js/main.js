'use strict';
{

class Cart {
  constructor(){
    this.btn  = document.getElementById('submit'   );
    this.list = document.getElementById('buy-list' );
    this.item = document.getElementById('input'    );
  }

  event() {
    this.btn.addEventListener('click', () => {
      let check_list = new CheckList(this.item.value);
      check_list.listening();
      this.item.value = '';
      this.item.focus();
      this.list.appendChild(check_list.list);
    });
  }
} //end of class Cart

class CheckList {
  constructor(list_text) {
    this.text = list_text;
    this.list = document.createElement('div'  );
    this.check = document.createElement('input');
    this.check.type = 'checkbox';
    this.label = document.createElement('label');
    this.label.innerText = this.text;
    this.label.appendChild(this.check);
    this.list.appendChild(this.label);
  }

  listening() {
    if (this.text !== '') {
      this.check.addEventListener('change', () => {
        if (this.label.className === 'checked') {
          this.label.classList.remove('checked');
        } else {
          this.label.classList.add('checked');
        }
      });
    }
  }
} // end of class CheckList

let cart = new Cart();
cart.event();

}