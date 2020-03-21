interface OnInit {
    ngOnInit: () => void;
}

class MyComponent implements OnInit {

    ngOnInit() {
        console.log('Initialization logic')
    }

}

const comp = new MyComponent();
comp.ngOnInit();