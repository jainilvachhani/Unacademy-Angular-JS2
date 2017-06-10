import {Component} from 'angular/core';

@Component({
	selector: 'pm-app',
	template:'<div><h1>{{pageTitle}}</h1>
	<div>My Component</div>
	</div>'
})

export class AppComponent
{
	pageTitle: string = 'E commerce site';
}
