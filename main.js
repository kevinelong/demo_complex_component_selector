class API{
    save(data){
        console.log("saving everything to the server database really!!!")
    }
}
class AddAndSelect {
    constructor(defaultList = []) {
        this.unselected = defaultList;
        this.selected = [];
    }
    add(item){
        this.unselected.push(item)
    }
    select(item) {
        //TODO verify its not already in there
        this.unselected = this.unselected.filter(i => i != item);
        this.selected.push(item);
    }
    unselect(item) {
        //TODO verify its not already in there
        this.unselected.push(item);
        this.selected = this.selected.filter(i => i != item);
    }
    getSelected() {
        return this.selected;
    }
    getUnselected() {
        return this.unselected;
    }
}
// api= new API()
// data = new AddAndSelect(["aaa", "bbb", "ccc"])
// // aas.getAutoComplete("a")

// console.log(data.getSelected())
// console.log(data.getUnselected())

// data.select("aaa")
// data.select("bbb")
// data.add("ddd")
// data.select("ddd")
// data.unselect("bbb")

// console.log("AFTER")
// console.log(data.getSelected())
// console.log(data.getUnselected())

// api.save(data)
