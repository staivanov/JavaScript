class Stringer {
    constructor(myString, len) {
        this.myString = myString;
        if (len < 0) {
            this.len = 0;
        }
        this.len = len;
        this.innerString = myString;
        this.innerLength = len;
    }

    set increase(val) {
        this.len = this.len + val;
    }

    set decraese(val) {

        if (val <= 0) {
            this.len = val - this.len;
        }
        else {
            this.len = this.len - val;
        }

        if (this.len < 0) {
            this.len = 0;
        }
    }

    toString() {

        let strLen = this.myString.length;
        let str = this.myString;
        let currentLen = this.len;

        if (strLen > currentLen) {

            str = str.slice(0, currentLen);

            return str + "...";
        }

        else if (currentLen == 0) {
            return "...";
        }

        return str;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test
test.decraese = 3;
console.log(test.toString());
test.decraese = 5;
console.log(test.toString());
