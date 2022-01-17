class File {
  constructor() {
    this.form = document.forms.file;
    this.input = this.form.fileInput;
    this.btn = this.form.fileBtn;
    this.text = document.querySelector(".file-name");

    this.listener = (e) => this.checkFile(e);
    this.input.addEventListener("change", this.listener);
    this.form.addEventListener("submit", (e) => e.preventDefault());
    this.btn.addEventListener("click", this.clickHiddenInput.bind(this));
  }

  loadFileInfo(text){this.text.textContent = text;}

  readFile(file) {
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e)=>{ console.log(e.target.result);}
  }

  checkFile(e) {
    const file = e.target.files[0];
    if (/.txt/g.test(file.name)) 
    {
      this.loadFileInfo(file.name);
      this.readFile(file);
    } 
    else {
      this.loadFileInfo("Not is txt file");
    }
  }

  clickHiddenInput() {
    this.input.click();
  }
}

new File()

