this["custom"] = this["custom"] || {};
this["custom"]["templates"] = this["custom"]["templates"] || {};

this["custom"]["templates"]["template_secondary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"rounded-sm mg-b-sm bg-c-gray-light pd-sm\">\n                <h4>Index: "
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":37}}}) : helper)))
    + "</h4>\n                <p>Hi, my name is <strong>"
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"properties") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</strong> I am a "
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"properties") : depth0)) != null ? lookupProperty(stack1,"occupation") : stack1), depth0))
    + ". I know "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"properties") : depth0)) != null ? lookupProperty(stack1,"skills") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":112},"end":{"line":6,"column":223}}})) != null ? stack1 : "")
    + ".</p>\n            </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":145},"end":{"line":6,"column":169}}})) != null ? stack1 : "")
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":177},"end":{"line":6,"column":207}}})) != null ? stack1 : "")
    + "</span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "and ";
},"5":function(container,depth0,helpers,partials,data) {
    return ", ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n   <ul class=\"list-unstyled\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"persons") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":8,"column":17}}})) != null ? stack1 : "")
    + "   </ul>";
},"useData":true});