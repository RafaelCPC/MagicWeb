export class Item {
    constructor(img, content,price) {
      this.id = Math.random().toString(36).substr(2, 9);
      this.img = img;
      this.content = content;
      this.price = price;
      this. total = 1;
    }
}
