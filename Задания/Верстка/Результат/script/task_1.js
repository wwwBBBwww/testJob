
class Banner {
  static createElement = (el, cl=null) => {
    const domEl = document.createElement(el);
    domEl.className = cl;
    return domEl;
  };
  constructor() {
    this.listener = (e) =>{ this.handler(e)};
    this.bannerWrap = Banner.createElement("DIV", "window__banner");
    this.banner = this.bannerWrap.insertAdjacentHTML(
      "beforeend",
`<div class="window__banner-inner">
  <div class="window__banner-header">
    <div class="window__banner-title">Title</div>
    <span class="window__banner-close">&times;</sp>
  </div>
  
</div>`
    );
  }
  
  open() {
    document.body.append(this.bannerWrap);
    this.bannerWrap.addEventListener("click", this.listener);
  }
  close() {
    this.bannerWrap.remove();
  }
  handler(e){
    if (e.target.className !== "window__banner-close") return;
    this.close();
  }

}




window.onload =()=> new Banner().open();



