define(["underscore","backbone"],function(_,Backbone){var TextareaInputControl=Backbone.View.extend({el:function(){var el="#"+this.id;this.el=el},initialize:function(id,parent,that){this.id=id,this.parent="#"+parent,_.extend(this,Backbone.Events),this.parentView=that},setPlaceHolder:function(placeHolder){this.placeHolder=placeHolder,$("#"+this.id).attr("placeholder",placeHolder),$("#"+this.id).defaultValue=placeHolder},setTitle:function(title){$("#"+this.id).wrap('<div id="'+this.id+'_header"  class="bsm_title">'+title+"<br/></div>")},getPlaceHolder:function(){return this.placeHolder()},getVal:function(){return $("#"+this.id).val()},clear:function(){$("#"+this.id).val(""),this.val=0},val:function(){return $(this.el).val()},id:function(){return this.el()},html:function(){var control='<div><textarea id="'+this.id+'" class="bsm-textarea-input" rows="6" wrap="hard" value"" maxlength="160"/><div id="'+this.id+'-bsm-textareainput-icon" class="input_notselected bsm-textareainput-icon"></div></textarea></div>';return control},click:function(){return"click "+this.id()},trimCssProperty:function(prop){return prop=prop.substring(0,prop.length-2),prop=parseInt(prop),prop-=27,prop},iconImage:function(){that=this,$("#"+this.id+"-bsm-input-icon").hasClass("input_selected")?($("#"+this.id+"-bsm-input-icon").unbind(),$("#"+this.id+"-bsm-input-icon").addClass("input_notselected").removeClass("input_selected")):($("#"+this.id+"-bsm-input-icon").addClass("input_selected").removeClass("input_notselected"),$("#"+this.id+"-bsm-input-icon").bind("click",function(){$("#"+that.id).val(" ")}))},watchVal:function(){var events=this.parentView.controlEvents();for(x in events){var split=events[x].split(":"),bindEvent=split[0];"valueChange #"+this.id==x&&this.trigger("valueChange",this.execFN(bindEvent,this.parentView,this))}},execFN:function(functionName,context,args){var args=Array.prototype.slice.call(arguments).splice(2),namespaces=functionName.split("."),func=namespaces.pop();for(var i=0;i<namespaces.length;i++)context=context[namespaces[i]];return context[func].apply(this,args)},render:function(){$(this.parent).append(this.html()),this.val="";var that=this;$("#"+this.id).bind("change",function(){that.val=$("#"+that.id).val()}),$("#"+this.id).bind("focus",function(){that.iconImage()}),$("#"+this.id).bind("blur",function(){that.val=$("#"+that.id).val(),that.iconImage(),that.watchVal()});var width=$(this.parent).css("width");return $(".bsm-textarea-input").css({width:this.trimCssProperty(width)}),this}});return TextareaInputControl})