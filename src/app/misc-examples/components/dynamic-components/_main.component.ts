import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
    
      <collapse-it>
      <p class="path">misc-examples/components/dynamic-components/_main.component.ts</p>
        <h4>DOM Manipulation Notes</h4>

        <ul class="notes">
          <li class="links"><dlink id="99"></dlink><dlink id="100"></dlink></li>
          <li><strong>Modify DOM elements</strong> — Use Renderer service.</li>
          <li><strong>Modify DOM Structure</strong> — Use ViewContainerRef and TemplateRef classes</li>
          <li>
            Always Remember to add dynamic components to the <code>entryComponents : []</code> array in the module.  
            Normally, Angular generates a factory for each component that it finds referenced in a template. 
            In this case, the dynamic components are not referenced anywhere, as they are used only at runtime. 
            We have to tell Angular to generate the factories, and to do so, we need to add our components 
            to the <code>entryComponents</code> array in the NgModule.
          </li>
          <li>
            There are two types of Views <br>
            Embedded Views — Always be a part of the view container. Uses ng-template (viewcontainerRef.createEmbeddedView)<br>
            Host Views — Always be a part of a view container and also be standalone. (viewcontainerRef.createComponent)
          </li>
          <li>
            <strong>Difference between createEmbeddedView and createComponent in Angular.</strong><br>
            <p><code>createEmbeddedView</code> is used to create a view using <code>TemplateRef</code>. 
              TemplateRef is created by Angular compiler when it encounters <code>ng-template</code> tag in your component HTML. <strong>The view created using this method is called an embedded view.</strong></p>
            <p><code>createComponent</code> is used to create a view using ComponentFactory. It is created by Angular compiler when you specify a component in the bootstrap property of the module so that compiler generates a factory for it. <strong>The view created using this method is called a host view.</strong></p>
          </li>
          <li>
            The new Angular version runs on different platforms — in a browser, on a mobile platform or inside a web worker. 
            So a level of abstraction is required to stand between platform specific API and the framework interfaces. 
            In angular these abstractions come in a form of the following reference types: 
            <code>ElementRef, TemplateRef, ViewRef, ComponentRef ViewContainerRef</code>.
          </li>
          <li>
            <strong>ElementRef</strong><br>
            Main used to inject and gain access to the host element <br>
            <code>@ViewChild('start') startBtnEl: ElementRef;</code><br>
            <code>constructor(private host: ElementRef<lgt>HTMLFormElement</lgt>)</code>
          </li>
          <li>
            <strong>TemplateRef</strong> - Used to access ng-template<br>
            TemplateRef is created by Angular compiler when it encounters <code>ng-template</code> tag in your component HTML. <strong>The view created using this method is called an embedded view.</strong>
            By itself the TemplateRef class is a simple class. It holds a reference to its host element in the elementRef property and has one method: createEmbeddedView. 
            However, this method is very useful since it allows us to create a view and return a reference to it as <code>ViewRef</code>.<br>
            <code>@ViewChild("tpl") tpl: TemplateRef;</code><br>
            <code>@ViewChildren(TemplateRef) templates: QueryList<lgt>TemplateRef</lgt>;</code><br>
            <code>createEmbeddedView</code> is used to create a view using <code>TemplateRef</code>. 
            </li>
          <li>
            <p>
            <strong>ViewRef#</strong><br>
            Angular supports two types of views: <br>
            Embedded Views which are linked to a Template <br>
            <code>let viewRef = this.templateRef.createEmbeddedView(null);</code>
            </p>
            <p>
            Host Views which are linked to a Component <br>
            <code>let factory = this.r.resolveComponentFactory(ColorComponent);<br>
            let componentRef = factory.create(injector);<br>
            let viewRef = componentRef.hostView;</code><br>
            Also, don’t forget that components that are instantiated dynamically must be added to the EntryComponents of a module or hosting component.
            </p>
          </li>
          <li>
            <strong>ViewContainerRef</strong> represents a container where one or more views can be attached.<br>
            Any dom element can be used a view container but commonly the ng-container is used. <br>
            <code>@ViewChild("vc", <cur>read: ViewContainerRef</cur>) vc: ViewContainerRef;</code>
            When used in a directive, the ViewContainerRef can be injected and it will use the parent element of the directives host element. <br>
          </li>
         
           

        </ul>
      </collapse-it> 
      
      <collapse-it>
        <app-members-list></app-members-list>
      </collapse-it>
      
      <collapse-it>
        <dynamic-component-example-01></dynamic-component-example-01>
      </collapse-it>

      
      <collapse-it>
        <dynamic-component-example-02></dynamic-component-example-02>
      </collapse-it>

      <collapse-it>
        <dynamic-component-example-03></dynamic-component-example-03>
      </collapse-it>

      <collapse-it>
        <dom-adapter-component></dom-adapter-component>
      </collapse-it>

      <collapse-it>
        <linquist-example-06></linquist-example-06>
      </collapse-it>

      <collapse-it>
        <linquist-example-08></linquist-example-08>
      </collapse-it>

    </div>
  `
})
export class DynamicMainComponent { }
