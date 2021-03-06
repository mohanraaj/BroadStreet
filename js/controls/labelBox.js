/********************************************
 *
 * Label Control
 *
 * Darren Hurst
 * BroadStreet Mobile
 * Created, July 23 2012
 *
 *
 * setTitle
 *   title = control line above title
 *
 * setLabel
 *  takes label text or HTML
 *
 */

define(['underscore', 'backbone'], function(_, Backbone) {

	var LabelControl = Backbone.View.extend({
		el : function() {
			var el = '#' + this.id;
			this.el = el;
		},
		initialize : function( parent) {
			this.id = this.cid;
			this.parent = "#" + parent;
		},
		setTitle : function(title) {
			$("#" + this.id + "_label").wrap('<div id="' + this.id + '_header_label"  class="bsm_label_title">' + title + '<br/></div>');
		},
		setLabel : function(html) {
			$("#" + this.id + "_label").html(html);
		},
		getLabel : function() {
			return $("#" + this.id + "_label").html();
		},
		id : function() {
			return this.el();
		},
		html : function() {
			var control = '<div id="' + this.id + '_label" class="bsm_label"></div>';
			return control;
		},
		click : function() {
			return "click " + this.id();
		},
		trimCssProperty : function(prop) {
			prop = prop.substring(0, prop.length - 2)
			prop = parseInt(prop);
			prop = prop - 27;
			//margin fix
			return prop
		},

		render : function() {
			$(this.parent).append(this.html());
			this.val = "";
			var that = this;

			return this;
		}
	});
	return LabelControl;
}); 