class Page {
	constructor(alias, title, template) {
		this.alias = alias;
		this.title = title;
		this.template = template;
	}
	getTemplate() {
		return this.template;
	}
	setTemplate(template) {
		this.template = template;
	}
	JSONprint() {
		return JSON.stringify(this);
	}
	render() {
	
	}
}

class Template {
	constructor(modules = []) {
		this.modules = modules;
	};
		
	getModules() {
		return this.modules;
	}
}

class Module {
	constructor(title='Module Title', html = '<div></div>') {
		this.html = html;
		this.title = title;
	}
}

var 
	news = new Module('News','<div><h1>News</h1></div>'),
	contactBlock = new Module('Contacts','<div><h1>Contacts</h1></div>'),
	template = new Template([news, contactBlock]),
	page  = new Page('home', 'Home Page', template);

console.log(page);
console.log(page.JSONprint());
