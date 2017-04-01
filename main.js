const EMPTY_TEMPLATE = {render:function(){return '<h3>This page is empty</h3>'}},
		EMPTY_MODULE = {};

class Page {
	constructor(alias, title='Empty page', template = EMPTY_TEMPLATE) {
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
	render() {
		var layout = `
		<html>
			<head>
				<title>${this.title}</title>
			</head>
			<body>
				${this.template.render()}
			</body>
		</html>`;
		return layout;
	}
}

class Template {
	constructor(modules = []) {
		this.modules = modules;
	}
		
	getModules() {
		return this.modules;
	}
	render() {
		var modulesLayout = '';
		for(let i=0; i<this.modules.length; i++) {
			let 
				module = this.modules[i],
				layout = `
				<div class="">
					<h4>${module.title}</h4>
				</div><br />
				<div>
					${module.content}
				</div>`;
			modulesLayout += layout;
		}
		return modulesLayout;
	}
}

class Module {
	constructor(title = 'Module Title', content = '<span>Empty module</span>') {
		this.title = title;
		this.content = content;
	}
}

var 
	news = new Module('News','<ul><li>First new</li><li>The second one</li></ul>'),
	contactBlock = new Module('Contacts','<span>This is our address</span>'),
	template = new Template([news, contactBlock]),
	page  = new Page('home', 'Home Page', template),
	page2 = new Page();

//console.log(page);
console.log(page.render());
console.log(page2.render());
