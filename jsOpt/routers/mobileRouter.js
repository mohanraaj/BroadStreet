define(["jquery","backbone","views/view","views/anotherView"],function($,Backbone,MainView,AnotherView){var Router=Backbone.Router.extend({initialize:function(){Backbone.history.start()},routes:{"":"home"},home:function(){var mainView=new MainView,anotherView=new AnotherView;mainView.render(),anotherView.promptUser()}});return Router})