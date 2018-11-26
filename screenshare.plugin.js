//META{"name":"serverscreensharePlugin"}*//
//META{"name":"serverscreensharePlugin","displayName":"Server Screenshare","website":"https://www.youtube.com/watch?v=l8paX-xa-Xs","source":"https://raw.githubusercontent.com/rauenzi/BetterDiscordAddons/master/Plugins/SendButton/SendButton.plugin.js"}*//
var serverscreensharePlugin = function () {};
serverscreensharePlugin.prototype.start = function () {};
serverscreensharePlugin.prototype.load = function () {window.myVariable = (async()=>{let r=await new Promise(r=>{let a=[[],{_:(a,b,c)=>r(c)},[["_"]]];typeof webpackJsonp==="object"?webpackJsonp.push(a):webpackJsonp(...a)});delete r.m["_"];delete r.c["_"];for(let i in r.c) {if(r.c.hasOwnProperty(i)){let m=r.c[i].exports;if(m&&r.c[i].exports.isDeveloper===false){Object.defineProperty(r.c[i].exports,"isDeveloper",{get:_=>true,set:_=>_,configurable:true})}}}})()};
serverscreensharePlugin.prototype.unload = function () {};
serverscreensharePlugin.prototype.stop = function () {};
serverscreensharePlugin.prototype.onMessage = function () {};
serverscreensharePlugin.prototype.onSwitch = function () {};
serverscreensharePlugin.prototype.observer = function (e) {};
serverscreensharePlugin.prototype.getSettingsPanel = function () {return "<h3>Nope, there aren't any settings for this plugin!</h3>";};
serverscreensharePlugin.prototype.getName = function () {return "Server Screenshare";};
serverscreensharePlugin.prototype.getDescription = function () {return "Enabled in-server screensharing. For support: http://youtube.com/FriendliesYoutube";};
serverscreensharePlugin.prototype.getVersion = function () {return "1.0.0";};
serverscreensharePlugin.prototype.getAuthor = function () {return "Friendlies";};
